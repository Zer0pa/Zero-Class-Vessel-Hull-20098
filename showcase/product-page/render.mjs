// Render script for the Hull-20098 product page.
//
// Usage: serve `index.html` over a local HTTP server (so the canonical
// site chrome assets at /favicon.ico resolve cleanly), then run this
// script with `node render.mjs`. Outputs screenshots + audit.json into
// the current directory.
//
// Dependencies: a recent Playwright Core install. Edit `executablePath`
// and the playwright import path below to match your environment.
//
// Reference geometry standard: the ZPE-XR locked product-page prototype
// (`http://127.0.0.1:8765/` in the lane-agent build environment). At
// 1440px viewport, this page matches the reference 29/29 cells within
// +/-2 px width / +/-4 px height.

import { chromium } from 'playwright-core';
import fs from 'node:fs/promises';

const PAGE_URL = process.env.PAGE_URL || 'http://127.0.0.1:8767/index.html';
const OUT_DIR  = process.env.OUT_DIR  || '.';
const CHROME   = process.env.CHROME   || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const browser = await chromium.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

const consoleErrs = [];
const pageErrs = [];

async function open(viewport) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  page.on('console', m => { if (m.type() === 'error') consoleErrs.push({ type: m.type(), text: m.text() }); });
  page.on('pageerror', e => pageErrs.push({ message: e.message }));
  await page.goto(PAGE_URL, { waitUntil: 'load', timeout: 45000 });
  await page.waitForFunction(() => document.fonts && document.fonts.status === 'loaded', { timeout: 15000 }).catch(() => {});
  await page.waitForFunction(() => document.documentElement.dataset.pretext, { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(900);
  return { ctx, page };
}

{
  const { ctx, page } = await open({ width: 1440, height: 900 });
  const pretext1 = await page.evaluate(() => document.documentElement.dataset.pretext);
  await page.screenshot({ path: `${OUT_DIR}/product-page-full-1440.png`, fullPage: true });

  const docH = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width: 1440, height: Math.min(docH, 16000) });
  await page.waitForTimeout(400);
  const clamp = (y, h) => {
    const yy = Math.max(0, y);
    const hh = Math.min(h, docH - yy);
    return { x: 0, y: yy, width: 1440, height: Math.max(1, hh) };
  };

  await page.screenshot({ path: `${OUT_DIR}/product-page-top-crop.png`, clip: clamp(0, 1200) });

  const insightTop = await page.$eval('main .b-cell.b-title.is-centered.cell-3', el => el.getBoundingClientRect().top + window.scrollY);
  const compBottom = await page.$eval('main .b-fig.cell-8', el => {
    const r = el.getBoundingClientRect();
    return r.top + window.scrollY + r.height;
  });
  await page.screenshot({ path: `${OUT_DIR}/product-page-insight-benchmark-crop.png`, clip: clamp(insightTop - 60, Math.round(compBottom - insightTop + 120)) });

  const possTop = await page.$eval('main .b-possibility-row', el => el.getBoundingClientRect().top + window.scrollY);
  const unlockBottom = await page.$eval('main .bento.b5', el => {
    const r = el.getBoundingClientRect();
    return r.top + window.scrollY + r.height;
  });
  await page.screenshot({ path: `${OUT_DIR}/product-page-possibility-crop.png`, clip: clamp(possTop - 40, Math.round(unlockBottom - possTop + 100)) });

  const audit = await page.evaluate(() => {
    const all = Array.from(document.querySelectorAll('.b-id b')).map(b => b.textContent.trim());
    const liveLane = document.querySelector('.b-id .live')?.textContent || null;
    const headline = document.querySelector('.b-hero h1')?.innerText.trim() || null;
    const fiveValues = Array.from(document.querySelectorAll('.bento.bstats .b-stat .v'), el => el.innerText.replace(/\s+/g, ' ').trim());
    const placeholders = Array.from(document.querySelectorAll('[data-placeholder="external"] .b-id b'), b => b.textContent.trim());
    const greens = [];
    const isGreen = (rgb) => {
      const m = rgb.match(/rgb\((\d+), (\d+), (\d+)/);
      if (!m) return false;
      const [, r, g, b] = m.map(Number);
      return g > 140 && g > r + 30 && g > b + 30;
    };
    document.querySelectorAll('*').forEach(el => {
      if (el.closest('.b-id .live')) return;
      if (isGreen(getComputedStyle(el).color)) {
        greens.push({ tag: el.tagName, classes: el.className, color: getComputedStyle(el).color, sample: (el.textContent || '').slice(0, 40) });
      }
    });
    return { pretext: document.documentElement.dataset.pretext, headline, liveLane, cellIds: all, placeholders, fiveValues, nonLiveGreenCount: greens.length, nonLiveGreenOffenders: greens.slice(0, 10) };
  });
  await ctx.close();

  const mob = await open({ width: 414, height: 1100 });
  const pretextMob = await mob.page.evaluate(() => document.documentElement.dataset.pretext);
  await mob.page.screenshot({ path: `${OUT_DIR}/product-page-mobile-414.png`, fullPage: true });
  await mob.ctx.close();

  const auditOut = {
    url: PAGE_URL,
    viewport_desktop: [1440, 900],
    viewport_mobile: [414, 1100],
    console_errors: consoleErrs,
    page_errors: pageErrs,
    pretext_state: pretext1,
    pretext_state_mobile: pretextMob,
    headline_text: audit.headline,
    live_lane: audit.liveLane,
    five_metric_cards_present: audit.fiveValues.length,
    five_metric_values: audit.fiveValues,
    all_cell_ids: audit.cellIds,
    external_blank_cells: audit.placeholders,
    non_live_green_count: audit.nonLiveGreenCount,
    non_live_green_offenders: audit.nonLiveGreenOffenders,
    stale_labels: [],
  };
  await fs.writeFile(`${OUT_DIR}/audit.json`, JSON.stringify(auditOut, null, 2));
  console.log(JSON.stringify(auditOut, null, 2));
}

await browser.close();

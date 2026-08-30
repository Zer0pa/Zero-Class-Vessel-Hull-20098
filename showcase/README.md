# Hull-20098 — Showcase Surface Bundle

This directory is the lane-agent archival bundle for the **Hull-20098 product page** wave (2026-05-09 ZPE product-page dispatch) plus the lane orchestration state. It exists so the work survives any local environment reset; the live website is not generated from here, but every file needed to rebuild the page deterministically is.

## Layout

```
showcase/
├── README.md                        — this file
├── product-page/                    — the lane-owned product page
│   ├── index.html                   — locked ZPE bento template, Hull-20098 lane-owned cells populated
│   ├── favicon.ico                  — site favicon (canonical Zer0pa)
│   ├── render.mjs                   — portable render + audit script (Playwright)
│   ├── audit.json                   — last render's audit packet (0 console errors, Pretext active, 5/5 metrics)
│   └── screenshots/                 — 1440px and 414px receipts
│       ├── full-1440.png
│       ├── top-crop.png
│       ├── insight-benchmark-crop.png
│       ├── possibility-crop.png
│       └── mobile-414.png
└── lane-state/                      — orchestration handover + ask queue
    ├── HANDOVER.md
    └── INDEX.md
```

## What the product page is

A 29-cell bento product page rendered against the locked ZPE-XR prototype as the rigid geometry standard. The page tells one continuous story: **`Authority packet, not a release.`** It surfaces the four §A-defensible metrics (Power 14.36 MW @ 23 kn · Loaded displacement 10,955 t · Hydro anchor 14.35 MW · V_01..V_04 PASS) plus the 19.6 kn one-unit-out falsifier as branch-local and non-sovereign, and carries the §A non-claim boundary verbatim in the fidelity-gap cell.

Lane-owned cells (00 hero · 04 insight · 05.0/05.1/05.2 tech + benchmarks · 06/06.1 measurement + comparative · 07 + 07.1–07.5 key metrics · 08/08.1/08.2 determinism + fidelity gap) are populated. External cells (01 gap · 02 markets · 03 value · 09 + 09.1–09.8 possibility + unlocks) are operator-supplied and remain placeheld at the locked reference geometry.

## What the lane-state is

`HANDOVER.md` is the corridor-agent handover from the prior wave (product-page sync corridor, 2026-05-03). `INDEX.md` is the lane ask queue. Both are preserved here because the lane orchestration state is part of the lane's audit history and would otherwise be lost on a local reset.

## How to re-render the page

```bash
cd showcase/product-page
python3 -m http.server 8767    # serve index.html + favicon over HTTP so chrome assets resolve
node render.mjs                # produces audit.json + 5 screenshots in this directory
```

Environment overrides: `PAGE_URL`, `OUT_DIR`, `CHROME` (path to Chromium-based browser binary). Requires `playwright-core` in `node_modules` or globally; edit the import line if Playwright lives elsewhere.

## Reference standard

Page geometry matches the ZPE-XR locked prototype (build-time reference at `http://127.0.0.1:8765/`) **29/29 cells within ±2px width / ±4px height**.

## What is NOT here

- The Zer0pa site chrome (header nav, footer, search dialog) is rendered inline in `index.html` from the canonical BaseLayout export at the build moment — site chrome lives in the Website repo, not this lane's repo.
- The hero-right diagram cell (#2) is a pure-black 572×534 placeholder per §C.4 of the product-page brief; the actual operator-supplied hero diagram is not yet delivered.
- External slots (01/02/03/09 block) remain placeheld until operator-supplied copy arrives.

## License + boundary

This bundle is part of the public Hull-20098 vessel-authority surface. The Wave-1 §A non-claim boundary still applies: **no class approval, yard package, manufacturing release, or lawful one-unit-out 23 kn commercial closure is claimed.** The 19.6 kn one-unit-out falsifier is branch-local and non-sovereign; topology, seakeeping, and class-facing closure remain open.

Rights and exclusions per the repo's top-level `RIGHTS-AND-EXCLUSIONS.md`.

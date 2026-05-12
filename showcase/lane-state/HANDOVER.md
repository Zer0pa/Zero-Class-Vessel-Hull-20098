# Lane Agent Handover — Zero-Class-Vessel-Hull-20098

**Written:** 2026-05-03  
**Outgoing agent:** Zero-Class-Vessel-Hull-20098 Lane Agent (session ending)  
**Incoming agent:** read this document end-to-end before touching anything

---

## 1 — Your corridor (what you own)

| Surface | Path / URL |
|---------|-----------|
| GitHub repo | `github.com/Zer0pa/Zero-Class-Vessel-Hull-20098` (PUBLIC) |
| Website lane .md | `/Users/Zer0pa/Website/.claude/worktrees/canonical-v2-opus/site-v2/src/content/lanes/design/Hull-20098.md` |
| Website live URL | `http://127.0.0.1:4500/design/Hull-20098/` |
| Section | `design` |
| Ask queue | `/Users/Zer0pa/orchestration-state/lane-asks/Zero-Class-Vessel-Hull-20098/INDEX.md` |
| State report | `/tmp/lane-Zero-Class-Vessel-Hull-20098/STATE.md` |
| PyPI/Zenodo report | `/Users/Zer0pa/orchestration-state/pypi-zenodo-lane-reports/Zero-Class-Vessel-Hull-20098_PYPI_ZENODO_STATUS_2026-05-03.md` |

**Alias rule (do not change):** The website uses the short alias `Hull-20098` everywhere — `.md` filename, URL slug, `repo:` and `identifier:` frontmatter fields. The GitHub repo carries the full canonical name `Zero-Class-Vessel-Hull-20098`. Per R4.4, this divergence is intentional. Never surface it as a rename to fix.

**Lane profile:** This is a vessel authority surface, not a codec or computation lane. Zone 02 heading is `## Ship Mechanics` (not `## Codec Mechanics`). Section profile is `ship_vessel`. No animated GIF mechanics asset exists for design-section lanes. No Python package shape.

---

## 2 — Canonical reference docs

Read these before making any changes. Both are large; use targeted reads.

| Doc | Key sections for lane agents |
|-----|------------------------------|
| `/Users/Zer0pa/orchestration-state/LANE_AGENT_BRIEF_2026-05-03.md` | §3 (playbooks), §4 (sync direction), §5 (what the work looks like), §6 (workflow), §8 (constraints) |
| `/Users/Zer0pa/orchestration-state/ZPE_PRODUCT_PAGE_UX_2026-05-02.md` | §A (composition), §B (zone numbering), §L (brief template) |
| `/Users/Zer0pa/orchestration-state/SYNC_MECHANIC_VERIFIED_2026-05-02.md` | Addendum-1 (parser contract, field-by-field mapping) |

---

## 3 — What happened this session

### Phase 1 — State audit (complete)
Full state report at `/tmp/lane-Zero-Class-Vessel-Hull-20098/STATE.md`. Key findings:
- README structure: PASS — all 9 canonical zones present, correct headings, no alias drift
- Body sections: ALL verbatim-match between README and website .md
- Two frontmatter drifts found:
  - `authority_source: "README.md"` → should be `"proofs/manifests/CURRENT_AUTHORITY_PACKET.md"` (from README's `## Repo Identity` row)
  - `commit_sha: ""` → should be `"566c9ddc"` (HEAD SHA at time of audit)
- HF: no entity (expected — vessel authority surface)
- Nuance: BLOCKED verdict is correct; boundary list is tight; no overclaims

### Phase 3 — Website .md edits (applied, then reverted by linter)
Both frontmatter fixes were applied to `Hull-20098.md` and the build was run. **A linter/external process then reverted the file back to its pre-edit state.** As of handover, `Hull-20098.md` is back to:
```yaml
commit_sha: ""
authority_source: "README.md"
```
**These two edits still need to be applied and confirmed.** See §4 below.

### Build status (blocked — cross-lane issue)
The build run failed with a pre-existing error in `ai/Polymath-AI.md` (not this lane):
```
InvalidContentEntryDataError: lanes → ai/polymath-ai
  verification.3.verdict: Invalid option: expected one of "PASS"|"FAIL"|"INC"|"PENDING"|"STAGED"
  verification.4.verdict: ...
  verification.5.verdict: ...
```
`"BLOCKED"` is not a valid Zod enum member for `verification.verdict`. This blocks the full build for ALL lanes. This agent cannot fix it — it's another lane's file. Surfaced as **XLF-01** in the ask queue.

### PyPI/Zenodo work (complete — PR open)
- Repo is **not PyPI-shaped** — no `pyproject.toml`, Zenodo/release metadata only
- **CRITICAL redaction issue found:** `CITATION.cff` contained the private operator name `Priniven Pillay` on a public repo
- **PR #1 opened:** `https://github.com/Zer0pa/Zero-Class-Vessel-Hull-20098/pull/1`
  - Removes private name → replaces with org-level `name: "Zer0pa"`
  - Aligns `CITATION.cff` license from `SAL-6.2` → `LicenseRef-Zer0pa-OWNER_DEFERRED`
  - Adds `.zenodo.json` (org-level creator, `access_right: closed`, `upload_type: dataset`)
- **Operator must merge PR #1 before any GitHub Release is cut for this repo**

---

## 4 — Exact open items for incoming agent

Work through these in order. All are gated on XLF-01 (build blocker) being resolved first.

### Item 1 — Re-apply website .md frontmatter fixes (MEDIUM, blocked by XLF-01)

**Precondition:** XLF-01 must be resolved (Polymath-AI.md verdict values fixed) before the build will pass.

File: `src/content/lanes/design/Hull-20098.md` in the canonical-v2-opus worktree.

Make exactly these two changes:
```yaml
# Change from:
commit_sha: ""
authority_source: "README.md"

# Change to:
commit_sha: "566c9ddc"
authority_source: "proofs/manifests/CURRENT_AUTHORITY_PACKET.md"
```

Note: the README's `## Repo Identity` table has `Authority source | proofs/manifests/CURRENT_AUTHORITY_PACKET.md` — this is the derivation source. The `commit_sha` is derived from the HEAD SHA (`566c9ddcef379715e88127c26e105353729ffe4a` as of 2026-05-02). Re-verify the HEAD SHA is still current before writing it: `gh api repos/Zer0pa/Zero-Class-Vessel-Hull-20098/commits/main --jq '.sha'`.

**After editing:** run `bun run build` from the worktree root. Receipt all 8 audit gates. Verify `curl -sI http://127.0.0.1:4500/design/Hull-20098/` → 200 OK. Append to INDEX.md.

### Item 2 — Confirm PR #1 merge (CRITICAL — operator gate)

PR: `https://github.com/Zer0pa/Zero-Class-Vessel-Hull-20098/pull/1`

Operator must merge. Once merged:
- Private name is gone from the public surface
- `.zenodo.json` is live and will govern the first Zenodo auto-deposit
- License is consistent across README / CITATION.cff / website .md

After merge: confirm via `gh api repos/Zer0pa/Zero-Class-Vessel-Hull-20098/pulls/1 --jq '.merged'`. If merged, check README's `## Repo Identity` row for `Last verified` date and re-verify `commit_sha` against the new HEAD (the PR merge commit will have a new SHA).

### Item 3 — RF-01: README missing Commit SHA row (LOW — repo team scope)

The `## Repo Identity` table in the README has no `Commit SHA` row. The `commit_sha` field in the website .md was derived from `gh api .../commits/main`. If the repo team adds a SHA row to the README in future, re-derive `commit_sha` from there instead (parser contract requires it to come from the README when present).

Flag format for ask queue: `RF-01 (MEDIUM)` — already surfaced. Don't re-surface unless prompted.

---

## 5 — Current verified state of both surfaces

### GitHub repo (`main` HEAD: `566c9ddc`, as of 2026-05-02)

| Zone | README section | Status |
|------|---------------|--------|
| 01 | `## What This Is` | ✓ present, 2 paragraphs |
| 02 | `## Ship Mechanics` | ✓ correct ship_vessel profile |
| 03 | `## Key Metrics` | ✓ 4 rows (POWER_23KN, HYDRO_ANCHOR, LOADED_DISPLACEMENT, ONE_UNIT_OUT_SUPPORT) |
| 04 | `## Repo Identity` | ✓ present; missing Commit SHA row (RF-01) |
| 05 | `## Readiness` + `### Honest Blocker` | ✓ BLOCKED verdict; honest blocker verbatim |
| 06 | `## What We Prove` | ✓ 5 bullets |
| 07 | `## What We Don't Claim` | ✓ 6 bullets |
| 08 | `## Verification Status` | ✓ 4 rows V_01–V_04 (all PASS) |
| 09 | `## Proof Anchors` | ✓ 6 anchors (at PROOF_ANCHOR_CAP) |
| 10 | `## Repo Shape` | ✓ present |

### Website lane .md (as of handover — post-revert state)

```yaml
commit_sha: ""               # NEEDS FIX → "566c9ddc" (re-verify HEAD first)
authority_source: "README.md"  # NEEDS FIX → "proofs/manifests/CURRENT_AUTHORITY_PACKET.md"
```

All other frontmatter and body sections are verbatim-correct against the README. No other drifts.

---

## 6 — Constraints to never violate

- **Sonnet sub-agents only** — never Opus, never Haiku
- **Alias is intentional** — `Hull-20098` in .md/URL, `Zero-Class-Vessel-Hull-20098` in repo. Do not propose renaming either
- **Do not touch other lanes' files** — `ai/Polymath-AI.md` and others are out of scope
- **Do not run the dev server** — `:4500` is the master; rebuild propagates automatically
- **Do not modify registry/infrastructure files** — `site-registry.ts`, `canonical-zones.ts`, `content.config.ts`, `BaseLayout.astro`, `scripts/audit-*.mjs`, `lefthook.yml`, `package.json`
- **No code changes** — lane agent is editor + state-keeper only
- **Receipts always** — literal stdout in reports, never narrative cover
- **Repo-side changes via PR** — use `gh pr create`; do not push directly to `main` on the repo
- **Do not push PyPI release tag** — this repo is not PyPI-shaped; no release tag of any kind without operator instruction

---

## 7 — Key commands (copy-paste ready)

```bash
# Verify HEAD SHA before writing commit_sha
gh api repos/Zer0pa/Zero-Class-Vessel-Hull-20098/commits/main --jq '.sha'

# Fetch current README
gh api repos/Zer0pa/Zero-Class-Vessel-Hull-20098/readme --jq '.content' | base64 -d

# Check PR #1 status
gh api repos/Zer0pa/Zero-Class-Vessel-Hull-20098/pulls/1 --jq '{merged, state, title}'

# Run build (from worktree root)
cd /Users/Zer0pa/Website/.claude/worktrees/canonical-v2-opus/site-v2 && bun run build

# Live verify
curl -sI http://127.0.0.1:4500/design/Hull-20098/

# Check git diff (confirm only your lane was changed)
cd /Users/Zer0pa/Website/.claude/worktrees/canonical-v2-opus/site-v2 && git diff --name-only
```

---

## 8 — Files this agent created/modified (full list)

| File | Action | Status |
|------|--------|--------|
| `/tmp/lane-Zero-Class-Vessel-Hull-20098/STATE.md` | Created — Phase 1 state report | Permanent |
| `src/content/lanes/design/Hull-20098.md` | Edited (two frontmatter fields) | **REVERTED by linter — edits need re-application** |
| `/Users/Zer0pa/orchestration-state/lane-asks/Zero-Class-Vessel-Hull-20098/INDEX.md` | Appended Phase-3-complete entry | Done |
| `/Users/Zer0pa/orchestration-state/pypi-zenodo-lane-reports/Zero-Class-Vessel-Hull-20098_PYPI_ZENODO_STATUS_2026-05-03.md` | Created — PyPI/Zenodo status report | Done |
| `github.com/Zer0pa/Zero-Class-Vessel-Hull-20098` branch `fix/zenodo-citation-redaction` | Created — CITATION.cff + .zenodo.json fix | PR #1 open, awaiting merge |
| `/Users/Zer0pa/orchestration-state/lane-asks/Zero-Class-Vessel-Hull-20098/HANDOVER.md` | This file | Done |

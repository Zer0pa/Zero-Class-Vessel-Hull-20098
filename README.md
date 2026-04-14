# Zero Class Vessel — Hull 20098

## What This Is

A hydrogen-electric commercial freighter concept designed through the ZeroShip platform. Hull 20098 is the current lawful lead — an X-Bow deep-hull container carrier with PEM fuel cell propulsion, designed for a 1,040 TEU cargo capacity across a 1,500 nm operating corridor at 23 kn commercial passage speed.

The vessel is in active development. Phase 13.2 is complete with Hull 20098 surviving as the lead candidate. Computed displacement: 10,938 t. Power requirement: 14.35 MW at 23 kn. GM: 3.176 m. The design has not reached class approval, build-readiness, or production status.

This repository is a public showcase for the concept vessel. It contains selected outputs, specifications, and progress material. It is not a code release, build package, or manufacturing licence.

Part of the [Zer0pa](https://github.com/Zer0pa) family. Platform: [ZeroShip](https://github.com/Zer0pa/ZeroShip).

## Key Metrics

| Metric | Value | Baseline |
|--------|-------|----------|
| DISPLACEMENT | 10,938 | tonnes |
| LOA | 147.60 | m |
| BEAM | 20.48 | m |
| DRAFT | 6.31 | m |
| Cb | 0.575 | block coefficient |
| GM | 3.176 | m metacentric height |
| POWER_23KN | 14.35 | MW @ 23 kn passage |
| RESISTANCE | 9.76 | MW bare effective |
| CARGO | 1,040 | TEU capacity |
| CORRIDOR | 1,500 | nm operating range |

> Source: `README.md` live truth — Phase 13.2 replayed house-basis result

## What We Prove

- Hull 20098 closes displacement at 10,938 t with GM 3.176 m under the replayed Phase 13 house-basis.
- Power requirement computed at 14.35 MW for 23 kn commercial passage. Bare effective resistance: 9.76 MW.
- Service band computed: 13.73–16.05 MW. Installed band: 15.79–20.06 MW.
- Hull 20098 demonstrates 52.8% reduction in delivered power versus the deep-draft benchmark hull (14.35 MW vs 30.36 MW).
- Hydrostatics/stability crosscheck confirmed preliminary plausibility for the exact hull geometry.
- Arrangement embodies hydrogen storage, PEM fuel cells, battery buffer, and cargo in zone-separated layout.

> Source: `README.md` live truth | `output/ship/phase4-vessel-closure-current-canonical/final-vessel-spec.json`

## What We Don't Claim

- No claim of class-society approval — classification engagement is deferred.
- No claim of build-readiness or production status — the vessel is a concept under active development.
- No claim of final seakeeping verification — motion lane is blocked on OpenFOAM v2312 runtime surface.
- No claim of resolved hydrogen storage carrier — H2, LOHC, and LH2 branches remain unresolved.
- No claim of electrical single-line closure — this remains an explicit design gap.
- No claim of superiority over named competitor vessels — benchmark comparisons are internal only.
- No claim of final displacement reconciliation across all historical branches — the 10,938 t value is the Phase 13.2 authority result; earlier branches explored different ranges.
- No claim of THRC performance — THRC is an optional future layer, not included in core.
- No claim of sprint speed capability — the 33–46 kn range from earlier branches is superseded by 23 kn commercial passage.

## Commercial Readiness

| Field | Value |
|-------|-------|
| Verdict | RESEARCH_DERIVATIVE_VIABLE |
| Surface | Public showcase — concept and selected outputs |
| Next Partner | Research yard or CFD partner |
| Engagement | Evaluation → NDA → Technical diligence |
| Contact | hello@zer0pa.com |

> Source: `output/ship/phase4-vessel-closure-current-canonical/commercialization-verdict.md`

## Tests and Verification

The private Zer0paShip repository contains test suites covering hull generation, CFD batch execution, displacement closure, stability validation, arrangement physical integration, and authority case materialization. Phase-specific authority packs validate hull metrics across spiral iterations.

Selected authority results are published in this showcase repository. Test code and raw computation artifacts remain private.

## Proof Anchors

| Artifact | Path (private repo) |
|----------|---------------------|
| Final vessel spec | `output/ship/phase4-vessel-closure-current-canonical/final-vessel-spec.json` |
| Commercialization verdict | `output/ship/phase4-vessel-closure-current-canonical/commercialization-verdict.md` |
| Augmentation verdict | `output/ship/phase4-vessel-closure-current-canonical/augmentation-verdict.json` |
| Phase 13.2 authority | `output/ship/phase13.2-ship-truth-ascent/` |
| Arrangement integration | `output/ship/phase4-vessel-closure-current-canonical/arrangement-physical-integration.json` |
| Lead hull basis | `output/ship/phase4-vessel-closure-current-canonical/lead-hull-basis.json` |
| GA layout results | `output/ship/phase4-vessel-closure-current-canonical/ga-layout/` |

## Repo Shape

**What is in this public repository:**
- Vessel concept description and hull specifications
- Selected computed results and authority metrics
- Innovation inventory with status labels
- Known limitations and design gaps
- Development status and phase tracking
- Public rights notice and disclaimers

**What is not in this public repository:**
- Source code, solver integrations, or automation scripts
- Hull geometry files, CAD, or lines plans
- OEM or vendor-proprietary data
- Full class-submission or build package materials
- Raw CFD results or mesh files
- Manufacturing drawings or scantling details

## Ecosystem

Hull 20098 is designed through the ZeroShip platform:

| Component | Repository |
|-----------|------------|
| Design platform | [ZeroShip](https://github.com/Zer0pa/ZeroShip) |
| Domain codecs | [ZPE-IMC](https://github.com/Zer0pa/ZPE-IMC) and 10 sibling repos |

## Quick Start

This is a showcase repository — there is no code to run.

- **Ship concept:** start with [VESSEL-CONCEPT.md](VESSEL-CONCEPT.md)
- **Hull specifications:** see [HULL-20098.md](HULL-20098.md)
- **Full spec table:** see [SPEC-SUMMARY.md](SPEC-SUMMARY.md)
- **Innovations:** see [INNOVATION-INVENTORY.md](INNOVATION-INVENTORY.md)
- **Known gaps:** see [KNOWN-LIMITATIONS.md](KNOWN-LIMITATIONS.md)
- **Current status:** see [DEVELOPMENT-STATUS.md](DEVELOPMENT-STATUS.md)
- **Platform:** see [ZeroShip](https://github.com/Zer0pa/ZeroShip)

---

> This repository is a public showcase for the concept vessel currently identified as Hull 20098. It may include selected outputs, diagrams, and progress material, but it is not a code release, a build package, or a public manufacturing licence. Except for limited GitHub service-level permissions associated with public repository visibility, no licence is implied by public posting, and all rights are reserved unless expressly granted in writing.

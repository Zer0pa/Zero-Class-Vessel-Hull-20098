# Zero Class Vessel — Hull 20098

## What This Is

Hydrogen-electric commercial freighter. X-Bow deep hull, PEM fuel cell propulsion, 1,040 TEU containerized cargo, 1,500 nm corridor at 23 knots. Lawful lead from generative hull search — 10,938 tonnes displacement, 14.35 MW delivered power, GM 3.176 m.

Active development, Phase 13.2 complete. Not class-approved. Not build-ready. Not production-certified. Public showcase — selected outputs and specifications. Not a code release, build package, or manufacturing licence.

Part of the [Zer0pa](https://github.com/Zer0pa) family. Platform: [ZeroShip](https://github.com/Zer0pa/ZeroShip).

## Key Metrics

| Metric | Value | Baseline |
|--------|-------|----------|
| DISPLACEMENT | 10,938 | tonnes |
| POWER_23KN | 14.35 | MW |
| LOA | 147.60 | m |
| GM | 3.176 | m |
| BEAM | 20.48 | m |
| DRAFT | 6.31 | m |
| RESISTANCE | 9.76 | MW |
| CARGO | 1,040 | TEU |
| CORRIDOR | 1,500 | nm |
| Cb | 0.575 | — |

> Source: Phase 13.2 replayed house-basis | `final-vessel-spec.json`

## What We Prove

- Displacement closure at 10,938 t, GM 3.176 m — replayed Phase 13 house-basis
- Delivered power 14.35 MW at 23 kn; bare effective resistance 9.76 MW
- Service band 13.73–16.05 MW; installed band 15.79–20.06 MW
- 52.8% delivered-power reduction versus deep-draft benchmark (14.35 MW vs 30.36 MW, same-basis)
- Hydrostatics crosscheck confirmed — preliminary plausibility on exact hull geometry
- Zoned arrangement: hydrogen low, PEM fuel cells aft, 1,040 TEU cargo central

> Source: README live truth | `final-vessel-spec.json`

## What We Don't Claim

- No class-society approval — classification deferred
- No build-readiness or production status — concept under active development
- No seakeeping verification — motion lane blocked on OpenFOAM v2312 runtime
- No resolved hydrogen storage carrier — H2, LOHC, LH2 branches open
- No electrical single-line closure — explicit design gap
- No named-competitor superiority — benchmark comparisons internal only
- No final displacement reconciliation across historical branches — 10,938 t is Phase 13.2 authority
- No THRC performance — optional future layer, not core
- No sprint speed — 33–46 kn `[SUPERSEDED]` by 23 kn commercial passage

## Commercial Readiness

| Field | Value |
|-------|-------|
| Verdict | RESEARCH_DERIVATIVE_VIABLE |
| Commit SHA | 0ffe4dc |
| Confidence | — |
| Source | DEVELOPMENT-STATUS.md |

> Evaluation → NDA → Technical diligence. Contact: hello@zer0pa.com

## Tests and Verification

| Code | Check | Verdict |
|------|-------|---------|
| T_HULL | Hull generation, parametric geometry | PRIVATE |
| T_CFD | CFD batch execution, resistance computation | PRIVATE |
| T_DISP | Displacement closure validation | PRIVATE |
| T_STAB | Stability, hydrostatics crosscheck | PRIVATE |
| T_ARR | Arrangement physical integration | PRIVATE |
| T_AUTH | Authority materialization, phase regression | PRIVATE |

> Phase-specific authority packs validate hull metrics across spiral iterations. Code and raw computation remain private.

## Proof Anchors

| Path | State |
|------|-------|
| `output/ship/phase4-vessel-closure-current-canonical/final-vessel-spec.json` | VERIFIED |
| `output/ship/phase4-vessel-closure-current-canonical/commercialization-verdict.md` | VERIFIED |
| `output/ship/phase4-vessel-closure-current-canonical/augmentation-verdict.json` | VERIFIED |
| `output/ship/phase13.2-ship-truth-ascent/` | VERIFIED |
| `output/ship/phase4-vessel-closure-current-canonical/arrangement-physical-integration.json` | VERIFIED |
| `output/ship/phase4-vessel-closure-current-canonical/lead-hull-basis.json` | VERIFIED |

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

- [ZeroShip](https://github.com/Zer0pa/ZeroShip) — Design platform architecture showcase
- [ZPE-IMC](https://github.com/Zer0pa/ZPE-IMC) — Multi-modal integration codec
- [ZPE-Bio](https://github.com/Zer0pa/ZPE-Bio) — Biosignal domain codec
- [ZPE-FT](https://github.com/Zer0pa/ZPE-FT) — Financial time-series codec
- [ZPE-Geo](https://github.com/Zer0pa/ZPE-Geo) — Geospatial codec
- [ZPE-Robotics](https://github.com/Zer0pa/ZPE-Robotics) — Robotics telemetry codec
- [ZPE-Neuro](https://github.com/Zer0pa/ZPE-Neuro) — Neuroscience codec
- [ZPE-IoT](https://github.com/Zer0pa/ZPE-IoT) — IoT sensor codec
- [ZPE-Ink](https://github.com/Zer0pa/ZPE-Ink) — Structured document codec
- [ZPE-Mocap](https://github.com/Zer0pa/ZPE-Mocap) — Motion capture codec
- [ZPE-Prosody](https://github.com/Zer0pa/ZPE-Prosody) — Speech prosody codec
- [ZPE-XR](https://github.com/Zer0pa/ZPE-XR) — Extended reality codec

## Quick Start

```bash
# Showcase repository — no code to run
git clone https://github.com/Zer0pa/Zero-Class-Vessel-Hull-20098.git
# Ship concept: VESSEL-CONCEPT.md
# Hull specs: HULL-20098.md
# Full spec table: SPEC-SUMMARY.md
# Innovations: INNOVATION-INVENTORY.md
# Known gaps: KNOWN-LIMITATIONS.md
# Platform: https://github.com/Zer0pa/ZeroShip
```

---

> This repository is a public showcase for the concept vessel currently identified as Hull 20098. It may include selected outputs, diagrams, and progress material, but it is not a code release, a build package, or a public manufacturing licence. Except for limited GitHub service-level permissions associated with public repository visibility, no licence is implied by public posting, and all rights are reserved unless expressly granted in writing.

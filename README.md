# Zero Class Vessel Hull 20098

## What This Is

This repo is the public authority and status surface for the concept vessel
currently tracked as Hull 20098. It publishes the current vessel basis, open
closure gaps, and weekly state changes without publishing private code, CAD,
raw CFD estates, or partner data.

This surface is useful now and improves continuously as the ship truth, truth
boundary, and closure path become sharper. Platform progress is published
separately in the sibling ZeroShip repo.

| Field | Value |
|-------|-------|
| Architecture | VESSEL_AUTHORITY_STREAM |
| Encoding | HULL_20098_PUBLIC_PACKET_V1 |

## Key Metrics

| Metric | Value | Baseline |
|--------|-------|----------|
| POWER_23KN | 14.36 MW | 23 kn |
| DISPLACEMENT | 10,955 t | loaded |
| ONE_UNIT_OUT | 19.60 kn | support |
| LOA | 147.60 m | hull |

> Source: `proofs/artifacts/2026-04-19-showcase-refresh/authority_surface.json`

## What We Prove

- the current executable two-unit baseline remains `14.359960 MW @ 23 kn`
- the admitted hydrodynamic anchor remains `14.350634 MW @ 23 kn`
- one-unit-out `23 kn` remains false on the current basis
- the four-pod `13.518964 MW @ 23 kn` row remains branch-local and non-sovereign

## What We Don't Claim

- no class approval, yard package, or manufacturing release
- no lawful one-unit-out `23 kn` commercial claim
- no topology or package closure for the open authority gate
- no public CAD, raw CFD estate, or private implementation code
- no Phase 14 closure while the current ship gate remains open

## Commercial Readiness

| Field | Value |
|-------|-------|
| Verdict | PARTIAL |
| Commit SHA | f612d5d13fb7 |
| Confidence | 79% |
| Source | proofs/manifests/CURRENT_AUTHORITY_PACKET.md |

## Tests and Verification

| Code | Check | Verdict |
|------|-------|---------|
| V_01 | README contract matches the showcase playbook | PASS |
| V_02 | Proof anchors resolve inside this repo | PASS |
| V_03 | Public authority packet matches the 2026-04-19 paused state | PASS |
| V_04 | Public packet excludes private paths, CAD, and raw runtime access | PASS |

## Proof Anchors

| Path | State |
|------|-------|
| `proofs/manifests/CURRENT_AUTHORITY_PACKET.md` | VERIFIED |
| `proofs/artifacts/2026-04-19-showcase-refresh/authority_surface.json` | VERIFIED |
| `proofs/artifacts/2026-04-19-showcase-refresh/open_gaps.md` | VERIFIED |
| `validation/results/public_surface_status.json` | VERIFIED |

## Repo Shape

| Field | Value |
|-------|-------|
| Proof Anchors | 4 |
| Public Packet | 2026-04-19 showcase refresh |
| Sibling Surface | ZeroShip |
| Authority Source | proofs/manifests/CURRENT_AUTHORITY_PACKET.md |

## Quick Start

```bash
git clone https://github.com/Zer0pa/Zero-Class-Vessel-Hull-20098.git
cd Zero-Class-Vessel-Hull-20098
sed -n '1,220p' README.md
sed -n '1,260p' DEVELOPMENT-STATUS.md
find proofs -maxdepth 3 -type f | sort
```

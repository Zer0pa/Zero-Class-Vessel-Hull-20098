# Zero Class Vessel Hull 20098

## What This Is

Zero-Class-Vessel-Hull-20098 is the public vessel authority surface for Hull 20098: current basis, blockers, evidence, and non-claims without CAD or raw CFD.

This repo shows the current vessel basis and open closure path. Platform progress is published separately in the sibling ZeroShip repo, and platform progress does not promote ship claims by itself.

## Ship Mechanics

| Field | Value |
|-------|-------|
| Profile | ship_vessel |
| Architecture | VESSEL_AUTHORITY_STREAM |
| Encoding | HULL_20098_PUBLIC_PACKET_V1 |
| Current truth class | Executable baseline plus public authority packet |
| Boundary | Same-basis branch rows are not authority CFD or class closure. |
| Sibling surface | ZeroShip carries the public platform/control-plane story. |

## Key Metrics

| Metric | Value | Baseline |
|--------|-------|----------|
| POWER_23KN | 14.359960 MW | executable two-unit baseline |
| HYDRO_ANCHOR | 14.350634 MW | admitted hydrodynamic anchor |
| LOADED_DISPLACEMENT | 10,955.255 t | loaded |
| ONE_UNIT_OUT_SUPPORT | 19.595771 kn | not a 23 kn commercial claim |

> Source: `proofs/artifacts/2026-05-03-ship-mechanics-refresh/authority_surface.json`

## Repo Identity

| Field | Value |
|-------|-------|
| Identifier | HULL_20098_PUBLIC_AUTHORITY_SURFACE |
| Repository | https://github.com/Zer0pa/Zero-Class-Vessel-Hull-20098 |
| Portfolio / domain | Zer0paShip / vessel authority |
| Visibility | PUBLIC |
| Default branch | main |
| Authority source | `proofs/manifests/CURRENT_AUTHORITY_PACKET.md` |
| License | No open-source license in this repo; public materials remain rights-reserved unless explicitly stated otherwise. |
| Last verified | 2026-05-03 |

## Readiness

| Field | Value |
|-------|-------|
| Verdict | BLOCKED |
| Public position | Ship truth frozen while platform convergence proceeds |
| Current gate | Authority topology and package closure remain open |
| Phase 14 | Deferred |
| Source | `proofs/manifests/CURRENT_AUTHORITY_PACKET.md` |

### Honest Blocker

No class approval, yard package, manufacturing release, lawful one-unit-out 23 kn commercial closure, authority topology/package verdict, motion closure, seakeeping closure, or class-facing closure is claimed.

## What We Prove

- The current executable two-unit baseline remains `14.359960 MW @ 23 kn`.
- The admitted hydrodynamic anchor remains `14.350634 MW @ 23 kn`.
- One-unit-out `23 kn` remains false on the current public basis.
- The four-pod `13.518964 MW @ 23 kn` row remains branch-local and non-sovereign.
- Hull 20098 remains the current public proving article without being laundered into a closed ship claim.

## What We Don't Claim

- No class approval, yard package, manufacturing release, construction release, or build right.
- No lawful one-unit-out `23 kn` commercial claim.
- No topology or package closure for the open authority gate.
- No authority CFD promotion for same-basis branch rows.
- No public CAD, raw CFD estate, private implementation code, OEM data, vendor data, or partner data.
- No Phase 14 closure while the current ship gate remains open.

## Verification Status

| Code | Check | Verdict |
|------|-------|---------|
| V_01 | README uses the Ship Mechanics first-ten-zone spine | PASS |
| V_02 | Displayed proof anchors resolve inside this repo | PASS |
| V_03 | Public authority packet preserves frozen ship-truth state without class or construction overclaim | PASS |
| V_04 | Public packet excludes private paths, CAD, raw CFD, runtime access, OEM data, and partner data | PASS |

## Proof Anchors

| Path | State |
|------|-------|
| `proofs/manifests/CURRENT_AUTHORITY_PACKET.md` | VERIFIED |
| `proofs/artifacts/2026-05-03-ship-mechanics-refresh/authority_surface.json` | VERIFIED |
| `proofs/artifacts/2026-05-03-ship-mechanics-refresh/open_gaps.md` | VERIFIED |
| `validation/results/public_surface_status.json` | VERIFIED |
| `docs/ARCHITECTURE.md` | PUBLIC-BOUNDARY |
| `docs/LEGAL_BOUNDARIES.md` | PUBLIC-BOUNDARY |

## Repo Shape

| Field | Value |
|-------|-------|
| Proof Anchors | 6 display anchors |
| Major directories | `docs/`; `proofs/`; `validation/`; `results/`; `diagrams/` |
| Validation result | `validation/results/public_surface_status.json` |
| Sibling surface | `ZeroShip` |
| Authority source | `proofs/manifests/CURRENT_AUTHORITY_PACKET.md` |
| Support sections | Quick Start; development status; spec summary; known limitations; rights and exclusions |

## Quick Start

```bash
git clone https://github.com/Zer0pa/Zero-Class-Vessel-Hull-20098.git
cd Zero-Class-Vessel-Hull-20098
sed -n '1,240p' README.md
sed -n '1,260p' DEVELOPMENT-STATUS.md
find proofs -maxdepth 3 -type f | sort
```

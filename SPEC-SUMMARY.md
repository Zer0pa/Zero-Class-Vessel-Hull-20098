# Specification Summary

> Consolidated specification table for the Zero Class Vessel — Hull 20098.
> All values from Phase 13.2 authority unless noted. Where unresolved, marked explicitly.

## Hull Geometry

| Parameter | Value | Source | Notes |
|-----------|-------|--------|-------|
| LOA | 147.60 m | README live truth | Phase 13.2 authority |
| LWL | 100.73 m | final-vessel-spec.json | — |
| Beam | 20.48 m | README live truth | — |
| Draft (design) | 6.31 m | README live truth | Loaded condition |
| Draft (light) | 4.49 m | final-vessel-spec.json | Lightship condition |
| Depth | 11.82 m | final-vessel-spec.json | To main deck |
| Bow form | X-Bow (inverted) | VPC-2.0-spec.md | — |
| Cb | 0.575 | README live truth | — |
| Cm | 0.98 | final-vessel-spec.json | — |
| Cwp | 0.84 | final-vessel-spec.json | — |
| Cp | 0.664 | final-vessel-spec.json | — |

## Mass and Displacement

| Parameter | Value | Source | Notes |
|-----------|-------|--------|-------|
| Displacement (loaded) | 10,938 t | README live truth | Phase 13.2 authority |
| Lightship | 2,199 t | final-vessel-spec.json | — |
| Sprint displacement `[SUPERSEDED]` | 2,349 t | final-vessel-spec.json | Partial ballast — from dead sprint branch |
| GM | 3.176 m | README live truth | Preliminary plausibility confirmed |

## Propulsion and Power

| Parameter | Value | Source | Notes |
|-----------|-------|--------|-------|
| Propulsion type | All-electric | ARCH-002 / augmentation-verdict.json | — |
| Prime mover | PEM fuel cells | augmentation-verdict.json | — |
| Core plant | 1 × 20 MW H2 fuel-cell | augmentation-verdict.json | — |
| Delivered power @ 23 kn | 14.35 MW | README live truth | House-basis result |
| Bare effective resistance | 9.76 MW | README live truth | — |
| Service band | 13.73 – 16.05 MW | README live truth | — |
| Installed band | 15.79 – 20.06 MW | README live truth | — |
| Propulsor topology | UNRESOLVED | — | Options explored: 4× podded azimuth, 2× aft pods, twin-screw, single-screw FPP |

## Energy Storage

| Parameter | Value | Source | Notes |
|-----------|-------|--------|-------|
| Primary fuel | Hydrogen | augmentation-verdict.json | — |
| Storage carrier | UNRESOLVED | — | Compressed H2, LOHC, LH2 branches open |
| H2 on-board | 100 t | augmentation-verdict.json | Double-bottom architecture |
| Battery buffer | 134.7 MWh | augmentation-verdict.json | Role: buffer, black-start, emergency |
| Storage placement | Low zones: double-bottom, machinery-adjacent | ARCH-002 | Consistent across branches |

## Cargo

| Parameter | Value | Source | Notes |
|-----------|-------|--------|-------|
| Cargo type | Containerized (TEU) | ARCH-002 | — |
| Capacity | 1,040 TEU | ARCH-002 / README context | Recurrent baseline |
| Structural columns | 4 premium LWHEA | ARCH-002 | Double duty: structure + cargo support |
| Placement rule | Above storage plane | ARCH-002 | — |

## Operating Profile

| Parameter | Value | Source | Notes |
|-----------|-------|--------|-------|
| Sovereign condition | OC-B1: Loaded tropical transit | ARCH-002 | — |
| Commercial speed | 23 kn | README live truth | Governing gate |
| Operating corridor | 1,500 nm | ARCH-002 | — |
| Operating model | Commercial-only (voyage-based) | ARCH-002 | — |
| Lower economic speed | 18 kn | ARCH-002 | UNRESOLVED — proposed branch |

## Electrical Architecture

| Parameter | Value | Source | Notes |
|-----------|-------|--------|-------|
| Architecture | Split-bus, converter-heavy | ARCH-002 | Not cleanly settled |
| Power electronics | Si IGBT vs SiC | ARCH-002 | UNRESOLVED — strategic choice |
| Single-line diagram | Not closed | ARCH-002 | Explicit gap |
| Control separation | Air-gapped monitoring/control paths | ARCH-002 | Design intent |

## Materials

| Material | Grade/Type | Application | Source |
|----------|-----------|-------------|--------|
| Steel | FH36 | Ice belt, keel, deep hull plating | VPC-2.0-spec.md |
| Steel | EH36, DH36 | Non-ice hull, frames, bulkheads | VPC-2.0-spec.md |
| Aluminum | Al-Li 2099 | Superstructure | VPC-2.0-spec.md |
| Columns | LWHEA (WAAM) | Premium cargo structural columns | VPC-2.0-spec.md |
| Coating | Graphene-Al | Hull bottom | ARCH-002 |
| Stem | Titanium | Bow stem elements | ARCH-002 |
| Joints | SMA inserts | Shape memory alloy connections | ARCH-002 |

## Stability and Class

| Parameter | Value | Source | Notes |
|-----------|-------|--------|-------|
| GM | 3.176 m | README live truth | Preliminary plausibility |
| Intact stability | Not formally closed | README | Gap |
| Damage stability | Not assessed | — | Gap — SOLAS compliance unknown |
| Class | Deferred | — | Early assumed PC3 `[SUPERSEDED]` |
| Class-facing status | Preliminary plausibility preserved | README live truth | 20098-specific rebound artifact missing |

## Seakeeping and Motion

| Parameter | Value | Source | Notes |
|-----------|-------|--------|-------|
| Motion lane | Blocked | README live truth | Blocked on openfoam_v2312_runtime_surface |
| Seakeeping lane | Blocked | README live truth | Pending admitted motion truth |
| RAO data | Not available | — | Gap |
| Added resistance in waves | Not available | — | Gap |

## Service Loads

| Parameter | Value | Source | Notes |
|-----------|-------|--------|-------|
| Hotel loads (code baseline) | 85 kW | ARCH-002 | Likely undersized |
| Service load band | 0.18 – 0.45 MW | ARCH-002 | Inconsistent across branches |
| Alternative band | 500 – 800 kW | ARCH-002 | From different source |
| Service loads | UNRESOLVED | — | HVAC, navigation, controls, lighting, pumps, cargo monitoring, AI/control racks |

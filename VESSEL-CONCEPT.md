# Vessel Concept

> Source: `workstreams/ws-arch/architecture/ARCH-002-zeroship-end-to-end-legacy-thinking.md` | `README.md` live truth | `docs/VPC-2.0-spec.md`

## Overview

The Zero Class Vessel is a hydrogen-electric commercial container freighter designed through the ZeroShip platform. The current lawful lead hull is **Hull 20098** — an X-Bow deep-hull design optimized for a 1,040 TEU cargo capacity across a 1,500 nm operating corridor at 23 kn commercial passage speed.

The vessel uses PEM fuel cells as its primary power source, with hydrogen as the energy carrier. Propulsion is all-electric. The arrangement places heavy storage (hydrogen, batteries) low in the hull, cargo in the central mid-zone, and accommodation aft.

## Hull Form

| Parameter | Value |
|-----------|-------|
| Bow form | X-Bow (inverted) |
| Hull depth | Large for length class — enables internal volume, seakeeping, cargo stacking |
| Beam | 20.48 m |
| Design intent | Deep, wide hull with integrated hydrodynamic features |

The hull form incorporates:

- X-Bow geometry for reduced slamming and maintained speed in rough sea states
- Depth-to-length ratio chosen to maximize internal volume and stability margin
- Integrated provision for future hydrodynamic augmentation (fluting channels, air-cavity recess, riblet surfaces)

> The physical hull geometry (lines, fairings) is not published. Hull 20098 geometry is held in the private repository.

## Propulsion Architecture

| Parameter | Value |
|-----------|-------|
| Propulsion type | All-electric |
| Prime mover | PEM fuel cells |
| Primary fuel | Hydrogen |
| Core plant included | 1 × 20 MW hydrogen fuel-cell core |
| Battery buffer | 134.7 MWh (role: buffer, black-start, emergency — not co-primary) |
| Hydrogen storage | 100 t carried in double-bottom architecture |

> Source: `output/ship/phase4-vessel-closure-current-canonical/augmentation-verdict.json`

The hydrogen storage carrier form (compressed H2, LOHC, or LH2) remains an unresolved design branch. The current core assumes compressed hydrogen in the double-bottom zone.

## Cargo Architecture

| Parameter | Value |
|-----------|-------|
| Cargo type | Containerized (TEU) |
| Capacity | 1,040 TEU |
| Structural support | 4 premium structural columns |
| Stacking | Extra tiers enabled by deep hull + high GM |
| Placement | Above storage plane |

The four structural columns serve double duty: primary structural members and premium-cargo support. The deep hull enables additional cargo tiers that would not be stable in a shallower vessel.

## Operating Doctrine

| Parameter | Value |
|-----------|-------|
| Sovereign operating condition | OC-B1: Loaded tropical transit |
| Commercial passage speed | 23 kn |
| Operating corridor | 1,500 nm |
| Operating model | Commercial-only (voyage-based) |

`[SUPERSEDED]` Earlier branches explored 33–46 kn sprint capability and polar research missions. These are dead. The 23 kn commercial passage gate is the current governing speed.

## Arrangement Philosophy

The vessel arrangement follows a zoned placement doctrine:

| Zone | Contents |
|------|----------|
| Bow | Bow structure, forward H2 storage, forward ballast |
| Lower hull | Double-bottom hydrogen storage, battery placement |
| Amidships | Central cargo block (1,040 TEU) |
| Aft machinery | Fuel cells, power conversion, cooling |
| Aft superstructure | Accommodation, bridge, AI compute, monitoring |
| Roof | Solar panels, safety equipment |

Upper-ship accommodation is intended for LFAM (Laser-Fusion Additive Manufacturing) printed modules — an architectural intent with unassessed technology readiness.

Routing continuity (pipe/cable), maintenance and removal envelopes, and hazard mapping are part of the arrangement discipline.

## Materials

| Material | Application |
|----------|-------------|
| FH36, EH36, DH36 steels | Hull shell, primary structure |
| Al-Li 2099 | Superstructure, weight reduction |
| LWHEA columns | Premium cargo structural columns |
| SMA inserts | Specialized joint connections |
| Graphene-Al | Hull bottom coating (drag reduction) |
| Titanium | Stem elements |

Manufacturing methods explored include WAAM (Wire + Arc Additive Manufacturing) for structural sections and LFAM for accommodation modules. Integration paths and certification status for these methods are not finalized.

## Hydrodynamic Augmentation Register

The following augmentations are in the optional-future-layer register. None are included in the current core design assumption:

| Augmentation | Description | Status |
|-------------|-------------|--------|
| THRC | Fuel-cell waste heat → hot freshwater → bow injection for viscosity reduction | Optional future layer |
| Air-cavity recess | Lower hull air cavity for drag reduction | Provision integrated in hull |
| Riblet coatings | Microscopic surface texture for boundary-layer drag reduction | Candidate |
| Hull Vane | Stern appendage for efficiency and pitch reduction | Optional future layer |
| Vortex generators | Active/passive flow control devices | Optional future layer |
| Air lubrication | Bubble system for drag reduction | Candidate |
| Graphene propeller coating | Propeller efficiency enhancement | Candidate |
| Wind assist | Conditional sail power — useful in some conditions, penalty if not feathered | Excluded from core |

> Source: `output/ship/phase4-vessel-closure-current-canonical/augmentation-verdict.json`

## Crew Model

The vessel concept includes an AI-first operational philosophy: autonomous systems handle normal operations, with human crew intervening at edge cases. This is a design intent inherited from the programme's culture-vessel philosophy. Crew number, certification requirements, and watch-keeping schedules are not specified.

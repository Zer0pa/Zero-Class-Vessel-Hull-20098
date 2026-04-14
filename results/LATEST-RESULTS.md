# Latest Computed Results

> Authority: Phase 13.2 — Candidate 20098 (pcn_cb_0648 hull lineage)
> All values are computed results under stated assumptions. See [DISCLAIMERS.md](../DISCLAIMERS.md).

---

## Principal Particulars (Current Authority)

| Parameter | Value | Unit |
|---|---|---|
| Displacement | 10,938.07 | t |
| LOA | 147.60 | m |
| Beam | 20.48 | m |
| Draft | 6.31 | m |
| Block Coefficient (Cb) | 0.575 | — |
| GM | 3.176 | m |
| Max GZ | 2.607 | m at 50° |

> Source: README live truth — Phase 13.2 candidate 20098

---

## Resistance and Powering

| Parameter | Value | Unit |
|---|---|---|
| Bare effective resistance power @ 23 kn | 9.758 | MW |
| House-basis delivered power @ 23 kn | 14.351 | MW |
| Service power band | 13.733 – 16.049 | MW |
| Installed power band | 15.793 – 20.061 | MW |

### Power/Speed Envelope (Admiralty C = 414.87, Lead Hull Transfer)

> Note: This table derives from the Phase 4 lead hull (pcn_cb_0648) transfer via Admiralty coefficient.
> Phase 13.2 candidate 20098 house-basis power is 14.351 MW @ 23 kn (see Propulsion Decomposition below).

| Speed (kn) | Loaded Power (MW) | Sprint Power (MW) |
|---|---|---|
| 15 | 3.974 | 1.438 |
| 18 | 6.866 | 2.484 |
| 20 | 9.419 | 3.408 |
| **23** | **14.325** | **5.182** |
| 25 | 18.396 | 6.655 |
| 27 | 23.174 | 8.384 |
| 28 | 25.845 | 9.350 |
| 30 | 31.789 | 11.500 |

> Source: final-vessel-spec.json — power_speed_envelope

### Propulsion Decomposition (Phase 13.2)

| Scenario | P_e bare (MW) | P_delivered (MW) | η_hydro | η_input | Aux (MW) | Reserve | P_installed (MW) |
|---|---|---|---|---|---|---|---|
| Conservative | 9.758 | 14.351 | 0.68 | 0.92 | 0.45 | 25% | 20.061 |
| Aggressive | 9.758 | 13.011 | 0.75 | 0.96 | 0.18 | 15% | 15.793 |

> Source: final-vessel-spec.json — propulsion_decomposition

---

## Benchmark Comparison (Lead Hull Basis)

| Metric | Lead Hull (pcn_cb_0648) | Benchmark (31292-deep-draft) | Improvement |
|---|---|---|---|
| Mean Abs Total X Force (N) | 847,467 | 1,795,826 | **52.81%** |
| Delivered Power @ 23 kn (MW) | 14.325 | 30.355 | **52.81%** |

> Source: final-vessel-spec.json — lead_hull block

---

## Stability — Loading Conditions

| Condition | Disp. (t) | Draft (m) | KG (m) | KM (m) | GM (m) |
|---|---|---|---|---|---|
| Lightship | 2,199.0 | 1.851 | 2.654 | 15.578 | 12.924 |
| Loaded tropical transit | 10,795.0 | 7.428 | 4.455 | 7.494 | 3.039 |
| Loaded temperate transit | 10,795.0 | 7.637 | 4.455 | 10.373 | 5.918 |

> Source: final-vessel-spec.json — loading_conditions

### GZ Curve — Loaded Tropical Transit (Real Hull)

| Heel (°) | GZ (m) |
|---|---|
| 0 | 0.000 |
| 10 | 0.573 |
| 20 | 1.130 |
| 30 | 1.647 |
| 40 | 2.028 |
| 50 | 2.215 |
| 60 | 2.241 |
| 70 | 2.132 |
| 80 | 1.965 |
| 90 | 1.595 |

**Max GZ:** 2.241 m at 60°. **GZ @ 30°:** 1.647 m.

### IMO-Like Stability Sub-Criteria (Loaded Tropical Transit)

| Criterion | Value | Pass |
|---|---|---|
| GZ positive to 60° | yes | ✓ |
| GZ at 30° | 1.647 m | ✓ |
| Max GZ | 2.241 m | ✓ |
| Angle of max GZ | 60° | ✓ |
| Area to 30° | 0.4410 m·rad | ✓ |
| Area to 40° | 0.7617 m·rad | ✓ |
| Area 30°–40° | 0.3207 m·rad | ✓ |
| GM floor margin | 39.16 mm above 3.0 m floor | ✓ |

> Note: These are computed results against IMO-like criteria, not a class-society approval.
> Source: final-vessel-spec.json — stability block

---

## Hydrostatics (Exact Hull Geometry)

| Parameter | Value |
|---|---|
| Displaced Volume | 10,531.71 m³ |
| KB | 4.137 m |
| BM_T | 3.542 m |
| KM | 7.679 m |
| Waterplane Area | 1,490.02 m² |
| Waterplane I_T | 37,305.60 m⁴ |
| LCF | 53.798 m |
| Wetted Surface Area | 2,947.34 m² |

> Source: final-vessel-spec.json — hydrostatics

---

## Mass Breakdown (Transferred Hull)

| Component | Mass (t) | VCG (m) |
|---|---|---|
| Hull structure (EH36/DH36 steel) | 1,248.77 | 2.80 |
| Battery pack (134.7 MWh) | 214.00 | 1.80 |
| Fuel-cell stacks (1 × 20 MW) | 144.09 | 1.50 |
| Podded electric propulsors (4-pod) | 35.00 | 1.00 |
| Accommodation (6 crew) | 134.48 | 7.00 |
| Outfitting / stores / margins | 192.12 | 3.50 |
| Permanent closure ballast keel | 230.54 | 0.30 |
| **Lightship total** | **2,199.00** | **2.654** |

Loaded additions: Cargo 8,196.0 t @ VCG 5.102 m, H₂ storage 100.0 t @ VCG 1.1 m, ballast 300.0 t.

> Source: final-vessel-spec.json — transferred_hull.mass_breakdown

---

## Energy and Endurance

| Condition | Speed (kn) | Propulsion (kW) | Hotel (kW) | Solar (kW) | Net Bus (kW) | H₂ Draw (kg) | Range (nmi) | Duration (h) |
|---|---|---|---|---|---|---|---|---|
| Loaded tropical | 23 | 14,325 | 85 | 43 | 14,367 | 50,946 | 1,495 | 65 |
| Loaded temperate | 20 | 9,419 | 85 | 23 | 9,481 | 38,793 | 1,500 | 75 |
| Light sprint `[SUPERSEDED]` | 33 | 15,307 | 85 | 43 | 15,349 | 3,349 | 132 | 4 |
| Port idle | 0 | 0 | 85 | 41 | 45 | 58 | — | 24 |

**Storage:** 100 t H₂ (100,000 kg) = 1,833 MWh gross.
**Battery:** 134.7 MWh.
**Fuel cell installed:** 1 × 20 MW.
**Voyages per H₂ reload:** 1.963 (loaded tropical transit).

> Source: final-vessel-spec.json — energy_endurance

---

## Ship Spiral Closure Status

| Layer | Status |
|---|---|
| Mission and exclusions | **CLOSED** |
| Lead hull geometry | **CLOSED** |
| Augmentation stack | **CLOSED** |
| Loading and mass closure | Narrow quantified residual |
| Stability and GZ | Narrow quantified residual |
| Resistance and powering | Narrow quantified residual |
| Propulsion architecture | Narrow quantified residual |
| Energy and endurance | Narrow quantified residual |
| Arrangement and volume | Narrow quantified residual |
| Commercialization readiness | Narrow quantified residual |

> Source: final-vessel-spec.json — ship_spiral_closure

---

## Blocked Work Items

| Domain | Blocker |
|---|---|
| Motion truth (RAOs) | Missing OpenFOAM v2312 runtime surface; Capytaine not importable |
| Seakeeping truth | Blocked pending motion truth |
| Arrangement / class closure | Blocked pending complete GA |

> Source: final-vessel-spec.json — ship_truth_verdicts

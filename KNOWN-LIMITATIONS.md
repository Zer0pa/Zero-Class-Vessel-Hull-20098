# Known Limitations

> Explicit gaps and limitations in the current Hull 20098 design.
> Stated plainly. These are real engineering gaps, not caveats about documentation quality.

## Hull Geometry

| Limitation | Detail |
|-----------|--------|
| Hull lines / fairings not published | Hull 20098 geometry is held in the private repository; no lines plan or CAD geometry is publicly available |
| Resistance predictions are computed, not model-tested | No towing tank or physical model test data exists; all resistance values are from computational methods |

## Propulsion

| Limitation | Detail |
|-----------|--------|
| Propulsor topology unresolved | Options explored (4× podded azimuth, 2× aft pods, twin-screw, single-screw FPP) but no final selection made |
| Propulsive efficiency not formally closed | Efficiency used in power-band reasoning before architecture was settled |
| Propulsor thrust curves not available | No bollard pull, pitch/RPM envelope, or cavitation analysis |
| Fuel cell stack specification incomplete | PEM FC is the prime mover type; no vendor, stack count, individual efficiency, or thermal output specified |

## Electrical

| Limitation | Detail |
|-----------|--------|
| Electrical single-line diagram not closed | Explicitly called "almost no fully closed design" in the legacy archive |
| Power electronics decision pending | Si IGBT vs SiC selection not made; mass, efficiency, and cooling consequences unresolved |
| Black-start procedure not designed | Battery is the assumed black-start asset but no procedure, sequence, or power limits documented |
| Bus topology not settled | Split-bus, converter-heavy architecture is design intent; no validated single-line |

## Stability

| Limitation | Detail |
|-----------|--------|
| GM is preliminary plausibility only | GM 3.176 m confirmed at preliminary level; no formal stability booklet |
| Intact stability criteria not formally closed | GZ targets exist as design intent but no quantitative GZ arm data or stability diagrams |
| Damage stability (SOLAS) not assessed | Compartmentation and damage survival analysis not performed |
| Stability booklet not available | No KG limits, loading diagrams, or stability information booklet |

## Seakeeping and Motion

| Limitation | Detail |
|-----------|--------|
| Motion lane blocked | Candidate rebind reached preflight but truth is blocked on OpenFOAM v2312 runtime surface |
| Seakeeping lane blocked | Pending admitted motion truth — cannot close seakeeping without motion |
| No RAO data | Response Amplitude Operators not computed |
| No added resistance in waves | Seakeeping power penalty not quantified |
| No probability-of-slamming assessment | X-Bow claimed to reduce slamming but no quantitative verification |

## Energy and Storage

| Limitation | Detail |
|-----------|--------|
| Hydrogen storage carrier unresolved | Compressed H2, LOHC, and LH2 branches are all open; no final carrier selection |
| No hydrogen tank design | No tank pressure specification, volume calculation, or material specification |
| No energy accounting closure shown | Speed profile, electrical losses, and auxiliary demand not reconciled into a closed energy balance |
| Service load model inconsistent | Hotel loads range from 85 kW to 500–800 kW across different sources |

## Arrangement

| Limitation | Detail |
|-----------|--------|
| Machinery arrangement drawings not available | No P&ID, section views, or engine room layout published |
| Arrangement is JSON-based, not CAD-validated | Physical integration formalized in JSON but no visual GA or section drawings |
| Void space and ballast capacity not specified | General zoning described but specific void/ballast volumes not available |

## Structure and Class

| Limitation | Detail |
|-----------|--------|
| Structural scantlings not provided | Material grades listed but no plate thickness, frame spacing, or joint details |
| Class-facing status is preliminary plausibility only | 20098-specific rebound artifact still missing |
| Class engagement deferred | No classification society selected; no submission plan or approval timeline |
| PC3 ice-class requirement removed | `[SUPERSEDED]` — early assumption not carried into commercial branch |
| Ghost mass from polar scantlings `[SUPERSEDED]` | Historical weight tables carry structural mass from the dead polar branch |

## Regulatory and Operational

| Limitation | Detail |
|-----------|--------|
| No regulatory compliance summary | MARPOL, COLREG, UNCLOS, flag state, port state control exposure not assessed |
| No noise and vibration targets | No dB limits, isolation requirements, or deck vibration specifications |
| No manning certificate or crew number | Crew model is philosophical ("AI-first"); actual crew count not specified |
| No cold-iron / shore-power specification | No shore connection design for port operations |
| No FMEA | No failure mode and effects analysis for any system |
| No TRL assignments | Technology readiness levels not formally assessed for any innovation |
| No lifecycle cost model | "Rapid payback" mentioned in legacy sources; no detailed cost breakdown |
| Freeboard calculation not performed | International Convention on Load Lines compliance unknown |

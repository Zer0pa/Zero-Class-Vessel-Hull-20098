# Innovation Inventory

> Catalogue of design innovations explored in the Zero Class Vessel programme.
> Status reflects current disposition, not historical importance.

## Hull and Geometry

| Innovation | Description | Status |
|-----------|-------------|--------|
| X-Bow + deep hull integration | Inverted bow combined with unusually deep hull for reduced slamming and internal volume | Active — embodied in Hull 20098 |
| Fluting channels | Cylindrical grooves integrated into hull as permanent micro-drag reduction | Legacy — TRL unassessed |
| Lower-hull air-cavity recess | Recessed cavity in lower hull for drag reduction | Provision in hull — TRL unassessed |
| Generative hull search | Multi-phase, CFD-guided computational search across hull parameter space | Active — produced Hull 20098 |

## Propulsion and Power

| Innovation | Description | Status |
|-----------|-------------|--------|
| All-electric PEM fuel cell propulsion | Hydrogen-to-electricity via PEM stacks driving electric propulsors | Active — core architecture |
| Battery as role-defined asset | Battery sized by strategic reserve/emergency role, not co-primary propulsion | Active — 134.7 MWh buffer for black-start/emergency |
| Plant modular zoning | Power plant split into redundant modules to encode casualty reserve directly in topology | Active — module count unresolved (2×10 MW vs 4×5 MW) |
| Casualty speed doctrine encoding | Post-failure degraded speed encoded as design input, not afterthought | Active — doctrine not quantified |
| Hydrogen storage as architecture driver | Storage medium selection (H2/LOHC/LH2) treated as primary ship-shaping decision | Active — carrier unresolved |
| Double-bottom H2 placement doctrine | Heavy hydrogen storage deliberately low in hull to preserve stability and cargo volume | Active — canonical arrangement |

## Electrical Architecture

| Innovation | Description | Status |
|-----------|-------------|--------|
| Split-bus, converter-heavy architecture | Distributed power buses with active converter layers | Design intent — single-line not closed |
| Si IGBT vs SiC strategic selection | Power electronics chosen at ship-architecture level for mass/efficiency/cooling effects | Unresolved — decision pending |
| Air-gapped control monitoring | Propulsion control isolated from monitoring/telemetry via air-gap | Design intent — cybersecurity pattern |

## Materials and Manufacturing

| Innovation | Description | Status |
|-----------|-------------|--------|
| Al-Li 2099 superstructure | Aluminum-lithium alloy for weight reduction vs conventional Al 5083 | Active — in weight build-up |
| LWHEA premium columns | Lightweight high-entropy alloy columns for cargo support + primary structure | Active — 4 columns in arrangement |
| Graphene-Al hull bottom coating | Graphene-reinforced aluminum for drag reduction + corrosion resistance | Candidate — TRL unassessed |
| Titanium stem elements | Titanium-alloy bow stem for weight reduction + impact performance | Candidate — TRL unassessed |
| SMA inserts | Shape-memory alloy connection inserts for joint flexibility and fatigue tolerance | Candidate — TRL unassessed |
| WAAM structural sections | Wire + Arc Additive Manufacturing for complex structural geometry, reduced scrap | Candidate — certification path unknown |
| LFAM accommodation modules | Laser-Fusion Additive Manufacturing for 3D-printed accommodation | Design intent — TRL unassessed, structural allowances unknown |

## Hydrodynamic Augmentation

| Innovation | Description | Status |
|-----------|-------------|--------|
| THRC | Fuel-cell waste heat → hot freshwater → bow injection for viscosity reduction and propulsive recovery | Optional future layer — not in core |
| Riblet coatings | Microscopic surface texture for boundary-layer drag reduction (biomimetic sharkskin) | Candidate — TRL unassessed |
| Hull Vane | Stern appendage for propulsive efficiency and pitch motion reduction | Optional future layer |
| Vortex generators | Active/passive flow control devices for separation-drag reduction | Optional future layer |
| Air lubrication | Bubble system for hull-surface drag reduction | Candidate — TRL unassessed |
| Graphene propeller coating | Propeller surface enhancement for efficiency improvement | Candidate — TRL unassessed |
| Conditional wind assist | Sail power available in some routes/conditions; feathering mechanism required | Excluded from core — penalty without feathering |

## Arrangement and Integration

| Innovation | Description | Status |
|-----------|-------------|--------|
| Four premium structural columns | Vertical columns serving dual purpose: primary structure + cargo loading stability | Active — in current arrangement |
| Zoned placement doctrine | H2 low, battery low, cargo mid, accommodation aft — systematic zone separation | Active — governs arrangement |
| Arrangement physical-integration JSON | Spatial arrangement formalized in machine-readable format | Active — `arrangement-physical-integration.json` |
| Residualization doctrine | Every unclaimed volume assigned explicit purpose — no dead space in the arrangement | Active — design discipline |
| LFAM-printed upper ship | Accommodation and deckhouse modules manufactured via additive process | Design intent — integration/certification path unknown |

## Governance and Design Process

| Innovation | Description | Status |
|-----------|-------------|--------|
| Same-basis comparison engine | All challengers compared on one frozen vessel basis and consistent loading/route logic | Active — platform capability |
| Promotion ladder / evidence law | No technology advances from concept to core without explicit proof | Active — governs all augmentation promotion |
| Proof/Decision/Debt/Kill taxonomy | Four-way result classification replaces binary pass/fail | Active — platform governance |
| Artifact-sync freeze | Ship arrangement and platform documentation frozen together to prevent drift | Active — integration law |
| Source hierarchy with stale-ghost quarantine | Legacy ideas quarantined when superseded; only live sources drive decisions | Active — legacy management |

## Dead Innovations

| Innovation | Description | Reason Killed |
|-----------|-------------|---------------|
| One chassis, two missions | Single hull serving polar research and commercial freight | Architecturally incompatible — commercial branch governs |
| 5× rigid wing mast system | Sail-assisted primary propulsion via wing masts | Headwind penalty; excluded from core |
| Moon pool integration | ROV/sampling operations facility | Research heritage — dead in commercial branch |
| Ammonia fuel carrier | NH3 as hydrogen carrier medium | Toxicity, handling complexity, regulatory burden |
| Culture vessel crew model | Every crew member can pilot; AI runs normal | Philosophy — not operationalized |

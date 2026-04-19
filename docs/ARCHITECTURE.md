# Hull 20098 Architecture

## Public Role

This repo is the public vessel authority and status surface for Hull 20098. It
captures the current executable basis, the truth boundary, and the open route
to closure.

## Current Truth Boundary

- executable two-unit baseline: `14.359960 MW @ 23 kn`
- admitted hydrodynamic anchor: `14.350634 MW @ 23 kn`
- one-unit-out `23 kn`: false
- four-pod `13.518964 MW @ 23 kn`: branch-local only
- geometry reopening: blocked

## Relationship To ZeroShip

- this repo carries ship truth and ship-facing blockers
- ZeroShip carries the public platform and process surface
- platform progress does not promote ship claims automatically

# Showcase Repo Playbook

**Version:** 2026-04-19
**Scope:** Public-facing showcase repos that publish status, architecture, and
evidence without publishing private implementation code.

## 1. What A Showcase Repo Is

A showcase repo is a public evidence surface for one product or workstream. It
is useful now, updates in public, and stays honest about its boundary. It is
not a dump of private code, a private-path scrapbook, or a narratable proxy
for work that has not been proved.

It speaks for itself. Do not frame a showcase repo as a module in some grand
unified portfolio platform unless that is literally the product being
described. Shared philosophy and sibling references are fine. Fake technical
unification is not.

## 2. Minimum Structure

Every showcase repo keeps this shape:

```text
README.md
LICENSE
CITATION.cff
CHANGELOG.md
CONTRIBUTING.md
SECURITY.md
CODE_OF_CONDUCT.md
SHOWCASE-REPO-PLAYBOOK.md
.github/
  workflows/ci.yml
  ISSUE_TEMPLATE/
  PULL_REQUEST_TEMPLATE.md
docs/
  README.md
  ARCHITECTURE.md
  FAQ.md
  SUPPORT.md
  LEGAL_BOUNDARIES.md
proofs/
  manifests/
  artifacts/
validation/
  results/
```

Packaging files are optional and only belong in a showcase repo that also
ships runnable public software.

## 3. Public Posture

Use the same positive posture everywhere:

- useful now, improving continuously
- specific about what is proved
- specific about what is still blocked

Do not use apology language such as `incomplete`, `not yet ready`,
`pre-alpha`, `private-stage`, or similar hedges. If a surface is public, it
must read as intentionally public.

## 4. Canonical README Contract

The README uses the same parser-sensitive public spine as the shared public
contract:

1. `## What This Is`
2. `## Key Metrics`
3. `## Competitive Benchmarks` when real public benchmark evidence exists
4. `## What We Prove`
5. `## What We Don't Claim`
6. `## Commercial Readiness`
7. `## Tests and Verification`
8. `## Proof Anchors`
9. `## Repo Shape`
10. `## Quick Start`

Rules:

- keep the headings in that order
- add the `Architecture` and `Encoding` key-value rows under `## What This Is`
- keep `## Key Metrics` to exactly four rows
- use only `STAGED`, `PASS`, `PARTIAL`, `BLOCKED`, `FAIL`, or `INCONCLUSIVE`
  in `## Commercial Readiness`
- use only `PASS`, `FAIL`, or `INC` in `## Tests and Verification`
- every proof anchor path must resolve inside the public repo

## 5. Public Proof Doctrine

- every promoted number must trace to a repo-local file under `proofs/` or
  `validation/`
- public proof anchors may mirror private truth, but they may not point at
  private repos or private filesystem paths
- a showcase repo must never cite a directory that does not exist in its own
  git history

## 6. Status Doctrine

`DEVELOPMENT-STATUS.md` must carry an absolute date and say:

- what changed this week
- what did not change
- what the current lawful boundary is
- what the next lawful move is

If the underlying workstream is paused, say `controlled pause` or
`pause and convergence`. Do not frame it as abandonment.

## 7. Language Rules

- use positive, buyer-legible language
- name blockers plainly
- do not use hidden rescue language or proxy wins
- do not use hardcoded private paths, private account names, or access details
- do not let platform progress masquerade as ship progress
- do not lean on ecosystem theatre, family lists, or portfolio rhetoric when a
  direct product description is enough

## 8. Validation Minimum

Each showcase repo keeps one machine-readable result at
`validation/results/public_surface_status.json` and one current manifest under
`proofs/manifests/`.

The minimum public checks are:

- README contract valid
- proof anchors resolve
- current status packet present
- no private-path leakage in public proofs

## 9. Pre-Push Checklist

- README contract passes
- all proof anchors resolve
- all public links resolve
- status date is current
- no private paths remain
- no forbidden verdict tokens remain
- the repo still reads as useful now

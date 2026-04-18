# A/B Prototype

Workspace for defining and building experiment variants before the main app structure is finalized.

## Intended flow

1. Summarize the research-plan PDF in `docs/product/research-plan-summary.md`
2. Turn that summary into a concrete test brief in `ab-prototype/experiment-brief.md`
3. Define the variants in `ab-prototype/variants/`
4. Define measurement in `ab-prototype/metrics/`
5. Implement or mock the selected screens under `ab-prototype/prototype/`

## Principle

Keep experiment artifacts isolated from long-term product code until the test design is stable.

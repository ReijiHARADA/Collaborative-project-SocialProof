# SocialProof

Repository scaffold for building the product from research-plan inputs and Figma design assets.

## Current phase

The project is currently in the A/B test design stage.

The working assumption is:

- the NotebookLM source of truth is a research-plan PDF
- the immediate deliverable is an experiment-ready prototype structure
- product implementation will follow after hypotheses, variants, and metrics are fixed

## Structure

- `ab-prototype`: A/B test working area
- `apps/web`: main product application after experiment direction is fixed
- `packages/ui`: shared UI components and design tokens
- `docs/product`: product framing, research-plan summary, and experiment requirements
- `docs/design`: design notes and screen mapping from Figma
- `assets/figma`: exported images and reference assets from Figma
- `content/research`: raw research artifacts and source files

## Notes

The external links were not fully extractable in this environment:

- the provided NotebookLM URL behaved like a login/top-level URL rather than a directly shareable notebook
- Figma MCP access hit the current plan rate limit before node data could be fetched

The repository is therefore organized to accept:

- research-plan summaries and extracted notes under `docs/product` and `content/research`
- experiment specs under `ab-prototype`
- later implementation under `apps/web` and `packages/ui`

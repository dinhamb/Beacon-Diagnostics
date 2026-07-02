# Beacon Diagnostics — working conventions

- **`docs/brand-foundations.md` is maintained by the owner, not by build
  tasks.** Do not edit it as part of implementation work. If something in it
  looks stale or contradicts the build, flag it to the owner instead of
  changing the file.
- **Copy rules:** use only confirmed content (brand doc section 3.6 plus
  wording the owner supplies explicitly). No invented copy, taglines, or
  placeholder marketing language — if a section needs words that don't exist
  yet, stop and ask for exact wording. No adjective without a fact behind it.
- **Visual source of truth:** the annotated visual build reference HTML
  (owner-supplied). Where it conflicts with the brand doc's exact values, the
  HTML wins — but flag the discrepancy rather than resolving it silently.
- **Logo:** the lighthouse mark and lockup are fixed. `beacon-mark.png` on
  light backgrounds, `logo-on-dark.svg` on navy (selected via `Logo.astro`'s
  `background` prop).
- **Deploying:** the Pages workflow deploys on push to `main`. Never merge to
  `main` or otherwise publish without the owner's explicit confirmation.
- **Build cadence:** one component at a time; stop after each for review.

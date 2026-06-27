// @ts-check
import { defineConfig } from 'astro/config';

// Static output, islands by default. Editorial content ships ~zero JS;
// only the motion <script> blocks hydrate per-route (Brand Foundations 4.4).
//
// Served from the custom domain beacondiagnostics.com.au at the ROOT, so there
// is no base path. (Previously the build was prefixed for the github.io project
// path /Beacon-Diagnostics/, which 404s asset/link paths on the apex domain.)
export default defineConfig({
  site: 'https://beacondiagnostics.com.au',
  build: {
    // Inline small stylesheets to cut request count on a mostly-static site.
    inlineStylesheets: 'auto',
  },
  prefetch: {
    // Cheap perceived-speed win between the gateway and service tracks.
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});

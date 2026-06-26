// @ts-check
import { defineConfig } from 'astro/config';

// Static output, islands by default. Editorial content ships ~zero JS;
// only the motion <script> blocks hydrate per-route (Brand Foundations 4.4).
export default defineConfig({
  site: 'https://beacondiagnostics.example',
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

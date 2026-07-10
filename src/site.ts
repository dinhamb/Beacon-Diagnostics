/**
 * Site-wide constants. Single source of truth for the two-track architecture,
 * track icons (one fixed icon per track, used everywhere — Layer 2.4), and
 * contact details. Pages and chrome read from here so nothing drifts.
 *
 * Contact details are the CONFIRMED values from Brand Foundations 3.6.4.
 * The phone mnemonic (1300 ALL HRT) stays visible wherever the number
 * appears — it's real information, not decoration.
 */
export const SITE = {
  name: 'Beacon Diagnostics',
  email: 'info@beacondiagnostics.com.au',
  phone: '1300 255 478',
  phoneMnemonic: '1300 ALL HRT',
};

/**
 * Prefix an absolute app path with the configured base (import.meta.env.BASE_URL
 * is "/" locally and "/Beacon-Diagnostics/" on GitHub Pages). Use for every
 * internal link and asset so both deploy modes resolve correctly.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, ''); // '' locally, '/Beacon-Diagnostics' on Pages
export const withBase = (path: string): string =>
  path === '/' ? `${BASE}/` : `${BASE}${path.startsWith('/') ? '' : '/'}${path}`;

export type TrackId = 'imaging' | 'cardiac' | 'facility';

/**
 * No blurb text on tracks: routing tiles carry bare track names only until
 * exact wording is confirmed (3.6 has no confirmed blurb copy).
 */
export const TRACKS: Record<
  TrackId,
  { id: TrackId; label: string; navLabel: string; href: string; icon: string }
> = {
  imaging: {
    id: 'imaging',
    label: 'Imaging Support Services',
    navLabel: 'Imaging Support Services',
    href: withBase('/imaging-qc'),
    icon: 'ruler', // calibration — the imaging/QC track's fixed icon (2.4)
  },
  cardiac: {
    id: 'cardiac',
    label: 'Cardiac Services',
    navLabel: 'Cardiac Services',
    href: withBase('/cardiac'),
    icon: 'monitor', // monitoring — confirmed NOT a heart/heartbeat glyph (Layer 1; mock's ♥ was placeholder)
  },
  facility: {
    id: 'facility',
    label: 'Facility Design Consulting',
    navLabel: 'Facility Design Consulting',
    href: withBase('/facility-design'),
    icon: 'layout', // floor-plan glyph — the facility track's fixed icon (2.4)
  },
};

export const TRACK_ORDER: TrackId[] = ['imaging', 'cardiac', 'facility'];

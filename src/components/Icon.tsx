// Monochrome line icons, one weight, drawn in currentColor (24×24). Shown in a tinted rounded square.
export const ICONS = {
  plane: <path d="M2 13l8-2 4-7h2l-2 7 6 1 2-3h2l-1 4 1 4h-2l-2-3-6 1 2 7h-2l-4-7-8-2z" />,
  seatbelt: <><rect x="4" y="9" width="16" height="6" rx="2" /><path d="M8 9V5M16 9V5M8 15v4M16 15v4M10 12h4" /></>,
  helmet: <><path d="M4 15a8 8 0 0 1 16 0v2H4z" /><path d="M12 7v4M4 17h16" /></>,
  hand: <path d="M8 13V5a1.5 1.5 0 0 1 3 0v6M11 10V4a1.5 1.5 0 0 1 3 0v6M14 10V5a1.5 1.5 0 0 1 3 0v7c0 5-3 8-7 8s-6-3-7-6l-1-3a1.5 1.5 0 0 1 2.7-1.3L8 13" />,
  door: <><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M15 12h1M9 3v18" /></>,
  rig: <><rect x="6" y="3" width="12" height="18" rx="3" /><path d="M6 10h12M9 14h6M9 17h6" /></>,
  reserve: <><rect x="6" y="3" width="12" height="18" rx="3" /><path d="M6 9h12" /><circle cx="12" cy="6" r="1" /></>,
  pin: <><circle cx="12" cy="12" r="3" /><path d="M12 3v6M12 15v6" /></>,
  chip: <><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" /></>,
  person: <><circle cx="12" cy="5" r="2.5" /><path d="M12 8v7M8 11h8M12 15l-3 6M12 15l3 6" /></>,
  altimeter: <><circle cx="12" cy="12" r="8" /><path d="M12 12l4-4M12 5v1M19 12h-1M12 19v-1M5 12h1" /></>,
  repeat: <path d="M4 12a8 8 0 0 1 13.6-5.6L20 9M20 4v5h-5M20 12a8 8 0 0 1-13.6 5.6L4 15M4 20v-5h5" />,
  question: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5V14M12 17.5v.5" /></>,
  tap: <><path d="M9 11V5a2 2 0 0 1 4 0v6l4 1c1.3.4 2 1.6 1.8 2.9L18 21H10l-4-6a1.8 1.8 0 0 1 2.8-2.2L9 13" /></>,
  canopy: <><path d="M3 10c3-5 15-5 18 0-6-2-12-2-18 0z" /><path d="M4 10l8 9 8-9M9 9.5l3 9.5M15 9.5l-3 9.5" /></>,
  water: <path d="M3 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0M3 19c2-2 4-2 6 0s4 2 6 0 4-2 6 0M12 3l3 6a3 3 0 1 1-6 0z" />,
  tree: <><path d="M12 21v-5M7 16h10l-5-13z" /></>,
  building: <><rect x="4" y="5" width="10" height="16" /><path d="M14 10h6v11H14M7 9h4M7 13h4M7 17h4" /></>,
  power: <path d="M5 21L9 3h6l4 18M7 10h10M6 15h12M9 3l6 7M15 3l-6 7" />,
  warn: <><path d="M12 3l10 18H2z" /><path d="M12 10v5M12 18v.5" /></>,
  wind: <path d="M3 9h11a3 3 0 1 0-3-3M3 15h15a3 3 0 1 1-3 3M3 12h8" />,
  ground: <><path d="M2 20h20M5 20l4-6 3 3 3-5 4 8" /></>,
  roll: <><circle cx="12" cy="12" r="8" /><path d="M8 12a4 4 0 0 1 8 0" /><path d="M16 12l-2-2M16 12l2-2" /></>,
} as const;

export type IconName = keyof typeof ICONS;

export function Icon({ name }: { name: IconName }) {
  return (
    <span className="ico" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">{ICONS[name]}</svg>
    </span>
  );
}

/** One quiet glyph per part, next to its cover title. */
export const PART_ICON: Record<string, IconName> = { part1: 'plane', part2: 'person', part3: 'canopy', part4: 'warn', dz: 'pin' };

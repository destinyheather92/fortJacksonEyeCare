import type { ReactNode } from 'react';

/** Simple 24×24 line icons, drawn for this site. Decorative by default. */
const paths = {
  eye: (
    <>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="16" rx="2" />
      <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
    </>
  ),
  phone: (
    <path d="M21.5 16.4v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 3.6 1.5h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L7.6 9.4a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  ),
  mapPin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  external: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  glasses: (
    <>
      <circle cx="6.5" cy="14.5" r="3.5" />
      <circle cx="17.5" cy="14.5" r="3.5" />
      <path d="M10 14.5h4M3 14.5 4.8 7.5 7 6.5M21 14.5l-1.8-7L17 6.5" />
    </>
  ),
  family: (
    <>
      <circle cx="9" cy="7" r="3.5" />
      <path d="M2.5 20.5v-1a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v1" />
      <circle cx="17.5" cy="9" r="2.5" />
      <path d="M17 14.5h1a4 4 0 0 1 4 4v1" />
    </>
  ),
  lens: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M6.6 9.2A6.5 6.5 0 0 1 12 5.5" />
    </>
  ),
  car: (
    <path d="M3.5 17v-4l1.8-5a2 2 0 0 1 1.9-1.3h9.6a2 2 0 0 1 1.9 1.3l1.8 5v4Zm0-4h17M6.5 17v2.5M17.5 17v2.5" />
  ),
  droplet: <path d="M12 2.5s6.5 7 6.5 12a6.5 6.5 0 0 1-13 0c0-5 6.5-12 6.5-12Z" />,
  pulse: (
    <>
      <path d="M20.3 12.5 12 20.8l-8.3-8.3a5 5 0 0 1 7.1-7.1l1.2 1.2 1.2-1.2a5 5 0 0 1 7.1 7.1Z" />
      <path d="M2.5 12.5h4.5l2-3 3 5.5 2-2.5h7.5" />
    </>
  ),
  gauge: (
    <>
      <path d="M3.5 17.5a9 9 0 1 1 17 0" />
      <path d="m12 13.5 4-4" />
      <circle cx="12" cy="13.5" r="1.3" />
    </>
  ),
  retina: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="15" cy="11" r="1.8" />
      <path d="M13.3 10.2C11 8.2 8.2 8 5.5 9M13.3 11.8c-2.3 2-5 2.6-7.8 2.2M15 9.2V4.5" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19C5 10 10 5 20 4c-.5 10-5.5 15-15 15Z" />
      <path d="M5 19 13 11" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  monitor: (
    <>
      <rect x="2.5" y="4" width="19" height="12.5" rx="1.5" />
      <path d="M8 20.5h8M12 16.5v4" />
    </>
  ),
  shield: <path d="M12 2.5 4 5.5v6c0 5 3.4 8.8 8 10 4.6-1.2 8-5 8-10v-6Z" />,
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10.5" rx="1.5" />
      <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  info: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 11v6M12 7.5v.01" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <circle cx="9" cy="9.5" r="1.8" />
      <path d="m21 16-5-5-9 9" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="m15.5 8.5-2 5-5 2 2-5Z" />
    </>
  ),
  link: (
    <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
  ),
  heart: (
    <path d="M20.3 12.5 12 20.8l-8.3-8.3a5 5 0 0 1 7.1-7.1l1.2 1.2 1.2-1.2a5 5 0 0 1 7.1 7.1Z" />
  ),
  book: (
    <path d="M4 19.5V5a2 2 0 0 1 2-2h14v15H6a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h14M8 7h8" />
  ),
  star: <path d="m12 2.8 2.8 5.7 6.3.9-4.6 4.4 1.1 6.3-5.6-3-5.6 3 1.1-6.3-4.6-4.4 6.3-.9Z" />,
  flag: <path d="M5 21.5V3.5M5 4h11.5L14 8.25l2.5 4.25H5" />,
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M2.5 9.5h19M6 14.5h5" />
    </>
  ),
  // Amsler grid, used to check central vision (macular degeneration).
  grid: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
      <path d="M3.5 9.2h17M3.5 14.8h17M9.2 3.5v17M14.8 3.5v17" />
      <circle cx="12" cy="12" r="0.6" />
    </>
  ),
  clipboard: (
    <>
      <path d="M8.5 4.5h-2A1.5 1.5 0 0 0 5 6v14a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 20V6a1.5 1.5 0 0 0-1.5-1.5h-2" />
      <rect x="8.5" y="2.5" width="7" height="4" rx="1" />
      <path d="M8.5 11.5h7M8.5 15.5h5" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  /** Provide a label only when the icon conveys meaning on its own. */
  label?: string;
}

export function Icon({ name, size = 24, className, label }: IconProps) {
  return (
    <svg
      className={className ? `icon ${className}` : 'icon'}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined}
      aria-label={label}
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}

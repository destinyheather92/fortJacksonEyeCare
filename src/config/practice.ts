/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PRACTICE CONFIGURATION — the single source of truth for office details.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Every page, the header, the footer, SEO tags, and structured data read from
 * this file. Update a value here and it changes everywhere on the site.
 *
 * Values set to `null` have NOT been provided by the practice yet. The site
 * shows a clearly labeled placeholder (or hides the item) until they are
 * filled in. Do not replace them with guessed or sample data.
 */

/**
 * The practice's existing secure EHR / online scheduling portal (provided by the practice).
 * Every "Schedule an Appointment" button on the site uses this one value.
 */
export const EHR_SCHEDULING_URL: string = 'https://carolinaclearvision.itrust.io/appointment/1';

export interface PostalAddress {
  street: string;
  suite?: string;
  city: string;
  state: string; // two-letter abbreviation, e.g. "SC"
  zip: string;
}

export interface PhoneNumber {
  /** How the number is shown, e.g. "(555) 555-0100" */
  display: string;
  /** Digits for tel: links in E.164 format, e.g. "+15555550100" */
  tel: string;
}

export interface OfficeHoursEntry {
  /** e.g. "Monday – Thursday" */
  days: string;
  /** e.g. "8:00 AM – 5:00 PM" or "Closed" */
  hours: string;
}

export interface SocialLink {
  /** e.g. "Facebook" */
  label: string;
  url: string;
}

export interface PracticeConfig {
  name: string;
  /** Year the practice opened (provided: 2025). */
  foundedYear: number;
  address: PostalAddress | null;
  phone: PhoneNumber | null;
  fax: PhoneNumber | null;
  email: string | null;
  officeHours: OfficeHoursEntry[] | null;
  schedulingUrl: string;
  /** Insurance statement exactly as provided by the practice. Never promise coverage. */
  insurance: string | null;
  /** Insurance plans the practice has confirmed it accepts (official brand spellings). */
  insurancePlans: string[];
  /** How patients without a DoD or military ID get onto Fort Jackson, as described by the practice. */
  visitorAccess: string | null;
  /** Official installation page explaining how to get a visitor pass. */
  visitorPassUrl: string | null;
  /**
   * Optional Google Maps "Embed a map" iframe src
   * (Google Maps → Share → Embed a map → copy only the src="…" value).
   * While null, a key-free embed is generated from `address` (see mapEmbedSrc).
   */
  mapEmbedUrl: string | null;
  /** Public website origin with no trailing slash, e.g. "https://www.example.com". Used for canonical URLs and Open Graph. */
  siteUrl: string | null;
  social: SocialLink[];
  /**
   * Endpoint of an APPROVED form service (for example a Formspree form URL).
   * While null, the Contact page shows contact details instead of a form,
   * so the site never pretends a message was sent.
   */
  contactFormEndpoint: string | null;
  /** Link to the practice's Notice of Privacy Practices, if published online. */
  noticeOfPrivacyPracticesUrl: string | null;
}

export const practice: PracticeConfig = {
  name: 'Fort Jackson Eye Care',
  foundedYear: 2025,

  // Confirmed by the practice ("Rd", matching Google Maps).
  address: {
    street: '4712 Liberty Division Rd',
    city: 'Columbia',
    state: 'SC',
    zip: '29206',
  },

  phone: { display: '(803) 767-9765', tel: '+18037679765' },

  // TODO (optional): Fax number, same shape as phone.
  fax: null,

  email: 'CCVeye@gmail.com',

  // Provided as "M–F 9–5"; weekends listed as closed.
  officeHours: [
    { days: 'Monday – Friday', hours: '9:00 AM – 5:00 PM' },
    { days: 'Saturday – Sunday', hours: 'Closed' },
  ],

  schedulingUrl: EHR_SCHEDULING_URL,

  insurance: 'We accept all major insurance plans.',
  insurancePlans: [
    'TRICARE',
    'Medicare',
    'Blue Cross Blue Shield',
    'Humana',
    'Aetna',
    'EyeMed',
    'Davis Vision',
    'UnitedHealthcare',
    'Superior Vision',
    'VSP',
  ],

  visitorAccess:
    'Our office is on Fort Jackson. Patients without a Department of Defense (DoD) or military ID card will need a visitor pass, or can come onto the base with someone who has one.',
  visitorPassUrl: 'https://home.army.mil/jackson/about/Garrison/DES/physical-security/access-control',

  // Optional: paste a Google Maps "Embed a map" src here to override the address-based embed.
  mapEmbedUrl: null,

  // TODO: Final public domain once known.
  siteUrl: null,

  // TODO: Add official social media accounts when provided, e.g. { label: 'Facebook', url: 'https://…' }.
  social: [],

  // TODO: Only set once the practice approves a form service.
  contactFormEndpoint: null,

  // TODO: Link to the Notice of Privacy Practices if one is published online.
  noticeOfPrivacyPracticesUrl: null,
};

/* ───────────────────────────── Helpers ───────────────────────────── */

/** True once a real https:// scheduling URL has replaced the placeholder. */
export function isSchedulingConfigured(): boolean {
  return /^https:\/\//i.test(practice.schedulingUrl);
}

export function addressLines(address: PostalAddress): [string, string] {
  const line1 = address.suite ? `${address.street}, ${address.suite}` : address.street;
  return [line1, `${address.city}, ${address.state} ${address.zip}`];
}

export function fullAddress(address: PostalAddress): string {
  return addressLines(address).join(', ');
}

/** "Plans we accept include A, B, and C." — or null when no plans are listed. */
export function acceptedPlansSentence(): string | null {
  if (!practice.insurancePlans.length) return null;
  const list = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(practice.insurancePlans);
  return `Plans we accept include ${list}.`;
}

/** "Columbia, SC"-style locality once an address exists; otherwise null. */
export function locality(): string | null {
  return practice.address ? `${practice.address.city}, ${practice.address.state}` : null;
}

// Maps links use the street address only (not the practice name) so Google always resolves the exact location.
export function directionsUrl(): string | null {
  if (!practice.address) return null;
  const destination = encodeURIComponent(fullAddress(practice.address));
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}

/** Opens the office location in Google Maps (used for clickable addresses). */
export function mapsUrl(): string | null {
  if (!practice.address) return null;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress(practice.address))}`;
}

/**
 * iframe src for the location map: `mapEmbedUrl` if set, otherwise Google's
 * key-free embed for the street address (no API key or Maps JavaScript needed).
 */
export function mapEmbedSrc(): string | null {
  if (practice.mapEmbedUrl) return practice.mapEmbedUrl;
  if (!practice.address) return null;
  const query = encodeURIComponent(fullAddress(practice.address)).replace(/%20/g, '+');
  return `https://www.google.com/maps/embed?pb=!1m3!2m1!1s${query}!6i16`;
}

/** Items still waiting on the practice — printed at the end of each production build. */
export function pendingPracticeInfo(): string[] {
  const pending: string[] = [];
  if (!isSchedulingConfigured()) pending.push('EHR scheduling URL');
  if (!practice.address) pending.push('Office address');
  if (!practice.phone) pending.push('Phone number');
  if (!practice.officeHours) pending.push('Office hours');
  if (!mapEmbedSrc()) pending.push('Google Maps embed URL');
  if (!practice.siteUrl) pending.push('Public site URL (canonical / Open Graph)');
  if (!practice.email) pending.push('Email address (optional)');
  if (practice.social.length === 0) pending.push('Social media links (optional)');
  if (!practice.contactFormEndpoint) pending.push('Approved contact form service (optional)');
  return pending;
}

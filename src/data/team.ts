import type { ImageKey } from '../config/images';

export interface TeamMember {
  id: string;
  name: string;
  /**
   * Post-nominal credentials (e.g. degrees). Leave `null` until confirmed by
   * the practice — nothing is shown rather than guessing.
   */
  credentials: string | null;
  /** Job title. Omit until the practice confirms one — nothing is shown rather than guessing. */
  role?: string;
  photo: ImageKey;
  /** Opening paragraph shown on the card. */
  intro: string;
  /** Optional remaining biography paragraphs — revealed with "Read more". */
  bio?: string[];
  /** Placeholder entries are clearly marked on the page. Delete them once real staff are added. */
  isPlaceholder?: boolean;
}

export interface ProviderHighlight {
  label: string;
  detail: string;
}

/* ─────────────────────── Featured provider ─────────────────────── */

export const leadProvider: TeamMember = {
  id: 'dr-andrew-hardison',
  name: 'Dr. Andrew Hardison',
  // Confirmed by Dr. Hardison.
  credentials: 'OD, MPH',
  role: 'Primary Eye Care Provider',
  photo: 'drHardison',
  intro:
    'Raised and educated in South Carolina, Dr. Hardison brings a background in military healthcare and public health to Fort Jackson Eye Care, along with a deep commitment to making quality eye care accessible and affordable.',
  bio: [
    'Dr. Andrew Hardison opened Fort Jackson Eye Care in 2025 after living in Virginia. He was raised and educated in South Carolina, where he attended the South Carolina Governor’s School and graduated from The Citadel with honors.',
    'After graduation, he worked in textile mills in several communities throughout the Upstate. Those experiences helped lead him back to school to pursue a professional healthcare degree and a career where he could help others as a primary eye care provider.',
    'Dr. Hardison studied in Tennessee and Pennsylvania as a recipient of the Health Professions Scholarship Program. He later commissioned into the United States Navy and was stationed in Little Creek, Norfolk, and at Naval Medical Center Portsmouth in Virginia.',
    'In 2014, Dr. Hardison earned a master’s degree in Public Health with a concentration in ocular healthcare.',
    'While living in Virginia, he worked and volunteered with nonprofit organizations including the National Alliance on Mental Illness (NAMI), CrossOver Healthcare Ministry, and Remote Area Medical (RAM).',
    'Today, Dr. Hardison provides comprehensive eye care at Fort Jackson Eye Care for patients ranging from infants to senior adults. His services include wellness examinations, DMV examinations, contact lens care, glaucoma and retinal disease evaluation and management, and hypertensive and diabetic eye examinations.',
    'Dr. Hardison is passionate about helping individuals access quality, affordable eye care.',
  ],
};

/** Quick facts drawn directly from Dr. Hardison's provided biography. */
export const leadProviderHighlights: ProviderHighlight[] = [
  { label: 'South Carolina roots', detail: 'SC Governor’s School; graduated from The Citadel with honors' },
  { label: 'Military healthcare', detail: 'U.S. Navy: Little Creek, Norfolk, and Naval Medical Center Portsmouth' },
  { label: 'Public health', detail: 'Master’s degree in Public Health (2014), ocular healthcare concentration' },
  { label: 'Community service', detail: 'NAMI, CrossOver Healthcare Ministry, and Remote Area Medical (RAM)' },
];

/* ───────────────────────── Team members ─────────────────────────
 * Add staff here. Each entry automatically gets a matching card.
 * Photos: add a key in src/config/images.ts (4:5 portrait) and reference it.
 * Biographies are used exactly as provided by each team member.
 */
export const teamMembers: TeamMember[] = [
  {
    id: 'kashia-doyle',
    name: 'Kashia Doyle',
    credentials: null,
    role: 'Office Manager',
    photo: 'kashiaDoyle',
    intro:
      'Hi, I’m Kashia Doyle, and I’m the Office Manager at Fort Jackson Eye Care. I’m proud to be part of a practice that serves our military community and their families.',
    bio: [
      'I come from a family with a strong military background, so serving and supporting the military community has always been something that feels very familiar and meaningful to me. I was born in Florence, SC, but raised in Lawton, OK, where I learned the importance of family, hard work, treating people with kindness, and always being there for others.',
      'In my role, I enjoy making sure our office runs smoothly while helping our patients and team feel welcomed, respected, and cared for. I’m someone who genuinely enjoys connecting with people, learning new things, and being able to help wherever I’m needed.',
      'I’m grateful to be part of the Fort Jackson Eye Care family and look forward to welcoming you to our office!',
    ],
  },
  {
    id: 'alysia',
    name: 'Alysia',
    credentials: null,
    role: 'Optometry Assistant/Technician',
    photo: 'alysia',
    intro:
      'I’m Alysia, a proud mom and military wife who loves spending time with my family and enjoying the simple things in life. I’m a Wisconsin girl who loves the ocean, plants, iced coffee, and a good Dr Pepper. I enjoy cozy clothes, Southern living, and making memories with my two girls. Family, love, and finding joy in the little things are what mean the most to me.',
  },
];

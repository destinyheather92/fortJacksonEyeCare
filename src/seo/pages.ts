import { locality, practice } from '../config/practice';

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  /** Adds MedicalClinic structured data (only emitted once practice details are verified). */
  structuredData?: boolean;
  noindex?: boolean;
}

export type PageKey = 'home' | 'about' | 'services' | 'team' | 'eyeHealth' | 'contact' | 'privacy' | 'notFound';

/** " in Columbia, SC" once an address is configured; empty until then. */
const inCity = (): string => {
  const place = locality();
  return place ? ` in ${place}` : '';
};

const name = practice.name;

/**
 * Unique titles and meta descriptions for each page. City/state are added
 * automatically once `practice.address` is set in src/config/practice.ts.
 */
export const pageMeta: Record<PageKey, PageMeta> = {
  home: {
    path: '/',
    title: `${name} | Eye Doctor & Comprehensive Eye Care${inCity()}`,
    description: `${name} is an independent eye care practice${inCity()} offering comprehensive eye exams, eyeglasses, contact lenses, and medical eye care for military families, retirees, and civilians of all ages.`,
    structuredData: true,
  },
  about: {
    path: '/about',
    title: `About Our Practice | ${name}`,
    description: `Learn about ${name}, an independent practice${inCity()} focused on accessible, affordable, preventive eye care for every stage of life.`,
  },
  services: {
    path: '/services',
    title: `Eye Exams & Eye Care Services | ${name}`,
    description: `Comprehensive eye exams, eyeglasses, contact lenses, DMV vision exams, diabetic eye exams, glaucoma and macular degeneration care, and ocular disease management at ${name}${inCity()}.`,
  },
  team: {
    path: '/meet-the-team',
    title: `Meet Dr. Andrew Hardison & Our Team | ${name}`,
    description: `Meet Dr. Andrew Hardison and the ${name} team: South Carolina roots, a background in military healthcare and public health, and a commitment to accessible eye care.`,
  },
  eyeHealth: {
    path: '/eye-health',
    title: `Eye Health Tips: Healthy Habits for Your Eyes | ${name}`,
    description:
      'Simple habits for healthy eyes: routine eye exams, knowing your family history, the 20-20-20 rule for screen time, eye-healthy foods, and UV-protective sunglasses.',
  },
  contact: {
    path: '/contact',
    title: `Contact Us & Directions | ${name}`,
    description: `Find ${name}’s location, phone number, office hours, and directions${inCity()}, or schedule an eye exam through our secure online scheduling portal.`,
    structuredData: true,
  },
  privacy: {
    path: '/privacy',
    title: `Website Privacy Notice | ${name}`,
    description: `How the ${name} website handles information, and how appointment scheduling is handled through a separate secure system.`,
  },
  notFound: {
    path: '/404',
    title: `Page Not Found | ${name}`,
    description: `The page you’re looking for couldn’t be found. Visit the ${name} home page or contact our office.`,
    noindex: true,
  },
};

/** Routes that are prerendered to static HTML at build time. */
export const prerenderRoutes: PageKey[] = ['home', 'about', 'services', 'team', 'eyeHealth', 'contact', 'privacy'];

export function metaForPath(pathname: string): PageMeta {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return Object.values(pageMeta).find((m) => m.path === clean) ?? pageMeta.notFound;
}

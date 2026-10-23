export interface NavItem {
  label: string;
  to: string;
}

/** Main site navigation — used by the header, mobile menu, and footer. */
export const mainNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Meet the Team', to: '/meet-the-team' },
  { label: 'Eye Health', to: '/eye-health' },
  { label: 'Contact', to: '/contact' },
];

export const legalNav: NavItem[] = [{ label: 'Website Privacy Notice', to: '/privacy' }];

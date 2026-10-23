import { Link } from 'react-router-dom';
import { practice } from '../config/practice';

interface LogoProps {
  /** "light" is for dark backgrounds (footer). */
  tone?: 'dark' | 'light';
  onClick?: () => void;
}

/** Text wordmark linking home. The practice has no logo, so none is shown. */
export function Logo({ tone = 'dark', onClick }: LogoProps) {
  return (
    <Link to="/" className={`logo logo--${tone}`} onClick={onClick} aria-label={`${practice.name}, home`}>
      <span className="logo__text" aria-hidden="true">
        <span className="logo__name">Fort Jackson</span>
        <span className="logo__sub">Eye Care</span>
      </span>
    </Link>
  );
}

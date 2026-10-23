import { practice } from '../config/practice';
import { Icon } from './Icon';

interface CallButtonProps {
  label?: string;
  variant?: 'secondary' | 'light-outline' | 'outline';
  size?: 'md' | 'lg';
  className?: string;
}

/** "Call Our Office" — a tel: link once a phone number is configured. */
export function CallButton({ label = 'Call Our Office', variant = 'secondary', size = 'md', className }: CallButtonProps) {
  const classes = ['btn', `btn--${variant}`, size === 'lg' && 'btn--lg', className].filter(Boolean).join(' ');

  if (!practice.phone) {
    return (
      <span className={`${classes} btn--pending`} aria-disabled="true">
        <Icon name="phone" size={20} />
        <span>
          {label}
          <span className="btn__subtext">Phone number to be added</span>
        </span>
      </span>
    );
  }

  return (
    <a className={classes} href={`tel:${practice.phone.tel}`}>
      <Icon name="phone" size={20} />
      <span>
        {label}
        <span className="btn__subtext">{practice.phone.display}</span>
      </span>
    </a>
  );
}

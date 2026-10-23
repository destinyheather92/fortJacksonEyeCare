import { Link } from 'react-router-dom';
import { isSchedulingConfigured, practice } from '../config/practice';
import { Icon } from './Icon';

interface ScheduleButtonProps {
  label?: string;
  /** Shorter label swapped in on very narrow screens (e.g. "Schedule"). */
  shortLabel?: string;
  variant?: 'primary' | 'light' | 'outline';
  size?: 'md' | 'lg' | 'sm';
  /** Show the "continue to secure scheduling" note under the button. */
  showNote?: boolean;
  className?: string;
  onClick?: () => void;
}

export const SCHEDULE_NOTE = 'You’ll continue to our secure online scheduling portal.';

/**
 * The one "Schedule an Appointment" button used everywhere on the site.
 * It always points at `practice.schedulingUrl` (EHR_SCHEDULING_URL).
 *
 * Until a real https:// URL is configured, it links to the Contact page
 * instead of a broken address.
 */
export function ScheduleButton({
  label = 'Schedule an Appointment',
  shortLabel,
  variant = 'primary',
  size = 'md',
  showNote = false,
  className,
  onClick,
}: ScheduleButtonProps) {
  const classes = ['btn', `btn--${variant}`, size !== 'md' && `btn--${size}`, className].filter(Boolean).join(' ');
  const configured = isSchedulingConfigured();
  const text = shortLabel ? (
    <span>
      <span className="label-full">{label}</span>
      <span className="label-short" aria-hidden="true">
        {shortLabel}
      </span>
    </span>
  ) : (
    <span>{label}</span>
  );

  const button = configured ? (
    <a
      className={classes}
      href={practice.schedulingUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      data-schedule-cta=""
    >
      <Icon name="calendar" size={20} />
      {text}
      <span className="visually-hidden"> (opens our secure scheduling portal in a new tab)</span>
      <Icon name="external" size={16} className="btn__trail" />
    </a>
  ) : (
    // TODO: Falls back to the Contact page until EHR_SCHEDULING_URL is set in src/config/practice.ts.
    <Link className={classes} to="/contact" onClick={onClick} data-schedule-cta="" data-scheduling-pending="">
      <Icon name="calendar" size={20} />
      {text}
    </Link>
  );

  if (!showNote) return button;

  return (
    <div className="schedule-cta">
      {button}
      <p className="schedule-cta__note">
        <Icon name="lock" size={16} />
        {configured ? SCHEDULE_NOTE : 'Online scheduling link coming soon. Please contact our office.'}
      </p>
    </div>
  );
}

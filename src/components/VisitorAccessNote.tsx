import { practice } from '../config/practice';
import { Icon } from './Icon';

/** Base-access guidance for patients without a DoD or military ID, from src/config/practice.ts. */
export function VisitorAccessNote({ className }: { className?: string }) {
  if (!practice.visitorAccess) return null;

  return (
    <div className={['notice', 'notice--info', 'visitor-access', className].filter(Boolean).join(' ')}>
      <Icon name="info" size={20} />
      <div>
        <p className="visitor-access__title">Visiting from off post?</p>
        <p>{practice.visitorAccess}</p>
        {practice.visitorPassUrl && (
          <a href={practice.visitorPassUrl} target="_blank" rel="noopener noreferrer" className="text-link">
            How to get a Fort Jackson visitor pass
            <span className="visually-hidden"> (official Fort Jackson website, opens in a new tab)</span>
            <Icon name="external" size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

import { useId } from 'react';
import { isSchedulingConfigured } from '../config/practice';
import { CallButton } from './CallButton';
import { ScheduleButton } from './ScheduleButton';

interface CtaBandProps {
  heading: string;
  text: string;
  scheduleLabel?: string;
  showCall?: boolean;
}

/** Full-width appointment call-to-action with the eye-chart motif. */
export function CtaBand({ heading, text, scheduleLabel = 'Schedule an Appointment', showCall = true }: CtaBandProps) {
  const headingId = useId();

  return (
    <section className="cta-band" aria-labelledby={headingId}>
      <div className="container cta-band__inner">
        <div className="cta-band__content">
          <h2 id={headingId} className="cta-band__heading">
            {heading}
          </h2>
          <p className="cta-band__text">{text}</p>
          <div className="button-row">
            <ScheduleButton label={scheduleLabel} size="lg" variant="light" />
            {showCall && <CallButton variant="light-outline" size="lg" />}
          </div>
          <p className="cta-band__note">
            {isSchedulingConfigured()
              ? 'Online scheduling takes you to our practice’s secure patient scheduling system.'
              : 'Online scheduling is coming soon. In the meantime, please contact our office.'}
          </p>
        </div>
        <div className="eye-chart" aria-hidden="true">
          <span className="eye-chart__row eye-chart__row--1">E</span>
          <span className="eye-chart__row eye-chart__row--2">F P</span>
          <span className="eye-chart__row eye-chart__row--3">T O Z</span>
          <span className="eye-chart__row eye-chart__row--4">L P E D</span>
          <span className="eye-chart__row eye-chart__row--5">P E C F D</span>
        </div>
      </div>
    </section>
  );
}


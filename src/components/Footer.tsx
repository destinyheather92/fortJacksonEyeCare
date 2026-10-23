import { Link } from 'react-router-dom';
import { practice } from '../config/practice';
import { mainNav } from '../data/navigation';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { OfficeDetails } from './OfficeDetails';
import { ScheduleButton } from './ScheduleButton';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo tone="light" />
          <p className="site-footer__tagline">
            Independent, comprehensive eye care for patients of all ages, from infants to senior adults.
          </p>
          {practice.social.length > 0 && (
            <ul className="social-links" aria-label="Social media">
              {practice.social.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    <Icon name="link" size={18} />
                    <span>{s.label}</span>
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="site-footer__col">
          <h2 className="site-footer__heading">Visit Us</h2>
          <OfficeDetails
            show={['address', 'phone', 'email', 'hours']}
            labelAs="p"
            className="office-details--footer"
            linkAddress
          />
        </div>

        <nav className="site-footer__col" aria-label="Footer">
          <h2 className="site-footer__heading">Explore</h2>
          <ul className="site-footer__links">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__col">
          <h2 className="site-footer__heading">Appointments</h2>
          <p className="site-footer__text">
            Appointment scheduling is handled through our practice’s secure external scheduling system. This website does
            not collect or store patient health information.
          </p>
          <ScheduleButton variant="light" />
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p className="site-footer__disclaimer">
          <Icon name="info" size={18} />
          <span>
            The information on this website is for general educational purposes only and is not a substitute for
            individualized medical advice, diagnosis, or treatment. Please contact your eye doctor about your specific
            needs. If you have a medical emergency, call 911.
          </span>
        </p>
        <div className="site-footer__legal">
          <p>
            © {year} {practice.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

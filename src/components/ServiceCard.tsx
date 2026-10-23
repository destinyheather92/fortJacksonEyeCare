import { Link } from 'react-router-dom';
import type { Service } from '../data/services';
import { Icon } from './Icon';

/** Compact service card for previews; links to the service's section on the Services page. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <span className="service-card__icon">
        <Icon name={service.icon} size={26} />
      </span>
      <h3 className="service-card__title">
        <Link to={`/services#${service.id}`} className="service-card__link">
          {service.name}
        </Link>
      </h3>
      <p className="service-card__text">{service.summary}</p>
      <span className="service-card__more" aria-hidden="true">
        Learn more <Icon name="arrowRight" size={16} />
      </span>
    </article>
  );
}

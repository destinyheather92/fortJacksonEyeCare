import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { ScheduleButton } from '../components/ScheduleButton';
import { Seo } from '../components/Seo';
import { mainNav } from '../data/navigation';

export function NotFoundPage() {
  return (
    <>
      <Seo page="notFound" />
      <section className="section not-found">
        <div className="container not-found__inner">
          <p className="not-found__chart" aria-hidden="true">
            4 0 4
          </p>
          <h1 className="page-header__title">We couldn’t find that page</h1>
          <p className="page-header__lead">The page may have moved, or the link may be mistyped. Try one of these instead:</p>
          <ul className="not-found__links">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-link text-link--arrow">
                  {item.label} <Icon name="arrowRight" size={16} />
                </Link>
              </li>
            ))}
          </ul>
          <ScheduleButton />
        </div>
      </section>
    </>
  );
}

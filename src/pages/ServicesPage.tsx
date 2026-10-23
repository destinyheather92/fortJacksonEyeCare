import { Fragment } from 'react';
import { CtaBand } from '../components/CtaBand';
import { Icon } from '../components/Icon';
import { ImageSlot } from '../components/ImageSlot';
import { PageHeader } from '../components/PageHeader';
import { ScheduleButton } from '../components/ScheduleButton';
import { Seo } from '../components/Seo';
import { services } from '../data/services';

/** Show an inline scheduling prompt after these services. */
const inlineCtaAfter = new Set(['family-eye-care', 'diabetic-eye-exams']);

export function ServicesPage() {
  return (
    <>
      <Seo page="services" />
      <PageHeader
        eyebrow="Our Services"
        title="Eye Care Services"
        lead="Comprehensive primary eye care for patients of all ages, from preventive exams to the evaluation and management of eye-health conditions."
      >
        <ScheduleButton showNote />
      </PageHeader>

      <div className="section services-layout">
        <div className="container services-layout__inner">
          <nav className="services-toc" aria-labelledby="services-toc-heading">
            <h2 id="services-toc-heading" className="services-toc__heading">
              On this page
            </h2>
            <ul>
              {services.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>
                    <Icon name={s.icon} size={18} />
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="services-list">
            {services.map((s) => (
              <Fragment key={s.id}>
                <section id={s.id} className="service-detail" aria-labelledby={`${s.id}-title`} tabIndex={-1}>
                  <div className="service-detail__head">
                    <span className="service-detail__icon">
                      <Icon name={s.icon} size={28} />
                    </span>
                    <h2 id={`${s.id}-title`} className="service-detail__title">
                      {s.name}
                    </h2>
                  </div>
                  <div className={`service-detail__body${s.image ? ' service-detail__body--media' : ''}`}>
                    <div className="prose">
                      <p className="service-detail__summary">{s.summary}</p>
                      {s.details.map((p) => (
                        <p key={p.slice(0, 40)}>{p}</p>
                      ))}
                      {s.list && (
                        <>
                          {s.listIntro && <p>{s.listIntro}</p>}
                          <ul className="check-list">
                            {s.list.map((item) => (
                              <li key={item}>
                                <Icon name="check" size={18} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {s.note && (
                        <p className="notice notice--info">
                          <Icon name="info" size={20} />
                          <span>{s.note}</span>
                        </p>
                      )}
                    </div>
                    {s.image && <ImageSlot image={s.image} ratio="4 / 3" className="service-detail__image" />}
                  </div>
                </section>

                {inlineCtaAfter.has(s.id) && (
                  <aside className="inline-cta" aria-label="Schedule an appointment">
                    <p className="inline-cta__text">
                      <strong>Due for an eye exam?</strong> Schedule online through our secure scheduling portal.
                    </p>
                    <ScheduleButton size="sm" />
                  </aside>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      <CtaBand
        heading="Not sure which exam you need?"
        text="Schedule a comprehensive eye exam or call our office. We’ll help you find the right visit for your needs."
      />
    </>
  );
}

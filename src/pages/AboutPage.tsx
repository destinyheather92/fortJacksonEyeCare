import { Link } from 'react-router-dom';
import { CtaBand } from '../components/CtaBand';
import { Icon, type IconName } from '../components/Icon';
import { ImageSlot } from '../components/ImageSlot';
import { PageHeader } from '../components/PageHeader';
import { ScheduleButton } from '../components/ScheduleButton';
import { SectionHeading } from '../components/SectionHeading';
import { Seo } from '../components/Seo';
import { practice } from '../config/practice';
import { patientGroups, patientsWelcome } from '../data/patients';

const approach: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'shield',
    title: 'Prevention first',
    text: 'Routine exams can catch changes before they affect your vision. We focus on keeping healthy eyes healthy, not just responding to problems.',
  },
  {
    icon: 'book',
    title: 'Education you can use',
    text: 'We take time to explain what we see and what it means, so you leave understanding your eye health and your options.',
  },
  {
    icon: 'heart',
    title: 'Individual attention',
    text: 'Every patient’s eyes, history, and goals are different. Your care is shaped around you, not a one-size-fits-all routine.',
  },
  {
    icon: 'family',
    title: 'Care for every stage of life',
    text: 'From infants to senior adults, we see patients across the lifespan, so families can stay with a provider who knows them.',
  },
];

export function AboutPage() {
  return (
    <>
      <Seo page="about" />
      <PageHeader
        eyebrow="About Us"
        title={`About ${practice.name}`}
        lead="An independent eye care practice built on a simple idea: quality eye care should be accessible, affordable, and personal."
        media={<ImageSlot image="officeInterior" ratio="4 / 3" priority />}
      >
        <ScheduleButton />
      </PageHeader>

      <section className="section" aria-labelledby="who-heading">
        <div className="container split">
          <div className="split__main prose">
            <h2 id="who-heading">Who we are</h2>
            <p>
              {practice.name} opened in {practice.foundedYear} as an independent practice providing comprehensive
              primary eye care. We’re here for the everyday needs that keep eyes healthy, like routine exams, updated
              prescriptions, and contact lens care, as well as the ongoing monitoring that some eye conditions require.
            </p>
            <p>
              Being independent means our focus stays where it belongs: on our patients and our community. We want every
              visit to feel unhurried and every patient to feel heard.
            </p>

            <h2>Serving our military community and beyond</h2>
            <p>{patientsWelcome}</p>
            <ul className="check-list">
              {patientGroups.map((group) => (
                <li key={group.label}>
                  <Icon name="check" size={18} />
                  {group.label}
                </li>
              ))}
            </ul>

            <h2>Accessible, affordable eye care</h2>
            <p>
              Eye care shouldn’t feel out of reach. Our practice was founded on a commitment to helping people access
              quality, affordable eye care, whether you’re scheduling a first exam in years or keeping up with regular
              visits.
            </p>

            <h2>Why preventive eye care matters</h2>
            <p>
              Some eye conditions develop gradually and without obvious early symptoms. Regular comprehensive exams give
              your eye doctor the chance to notice changes early and monitor them over time. Your eyes can also reflect
              other health conditions, such as diabetes and high blood pressure, which is why routine exams are part of
              caring for your overall health.
            </p>
          </div>
          <aside className="split__aside">
            <ImageSlot image="examRoom2" ratio="4 / 5" />
            <div className="aside-card">
              <h2 className="aside-card__title">Rooted in community</h2>
              <p>
                We’re proud to care for our neighbors: families, working adults, students, seniors, and everyone in
                between. Our goal is to be a practice the community knows, trusts, and can count on for years to come.
              </p>
              <Link to="/meet-the-team" className="text-link text-link--arrow">
                Meet our team <Icon name="arrowRight" size={18} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="approach-heading">
        <div className="container">
          <SectionHeading
            id="approach-heading"
            eyebrow="Our Philosophy"
            title="Our Approach to Eye Care"
            intro="We want you to understand your eye health, not just receive a prescription. That shapes everything we do."
          />
          <div className="card-grid card-grid--four">
            {approach.map((item) => (
              <article className="feature-card" key={item.title}>
                <span className="feature-card__icon">
                  <Icon name={item.icon} size={26} />
                </span>
                <h3 className="feature-card__title">{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="lifespan-heading">
        <div className="container lifespan">
          <ImageSlot image="serviceFamily" ratio="4 / 3" className="lifespan__image" />
          <div className="prose">
            <h2 id="lifespan-heading">Care through every stage of life</h2>
            <p>
              Vision needs change as we grow. Children’s eyes develop quickly, adults balance screens and busy
              schedules, and eye-health risks increase as we age. We provide comprehensive eye care for patients ranging
              from infants to senior adults, adapting each exam to the person in the chair.
            </p>
            <Link to="/services" className="text-link text-link--arrow">
              Explore our services <Icon name="arrowRight" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        heading="We’d love to meet you"
        text="Schedule a comprehensive eye exam and see what personalized, community-focused eye care feels like."
      />
    </>
  );
}

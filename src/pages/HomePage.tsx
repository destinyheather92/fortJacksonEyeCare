import { Link } from 'react-router-dom';
import { CtaBand } from '../components/CtaBand';
import { Icon } from '../components/Icon';
import { ImageSlot } from '../components/ImageSlot';
import { MapEmbed } from '../components/MapEmbed';
import { OfficeDetails } from '../components/OfficeDetails';
import { INSURANCE_VERIFY_NOTE } from '../components/OfficeDetails';
import { ScheduleButton } from '../components/ScheduleButton';
import { SectionHeading } from '../components/SectionHeading';
import { Seo } from '../components/Seo';
import { ServiceCard } from '../components/ServiceCard';
import { VisitorAccessNote } from '../components/VisitorAccessNote';
import { acceptedPlansSentence, practice } from '../config/practice';
import { patientGroups, patientsWelcome } from '../data/patients';
import { homeServices } from '../data/services';
import type { IconName } from '../components/Icon';
import { leadProvider } from '../data/team';

export function HomePage() {
  return (
    <>
      <Seo page="home" />

      {/* ── Hero ── */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="eyebrow">{practice.name}</p>
            <h1 className="hero__title">
              Clear Vision.
              <br />
              <em>Personalized Care.</em>
            </h1>
            <p className="hero__lead">
              {practice.name} provides comprehensive eye care for patients of all ages, from infants to senior adults.
            </p>
            <div className="button-row">
              <ScheduleButton label="Schedule an Appointment" size="lg" />
              <Link to="/services" className="btn btn--outline btn--lg">
                <span>Explore Our Services</span>
                <Icon name="arrowRight" size={20} />
              </Link>
            </div>
            <ul className="hero__points">
              <li>
                <Icon name="check" size={18} /> Infants to senior adults
              </li>
              <li>
                <Icon name="check" size={18} /> Preventive &amp; medical eye care
              </li>
              <li>
                <Icon name="check" size={18} /> Independent eye care practice
              </li>
            </ul>
          </div>
          <div className="hero__media">
            <ImageSlot image="homeHero" ratio="4 / 3" priority className="hero__image" />
            <span className="hero__frame" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ── Patients we serve ── */}
      <section className="section section--sage" aria-labelledby="patients-heading">
        <div className="container patients">
          <div className="patients__text">
            <p className="eyebrow">Patients We Serve</p>
            <h2 id="patients-heading" className="section-heading__title">
              Proudly serving our military community and beyond
            </h2>
            <p className="patients__lead">{patientsWelcome}</p>
            {practice.insurance && (
              <p className="notice notice--info patients__insurance">
                <Icon name="card" size={20} />
                <span>
                  <strong>{practice.insurance}</strong> {acceptedPlansSentence()} {INSURANCE_VERIFY_NOTE}
                </span>
              </p>
            )}
          </div>
          <ul className="patients__list" aria-label="Patients we welcome">
            {patientGroups.map((group) => (
              <li key={group.label}>
                <Icon name={group.icon} size={22} />
                {group.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Welcome ── */}
      <section className="section" aria-labelledby="welcome-heading">
        <div className="container welcome">
          <div className="welcome__heading">
            <p className="eyebrow">Welcome</p>
            <h2 id="welcome-heading" className="section-heading__title">
              Eye care that treats you like a neighbor
            </h2>
          </div>
          <div className="welcome__body prose">
            <p>
              At {practice.name}, we believe good eye care should be easy to find, easy to understand, and within
              reach. We’re an independent practice providing comprehensive primary eye care, with an emphasis on
              accessible, quality, affordable care for our community.
            </p>
            <p>
              We care for patients across every stage of life, from an infant’s first eye exam to seniors keeping an
              eye on changes over time. That includes routine preventive exams as well as the evaluation and management
              of eye-health conditions such as glaucoma, retinal disease, and the effects of diabetes and high blood
              pressure on the eyes.
            </p>
            <Link to="/about" className="text-link text-link--arrow">
              More about our practice <Icon name="arrowRight" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services preview ── */}
      <section className="section section--tint" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-intro-row">
            <SectionHeading
              id="services-heading"
              eyebrow="Our Services"
              title="Complete care for healthy eyes"
              intro="From routine exams to ongoing monitoring of eye conditions, here’s how we can help."
            />
            <Link to="/services" className="text-link text-link--arrow section-intro-row__link">
              View All Services <Icon name="arrowRight" size={18} />
            </Link>
          </div>
          <div className="card-grid card-grid--services">
            {homeServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Provider preview ── */}
      <section className="section" aria-labelledby="provider-heading">
        <div className="container provider-preview">
          <div className="provider-preview__media">
            <ImageSlot image={leadProvider.photo} ratio="4 / 5" className="provider-preview__photo" />
          </div>
          <div className="provider-preview__text">
            <p className="eyebrow">Meet Your Provider</p>
            <h2 id="provider-heading" className="section-heading__title">
              {leadProvider.name}
            </h2>
            <p className="provider-preview__role">{leadProvider.role}</p>
            <div className="prose">
              <p>
                Dr. Hardison was raised and educated in South Carolina. His path to eye care began after working in
                textile mills across the Upstate, and led him through the Health Professions Scholarship Program and
                service in the United States Navy, where he was stationed at Naval Medical Center Portsmouth, Virginia.
              </p>
              <p>
                With a master’s degree in Public Health and experience working and volunteering with nonprofit
                organizations, he
                opened {practice.name} in {practice.foundedYear} with a simple goal: helping people access quality,
                affordable eye care.
              </p>
            </div>
            <Link to="/meet-the-team" className="btn btn--outline">
              <span>Meet Dr. Hardison &amp; Our Team</span>
              <Icon name="arrowRight" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Eye health ── */}
      <section className="section section--sage" aria-labelledby="eyehealth-heading">
        <div className="container eyehealth-teaser">
          <div className="eyehealth-teaser__text">
            <p className="eyebrow">Eye Health</p>
            <h2 id="eyehealth-heading" className="section-heading__title">
              Many eye problems start quietly
            </h2>
            <p>
              Some eye conditions develop without obvious early symptoms. Routine comprehensive eye exams can help
              identify problems early, often before you notice any change in your vision.
            </p>
            <Link to="/eye-health" className="text-link text-link--arrow">
              Learn About Eye Health <Icon name="arrowRight" size={18} />
            </Link>
          </div>
          <ul className="habit-list" aria-label="Healthy eye habits">
            {(
              [
              { icon: 'eye', text: 'Get routine eye exams' },
              { icon: 'family', text: 'Know your family history' },
              { icon: 'monitor', text: 'Give your eyes screen breaks' },
              { icon: 'leaf', text: 'Eat eye-healthy foods' },
              { icon: 'sun', text: 'Wear UV-blocking sunglasses' },
              ] satisfies { icon: IconName; text: string }[]
            ).map((h) => (
              <li key={h.text}>
                <Icon name={h.icon} size={22} />
                {h.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        heading="Ready to Take Care of Your Vision?"
        text="Whether it’s been a while since your last exam or you’re looking for a new eye doctor for your family, we’d be glad to see you."
      />

      {/* ── Location ── */}
      <section className="section" aria-labelledby="location-heading">
        <div className="container location">
          <div className="location__info">
            <SectionHeading id="location-heading" eyebrow="Visit Us" title={`Find ${practice.name}`} />
            <OfficeDetails show={['address', 'phone', 'hours', 'directions']} />
            <VisitorAccessNote />
            <Link to="/contact" className="text-link text-link--arrow">
              Contact &amp; directions <Icon name="arrowRight" size={18} />
            </Link>
          </div>
          <MapEmbed className="location__map" />
        </div>
      </section>
    </>
  );
}

import { ContactForm } from '../components/ContactForm';
import { Icon } from '../components/Icon';
import { ImageSlot } from '../components/ImageSlot';
import { MapEmbed } from '../components/MapEmbed';
import { OfficeDetails } from '../components/OfficeDetails';
import { PageHeader } from '../components/PageHeader';
import { ScheduleButton } from '../components/ScheduleButton';
import { Seo } from '../components/Seo';
import { VisitorAccessNote } from '../components/VisitorAccessNote';
import { isSchedulingConfigured, practice } from '../config/practice';

export function ContactPage() {
  return (
    <>
      <Seo page="contact" />
      <PageHeader
        eyebrow="Contact"
        title={`Contact ${practice.name}`}
        lead="Find our office, call with a general question, or schedule your next eye exam online."
      />

      <section className="section" aria-labelledby="schedule-heading" id="schedule">
        <div className="container contact-grid">
          <div className="schedule-panel">
            <span className="schedule-panel__icon">
              <Icon name="calendar" size={30} />
            </span>
            <h2 id="schedule-heading" className="schedule-panel__title">
              Schedule an appointment
            </h2>
            {isSchedulingConfigured() ? (
              <p>
                Book your visit through our secure online scheduling portal. Selecting the button below opens the
                practice’s scheduling system in a new tab, where you can choose a time that works for you.
              </p>
            ) : (
              <p>
                Online scheduling will be available here soon. Until then, please contact our office to schedule your
                visit.
              </p>
            )}
            <ScheduleButton size="lg" variant="light" />
            <p className="schedule-panel__note">
              <Icon name="lock" size={16} />
              Appointment requests and patient information are handled only through the secure scheduling system,
              never through this website.
            </p>
          </div>

          <div className="contact-info">
            <h2 className="contact-info__title">Office information</h2>
            <OfficeDetails show={['address', 'phone', 'email', 'hours', 'insurance', 'directions']} labelAs="h3" />
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="map-heading">
        <div className="container location">
          <div className="location__info">
            <h2 id="map-heading" className="section-heading__title">
              Finding our office
            </h2>
            <VisitorAccessNote />
            <div className="wayfinding">
              <figure className="wayfinding__step">
                <ImageSlot image="officeHallway" ratio="3 / 4" />
                <figcaption>The hallway leading to our office</figcaption>
              </figure>
              <figure className="wayfinding__step">
                <ImageSlot image="officeEntrance" ratio="3 / 4" />
                <figcaption>Our office entrance</figcaption>
              </figure>
            </div>
          </div>
          <MapEmbed className="location__map" />
        </div>
      </section>

      <section className="section" aria-labelledby="message-heading">
        <div className="container contact-message">
          <h2 id="message-heading" className="section-heading__title">
            General questions
          </h2>
          {practice.contactFormEndpoint ? (
            <ContactForm endpoint={practice.contactFormEndpoint} />
          ) : (
            <div className="contact-message__fallback">
              <p>
                For general, non-medical questions, please call our office
                {practice.email ? ' or send us an email' : ''}. Our contact details are listed above.
              </p>
              <div className="notice notice--warning">
                <Icon name="shield" size={22} />
                <p>
                  <strong>
                    Please do not send medical information, symptoms, diagnoses, insurance information, or other private
                    health information through this website or by email. For appointments, please use our secure online
                    scheduling system or contact the office directly.
                  </strong>
                </p>
              </div>
            </div>
          )}
          <p className="contact-message__emergency">
            <Icon name="info" size={18} />
            If you are experiencing a medical emergency, call 911 or go to the nearest emergency room.
          </p>
        </div>
      </section>
    </>
  );
}

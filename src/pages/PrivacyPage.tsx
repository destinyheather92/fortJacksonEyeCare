import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { Placeholder } from '../components/Placeholder';
import { Seo } from '../components/Seo';
import { practice } from '../config/practice';

/**
 * Website privacy notice describing what THIS website does.
 * TODO: Have the practice review this page before launch, and update it if
 * analytics, a contact form service, or other third-party tools are added.
 */
export function PrivacyPage() {
  return (
    <>
      <Seo page="privacy" />
      <PageHeader eyebrow="Privacy" title="Website Privacy Notice" />

      <section className="section">
        <div className="container prose prose--narrow">
          <p className="prose__meta">
            Last updated: <Placeholder>Effective date (set when reviewed by the practice)</Placeholder>
          </p>

          <h2>This website is informational</h2>
          <p>
            The {practice.name} website provides general information about our practice, our services, and how to reach
            us. It does not offer patient accounts or patient portals, and it is not designed to collect or store
            patient health information.
          </p>

          <h2>Appointment scheduling</h2>
          <p>
            When you choose “Schedule an Appointment,” you leave this website and continue to a separate, secure scheduling
            system used by our practice. Information you provide there is handled by that system, not by this website.
          </p>

          <h2>Contacting us</h2>
          <p>
            {practice.contactFormEndpoint
              ? 'If you use the general contact form, your name, email, optional phone number, and message are sent to a third-party form service so our office can respond. '
              : ''}
            Please do not send medical information, symptoms, diagnoses, insurance information, or other private health
            information through this website or by email. For health-related matters, please call our office or use the
            secure scheduling system.
          </p>

          <h2>Maps and external links</h2>
          <p>
            Our location map and directions links are provided by Google Maps, which may collect information according
            to Google’s own privacy policy. Links to other websites are provided for convenience; we are not responsible
            for their content or privacy practices.
          </p>

          <h2>Technical information</h2>
          <p>
            Like most websites, the service that hosts this site may automatically record basic technical information,
            such as your browser type and IP address, to deliver and secure the site.
          </p>

          <h2>Notice of Privacy Practices</h2>
          <p>
            Our Notice of Privacy Practices describes how the practice may use and disclose your health information.{' '}
            {practice.noticeOfPrivacyPracticesUrl ? (
              <a href={practice.noticeOfPrivacyPracticesUrl}>Read our Notice of Privacy Practices</a>
            ) : (
              <>Please ask our office for a copy.</>
            )}
          </p>

          <h2>Questions</h2>
          <p>
            If you have questions about this notice, please <Link to="/contact">contact our office</Link>.
          </p>
        </div>
      </section>
    </>
  );
}

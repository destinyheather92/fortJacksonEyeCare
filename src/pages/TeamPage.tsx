import { CtaBand } from '../components/CtaBand';
import { ImageSlot } from '../components/ImageSlot';
import { PageHeader } from '../components/PageHeader';
import { ScheduleButton } from '../components/ScheduleButton';
import { SectionHeading } from '../components/SectionHeading';
import { Seo } from '../components/Seo';
import { TeamMemberCard } from '../components/TeamMemberCard';
import { practice } from '../config/practice';
import { leadProvider, leadProviderHighlights, teamMembers } from '../data/team';

export function TeamPage() {
  const [firstParagraph, ...restOfBio] = leadProvider.bio ?? [];

  return (
    <>
      <Seo page="team" />
      <PageHeader
        eyebrow="Meet the Team"
        title="Meet Dr. Hardison & Our Team"
        lead={`The people behind ${practice.name} share one goal: making quality eye care feel accessible, personal, and welcoming.`}
      />

      {/* ── Featured provider ── */}
      <section className="section provider" aria-labelledby="provider-name">
        <div className="container provider__inner">
          <div className="provider__media">
            <ImageSlot image={leadProvider.photo} ratio="4 / 5" priority className="provider__photo" />
            <dl className="provider__facts">
              {leadProviderHighlights.map((h) => (
                <div key={h.label} className="provider__fact">
                  <dt>{h.label}</dt>
                  <dd>{h.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="provider__bio">
            <p className="eyebrow">{leadProvider.role}</p>
            <h2 id="provider-name" className="provider__name">
              {leadProvider.name}
              {leadProvider.credentials && <span className="provider__credentials">, {leadProvider.credentials}</span>}
            </h2>
            <div className="prose prose--lg">
              <p className="provider__lead">{firstParagraph}</p>
              {restOfBio.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <ScheduleButton label="Schedule an Appointment" showNote />
          </div>
        </div>
      </section>

      {/* ── Team grid ── */}
      <section className="section section--tint" aria-labelledby="team-heading">
        <div className="container">
          <SectionHeading
            id="team-heading"
            eyebrow="Our Team"
            title="The people you’ll meet"
            intro="Our team is here to welcome you, answer your questions, and help each visit go smoothly."
          />
          <div className="card-grid card-grid--team">
            {teamMembers.map((m) => (
              <TeamMemberCard key={m.id} member={m} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to meet us in person?"
        text="Schedule your eye exam online or give our office a call. We look forward to seeing you."
      />
    </>
  );
}

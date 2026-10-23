import type { TeamMember } from '../data/team';
import { ImageSlot } from './ImageSlot';

/**
 * Reusable profile card for the team grid. Photos use a fixed 4:5 frame so
 * every headshot lines up. The rest of a longer bio expands in place.
 */
export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className={`team-card${member.isPlaceholder ? ' team-card--placeholder' : ''}`}>
      <ImageSlot image={member.photo} ratio="4 / 5" className="team-card__photo" />
      <div className="team-card__body">
        {member.isPlaceholder && <p className="team-card__flag">Placeholder profile</p>}
        <h3 className="team-card__name">
          {member.name}
          {member.credentials && <span className="team-card__credentials">, {member.credentials}</span>}
        </h3>
        {member.role && <p className="team-card__role">{member.role}</p>}
        <p className="team-card__intro">{member.intro}</p>
        {member.bio && member.bio.length > 0 && (
          <details className="team-card__bio">
            <summary>
              Read more<span className="visually-hidden"> about {member.name}</span>
            </summary>
            {member.bio.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </details>
        )}
      </div>
    </article>
  );
}

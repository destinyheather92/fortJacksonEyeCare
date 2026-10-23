import { CtaBand } from '../components/CtaBand';
import { Icon } from '../components/Icon';
import { ImageSlot } from '../components/ImageSlot';
import { PageHeader } from '../components/PageHeader';
import { ScheduleButton } from '../components/ScheduleButton';
import { Seo } from '../components/Seo';
import { eyeHealthTopics, type EyeHealthTopic } from '../data/eyeHealth';

/** Topic-specific visuals rendered alongside the general copy. */
function TopicExtra({ id }: { id: EyeHealthTopic['id'] }) {
  switch (id) {
    case 'get-an-eye-exam':
      return <ScheduleButton label="Schedule an Eye Exam" showNote />;
    case 'rest-your-eyes':
      return (
        <div className="rule-202020">
          <p className="rule-202020__title">Try the 20-20-20 rule</p>
          <ol className="rule-202020__steps">
            <li>
              <span className="rule-202020__num">20</span>
              <span className="rule-202020__label">
                Every <strong>20 minutes</strong>
              </span>
            </li>
            <li>
              <span className="rule-202020__num">20</span>
              <span className="rule-202020__label">
                look at something about <strong>20 feet</strong> away
              </span>
            </li>
            <li>
              <span className="rule-202020__num">20</span>
              <span className="rule-202020__label">
                for at least <strong>20 seconds</strong>
              </span>
            </li>
          </ol>
        </div>
      );
    case 'wear-sunglasses':
      return (
        <div className="uv-callout">
          <span className="uv-callout__figure">
            99<span>%</span>
          </span>
          <p>
            Look for sunglasses that block <strong>at least 99% of UVA and UVB</strong> radiation.
          </p>
        </div>
      );
    default:
      return null;
  }
}

export function EyeHealthPage() {
  return (
    <>
      <Seo page="eyeHealth" />
      <PageHeader
        eyebrow="Eye Health"
        title="Healthy Eyes Start With Healthy Habits"
        lead="A few simple, everyday habits can go a long way toward protecting your vision. Here’s where to start."
        media={<ImageSlot image="eyeHealthHero" ratio="4 / 3" priority />}
      />

      <section className="section" aria-label="Healthy eye habits">
        <div className="container">
          <ol className="topic-list">
            {eyeHealthTopics.map((topic, i) => (
              <li key={topic.id} id={topic.id} className={`topic topic--${i % 2 === 0 ? 'a' : 'b'}`}>
                <div className="topic__marker" aria-hidden="true">
                  <span className="topic__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="topic__icon">
                    <Icon name={topic.icon} size={30} />
                  </span>
                </div>
                <div className="topic__content">
                  <h2 className="topic__title">{topic.title}</h2>
                  <div className="prose">
                    {topic.paragraphs.map((p) => (
                      <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                  </div>
                  {topic.tips && (
                    <div className="topic__tips">
                      {topic.tipsLabel && <p className="topic__tips-label">{topic.tipsLabel}</p>}
                      <ul className="check-list">
                        {topic.tips.map((tip) => (
                          <li key={tip}>
                            <Icon name="check" size={18} />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <TopicExtra id={topic.id} />
                </div>
              </li>
            ))}
          </ol>

          <p className="notice notice--info eye-health-disclaimer">
            <Icon name="info" size={20} />
            <span>
              These tips are general information and aren’t a substitute for individualized medical advice. A healthy
              diet and good habits support overall health but are not a treatment or cure for eye disease. Talk with
              your eye doctor about what’s right for you.
            </span>
          </p>
        </div>
      </section>

      <CtaBand
        heading="Take the Next Step for Your Eye Health"
        text="Schedule a comprehensive eye examination at Fort Jackson Eye Center."
      />
    </>
  );
}

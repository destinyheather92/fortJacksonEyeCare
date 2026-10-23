import type { ReactNode } from 'react';

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  align?: 'left' | 'center';
}

/** Eyebrow + H2 + optional intro used to open content sections. */
export function SectionHeading({ id, eyebrow, title, intro, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      {intro && <p className="section-heading__intro">{intro}</p>}
    </div>
  );
}

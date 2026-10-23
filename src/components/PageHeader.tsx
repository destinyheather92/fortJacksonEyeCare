import type { ReactNode } from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  children?: ReactNode;
  /** Optional media (usually an <ImageSlot>) shown beside the text on larger screens. */
  media?: ReactNode;
}

/** The top of every inner page. Holds the page's single <h1>. */
export function PageHeader({ eyebrow, title, lead, children, media }: PageHeaderProps) {
  return (
    <section className={`page-header${media ? ' page-header--media' : ''}`}>
      <div className="container page-header__inner">
        <div className="page-header__text">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-header__title">{title}</h1>
          {lead && <p className="page-header__lead">{lead}</p>}
          {children && <div className="page-header__actions">{children}</div>}
        </div>
        {media && <div className="page-header__media">{media}</div>}
      </div>
    </section>
  );
}

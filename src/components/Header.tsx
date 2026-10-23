import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { practice } from '../config/practice';
import { mainNav } from '../data/navigation';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { ScheduleButton } from './ScheduleButton';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.classList.add('menu-open');
    menuRef.current?.querySelector<HTMLElement>('a')?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    // Close if the viewport grows to the desktop layout.
    const mq = window.matchMedia('(min-width: 70em)');
    const onResize = () => mq.matches && setMenuOpen(false);

    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onResize);
    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onResize);
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Logo onClick={close} />

        <nav className="site-nav" aria-label="Main">
          <ul className="site-nav__list">
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className="site-nav__link">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          {practice.phone && (
            <a className="header-phone" href={`tel:${practice.phone.tel}`}>
              <Icon name="phone" size={18} />
              <span>{practice.phone.display}</span>
            </a>
          )}
          <ScheduleButton size="sm" shortLabel="Schedule" className="site-header__cta" />
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
            <span className="visually-hidden">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" ref={menuRef} className="mobile-menu" hidden={!menuOpen}>
        <nav aria-label="Mobile">
          <ul className="mobile-menu__list">
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className="mobile-menu__link" onClick={close}>
                  {item.label}
                  <Icon name="arrowRight" size={18} />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__actions">
          <ScheduleButton size="lg" showNote onClick={close} />
          {practice.phone && (
            <a className="btn btn--outline btn--lg" href={`tel:${practice.phone.tel}`}>
              <Icon name="phone" size={20} />
              <span>Call {practice.phone.display}</span>
            </a>
          )}
        </div>
      </div>
      {menuOpen && <div className="menu-scrim" onClick={close} aria-hidden="true" />}
    </header>
  );
}

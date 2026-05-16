import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container flex-between" style={{ width: '100%' }}>
          <Link to="/" className="nav-logo" onClick={close}>
            Olastech<span>.me</span>
          </Link>
          <div className="nav-links">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                {l.label}
              </NavLink>
            ))}
          </div>
          <div className="flex gap-2" style={{ alignItems: 'center' }}>
            <Link to="/checkout" className="btn btn-primary nav-cta" style={{ padding: '0.65rem 1.5rem' }}>
              Start a Project
            </Link>
            <button
              id="hamburger-btn"
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} onClick={close} style={{ fontSize: '1.1rem' }}>
            {l.label}
          </NavLink>
        ))}
        <Link to="/checkout" className="btn btn-primary" onClick={close} style={{ marginTop: '1rem' }}>
          Start a Project
        </Link>
      </div>
    </>
  );
}

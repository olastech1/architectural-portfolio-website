import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="nav-logo">Olastech<span style={{ color: 'var(--gold)' }}>.me</span></div>
            <p>We craft architectural experiences that endure — spaces shaped by vision, refined by craft, and built to inspire generations.</p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              {['instagram', 'linkedin', 'pinterest'].map(s => (
                <a key={s} href={`https://${s}.com`} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, border: '1px solid var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.7rem', fontFamily: 'var(--font-ui)', textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'var(--transition)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                >
                  {s[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Studio */}
          <div className="footer-col">
            <h4>Studio</h4>
            <ul>
              {[['/', 'Home'], ['/projects', 'Projects'], ['/services', 'Services'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {['Residential Design', 'Commercial Architecture', 'Interior Design', 'Urban Planning', 'Consultation'].map(s => (
                <li key={s}><Link to="/services">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              {[
                ['/terms', 'Terms & Conditions'],
                ['/privacy', 'Privacy Policy'],
                ['/refund-policy', 'Refund Policy'],
                ['/cookie-policy', 'Cookie Policy'],
              ].map(([to, label]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
            <div style={{ marginTop: '1.5rem' }}>
              <div className="stripe-badge">
                <svg viewBox="0 0 40 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ width: 38, height: 14 }}>
                  <path d="M5.05 5.45c0-.52.43-.72.93-.72.83 0 1.87.25 2.7.7V2.9A7.17 7.17 0 005.9 2.5C3.6 2.5 2 3.7 2 5.6c0 3.7 5.1 3.1 5.1 4.7 0 .6-.54.8-1.05.8-.9 0-2.1-.37-3-.87V13c1.02.44 2.05.62 3 .62 2.3 0 3.9-1.14 3.9-3.06-.02-4-5.1-3.27-5.1-4.7v.59zm9.8-2.75L12.7 8.4l-.97-5.7H8.85L11.2 13.4h3L16.6 7.5l1.4 5.9h3l2.34-10.7h-2.87l-.98 5.7-2.15-5.7zm10.4 0v10.7h2.93V2.7h-2.93zm7.8 0c-2.6 0-4.23 2-4.23 4.6v1.23c0 2.76 1.58 4.82 4.44 4.82 1.38 0 2.32-.35 3.13-1.02V9.2c-.77.7-1.6 1.03-2.48 1.03-1.24 0-2.18-.72-2.26-2.2h5.3V6.93c0-2.7-1.4-4.23-3.9-4.23zm1.2 3.86h-2.55c.1-1.17.72-1.6 1.3-1.6.6 0 1.2.45 1.26 1.6z"/>
                </svg>
                Payments secured
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {year} Olastech.me. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/refund-policy">Refunds</Link>
            <Link to="/cookie-policy">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

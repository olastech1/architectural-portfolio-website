import { Link } from 'react-router-dom';

const DATE = '16 May 2026';
const EMAIL = 'privacy@formaarchitects.com';

export default function CookiePolicy() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <span className="label">Legal</span>
          <h1 className="display-lg" style={{ marginTop: '1rem', marginBottom: '1rem' }}>Cookie Policy</h1>
          <p className="body-sm">Last updated: {DATE}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-sm legal-content">
          <p className="body-lg">This Cookie Policy explains how Olastech.me uses cookies and similar technologies when you visit our website. It should be read alongside our <Link to="/privacy">Privacy Policy</Link>.</p>

          <h2>1. What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They allow websites to remember your preferences and understand how you use the site. Cookies cannot harm your device and do not contain executable code.</p>

          <h2>2. How We Use Cookies</h2>
          <p>We use cookies to:</p>
          <ul>
            <li>Ensure the website functions correctly (strictly necessary cookies)</li>
            <li>Remember your preferences and settings</li>
            <li>Analyse how visitors use our site to improve our content</li>
            <li>Enable payment processing through Stripe</li>
          </ul>

          <h2>3. Types of Cookies We Use</h2>
          <h3>3.1 Strictly Necessary</h3>
          <p>These cookies are essential for the website to operate. They cannot be disabled. Examples include session management and security cookies set by Stripe during checkout.</p>
          <h3>3.2 Performance & Analytics</h3>
          <p>We use Google Analytics to understand how visitors interact with our site. These cookies collect anonymised data such as pages visited, time on site, and referral sources. Data is aggregated and does not identify individuals.</p>
          <h3>3.3 Functional</h3>
          <p>These cookies allow the website to remember choices you make (such as language preference) to provide a more personalised experience.</p>
          <h3>3.4 Third-Party (Stripe)</h3>
          <p>Stripe sets cookies to prevent fraud and ensure the security of payment transactions. See <a href="https://stripe.com/gb/cookie-settings" target="_blank" rel="noopener noreferrer">Stripe's Cookie Policy</a> for details.</p>

          <h2>4. Managing Cookies</h2>
          <p>You can control cookies through your browser settings. To opt out of Google Analytics across all websites, use the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>
          <p>Please note that disabling certain cookies may affect website functionality.</p>

          <h2>5. Contact</h2>
          <p>Questions about our use of cookies? Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>

          <div className="divider" />
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/terms" className="btn btn-outline" style={{ padding: '0.65rem 1.5rem' }}>Terms & Conditions</Link>
            <Link to="/privacy" className="btn btn-outline" style={{ padding: '0.65rem 1.5rem' }}>Privacy Policy</Link>
            <Link to="/refund-policy" className="btn btn-outline" style={{ padding: '0.65rem 1.5rem' }}>Refund Policy</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

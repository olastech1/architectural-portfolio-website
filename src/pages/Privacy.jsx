import { Link } from 'react-router-dom';

const DATE = '16 May 2026';
const EMAIL = 'privacy@formaarchitects.com';

export default function Privacy() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <span className="label">Legal</span>
          <h1 className="display-lg" style={{ marginTop: '1rem', marginBottom: '1rem' }}>Privacy Policy</h1>
          <p className="body-sm">Last updated: {DATE}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-sm legal-content">
          <p className="body-lg">Olastech.me ("we", "us") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose and safeguard your information in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>

          <h2>1. Data Controller</h2>
          <p>Olastech.me is the data controller. Registered address: 12 Floral Street, Covent Garden, London, WC2E 9DH. ICO Registration No. ZB123456.</p>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Information You Provide</h3>
          <ul>
            <li>Contact details: name, email address, phone number, postal address</li>
            <li>Project information: brief, budget, location, requirements</li>
            <li>Payment information: processed by Stripe — we do not store card details</li>
            <li>Communications: emails, messages, and enquiry form submissions</li>
          </ul>
          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li>Usage data: pages visited, time on site, referral source</li>
            <li>Technical data: IP address, browser type, device type, operating system</li>
            <li>Cookies and similar tracking technologies (see our <Link to="/cookie-policy">Cookie Policy</Link>)</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We use your personal data for the following purposes:</p>
          <ul>
            <li><strong>Service delivery:</strong> to provide architectural and consultancy services you have requested</li>
            <li><strong>Payment processing:</strong> to process payments through our Stripe integration</li>
            <li><strong>Communications:</strong> to respond to enquiries and provide project updates</li>
            <li><strong>Marketing:</strong> to send newsletters and project news (with your consent)</li>
            <li><strong>Analytics:</strong> to understand how our website is used and improve our services</li>
            <li><strong>Legal compliance:</strong> to meet our legal and regulatory obligations</li>
          </ul>

          <h2>4. Legal Basis for Processing</h2>
          <ul>
            <li><strong>Contract:</strong> processing necessary to perform our services agreement</li>
            <li><strong>Legitimate interests:</strong> operating and improving our business</li>
            <li><strong>Consent:</strong> for marketing communications and non-essential cookies</li>
            <li><strong>Legal obligation:</strong> for compliance, tax, and financial record-keeping</li>
          </ul>

          <h2>5. Data Sharing</h2>
          <p>We do not sell your personal data. We may share it with:</p>
          <ul>
            <li><strong>Stripe, Inc.</strong> — payment processing (see <a href="https://stripe.com/gb/privacy" target="_blank" rel="noopener noreferrer">Stripe's Privacy Policy</a>)</li>
            <li><strong>Google Analytics</strong> — website analytics (anonymised)</li>
            <li><strong>Professional advisors</strong> — lawyers, accountants, insurers</li>
            <li><strong>Regulatory authorities</strong> — where required by law</li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>We retain personal data for as long as necessary to fulfil the purposes for which it was collected. Project files and financial records are retained for 7 years in accordance with UK tax law. Enquiry data not resulting in a commission is deleted after 2 years.</p>

          <h2>7. Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request erasure ("right to be forgotten")</li>
            <li>Restrict or object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with the ICO (ico.org.uk)</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>

          <h2>8. International Transfers</h2>
          <p>Some of our service providers (including Stripe and Google) may process data outside the UK. We ensure that appropriate safeguards are in place, such as Standard Contractual Clauses or adequacy decisions.</p>

          <h2>9. Security</h2>
          <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. All payment data is encrypted and handled by Stripe's PCI DSS Level 1 certified infrastructure.</p>

          <h2>10. Cookies</h2>
          <p>For full information on how we use cookies, please see our <Link to="/cookie-policy">Cookie Policy</Link>.</p>

          <h2>11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. The latest version will always be published on this page with the revision date.</p>

          <h2>12. Contact Us</h2>
          <p>For privacy-related enquiries, contact our Data Protection Officer at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>

          <div className="divider" />
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/terms" className="btn btn-outline" style={{ padding: '0.65rem 1.5rem' }}>Terms & Conditions</Link>
            <Link to="/refund-policy" className="btn btn-outline" style={{ padding: '0.65rem 1.5rem' }}>Refund Policy</Link>
            <Link to="/cookie-policy" className="btn btn-outline" style={{ padding: '0.65rem 1.5rem' }}>Cookie Policy</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';

const DATE = '16 May 2026';
const COMPANY = 'Olastech.me';
const EMAIL = 'legal@olastech.me';

export default function Terms() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <span className="label">Legal</span>
          <h1 className="display-lg" style={{ marginTop: '1rem', marginBottom: '1rem' }}>Terms &amp; Conditions</h1>
          <p className="body-sm">Last updated: {DATE}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-sm legal-content">
          <p className="body-lg">Please read these Terms and Conditions carefully before using our website or engaging our services. By accessing our website or placing an order, you agree to be bound by these terms.</p>

          <h2>1. Parties</h2>
          <p>These Terms apply between <strong>{COMPANY}</strong> ("Olastech.me", "we", "us"), and the individual or entity using our services ("Client", "you").</p>

          <h2>2. Services</h2>
          <p>Olastech.me provides architectural design, interior architecture, urban planning, and related consultancy services as described on our Services page. The specific scope of work, deliverables, fees and timeline for each project are agreed in a separate Letter of Appointment or Engagement Agreement.</p>
          <h3>2.1 Engagement Packages</h3>
          <p>Our online packages (Initial Consultation, Concept Design, Full Design Service) are entry-level engagements. Full project scopes are confirmed following an initial review and may be subject to further agreements.</p>
          <h3>2.2 RIBA Professional Services</h3>
          <p>All architectural services are provided in accordance with the RIBA Standard Professional Services Contract and RIBA Code of Professional Conduct. Olastech.me is a RIBA Chartered Practice.</p>

          <h2>3. Payments &amp; Fees</h2>
          <p>All prices displayed on this website are in British Pounds Sterling (GBP) and are exclusive of VAT unless stated otherwise. VAT at the prevailing rate (currently 20%) is added at checkout.</p>
          <h3>3.1 Stripe Payments</h3>
          <p>Online payments are processed securely by Stripe, Inc. By submitting payment, you authorise Olastech.me to charge the amount shown to your selected payment method. Olastech.me does not store your card details — these are held by Stripe under PCI DSS Level 1 compliance.</p>
          <h3>3.2 Project Invoicing</h3>
          <p>For full project engagements, fees are invoiced in accordance with the agreed payment schedule. Invoices are due within 14 days of issue unless otherwise stated. Late payments may incur interest under the Late Payment of Commercial Debts (Interest) Act 1998.</p>

          <h2>4. Intellectual Property</h2>
          <p>All drawings, designs, specifications, reports, and other documents produced by Olastech.me remain the intellectual property of Olastech.me until full payment has been received. Upon receipt of full payment, Olastech.me grants the Client a non-exclusive, non-transferable licence to use the documents for the agreed project only.</p>

          <h2>5. Confidentiality</h2>
          <p>Both parties agree to keep confidential any information shared in connection with a project and not to disclose it to third parties without prior written consent, except where required by law or regulation.</p>

          <h2>6. Limitation of Liability</h2>
          <p>Olastech.me's total liability to the Client under or in connection with any engagement shall not exceed the total fees paid by the Client for the relevant services. Olastech.me shall not be liable for any indirect, consequential, or loss of profit damages.</p>

          <h2>7. Cancellation</h2>
          <p>Please see our <Link to="/refund-policy">Refund Policy</Link> for full details on cancellations and refunds.</p>

          <h2>8. Governing Law</h2>
          <p>These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

          <h2>9. Changes to These Terms</h2>
          <p>Olastech.me reserves the right to update these Terms at any time. The updated version will be posted on this page with a revised date. Continued use of our services after changes constitutes acceptance.</p>

          <h2>10. Contact</h2>
          <p>For questions about these Terms, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or write to us at our registered address above.</p>

          <div className="divider" />
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/privacy" className="btn btn-outline" style={{ padding: '0.65rem 1.5rem' }}>Privacy Policy</Link>
            <Link to="/refund-policy" className="btn btn-outline" style={{ padding: '0.65rem 1.5rem' }}>Refund Policy</Link>
            <Link to="/cookie-policy" className="btn btn-outline" style={{ padding: '0.65rem 1.5rem' }}>Cookie Policy</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

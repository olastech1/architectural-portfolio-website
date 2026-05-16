import { Link } from 'react-router-dom';

const DATE = '16 May 2026';
const EMAIL = 'billing@formaarchitects.com';

export default function RefundPolicy() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <span className="label">Legal</span>
          <h1 className="display-lg" style={{ marginTop: '1rem', marginBottom: '1rem' }}>Refund Policy</h1>
          <p className="body-sm">Last updated: {DATE}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-sm legal-content">
          <p className="body-lg">
            At Olastech.me ("we", "us"), we are committed to delivering exceptional service and ensuring client satisfaction. This Refund Policy sets out the terms under which refunds may be requested and issued for payments made through our website.
          </p>

          <h2>1. Overview</h2>
          <p>
            All payments on our website are processed securely by Stripe, Inc. This policy applies to all online purchases made through formaarchitects.com, including Initial Consultations, Concept Design packages, and Full Design Service engagements.
          </p>
          <p>
            Because architectural services involve significant professional time, intellectual effort, and resource allocation from the moment of engagement, refunds are subject to the conditions outlined below.
          </p>

          <h2>2. Cancellation Before Service Commencement</h2>
          <h3>2.1 Cooling-Off Period</h3>
          <p>
            In accordance with the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, consumers (individuals purchasing for personal, non-business use) have a <strong>14-day right to cancel</strong> from the date of purchase — provided the service has not yet commenced and no deliverables have been produced.
          </p>
          <p>
            To exercise this right, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> within 14 days of payment. If you request that we begin work within the 14-day cooling-off period and then cancel, a proportional deduction for work completed will be applied before any refund is issued.
          </p>
          <h3>2.2 Business Clients</h3>
          <p>
            Business-to-business clients (those purchasing on behalf of a company or organisation) are not entitled to the statutory 14-day cooling-off period. Cancellation terms for business clients are governed by the applicable Letter of Appointment or Engagement Agreement.
          </p>

          <h2>3. Refunds by Package Type</h2>
          <h3>3.1 Initial Consultation (£350)</h3>
          <ul>
            <li><strong>Cancelled 48+ hours before scheduled session:</strong> Full refund issued.</li>
            <li><strong>Cancelled within 48 hours of session:</strong> 50% refund (£175) issued.</li>
            <li><strong>No-show or cancellation on the day:</strong> No refund.</li>
            <li><strong>After the session has taken place:</strong> No refund. The written report will still be delivered.</li>
          </ul>

          <h3>3.2 Concept Design (£2,500)</h3>
          <ul>
            <li><strong>Cancelled before kick-off meeting:</strong> Full refund, less a £150 administration fee.</li>
            <li><strong>Cancelled after kick-off but before first design presentation:</strong> 50% refund (£1,250).</li>
            <li><strong>Cancelled after first design presentation:</strong> No refund. All work produced up to that point will be delivered to you.</li>
          </ul>

          <h3>3.3 Full Design Service (£8,500+)</h3>
          <ul>
            <li><strong>Cancelled within 14 days of purchase (before commencement):</strong> Full refund, less a £250 administration fee.</li>
            <li><strong>Cancelled after commencement:</strong> A proportional refund is calculated based on work completed. The minimum non-refundable amount is 25% of the total fee once the project has commenced.</li>
            <li><strong>Milestone-based payments:</strong> Payments tied to specific milestones (e.g. Planning Submission, Technical Design) are non-refundable once that milestone has been achieved and signed off.</li>
          </ul>

          <h2>4. Non-Refundable Circumstances</h2>
          <p>No refund will be issued in the following circumstances:</p>
          <ul>
            <li>Work has been completed and deliverables provided to the client</li>
            <li>Planning or regulatory applications have been submitted on the client's behalf</li>
            <li>Third-party costs (e.g. planning fees, surveys, specialist consultants) have been incurred on the client's instruction</li>
            <li>The client has approved designs in writing and construction has commenced</li>
            <li>The client changes their mind about the project scope after work has begun</li>
          </ul>

          <h2>5. How to Request a Refund</h2>
          <p>To request a refund, email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> with:</p>
          <ul>
            <li>Your full name and email address used for the purchase</li>
            <li>Order or invoice reference number</li>
            <li>Date of purchase</li>
            <li>Reason for the refund request</li>
          </ul>
          <p>We aim to acknowledge all refund requests within 2 business days and resolve them within 10 business days.</p>

          <h2>6. Refund Processing</h2>
          <p>
            Approved refunds are processed back to the original payment method via Stripe. Refunds typically appear on your bank statement within <strong>5–10 business days</strong>, depending on your card issuer. Olastech.me bears no responsibility for delays caused by your bank or card issuer.
          </p>
          <p>
            We do not issue refunds in cash or to a different payment method than was used for the original transaction.
          </p>

          <h2>7. Chargebacks</h2>
          <p>
            If you initiate a chargeback with your bank before contacting us, we reserve the right to dispute the chargeback and provide evidence of service delivery to Stripe and your bank. We strongly encourage you to contact us directly first — disputes are almost always resolved faster this way.
          </p>

          <h2>8. Service Failures by Olastech.me</h2>
          <p>
            If Olastech.me fails to deliver an agreed service within the agreed timeframe for reasons solely within our control, you are entitled to a full refund of any amount paid for that service. We will notify you promptly of any delays and offer remediation where possible.
          </p>

          <h2>9. Force Majeure</h2>
          <p>
            If services cannot be delivered due to circumstances beyond our reasonable control (including but not limited to pandemic, natural disaster, or government restriction), we will offer a reschedule or credit note in lieu of a cash refund.
          </p>

          <h2>10. Governing Law</h2>
          <p>This Refund Policy is governed by the laws of England and Wales. Nothing in this policy affects your statutory rights as a consumer.</p>

          <h2>11. Contact Us</h2>
          <p>
            For all billing and refund queries, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or call us on +44 (0)20 7946 0123. Our office hours are Monday–Friday, 9am–6pm GMT.
          </p>

          <div className="divider" />
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/terms" className="btn btn-outline" style={{ padding: '0.65rem 1.5rem' }}>Terms & Conditions</Link>
            <Link to="/privacy" className="btn btn-outline" style={{ padding: '0.65rem 1.5rem' }}>Privacy Policy</Link>
            <Link to="/cookie-policy" className="btn btn-outline" style={{ padding: '0.65rem 1.5rem' }}>Cookie Policy</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

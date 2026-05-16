import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async e => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <span className="label animate-fade-up opacity-0">Get in Touch</span>
          <h1 className="display-lg animate-fade-up opacity-0 delay-1" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
            Contact Us
          </h1>
          <p className="body-lg animate-fade-up opacity-0 delay-2" style={{ maxWidth: 500 }}>
            Tell us about your project. Our team responds within one business day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'start' }}>
            {/* Info */}
            <div>
              <h2 className="display-sm" style={{ marginBottom: '2rem' }}>Studio Information</h2>
              {[
                { label: 'Address', value: '12 Floral Street, Covent Garden\nLondon, WC2E 9DH\nUnited Kingdom' },
                { label: 'Email', value: 'studio@formaarchitects.com' },
                { label: 'Phone', value: '+44 (0)20 7946 0123' },
                { label: 'Hours', value: 'Monday–Friday: 9am–6pm\nSaturday: By appointment' },
              ].map(info => (
                <div key={info.label} style={{ marginBottom: '2rem' }}>
                  <span className="label" style={{ display: 'block', marginBottom: '0.5rem' }}>{info.label}</span>
                  <p className="body-sm" style={{ whiteSpace: 'pre-line', color: 'var(--white-dim)' }}>{info.value}</p>
                </div>
              ))}
              <div className="divider" />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 400, marginBottom: '1rem' }}>International Offices</h3>
              {['Dubai, UAE', 'Copenhagen, Denmark', 'Barcelona, Spain'].map(o => (
                <p key={o} className="body-sm" style={{ marginBottom: '0.4rem' }}>{o}</p>
              ))}
            </div>

            {/* Form */}
            <div className="card" style={{ padding: '3rem' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                  <h3 className="display-sm" style={{ marginBottom: '1rem', color: 'var(--gold)' }}>Message Sent</h3>
                  <p className="body-lg">Thank you for reaching out. A member of our team will be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={submit} id="contact-form">
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 400, marginBottom: '2rem' }}>Send a Message</h3>
                  <div className="grid-2" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Full Name *</label>
                      <input id="contact-name" name="name" required value={form.name} onChange={handle} className="form-input" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">Email *</label>
                      <input id="contact-email" name="email" type="email" required value={form.email} onChange={handle} className="form-input" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="grid-2" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">Phone</label>
                      <input id="contact-phone" name="phone" value={form.phone} onChange={handle} className="form-input" placeholder="+44..." />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-type">Project Type</label>
                      <select id="contact-type" name="type" value={form.type} onChange={handle} className="form-select" style={{ background: 'var(--bg-3)' }}>
                        <option value="">Select type…</option>
                        {['Residential', 'Commercial', 'Interior', 'Civic / Cultural', 'Consultation', 'Other'].map(t => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label" htmlFor="contact-budget">Approximate Budget</label>
                    <select id="contact-budget" name="budget" value={form.budget} onChange={handle} className="form-select" style={{ background: 'var(--bg-3)' }}>
                      <option value="">Select range…</option>
                      {['Under £50k', '£50k – £150k', '£150k – £500k', '£500k – £1m', 'Over £1m', 'Not yet defined'].map(b => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                  <div className="form-group" style={{ marginBottom: '2rem' }}>
                    <label className="form-label" htmlFor="contact-message">Message *</label>
                    <textarea id="contact-message" name="message" required value={form.message} onChange={handle} className="form-textarea" placeholder="Tell us about your project…" />
                  </div>
                  <button id="contact-submit" type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
                    {loading ? 'Sending…' : 'Send Message'}
                  </button>
                  <p className="body-sm" style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.78rem' }}>
                    By submitting you agree to our{' '}
                    <a href="/privacy" style={{ color: 'var(--gold)' }}>Privacy Policy</a>{' '}and{' '}
                    <a href="/terms" style={{ color: 'var(--gold)' }}>Terms & Conditions</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){
          .contact-layout { grid-template-columns:1fr !important; }
        }
      `}</style>
    </div>
  );
}

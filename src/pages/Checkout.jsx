import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Replace with your real Stripe publishable key
const stripePromise = loadStripe('pk_test_51REPLACE_WITH_YOUR_STRIPE_PUBLISHABLE_KEY');

const CARD_OPTS = {
  style: {
    base: {
      color: '#f5f5f0',
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '15px',
      fontSmoothing: 'antialiased',
      '::placeholder': { color: 'rgba(245,245,240,0.3)' },
    },
    invalid: { color: '#fa6262' },
  },
};

const packages = [
  { id: 'consult', label: 'Initial Consultation', price: 350, desc: '60-min expert session + written report', popular: false },
  { id: 'concept', label: 'Concept Design', price: 2500, desc: 'Spatial concepts, moodboards & feasibility review', popular: true },
  { id: 'full', label: 'Full Design Service', price: 8500, desc: 'Concept through planning — everything included', popular: false },
];

function CheckoutForm({ pkg }) {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    setError('');

    const cardNumber = elements.getElement(CardNumberElement);
    const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardNumber,
      billing_details: { name, email },
    });

    if (stripeError) {
      setError(stripeError.message);
      setLoading(false);
      return;
    }

    // In production: send paymentMethod.id + amount to your backend
    // to create a PaymentIntent and confirm. This demo simulates success.
    console.log('PaymentMethod created:', paymentMethod.id);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(52,211,153,0.15)', border: '2px solid rgba(52,211,153,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '2rem' }}>✓</div>
        <h2 className="display-sm" style={{ marginBottom: '1rem', color: '#34d399' }}>Payment Successful!</h2>
        <p className="body-lg" style={{ marginBottom: '2rem' }}>
          Thank you for your payment of <strong style={{ color: 'var(--gold)' }}>£{pkg.price.toLocaleString()}</strong>.<br />
          A confirmation and next steps will be emailed to <strong>{email}</strong>.
        </p>
        <Link to="/" className="btn btn-primary">Return Home</Link>
      </div>
    );
  }

  return (
    <form id="stripe-checkout-form" onSubmit={handleSubmit}>
      <div className="form-group" style={{ marginBottom: '1.25rem' }}>
        <label className="form-label" htmlFor="billing-name">Cardholder Name *</label>
        <input id="billing-name" required value={name} onChange={e => setName(e.target.value)} className="form-input" placeholder="Full name on card" />
      </div>
      <div className="form-group" style={{ marginBottom: '1.25rem' }}>
        <label className="form-label" htmlFor="billing-email">Email Address *</label>
        <input id="billing-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} className="form-input" placeholder="you@example.com" />
      </div>

      <div className="form-group" style={{ marginBottom: '1.25rem' }}>
        <label className="form-label">Card Number *</label>
        <div className="stripe-field">
          <CardNumberElement options={CARD_OPTS} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
        <div className="form-group">
          <label className="form-label">Expiry Date *</label>
          <div className="stripe-field"><CardExpiryElement options={CARD_OPTS} /></div>
        </div>
        <div className="form-group">
          <label className="form-label">CVC *</label>
          <div className="stripe-field"><CardCvcElement options={CARD_OPTS} /></div>
        </div>
      </div>

      {error && (
        <div style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: 'var(--radius-sm)', padding: '0.85rem 1rem', marginBottom: '1.25rem', color: '#f87171', fontSize: '0.875rem' }}>
          {error}
        </div>
      )}

      <div style={{ background: 'var(--bg-3)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1rem 1.25rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span className="body-sm">{pkg.label}</span>
          <span className="body-sm">£{pkg.price.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span className="body-sm">VAT (20%)</span>
          <span className="body-sm">£{(pkg.price * 0.2).toLocaleString()}</span>
        </div>
        <div className="divider" style={{ margin: '0.75rem 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: '0.875rem' }}>Total</span>
          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, color: 'var(--gold)' }}>£{(pkg.price * 1.2).toLocaleString()}</span>
        </div>
      </div>

      <button id="pay-now-btn" type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '0.9rem' }} disabled={loading || !stripe}>
        {loading ? 'Processing…' : `Pay £${(pkg.price * 1.2).toLocaleString()}`}
      </button>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginTop: '1rem' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-faint)' }}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-faint)', fontFamily: 'var(--font-ui)' }}>
          Secured by Stripe · SSL Encrypted · PCI DSS Compliant
        </span>
      </div>

      <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-faint)', marginTop: '0.75rem', fontFamily: 'var(--font-ui)' }}>
        By paying you agree to our{' '}
        <Link to="/terms" style={{ color: 'var(--gold)' }}>Terms & Conditions</Link>,{' '}
        <Link to="/privacy" style={{ color: 'var(--gold)' }}>Privacy Policy</Link>, and{' '}
        <Link to="/refund-policy" style={{ color: 'var(--gold)' }}>Refund Policy</Link>.
      </p>
    </form>
  );
}

export default function Checkout() {
  const [selected, setSelected] = useState(packages[1]);

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <span className="label animate-fade-up opacity-0">Begin Your Project</span>
          <h1 className="display-lg animate-fade-up opacity-0 delay-1" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
            Start a Project
          </h1>
          <p className="body-lg animate-fade-up opacity-0 delay-2" style={{ maxWidth: 480 }}>
            Select a package and complete your payment securely via Stripe. We'll be in touch within 24 hours to schedule your first session.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="checkout-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            {/* Package selection */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 400, marginBottom: '2rem' }}>Select Package</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                {packages.map(p => (
                  <button
                    key={p.id}
                    id={`pkg-${p.id}`}
                    onClick={() => setSelected(p)}
                    style={{
                      display: 'block', width: '100%', textAlign: 'left',
                      padding: '1.5rem 2rem', borderRadius: 'var(--radius)',
                      border: selected.id === p.id ? '2px solid var(--gold)' : '1px solid var(--border)',
                      background: selected.id === p.id ? 'rgba(201,169,110,0.06)' : 'var(--surface)',
                      cursor: 'pointer', transition: 'var(--transition)', position: 'relative',
                    }}
                  >
                    {p.popular && (
                      <span style={{ position: 'absolute', top: '-10px', right: '1.5rem', background: 'var(--gold)', color: '#0a0a0a', padding: '0.2rem 0.8rem', borderRadius: '2rem', fontSize: '0.65rem', fontFamily: 'var(--font-ui)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Most Popular</span>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.35rem' }}>{p.label}</div>
                        <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>{p.desc}</div>
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 300, color: 'var(--gold)', whiteSpace: 'nowrap', marginLeft: '1rem' }}>£{p.price.toLocaleString()}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Trust signals */}
              <div style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--surface)' }}>
                <span className="label" style={{ display: 'block', marginBottom: '1rem' }}>Why Pay with Olastech.me</span>
                {[
                  ['🔒', 'Payments processed securely by Stripe'],
                  ['📋', 'Clear refund policy — see full terms below'],
                  ['📞', 'Dedicated project manager from day one'],
                  ['🏆', 'RIBA Chartered Practice — regulated & insured'],
                ].map(([icon, text]) => (
                  <div key={text} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1rem', marginTop: '1px' }}>{icon}</span>
                    <span style={{ fontSize: '0.84rem', color: 'var(--white-dim)', fontFamily: 'var(--font-body)' }}>{text}</span>
                  </div>
                ))}
                <div className="divider" style={{ margin: '1rem 0' }} />
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-ui)' }}>
                  <Link to="/refund-policy" style={{ color: 'var(--gold)' }}>Refund Policy</Link>
                  <Link to="/terms" style={{ color: 'var(--gold)' }}>Terms & Conditions</Link>
                  <Link to="/privacy" style={{ color: 'var(--gold)' }}>Privacy Policy</Link>
                </div>
              </div>
            </div>

            {/* Stripe form */}
            <div className="card" style={{ padding: '2.5rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 400, marginBottom: '0.5rem' }}>Payment Details</h2>
              <div className="stripe-badge" style={{ marginBottom: '2rem' }}>
                <svg width="38" height="14" viewBox="0 0 40 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.05 5.45c0-.52.43-.72.93-.72.83 0 1.87.25 2.7.7V2.9A7.17 7.17 0 005.9 2.5C3.6 2.5 2 3.7 2 5.6c0 3.7 5.1 3.1 5.1 4.7 0 .6-.54.8-1.05.8-.9 0-2.1-.37-3-.87V13c1.02.44 2.05.62 3 .62 2.3 0 3.9-1.14 3.9-3.06-.02-4-5.1-3.27-5.1-4.7v.59zm9.8-2.75L12.7 8.4l-.97-5.7H8.85L11.2 13.4h3L16.6 7.5l1.4 5.9h3l2.34-10.7h-2.87l-.98 5.7-2.15-5.7zm10.4 0v10.7h2.93V2.7h-2.93zm7.8 0c-2.6 0-4.23 2-4.23 4.6v1.23c0 2.76 1.58 4.82 4.44 4.82 1.38 0 2.32-.35 3.13-1.02V9.2c-.77.7-1.6 1.03-2.48 1.03-1.24 0-2.18-.72-2.26-2.2h5.3V6.93c0-2.7-1.4-4.23-3.9-4.23zm1.2 3.86h-2.55c.1-1.17.72-1.6 1.3-1.6.6 0 1.2.45 1.26 1.6z"/>
                </svg>
                Powered by Stripe
              </div>

              <Elements stripe={stripePromise}>
                <CheckoutForm pkg={selected} />
              </Elements>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .stripe-field {
          background: var(--bg-3); border: 1px solid var(--border);
          border-radius: var(--radius-sm); padding: 0.9rem 1rem;
          transition: border-color 0.3s ease;
        }
        .stripe-field:focus-within { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(201,169,110,0.1); }
        @media(max-width:768px){
          .checkout-grid { grid-template-columns:1fr !important; }
        }
      `}</style>
    </div>
  );
}

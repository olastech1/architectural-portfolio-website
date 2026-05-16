import { Link } from 'react-router-dom';

const services = [
  {
    num: '01', title: 'Residential Architecture',
    desc: 'We design homes that are an expression of how you live — bespoke, considered, and built to last. From contemporary villas to sensitive heritage extensions, every project is shaped by deep collaboration with our clients.',
    includes: ['Concept Design', 'Planning Applications', 'Technical Drawings', 'Site Supervision', 'Interior Coordination'],
    price: 'From £8,500',
  },
  {
    num: '02', title: 'Commercial Architecture',
    desc: 'Workplaces, hospitality, retail and mixed-use developments designed for performance, brand identity, and human wellbeing. We navigate complex briefs with clarity and deliver on time.',
    includes: ['Feasibility Studies', 'Concept to Completion', 'BREEAM Compliance', 'Stakeholder Coordination', 'Procurement Support'],
    price: 'From £24,000',
  },
  {
    num: '03', title: 'Interior Architecture',
    desc: 'Architecture doesn\'t stop at the threshold. We design interiors as cohesive spatial experiences — curating materials, light, and detail to create environments that feel alive.',
    includes: ['Space Planning', 'Material Palettes', 'FF&E Specification', 'Lighting Design', 'Contractor Tendering'],
    price: 'From £6,000',
  },
  {
    num: '04', title: 'Urban Planning & Masterplanning',
    desc: 'We shape neighbourhoods and civic spaces at the city scale — developing master plans that balance growth with identity, sustainability, and community vitality.',
    includes: ['Site Analysis', 'Master Plan Design', 'Public Consultation', 'Planning Policy', 'Phasing Strategy'],
    price: 'From £35,000',
  },
  {
    num: '05', title: 'Architectural Consultation',
    desc: 'Expert guidance at any stage of your project. Whether you need a feasibility review, planning strategy, or a second opinion on a design proposal, our senior team is available.',
    includes: ['1-hour Initial Review', 'Written Report', 'Video Consultation', 'Planning Advice', 'Design Review'],
    price: 'From £350 / session',
  },
];

export default function Services() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <span className="label animate-fade-up opacity-0">What We Offer</span>
          <h1 className="display-lg animate-fade-up opacity-0 delay-1" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
            Our Services
          </h1>
          <p className="body-lg animate-fade-up opacity-0 delay-2" style={{ maxWidth: 540 }}>
            From intimate residential projects to large-scale civic works, we offer a comprehensive suite of architectural services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {services.map((s, i) => (
              <div key={i} className="service-row">
                <div className="service-row-header">
                  <span className="service-num label">{s.num}</span>
                  <h2 className="display-sm service-title">{s.title}</h2>
                  <span className="service-price badge">{s.price}</span>
                </div>
                <div className="service-row-body">
                  <p className="body-lg">{s.desc}</p>
                  <div className="service-includes">
                    <span className="label" style={{ marginBottom: '0.75rem', display: 'block' }}>Includes</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {s.includes.map(inc => (
                        <span key={inc} style={{ padding: '0.3rem 0.9rem', border: '1px solid var(--border)', borderRadius: '2rem', fontSize: '0.78rem', fontFamily: 'var(--font-ui)', color: 'var(--text-muted)' }}>{inc}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginTop: '2rem' }}>
                    <Link to="/checkout" className="btn btn-primary" style={{ marginRight: '1rem' }}>Enquire Now</Link>
                    <Link to="/contact" className="btn btn-outline">Ask a Question</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 4rem' }}>
            <span className="label">How We Work</span>
            <h2 className="display-md" style={{ marginTop: '0.75rem' }}>Our Process</h2>
          </div>
          <div className="process-grid">
            {[
              { n: '1', title: 'Discovery', desc: 'We listen. Understanding your brief, site, budget and aspirations is the foundation of great design.' },
              { n: '2', title: 'Concept', desc: 'We translate your vision into spatial ideas, exploring form, materiality and programme.' },
              { n: '3', title: 'Design', desc: 'We develop the preferred concept into a fully resolved design, navigating planning and technical requirements.' },
              { n: '4', title: 'Delivery', desc: 'We oversee construction to ensure your project is built to the highest standard and our shared vision.' },
            ].map(p => (
              <div key={p.n} style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--gold)' }}>{p.n}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, marginBottom: '0.75rem' }}>{p.title}</h3>
                <p className="body-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .service-row {
          border: 1px solid var(--border); border-radius: var(--radius);
          overflow: hidden; margin-bottom: 1rem;
          transition: border-color 0.3s ease;
        }
        .service-row:hover { border-color: var(--border-hover); }
        .service-row-header {
          display: flex; align-items: center; gap: 1.5rem;
          padding: 2rem 2.5rem; background: var(--surface);
          flex-wrap: wrap;
        }
        .service-num { color: var(--text-faint); font-size: 0.65rem; }
        .service-title { flex: 1; }
        .service-row-body { padding: 2rem 2.5rem; border-top: 1px solid var(--border); }
        .service-includes { margin-top: 1.5rem; }
        .process-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; }
        @media(max-width:768px) {
          .process-grid { grid-template-columns: repeat(2,1fr); }
          .service-row-header, .service-row-body { padding: 1.5rem; }
        }
        @media(max-width:480px) { .process-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}

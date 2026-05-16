import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './Home.css';

const stats = [
  { value: '18+', label: 'Years of Excellence' },
  { value: '240', label: 'Projects Delivered' },
  { value: '32', label: 'Industry Awards' },
  { value: '14', label: 'Countries' },
];

const projects = [
  { id: 1, title: 'Meridian Tower', category: 'Commercial', location: 'London, UK', year: '2024', bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' },
  { id: 2, title: 'Ashwood Residence', category: 'Residential', location: 'Surrey, UK', year: '2024', bg: 'linear-gradient(135deg, #1a2a1a 0%, #2d4a2d 50%, #1a3a1a 100%)' },
  { id: 3, title: 'Nova Cultural Centre', category: 'Civic', location: 'Barcelona, ES', year: '2023', bg: 'linear-gradient(135deg, #2a1a1a 0%, #4a2d2d 50%, #3a1a1a 100%)' },
];

const services = [
  { icon: '◈', title: 'Architectural Design', desc: 'From concept sketches to detailed drawings, we craft spaces that transcend the ordinary.' },
  { icon: '◉', title: 'Interior Architecture', desc: 'Cohesive interior environments that harmonise materiality, light, and human experience.' },
  { icon: '◎', title: 'Urban Planning', desc: 'Visionary master plans that shape communities and create lasting civic value.' },
  { icon: '◇', title: 'Consultation', desc: 'Strategic guidance at every phase — from feasibility through planning approvals.' },
];

function useIntersection(ref, threshold = 0.15) {
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal') || [];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
    }, { threshold });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Home() {
  const sectionsRef = useRef(null);
  useIntersection(sectionsRef);

  return (
    <div ref={sectionsRef}>
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
        </div>
        <div className="container hero-content">
          <div className="hero-eyebrow animate-fade-up opacity-0">
            <span className="badge">Est. 2006 · London</span>
          </div>
          <h1 className="display-xl hero-headline animate-fade-up opacity-0 delay-1">
            Architecture<br /><em>Redefined</em>
          </h1>
          <p className="body-lg hero-sub animate-fade-up opacity-0 delay-2">
            We are a multi-award-winning architectural practice designing spaces that inspire, endure, and transform the human experience.
          </p>
          <div className="flex gap-3 animate-fade-up opacity-0 delay-3" style={{ flexWrap: 'wrap' }}>
            <Link to="/projects" className="btn btn-primary">View Our Work</Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span className="label" style={{ fontSize: '0.6rem', marginTop: '0.5rem' }}>Scroll</span>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="stats-band">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stat-item reveal">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="section">
        <div className="container">
          <div className="intro-grid">
            <div className="reveal">
              <span className="label">Our Philosophy</span>
              <h2 className="display-md" style={{ marginTop: '1rem' }}>
                Form follows<br />purpose.
              </h2>
            </div>
            <div className="reveal delay-2">
              <p className="body-lg" style={{ marginBottom: '1.5rem' }}>
                At Olastech.me, every project begins with a fundamental question: what does this space need to become? We listen deeply, think boldly, and craft with precision — always placing human experience at the centre of our work.
              </p>
              <p className="body-lg">
                From intimate private residences to landmark civic buildings, our portfolio spans continents and typologies, united by an unwavering commitment to design excellence.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/about" className="btn btn-ghost">Our Story →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header flex-between">
            <div className="reveal">
              <span className="label">Selected Work</span>
              <h2 className="display-md" style={{ marginTop: '0.75rem' }}>Featured<br />Projects</h2>
            </div>
            <Link to="/projects" className="btn btn-outline reveal delay-2">All Projects →</Link>
          </div>
          <div className="projects-featured">
            {projects.map((p, i) => (
              <div key={p.id} className={`project-card-featured reveal delay-${i + 1}`} style={{ background: p.bg }}>
                <div className="project-card-overlay" />
                <div className="project-card-body">
                  <span className="badge">{p.category}</span>
                  <div style={{ marginTop: 'auto' }}>
                    <p className="body-sm" style={{ marginBottom: '0.4rem' }}>{p.location} · {p.year}</p>
                    <h3 className="display-sm">{p.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="label">What We Do</span>
            <h2 className="display-md" style={{ marginTop: '0.75rem' }}>Our Services</h2>
            <p className="body-lg" style={{ marginTop: '1rem', maxWidth: 520 }}>
              A full-spectrum architectural practice covering every stage of the design journey.
            </p>
          </div>
          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {services.map((s, i) => (
              <div key={i} className={`service-card card reveal delay-${i + 1}`}>
                <div className="service-icon">{s.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 400, marginBottom: '0.75rem' }}>{s.title}</h3>
                <p className="body-sm">{s.desc}</p>
                <Link to="/services" className="btn btn-ghost" style={{ marginTop: '1.25rem', fontSize: '0.75rem' }}>Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box reveal">
            <span className="label" style={{ marginBottom: '1.5rem', display: 'block' }}>Start Your Journey</span>
            <h2 className="display-lg" style={{ marginBottom: '1.5rem' }}>
              Ready to build<br />something remarkable?
            </h2>
            <p className="body-lg" style={{ marginBottom: '2.5rem', maxWidth: 500 }}>
              Let's talk about your vision. Our team is ready to guide your project from first concept to final form.
            </p>
            <div className="flex gap-3" style={{ flexWrap: 'wrap' }}>
              <Link to="/checkout" className="btn btn-primary">Start a Project</Link>
              <Link to="/contact" className="btn btn-outline">Book a Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

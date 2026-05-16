import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const ALL = 'All';
const categories = [ALL, 'Residential', 'Commercial', 'Civic', 'Cultural'];

const projects = [
  { id: 1, title: 'Meridian Tower', category: 'Commercial', location: 'London, UK', year: '2024', area: '18,400 m²', bg: 'linear-gradient(135deg,#0f1923 0%,#1a3050 100%)' },
  { id: 2, title: 'Ashwood Residence', category: 'Residential', location: 'Surrey, UK', year: '2024', area: '680 m²', bg: 'linear-gradient(135deg,#1a2a1a 0%,#2d4a2d 100%)' },
  { id: 3, title: 'Nova Cultural Centre', category: 'Cultural', location: 'Barcelona, ES', year: '2023', area: '9,200 m²', bg: 'linear-gradient(135deg,#2a1a1a 0%,#4a2d2d 100%)' },
  { id: 4, title: 'Pier 9 Mixed-Use', category: 'Commercial', location: 'Copenhagen, DK', year: '2023', area: '22,000 m²', bg: 'linear-gradient(135deg,#161629 0%,#2a2a50 100%)' },
  { id: 5, title: 'The Grove House', category: 'Residential', location: 'Cotswolds, UK', year: '2023', area: '420 m²', bg: 'linear-gradient(135deg,#1a1a10 0%,#3a3a20 100%)' },
  { id: 6, title: 'Harlow City Library', category: 'Civic', location: 'Essex, UK', year: '2022', area: '5,600 m²', bg: 'linear-gradient(135deg,#1a1820 0%,#2f2a3d 100%)' },
  { id: 7, title: 'Atlas Hotel', category: 'Commercial', location: 'Dubai, UAE', year: '2022', area: '41,000 m²', bg: 'linear-gradient(135deg,#201510 0%,#402a20 100%)' },
  { id: 8, title: 'Lakeside Pavilion', category: 'Cultural', location: 'Geneva, CH', year: '2021', area: '2,300 m²', bg: 'linear-gradient(135deg,#101a20 0%,#1e3040 100%)' },
  { id: 9, title: 'Parliament Quarter', category: 'Civic', location: 'Edinburgh, UK', year: '2021', area: '34,000 m²', bg: 'linear-gradient(135deg,#201a10 0%,#40341e 100%)' },
];

export default function Projects() {
  const [active, setActive] = useState(ALL);
  const gridRef = useRef(null);

  const filtered = active === ALL ? projects : projects.filter(p => p.category === active);

  useEffect(() => {
    const els = gridRef.current?.querySelectorAll('.proj-card') || [];
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, i * 60);
    });
  }, [active]);

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="label animate-fade-up opacity-0">Portfolio</span>
          <h1 className="display-lg animate-fade-up opacity-0 delay-1" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
            Our Work
          </h1>
          <p className="body-lg animate-fade-up opacity-0 delay-2" style={{ maxWidth: 520 }}>
            A curated selection of projects spanning residential, commercial, civic and cultural typologies across four continents.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="section-sm">
        <div className="container">
          <div className="filter-bar">
            {categories.map(c => (
              <button
                key={c}
                id={`filter-${c.toLowerCase().replace(/\s/g, '-')}`}
                className={`filter-btn${active === c ? ' active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="projects-grid" ref={gridRef}>
            {filtered.map(p => (
              <div key={p.id} className="proj-card card" style={{ background: p.bg }}>
                <div className="proj-card-img" style={{ background: p.bg }}>
                  <div className="proj-card-overlay" />
                  <span className="badge proj-badge">{p.category}</span>
                </div>
                <div className="proj-card-body">
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400 }}>{p.title}</h3>
                  <div className="proj-meta">
                    <span>{p.location}</span>
                    <span>{p.year}</span>
                    <span>{p.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-sm" style={{ marginBottom: '1rem' }}>Have a project in mind?</h2>
          <p className="body-lg" style={{ marginBottom: '2rem' }}>Let's bring your vision to life.</p>
          <Link to="/checkout" className="btn btn-primary">Start a Project</Link>
        </div>
      </section>
    </div>
  );
}

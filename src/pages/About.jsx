import { Link } from 'react-router-dom';

const team = [
  { name: 'Helena Voss', role: 'Founding Principal', bio: 'Helena trained at the Architectural Association and worked with Zaha Hadid Architects before founding Olastech.me in 2006. Her work spans residential, civic, and cultural typologies across Europe and the Middle East.' },
  { name: 'Marcus Aldridge', role: 'Principal, Commercial', bio: 'Marcus leads our commercial studio with 20 years of experience delivering complex, large-scale developments. He holds a RIBA Part III and a Masters in Urban Design from UCL.' },
  { name: 'Priya Sharma', role: 'Director, Interiors', bio: 'Priya brings a background in material research and craft to every project. She previously led the interior architecture team at Heatherwick Studio.' },
  { name: 'James Okoro', role: 'Associate, Sustainability', bio: 'James drives our sustainability agenda, advising on BREEAM, Passivhaus and embodied carbon targets. He is a certified WELL AP and Living Future Ambassador.' },
];

const awards = [
  { year: '2024', title: 'RIBA National Award', project: 'Meridian Tower' },
  { year: '2023', title: 'Stirling Prize Shortlist', project: 'Nova Cultural Centre' },
  { year: '2023', title: 'AJ100 Practice of the Year', project: 'Olastech.me' },
  { year: '2022', title: 'World Architecture Festival Award', project: 'Pier 9 Mixed-Use' },
  { year: '2021', title: 'RIBA European Award', project: 'Parliament Quarter' },
];

export default function About() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <span className="label animate-fade-up opacity-0">Who We Are</span>
          <h1 className="display-lg animate-fade-up opacity-0 delay-1" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
            The Studio
          </h1>
          <p className="body-lg animate-fade-up opacity-0 delay-2" style={{ maxWidth: 560 }}>
            Founded in London in 2006, Olastech.me is an award-winning architectural practice with a global portfolio and an unwavering belief in the power of design to transform lives.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <div>
              <span className="label">Our Mission</span>
              <h2 className="display-md" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                Architecture that serves humanity
              </h2>
              <p className="body-lg" style={{ marginBottom: '1rem' }}>
                We believe the built environment shapes human experience in profound ways. A well-designed home reduces stress. A thoughtful workplace ignites creativity. A civic space fosters community. This belief drives everything we do.
              </p>
              <p className="body-lg">
                Our practice is built on rigorous process, open dialogue, and a commitment to delivering projects that outlast their architects.
              </p>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #1a1a2e, #2d3050)', borderRadius: 'var(--radius-xl)', height: 460, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}>
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '5rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>18</div>
                <div className="label" style={{ marginTop: '0.5rem' }}>Years of Practice</div>
                <div className="divider-gold" style={{ width: 60, margin: '1.5rem auto' }} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '5rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1 }}>240</div>
                <div className="label" style={{ marginTop: '0.5rem' }}>Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="label">Leadership</span>
            <h2 className="display-md" style={{ marginTop: '0.75rem' }}>The Team</h2>
          </div>
          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {team.map(m => (
              <div key={m.name} className="card" style={{ padding: '2rem' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold-dark), var(--gold))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: '#0a0a0a', marginBottom: '1.25rem' }}>
                  {m.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 400 }}>{m.name}</h3>
                <span className="label" style={{ display: 'block', margin: '0.25rem 0 1rem', color: 'var(--gold)' }}>{m.role}</span>
                <p className="body-sm">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="label">Recognition</span>
            <h2 className="display-md" style={{ marginTop: '0.75rem' }}>Awards & Accolades</h2>
          </div>
          <div>
            {awards.map((a, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '1.5rem 0', borderBottom: '1px solid var(--border)', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8rem', color: 'var(--gold)', minWidth: 50 }}>{a.year}</span>
                <span style={{ flex: 1, fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 400 }}>{a.title}</span>
                <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>{a.project}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="display-sm" style={{ marginBottom: '1rem' }}>Join us on your next project</h2>
          <p className="body-lg" style={{ marginBottom: '2rem' }}>We'd love to hear about your vision.</p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}

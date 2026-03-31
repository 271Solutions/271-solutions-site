import SectionTitle from '../components/SectionTitle';

const services = [
  {
    title: 'Technical Services',
    text: 'Project coordination, field documentation, asset support, site assessments, and practical technical problem-solving for operations that need things done right the first time.',
  },
  {
    title: 'Field & Facility Support',
    text: 'Hands-on support for installations, upgrades, punch-list work, maintenance coordination, and small project execution where reliability matters more than buzzwords.',
  },
  {
    title: 'Business Solutions',
    text: 'Process improvement, client-facing support, digital presence, and custom solutions that help small businesses and organizations operate with more clarity and professionalism.',
  },
];

const capabilities = [
  'Reliable project execution',
  'Clear communication with clients and stakeholders',
  'Professional documentation and deliverables',
  'Flexible support for technical and field needs',
  'Modern digital solutions with practical value',
  'Built for growth, not just appearances',
];

const process = [
  {
    step: '01',
    title: 'Assess the need',
    text: 'We start by understanding the real problem, not just the symptoms. That saves time, money, and the usual human tendency to overcomplicate simple things.',
  },
  {
    step: '02',
    title: 'Build the plan',
    text: 'Every scope gets a clear direction, defined priorities, and a practical path forward that fits the job instead of forcing the job to fit a template.',
  },
  {
    step: '03',
    title: 'Execute with discipline',
    text: 'From field support to technical delivery, the work gets done with professionalism, follow-through, and attention to details that actually matter.',
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="brand">
  <img src="/logo.png" alt="271 Solutions logo" className="brand-logo" />
  <span>271 Solutions</span>
</div>

          <nav>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
  <div className="container">
    <div>
      <p className="eyebrow">271 Solutions</p>
      <h1>Technical solutions for real-world infrastructure.</h1>
      <p className="hero-text">
        271 Solutions provides hands-on technical services, field support, and consulting...
      </p>

      <div className="hero-actions">
        <a href="#contact" className="button button-primary">
          Request a Quote
        </a>
        <a href="#services" className="button button-secondary">
          Explore Services
        </a>
      </div>
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {[
        "Electrical & Utility Support",
        "Broadband & Make-Ready Coordination",
        "Field Troubleshooting & Project Support",
        "Professional, Reliable Execution",
      ].map((item, index) => (
        <div
          key={index}
          style={{
            padding: "12px 16px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "8px",
          }}
        >
          ✓ {item}
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="section" id="services">
        <div className="container">
          <SectionTitle
            eyebrow="Services"
            title="Support that looks sharp and works hard"
            description="This site is built to communicate competence immediately. Because that still matters, even in an age where half the internet looks like it was assembled during a coffee shortage."
          />

          <div className="card-grid three-up">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark feature-band" id="about">
        <div className="container split-layout">
          <div>
            <SectionTitle
              eyebrow="About 271"
              title="A serious brand for serious work"
              description="271 Solutions is positioned as a modern, dependable company for technical services, field support, and business problem-solving. The tone is premium, confident, and grounded in substance rather than fluff."
            />
          </div>

          <div className="glass-panel">
            <p>
              This design takes inspiration from high-end industrial and technology brands: strong type,
              dark atmosphere, sharp spacing, and clean storytelling. The difference is that this version is
              built for your company, not as a copy of somebody else&apos;s homework.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Capabilities"
            title="What sets the brand apart"
            description="Use these as brand pillars now, then refine them later as 271 Solutions narrows or expands its service lines."
            align="center"
          />

          <div className="capability-grid">
            {capabilities.map((item) => (
              <div className="capability-pill" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="process">
        <div className="container">
          <SectionTitle
            eyebrow="Process"
            title="A straightforward way to work"
            description="Clean process builds trust. Also reduces the number of avoidable surprises, which humans produce at industrial scale."
          />

          <div className="card-grid three-up">
            {process.map((item) => (
              <article className="process-card" key={item.step}>
                <span className="step-tag">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <SectionTitle
              eyebrow="Contact"
              title="Ready to build the next step"
              description="Replace the placeholder contact information below with your real email, phone number, and service area before launch. Tiny detail, apparently worth mentioning."
            />
          </div>

          <div className="contact-card">
            <p><strong>Email</strong><br />Isaac@271solutions.com</p>
            <p><strong>Phone</strong><br />(505) 290-0133</p>
            <p><strong>Service Area</strong><br />New Mexico and surrounding region</p>
            <a href="mailto:Isaac@271solutions.com" className="button button-primary full-width">
              Contact 271 Solutions
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <div>
            <p className="footer-brand">271 Solutions</p>
            <p className="footer-copy">Technical services, field support, and business solutions.</p>
          </div>
          <p className="footer-copy">© 2026 271 Solutions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

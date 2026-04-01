export default function Home() {
  const services = [
    {
      title: "Infrastructure Support",
      description:
        "Practical support for utility, broadband, facilities, and infrastructure-related projects where execution matters.",
    },
    {
      title: "AI & Process Integration",
      description:
        "Identify repetitive work, streamline systems, and apply AI in ways that create real operational value.",
    },
    {
      title: "Workflow & Systems Improvement",
      description:
        "Simplify processes, improve visibility, and reduce friction across field operations, office workflows, and project coordination.",
    },
    {
      title: "Technical Project Support",
      description:
        "Reliable support for planning, documentation, coordination, problem-solving, and follow-through from start to finish.",
    },
  ];

  const focusAreas = [
    "Utilities & infrastructure",
    "Broadband & make-ready support",
    "AI adoption & workflow automation",
    "Operational systems improvement",
    "Technical field coordination",
    "Execution-driven support",
  ];

  const processSteps = [
    {
      number: "01",
      title: "Assess",
      text: "We start by understanding the real bottlenecks, the current workflow, and where the operation needs clarity.",
    },
    {
      number: "02",
      title: "Design",
      text: "We build practical solutions that fit the way work actually gets done, not the way people wish it worked in theory.",
    },
    {
      number: "03",
      title: "Implement",
      text: "We help move the solution into execution with support, visibility, and disciplined follow-through.",
    },
  ];

  return (
    <main>
      <header className="site-header">
        <div className="container nav-shell">
          <a href="#top" className="brand" aria-label="271 Solutions home">
            <img src="/logo.png" alt="271 Solutions logo" className="brand-logo" />
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#focus">Focus</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#contact" className="nav-cta">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-media">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero-poster.jpg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <div className="hero-grid"></div>
          <div className="hero-glow hero-glow-one"></div>
          <div className="hero-glow hero-glow-two"></div>
        </div>

        <div className="container hero-content">
          <p className="eyebrow">Modern systems. Real-world execution.</p>

          <h1>
            Smarter systems for infrastructure, operations, and organizations that
            need work to actually move.
          </h1>

          <p className="hero-copy">
            271 Solutions helps organizations improve processes, support technical
            projects, streamline workflows, and integrate practical AI tools that
            make operations clearer, faster, and more effective.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="button button-primary">
              Start a Conversation
            </a>
            <a href="#services" className="button button-secondary">
              Explore Services
            </a>
          </div>

          <div className="hero-highlights">
            <div className="highlight-card">
              <span className="highlight-kicker">Execution</span>
              <strong>Practical, field-aware support</strong>
            </div>
            <div className="highlight-card">
              <span className="highlight-kicker">Systems</span>
              <strong>Clearer workflows and stronger visibility</strong>
            </div>
            <div className="highlight-card">
              <span className="highlight-kicker">AI</span>
              <strong>Useful integration without the hype</strong>
            </div>
            <div className="highlight-card">
              <span className="highlight-kicker">Results</span>
              <strong>Less friction. Better follow-through.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Services</p>
            <h2>Support built for complex work, modern systems, and real operations.</h2>
            <p className="section-copy">
              We work where people, systems, and execution meet. The goal is to
              reduce friction, improve visibility, and help work move forward with
              more clarity and less waste.
            </p>
          </div>

          <div className="card-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="card-accent"></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="focus">
        <div className="container split-layout">
          <div className="split-copy">
            <p className="section-label">Focus Areas</p>
            <h2>Built to support organizations that need better systems and better execution.</h2>
            <p className="section-copy">
              271 Solutions is positioned to support infrastructure teams,
              operational leaders, and organizations ready to modernize workflows
              without creating more noise in the process.
            </p>
          </div>

          <div className="focus-list">
            {focusAreas.map((item) => (
              <div key={item} className="focus-pill">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container split-layout about-layout">
          <div className="split-copy">
            <p className="section-label">About</p>
            <h2>Built for the gap between planning and reality.</h2>
            <p className="section-copy">
              Too many organizations have good intentions, expensive tools, and
              complex workflows that still fail in day-to-day execution. 271
              Solutions exists to help close that gap.
            </p>
            <p className="section-copy">
              We focus on practical support, operational clarity, workflow
              improvement, and modern tools that help teams work smarter without
              losing sight of real-world demands.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-label">Approach</span>
              <strong>Practical, disciplined, adaptable</strong>
            </div>
            <div className="stat-card">
              <span className="stat-label">Location</span>
              <strong>Based in Grants, New Mexico</strong>
            </div>
            <div className="stat-card">
              <span className="stat-label">Mission</span>
              <strong>Bring clarity, efficiency, and follow-through to complex work</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="process">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Process</p>
            <h2>A clear approach that keeps work from stalling out.</h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article key={step.number} className="process-card">
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-box">
          <div>
            <p className="section-label">Why 271 Solutions</p>
            <h2>Modern tools only matter if they actually improve the work.</h2>
          </div>
          <p className="cta-copy">
            We help teams cut through clutter, improve process flow, support
            execution, and adopt practical systems that create real operational
            value.
          </p>
        </div>
      </section>

      <section className="section section-contact" id="contact">
        <div className="container contact-box">
          <div className="contact-copy">
            <p className="section-label">Contact</p>
            <h2>Let’s talk about your operation, project, or process.</h2>
            <p className="section-copy">
              Reach out to discuss infrastructure support, workflow improvement,
              AI integration, or technical project needs.
            </p>
          </div>

          <div className="contact-details">
            <p>
              <strong>Email</strong>
              <br />
              Isaac@271solutions.com
            </p>
            <p>
              <strong>Phone</strong>
              <br />
              (505) 290-0133
            </p>
            <p className="contact-note">
              Serving New Mexico and supporting organizations ready to work smarter.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

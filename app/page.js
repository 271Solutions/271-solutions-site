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
        "Help organizations identify repetitive work, streamline systems, and apply AI in ways that are actually useful.",
    },
    {
      title: "Systems & Workflow Improvement",
      description:
        "From field coordination to office processes, we help simplify workflows, reduce friction, and improve visibility.",
    },
    {
      title: "Technical Project Support",
      description:
        "Reliable support for planning, coordination, documentation, field-driven problem solving, and follow-through.",
    },
  ];

  const focusAreas = [
    "Utilities & infrastructure",
    "Broadband & make-ready support",
    "Process improvement",
    "AI adoption & workflow automation",
    "Technical field coordination",
    "Operational visibility & execution",
  ];

  const processSteps = [
    {
      number: "01",
      title: "Assess",
      text: "We start by understanding the real need, the current process, and where the bottlenecks are.",
    },
    {
      number: "02",
      title: "Simplify",
      text: "We build practical solutions that reduce confusion, remove waste, and fit the way work actually gets done.",
    },
    {
      number: "03",
      title: "Implement",
      text: "We help move from idea to execution with clear communication, support, and disciplined follow-through.",
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
            <a href="#contact" className="nav-cta">Contact</a>
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
            Smarter systems for infrastructure, operations, and the work that keeps everything moving.
          </h1>

          <p className="hero-copy">
            271 Solutions helps organizations improve processes, streamline operations,
            support infrastructure projects, and integrate practical AI tools that
            make work clearer, faster, and more effective.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="button button-primary">
              Start a Conversation
            </a>
            <a href="#services" className="button button-secondary">
              View Services
            </a>
          </div>

          <div className="hero-highlights">
            <div className="highlight-card">
              <span className="highlight-kicker">Execution</span>
              <strong>Field-aware, practical support</strong>
            </div>
            <div className="highlight-card">
              <span className="highlight-kicker">Systems</span>
              <strong>Workflow clarity and process improvement</strong>
            </div>
            <div className="highlight-card">
              <span className="highlight-kicker">AI</span>
              <strong>Useful integration, not hype</strong>
            </div>
            <div className="highlight-card">
              <span className="highlight-kicker">Results</span>
              <strong>Clearer work. Better follow-through.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Services</p>
            <h2>Support designed for real operations, not just polished presentations.</h2>
            <p className="section-copy">
              We work where systems, people, and execution meet. The goal is simple:
              reduce friction, improve visibility, and help work move forward.
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
        <div className="container focus-layout">
          <div className="focus-copy">
            <p className="section-label">Focus Areas</p>
            <h2>Built to serve organizations that need better systems and better execution.</h2>
            <p className="section-copy">
              271 Solutions is positioned to support utilities, infrastructure teams,
              technical operations, and organizations looking to modernize workflows
              without creating more complexity in the process.
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
        <div className="container about-layout">
          <div className="about-panel about-panel-main">
            <p className="section-label">About</p>
            <h2>Built for the gap between planning and reality.</h2>
            <p>
              Too many organizations have good intentions, expensive tools, and
              complicated systems that still fail in day-to-day execution.
            </p>
            <p>
              271 Solutions exists to help close that gap. We focus on practical
              support, operational clarity, process improvement, and modern tools
              that help teams work smarter without losing sight of real-world demands.
            </p>
          </div>

          <div className="about-panel about-panel-side">
            <div className="stat-block">
              <span className="stat-label">Approach</span>
              <strong>Practical, disciplined, adaptable</strong>
            </div>
            <div className="stat-block">
              <span className="stat-label">Location</span>
              <strong>Based in Grants, New Mexico</strong>
            </div>
            <div className="stat-block">
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
            <h2>A straightforward approach that keeps work from stalling out.</h2>
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
            <h2>Because modern tools are only useful if they actually improve the work.</h2>
          </div>
          <p className="cta-copy">
            We help teams cut through clutter, improve process flow, support execution,
            and adopt practical systems that create real operational value.
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

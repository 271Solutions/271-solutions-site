export default function Home() {
  const services = [
    {
      title: "Technical Field Services",
      description:
        "Hands-on support for electrical, utility, and infrastructure-related work where practical execution matters.",
    },
    {
      title: "Broadband & Make-Ready Support",
      description:
        "Coordination, field verification, and project support for broadband deployment, pole attachment, and make-ready efforts.",
    },
    {
      title: "Engineering Support",
      description:
        "Real-world assistance that helps bridge the gap between design, planning, and field execution.",
    },
    {
      title: "Project Coordination",
      description:
        "Reliable support to keep jobs moving, solve problems quickly, and maintain momentum from start to finish.",
    },
  ];

  const highlights = [
    "Electrical & Utility Support",
    "Broadband & Make-Ready Coordination",
    "Field Troubleshooting & Project Support",
    "Professional, Reliable Execution",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assess the Need",
      description:
        "We start by understanding the job, the site conditions, and the real-world challenges that need to be solved.",
    },
    {
      step: "02",
      title: "Build a Practical Plan",
      description:
        "We focus on clear, workable solutions that fit the project scope, timeline, and field conditions.",
    },
    {
      step: "03",
      title: "Execute with Discipline",
      description:
        "From coordination to field support, we help move work forward with professionalism and follow-through.",
    },
  ];

  return (
    <main>
      <header className="site-header">
        <div className="container nav">
          <a href="#top" className="brand" aria-label="271 Solutions Home">
            <img src="/logo.png" alt="271 Solutions logo" className="brand-logo" />
          </a>

          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
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
            poster="/hero-poster.jpg"
          >
            <source src="hero-video.mp4" type="video/mp4" />
          </video>

          <div className="hero-overlay"></div>
          <div className="hero-grid"></div>
        </div>

        <div className="container hero-content">
          <p className="eyebrow">Field-driven technical support</p>

          <h1>Technical solutions for real-world infrastructure.</h1>

          <p className="hero-copy">
            271 Solutions provides hands-on technical services, field support,
            and practical consulting for electrical, broadband, utility, and
            infrastructure-related projects across New Mexico.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="button button-primary">
              Request a Quote
            </a>
            <a href="#services" className="button button-secondary">
              Explore Services
            </a>
          </div>

          <div className="hero-bullets">
            {highlights.map((item) => (
              <div key={item} className="bullet-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Services</p>
            <h2>Support built for projects that require real execution.</h2>
            <p className="section-copy">
              We focus on practical, dependable support for field-driven work,
              project coordination, and technical problem-solving.
            </p>
          </div>

          <div className="card-grid">
            {services.map((service) => (
              <article key={service.title} className="info-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="about">
        <div className="container two-column">
          <div>
            <p className="section-label">About</p>
            <h2>Built for practical work, not empty talk.</h2>
          </div>

          <div className="stack-text">
            <p>
              271 Solutions was built to provide dependable support where it
              matters most, in the field and in the work itself. We understand
              the gap between plans on paper and what it actually takes to get a
              job done.
            </p>
            <p>
              With experience surrounding electrical systems, broadband
              infrastructure, coordination, and technical problem-solving, our
              approach is simple: show up, solve problems, communicate clearly,
              and execute professionally.
            </p>
            <p className="location-note">
              Serving Grants, New Mexico and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Process</p>
            <h2>A straightforward approach that keeps work moving.</h2>
          </div>

          <div className="process-grid">
            {processSteps.map((item) => (
              <article key={item.step} className="process-card">
                <span className="process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-contact" id="contact">
        <div className="container contact-box">
          <div>
            <p className="section-label">Contact</p>
            <h2>Let’s talk about your project.</h2>
            <p className="section-copy">
              Reach out for service inquiries, project support, or to discuss
              how 271 Solutions can help move your work forward.
            </p>
          </div>

          <div className="contact-details">
            <p>
              <strong>Email:</strong> Isaac@271solutions.com
            </p>
            <p>
              <strong>Phone:</strong> (505) 290-0133
            </p>
            <p>Call or text for service inquiries.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

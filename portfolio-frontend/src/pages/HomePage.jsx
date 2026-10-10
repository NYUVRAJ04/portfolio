export default function HomePage() {
  return (
    <main className="page-content">
      <p className="eyebrow">01 / DRIVER PROFILE</p>

      <section className="hero">
        <div className="hero-copy">
          <p className="hero-label">
            SOFTWARE ENGINEER · BACKEND SPECIALIST
          </p>

          <h1>
            YUVRAJ
            <br />
            <span>NAIDU</span>
          </h1>

          <p className="hero-description">
            Building reliable backend systems, scalable APIs, and
            engineering-focused products.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="/projects">
              Explore Projects <span>↗</span>
            </a>
            <a className="secondary-button" href="/contact">
              Contact
            </a>
          </div>
        </div>

        <div className="driver-card">
          <div className="driver-card-top">
            <span>DRIVER STATUS</span>
            <span className="status-dot" />
          </div>

          <div className="driver-number">01</div>

          <div className="driver-details">
            <span>LOCATION</span>
            <strong>Bengaluru, India</strong>
          </div>

          <div className="driver-details">
            <span>PRIMARY STACK</span>
            <strong>Kotlin · Java · Spring Boot</strong>
          </div>

          <div className="driver-details">
            <span>FOCUS</span>
            <strong>Backend Engineering</strong>
          </div>
        </div>
      </section>

      <section className="dashboard-grid">
        <article className="dashboard-card">
          <span className="card-label">CAREER</span>
          <strong>Experience</strong>
          <p>Explore roles, responsibilities, and engineering impact.</p>
          <a href="/career">View career →</a>
        </article>

        <article className="dashboard-card">
          <span className="card-label">GARAGE</span>
          <strong>Technical Skills</strong>
          <p>Languages, frameworks, databases, and tools.</p>
          <a href="/garage">Open garage →</a>
        </article>

        <article className="dashboard-card">
          <span className="card-label">RACE CALENDAR</span>
          <strong>Projects</strong>
          <p>Selected projects, technical decisions, and outcomes.</p>
          <a href="/projects">View projects →</a>
        </article>
      </section>
    </main>
  );
}
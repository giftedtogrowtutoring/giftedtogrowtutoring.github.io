function AboutJennifer() {
  return (
    <section id="about" className="section-cream" style={{ paddingTop: 32 }}>
      <div className="shell">
        <div className="two-col">
          <div className="photo-ph" data-placeholder>
            <Deco name="sparkle" style={{ position: "absolute", top: 16, right: 16, width: 36 }} />
            <div style={{ textAlign: "center", padding: 24 }}>
              <Character kind="lemon" size={88} />
              <div className="hand" style={{ color: "var(--plum)", opacity: 0.65, marginTop: 12, fontSize: "1.5rem" }}>
                Photo of Jennifer<br/>goes here
              </div>
            </div>
          </div>
          <div>
            <div className="eyebrow-row">
              <span className="dot"></span>
              <span className="eyebrow">About Jennifer</span>
            </div>
            <h2 className="h1">One teacher, every session.</h2>
            <p className="lead" style={{ marginTop: 12 }}>
              When you write to Gifted to Grow, you reach me — not a desk, not a coordinator.
              I read every note myself, and I'll write back the same day.
            </p>
            <p style={{ marginTop: 12 }}>
              I taught for twenty-five years in Florida public and private K–6 classrooms before
              opening this tutoring practice. I keep my caseload small on purpose so I can know
              each of your children well.
            </p>
            <div className="credentials">
              <span className="badge">Certified PreK–6</span>
              <span className="badge">Reading Endorsed</span>
              <span className="badge">ESOL Endorsed</span>
              <span className="badge">FL Step Up Provider</span>
              <span className="badge">25 years experience</span>
            </div>
            <p className="hand hand--green" style={{ marginTop: 24 }}>
              "This is my favorite part of the week."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AboutJennifer });

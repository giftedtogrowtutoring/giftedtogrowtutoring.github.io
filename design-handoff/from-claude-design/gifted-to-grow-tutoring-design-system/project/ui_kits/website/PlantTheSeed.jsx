function PlantTheSeed() {
  return (
    <section id="plant" className="section-lavender">
      <Deco name="sprout" className="scatter" style={{ top: 32, left: "5%", width: 70, transform: "rotate(-8deg)" }} />
      <Deco name="leaf"   className="scatter" style={{ bottom: 40, right: "6%", width: 90, transform: "scaleX(-1) rotate(15deg)" }} />
      <div className="shell">
        <div className="section-head">
          <div className="eyebrow-row">
            <span className="dot"></span>
            <span className="eyebrow">Plant the Seed</span>
          </div>
          <h2 className="h1">Every child carries something <span style={{ position: "relative", display: "inline-block" }}>
            wonderful
            <img src="assets/deco-underline.svg" alt="" style={{ position: "absolute", left: 0, right: 0, bottom: -10, width: "100%", height: 14 }} />
          </span> waiting to grow.</h2>
          <p className="lead">
            When a child struggles with reading or math, it isn't because something is wrong with them.
            It usually means we haven't yet found the way <em>they</em> learn best.
            That's where we start.
          </p>
        </div>

        <div className="two-col">
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <p>
              I'm <strong>Jennifer Pollard</strong>. For twenty-five years I taught in K–6 classrooms across Florida.
              Now I tutor one-on-one — because that's where the deepest progress happens.
            </p>
            <p>
              Every session is built around your child. No worksheets pulled from a binder.
              No curriculum that doesn't fit. Just patient, thoughtful teaching from someone who
              has seen what works for hundreds of different kinds of learners.
            </p>
            <p className="hand hand--green" style={{ marginTop: 8 }}>
              "Reading is the doorway. I love opening it." — Jennifer
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <div className="card card--lemon" style={{ padding: 28 }}>
              <div className="eyebrow" style={{ marginBottom: 8 }}>What I believe</div>
              <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7, fontSize: "1.0625rem", color: "var(--plum)" }}>
                <li>Slow is smooth. Smooth is fast.</li>
                <li>A child should leave a session lighter than they came in.</li>
                <li>Parents are partners, not spectators.</li>
                <li>Faith is part of who I am — patience, not pressure.</li>
              </ul>
            </div>
            <Deco name="sparkle" style={{ position: "absolute", top: -14, right: -14, width: 44 }} />
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PlantTheSeed });

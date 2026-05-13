function TendTheRoots({ audience }) {
  const services = [
    {
      key: "reading",
      icon: "book-open",
      title: "Reading",
      body: "Phonics, fluency, comprehension. We diagnose what's missing and rebuild it gently. Reading Endorsed and ESOL Endorsed.",
      deco: "book",
    },
    {
      key: "writing",
      icon: "pencil-line",
      title: "Writing",
      body: "From a hesitant sentence to a confident paragraph. Handwriting, spelling, structure — and the courage to say what they mean.",
      deco: "pencil",
    },
    {
      key: "math",
      icon: "calculator",
      title: "Math",
      body: "Number sense first, then the steps. We use manipulatives, paper, and real-life problems so the why comes before the how.",
      deco: "apple",
    },
  ];

  const bandColor =
    audience === "anxious"    ? "var(--lemon)" :
    audience === "homeschool" ? "var(--orange)" :
    audience === "faith"      ? "var(--green)"  :
    "var(--plum)";

  return (
    <section id="roots" className="section-cream">
      <Deco name="vine" className="scatter" style={{ top: 0, left: 0, width: "60%", opacity: 0.55 }} />
      <div className="shell">
        <div className="section-head">
          <div className="eyebrow-row">
            <span className="dot"></span>
            <span className="eyebrow">Tend the Roots</span>
          </div>
          <h2 className="h1">What a session looks like.</h2>
          <p className="lead">
            Fifty minutes, one-on-one. In your home in Sarasota or Bradenton, in my workspace,
            or over Zoom. We start by getting your child comfortable.
            Then we work — patiently — on the thing that's been hard.
          </p>
        </div>

        <div className="services">
          {services.map(s => (
            <article key={s.key} className="svc" style={{
              borderTop: `4px solid ${bandColor}`,
            }}>
              <i data-lucide={s.icon} style={{ width: 32, height: 32, color: "var(--plum)" }}></i>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <Deco name={s.deco} className="deco" />
            </article>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: "center" }}>
          <p className="hand" style={{ color: "var(--plum)", fontSize: "1.75rem" }}>
            "First conversation is always free — and never a sales pitch."
          </p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { TendTheRoots });

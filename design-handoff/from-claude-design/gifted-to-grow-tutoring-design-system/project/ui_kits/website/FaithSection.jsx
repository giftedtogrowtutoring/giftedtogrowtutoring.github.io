function FaithSection() {
  return (
    <section className="faith">
      <Deco name="leaf"   className="scatter" style={{ top: 36, left: "8%",  width: 70, transform: "rotate(-10deg)" }} />
      <Deco name="sprout" className="scatter" style={{ top: 36, right: "8%", width: 70, transform: "scaleX(-1)" }} />
      <div className="shell">
        <div className="eyebrow-row" style={{ justifyContent: "center" }}>
          <span className="dot"></span>
          <span className="eyebrow" style={{ color: "var(--green)" }}>A quiet word, for families who'd want to know</span>
        </div>
        <p className="verse">
          "Now to him who is able to do immeasurably more than all we ask or imagine…"
        </p>
        <p className="citation">Ephesians 3:20</p>
        <p className="leadcopy">
          Faith is part of who I am. It shows up as patience, as belief in each child's
          worth, as steadiness on the slow days. If that matters to you, you're in good company here.
          If it doesn't, you're just as welcome — what your child gets from our sessions is the same either way.
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { FaithSection });

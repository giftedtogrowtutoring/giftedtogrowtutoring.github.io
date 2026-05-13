function JoinTheGarden({ onContact }) {
  return (
    <section id="garden" className="section-cream">
      <div className="shell">
        <div className="join-card">
          <Deco name="sprout"  className="deco-corner-1" />
          <Deco name="sparkle" className="deco-corner-2" />
          <div className="eyebrow-row" style={{ justifyContent: "center" }}>
            <span className="dot"></span>
            <span className="eyebrow" style={{ color: "var(--lemon)" }}>Join the Garden</span>
          </div>
          <h2 className="h1" style={{ color: "var(--cream)" }}>
            Tell me about your child.
          </h2>
          <p>
            A sentence or two is plenty. The first conversation is free, and you'll hear back
            from me — Jennifer — by the end of the day.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-primary" onClick={onContact}>
              <i data-lucide="send"></i>
              Send Jennifer a note
            </button>
            <a href="tel:+19415868421" className="btn btn-ghost"
               style={{ borderColor: "var(--lemon)", color: "var(--lemon)" }}>
              <i data-lucide="phone"></i>
              (941) 586-8421
            </a>
          </div>
          <p className="hand" style={{ color: "var(--lemon)", marginTop: 28, fontSize: "1.5rem" }}>
            "I'll write back the same day, promise."
          </p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { JoinTheGarden });

function Hero({ onContact, audience, onPickAudience }) {
  return (
    <section className="hero">
      <Deco name="sparkle" className="scatter" style={{ top: 80,  left: "6%",  width: 28 }} />
      <Deco name="leaf"    className="scatter" style={{ top: 32,  right: "4%", width: 80, transform: "rotate(20deg)" }} />
      <Deco name="seed"    className="scatter" style={{ bottom: 36, left: "10%", width: 28, opacity: 0.6 }} />

      <div className="shell">
        <div className="hero-inner">
          <div>
            <div className="eyebrow-row">
              <span className="dot"></span>
              <span className="eyebrow">K–6 Reading, Writing &amp; Math · Sarasota / Bradenton</span>
            </div>
            <h1>
              Reading should feel like a <span className="underline-word">story</span>,<br/>
              not a struggle.
            </h1>
            <p className="lead">
              One certified educator. Twenty-five years in K–6 classrooms.
              Patient, one-on-one tutoring that meets your child exactly where they are.
            </p>

            <div className="hero-cta-row">
              <button className="btn btn-primary" onClick={onContact}>
                <i data-lucide="send"></i>
                Send Jennifer a note
              </button>
              <a href="tel:+19415868421" className="phone-link" style={{ fontSize: "1.0625rem" }}>
                <i data-lucide="phone"></i>or call (941) 586-8421
              </a>
            </div>

            <AudiencePicker selected={audience} onSelect={onPickAudience} />

            <div className="trust-row">
              <span><b>FL Step Up</b> Provider</span>
              <span>·</span>
              <span>Certified PreK–6</span>
              <span>·</span>
              <span>Reading Endorsed</span>
              <span>·</span>
              <span>ESOL Endorsed</span>
            </div>
          </div>

          <div className="hero-character-stage">
            <Deco name="sparkle" className="sparkle-1 breathe" />
            <Deco name="sparkle" className="sparkle-2 breathe breathe--offset" />
            <Deco name="sprout"  className="sprout" />
            <img src="assets/deco-book.svg" alt="" className="book" style={{ width: "92%", left: "4%", bottom: "8%" }} />
            <Character kind="lemon"  className="lemon" />
            <Character kind="orange" className="orange" breatheOffset />
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });

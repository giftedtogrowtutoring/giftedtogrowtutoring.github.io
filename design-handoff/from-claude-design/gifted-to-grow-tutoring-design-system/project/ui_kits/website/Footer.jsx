function Footer() {
  return (
    <footer className="site-foot">
      <div className="shell">
        <div className="foot-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <img src="assets/character-lemon.svg" width="32" height="38" alt="" />
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 900,
                             fontSize: 20, color: "var(--plum)" }}>Gifted to Grow Tutoring</span>
            </div>
            <p style={{ margin: 0, maxWidth: "32em" }}>
              K–6 reading, writing &amp; math tutoring with Jennifer Pollard.
              Serving families in Sarasota and Bradenton, Florida, in person and on Zoom.
            </p>
            <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)" }}></span>
              <span style={{ fontWeight: 700, color: "var(--plum)" }}>FL Step Up for Students Provider</span>
            </div>
          </div>
          <div>
            <h4>Pages</h4>
            <a href="#plant">Philosophy</a>
            <a href="#roots">What we do</a>
            <a href="#fruit">Stories</a>
            <a href="#about">About Jennifer</a>
            <a href="#garden">Contact</a>
          </div>
          <div>
            <h4>Reach Jennifer</h4>
            <a href="tel:+19415868421"><i data-lucide="phone" style={{ width: 14, height: 14, display: "inline", verticalAlign: "middle", marginRight: 6 }}></i>(941) 586-8421</a>
            <a href="mailto:jennifer@giftedtogrowtutoring.com"><i data-lucide="mail" style={{ width: 14, height: 14, display: "inline", verticalAlign: "middle", marginRight: 6 }}></i>jennifer@giftedtogrowtutoring.com</a>
            <a href="#"><i data-lucide="map-pin" style={{ width: 14, height: 14, display: "inline", verticalAlign: "middle", marginRight: 6 }}></i>Sarasota / Bradenton, FL</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Gifted to Grow Tutoring · Jennifer Pollard, M.Ed.</span>
          <span>Certified PreK–6 · Reading Endorsed · ESOL Endorsed</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });

function Nav({ onContact }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "rgba(255,248,236,0.86)" : "var(--cream)",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border-soft)" : "1px solid transparent",
      transition: "all 220ms cubic-bezier(0.32, 0.72, 0.32, 1)",
    }}>
      <div className="shell" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 24px",
      }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src="assets/character-lemon.svg" width="36" height="42" alt="" className="breathe" />
          <span style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            color: "var(--plum)", fontSize: 22, letterSpacing: "-0.01em", lineHeight: 1,
          }}>Gifted to Grow</span>
        </a>
        <div className="nav-links" style={{
          display: "flex", gap: 28, alignItems: "center",
          fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15,
        }}>
          <a href="#plant"  style={navLink}>Philosophy</a>
          <a href="#roots"  style={navLink}>What we do</a>
          <a href="#fruit"  style={navLink}>Stories</a>
          <a href="#about"  style={navLink}>About Jennifer</a>
          <a href="tel:+19415868421" className="phone-link" style={{ marginLeft: 8 }}>
            <i data-lucide="phone"></i>(941) 586-8421
          </a>
          <button className="btn btn-primary" onClick={onContact}
                  style={{ padding: "10px 18px", fontSize: 15 }}>
            Send Jennifer a note
          </button>
        </div>
      </div>
    </nav>
  );
}
const navLink = { color: "var(--plum)", textDecoration: "none" };

Object.assign(window, { Nav });

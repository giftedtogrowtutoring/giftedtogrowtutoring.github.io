function ContactModal({ open, onClose }) {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", grade: "2nd grade", message: "" });
  const firstRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    setSent(false);
    setForm({ name: "", email: "", grade: "2nd grade", message: "" });
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    setTimeout(() => firstRef.current?.focus(), 100);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Send Jennifer a note">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close">
          <i data-lucide="x" style={{ width: 18, height: 18, color: "var(--plum)" }}></i>
        </button>

        {sent ? (
          <ThankYou onClose={onClose} />
        ) : (
          <>
            <div className="eyebrow-row">
              <span className="dot"></span>
              <span className="eyebrow">Send Jennifer a note</span>
            </div>
            <h3 className="h2" style={{ marginBottom: 8 }}>A sentence or two is plenty.</h3>
            <p style={{ color: "var(--ink-soft)", marginTop: 0, marginBottom: 22 }}>
              I'll write back the same day. Promise.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="field-row">
                <div className="field">
                  <label>Your name</label>
                  <input ref={firstRef} required value={form.name}
                         onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" required value={form.email}
                         onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div className="field">
                <label>Child's grade</label>
                <select value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value })}>
                  <option>Kindergarten</option>
                  <option>1st grade</option>
                  <option>2nd grade</option>
                  <option>3rd grade</option>
                  <option>4th grade</option>
                  <option>5th grade</option>
                  <option>6th grade</option>
                </select>
              </div>
              <div className="field">
                <label>What's on your mind?</label>
                <textarea required placeholder="She loved books last year. Now she avoids them. I'd love to talk."
                          value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: 8 }}>
                <i data-lucide="send"></i>Send to Jennifer
              </button>
              <p style={{ fontSize: 13, color: "var(--ink-soft)", textAlign: "center", marginTop: 12 }}>
                Or call <a href="tel:+19415868421" style={{ color: "var(--plum)" }}>(941) 586-8421</a> — same teacher, either way.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function ThankYou({ onClose }) {
  return (
    <div style={{ textAlign: "center", padding: "8px 0" }}>
      <img src="assets/character-lemon.svg" width="100" height="116" className="breathe" alt="" />
      <h3 className="h2" style={{ marginTop: 16, marginBottom: 8 }}>Got it. Thank you.</h3>
      <p style={{ color: "var(--ink-soft)" }}>
        I'll read your note this evening and write back before tomorrow morning.
      </p>
      <p className="hand hand--green" style={{ fontSize: "1.75rem", marginTop: 16 }}>
        — Jennifer
      </p>
      <button className="btn btn-plum" onClick={onClose} style={{ marginTop: 16 }}>Close</button>
    </div>
  );
}

Object.assign(window, { ContactModal });

function AudiencePicker({ selected, onSelect }) {
  const paths = [
    { id: "anxious",    cls: "path-anxious",    t: "Worried about reading",  s: "My child is falling behind" },
    { id: "homeschool", cls: "path-homeschool", t: "We homeschool",          s: "Supplement my curriculum" },
    { id: "faith",      cls: "path-faith",      t: "Faith matters to us",    s: "A teacher with shared values" },
  ];
  return (
    <div role="tablist" aria-label="Which best describes you?" className="audience-row">
      {paths.map(p => (
        <button
          key={p.id}
          role="tab"
          aria-selected={selected === p.id}
          className={`aud-chip ${p.cls} ${selected === p.id ? "active" : ""}`}
          onClick={() => onSelect(p.id)}
        >
          <span className="stripe"></span>
          <span className="t">{p.t}</span>
          <span className="s">{p.s}</span>
        </button>
      ))}
    </div>
  );
}

Object.assign(window, { AudiencePicker });

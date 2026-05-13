// Tiny wrapper components for the hand-drawn SVG decorations.
// Each accepts {style, className, size} and renders the matching <img>.

function Deco({ name, alt = "", size, className = "", style = {}, breathe = false, breatheOffset = false }) {
  const cls = [
    className,
    breathe ? "breathe" : "",
    breatheOffset ? "breathe--offset" : "",
  ].filter(Boolean).join(" ");
  const sty = size ? { width: size, height: "auto", ...style } : style;
  return (
    <img
      src={`assets/deco-${name}.svg`}
      alt={alt}
      className={cls}
      style={sty}
      aria-hidden={alt ? undefined : true}
    />
  );
}

function Character({ kind, size = 120, breatheOffset = false, className = "", style = {} }) {
  return (
    <img
      src={`assets/character-${kind}.svg`}
      alt={`${kind} character`}
      width={size}
      className={["breathe", breatheOffset ? "breathe--offset" : "", className].filter(Boolean).join(" ")}
      style={{ height: "auto", ...style }}
    />
  );
}

Object.assign(window, { Deco, Character });

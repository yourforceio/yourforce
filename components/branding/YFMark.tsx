type YFMarkProps = {
  className?: string;
  /** Colour of the F: off-white on dark backgrounds, ink on light ones. */
  tone?: "light" | "dark";
  title?: string;
};

/**
 * The YourForce mark: the original YF shape, recoloured for the 2026 brand.
 * The Y and the top bar are amber; the F is off-white (on dark) or ink (on light).
 * On light backgrounds the amber is a shade deeper so the Y still stands out.
 */
export default function YFMark({ className = "", tone = "light", title }: YFMarkProps) {
  const amber = tone === "light" ? "#F5B83D" : "#E0A11B";
  const f = tone === "light" ? "#F5F4F0" : "#0F1215";

  return (
    <svg
      viewBox="0 0 310 280"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <polygon points="29,32 112,168 109,187 60,260 117,262 154,204 154,136 83,33" fill={amber} />
      <polygon
        points="290,89 185,89 162,102 155,207 119,261 160,261 192,213 193,186 232,185 253,156 195,153 194,129 268,124"
        fill={f}
      />
      <polygon points="180,72 248,73 255,68 277,33 207,32" fill={amber} />
    </svg>
  );
}

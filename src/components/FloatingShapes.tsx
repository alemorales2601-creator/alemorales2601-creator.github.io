type Variant = "dots" | "lines" | "ring";

export default function FloatingShapes({
  variant = "dots",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  if (variant === "lines") {
    return (
      <svg width="120" height="120" viewBox="0 0 120 120" className={className} aria-hidden>
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1={0}
            y1={i * 15}
            x2={120}
            y2={i * 15}
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary/20"
          />
        ))}
      </svg>
    );
  }
  if (variant === "ring") {
    return (
      <svg width="140" height="140" viewBox="0 0 140 140" className={className} aria-hidden>
        <circle cx="70" cy="70" r="60" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent/40" />
        <circle cx="70" cy="70" r="40" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary/20" />
      </svg>
    );
  }
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" className={className} aria-hidden>
      {Array.from({ length: 8 }).map((_, r) =>
        Array.from({ length: 8 }).map((_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={c * 18 + 4}
            cy={r * 18 + 4}
            r="1.5"
            className="fill-primary/30"
          />
        ))
      )}
    </svg>
  );
}

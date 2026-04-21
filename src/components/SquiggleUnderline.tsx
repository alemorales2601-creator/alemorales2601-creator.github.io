export default function SquiggleUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      width="120"
      height="10"
      viewBox="0 0 120 10"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M2 5 Q 12 1, 22 5 T 42 5 T 62 5 T 82 5 T 102 5 T 118 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-accent"
      />
    </svg>
  );
}

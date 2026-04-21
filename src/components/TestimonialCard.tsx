import { Quote } from "lucide-react";

export default function TestimonialCard({
  photo,
  name,
  school,
  spanish,
  english,
  tiltRight = false,
  delay = 0,
}: {
  photo: string;
  name: string;
  school: string;
  spanish: string;
  english: string;
  tiltRight?: boolean;
  delay?: number;
}) {
  return (
    <article
      className="tilt-card reveal flex flex-col rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
      style={{
        transitionDelay: `${delay}ms`,
        transform: tiltRight ? "rotate(0.4deg)" : "rotate(-0.3deg)",
      }}
    >
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={name}
          className="h-16 w-16 rounded-full object-cover ring-2 ring-accent/40"
        />
        <div>
          <div className="font-serif-display text-xl font-semibold text-primary">{name}</div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">{school}</div>
        </div>
      </div>
      <Quote className="mt-5 h-5 w-5 text-accent" />
      <p className="mt-2 text-sm italic leading-relaxed text-foreground/80">"{spanish}"</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">"{english}"</p>
    </article>
  );
}

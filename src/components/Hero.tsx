import { useEffect, useState } from "react";
import { ArrowRight, FileText } from "lucide-react";
import headshot from "@/assets/hugo-headshot.png";
import SquiggleUnderline from "./SquiggleUnderline";
import FloatingShapes from "./FloatingShapes";

const FULL_TEXT = "Hugo\nMorales";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 110);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <FloatingShapes variant="dots" className="absolute left-6 top-32 opacity-60" />
      <FloatingShapes variant="ring" className="absolute right-10 bottom-10 opacity-50" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-[1.2fr_0.9fr] md:px-10">
        <div className="reveal is-visible">
          <h1
            className="font-serif-display whitespace-pre-line text-5xl font-semibold leading-[1.02] text-primary md:text-7xl lg:text-8xl"
            aria-label="Hugo Morales"
          >
            <span>{typed}</span>
            <span
              className="typewriter-cursor"
              style={{ opacity: done ? undefined : 1 }}
              aria-hidden
            />
          </h1>
          <SquiggleUnderline className="mt-4" />
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
            Finance student at Walton College of Business with hands-on experience in financial
            modeling, operational analysis, and business development. Founded and scaled a
            revenue-generating company to $2,200 average revenue per client. Bilingual in English
            and Spanish with demonstrated ability to drive measurable results in fast-paced,
            analytical environments.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/Hugo_Morales_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <FileText className="h-4 w-4" />
              View Resume
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/hugo-morales-arteaga/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/70 bg-card px-6 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="LinkedIn profile"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.6 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.56V15.4c0-1.7-.03-3.9-2.38-3.9-2.38 0-2.74 1.86-2.74 3.78V22H7.82V8z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="reveal is-visible relative mx-auto aspect-[4/5] w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] bg-accent/30 blur-2xl" aria-hidden />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-tilt)]">
            <img
              src={headshot}
              alt="Hugo Morales"
              className="image-bright h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

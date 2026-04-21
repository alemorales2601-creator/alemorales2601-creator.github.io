import { useEffect, useState } from "react";
import logo from "@/assets/hm-logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#pitch", label: "Pitch" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md py-3"
          : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="HM" className="h-9 w-9 rounded-md object-contain bg-primary p-1" />
          <span className="font-serif-display text-lg font-semibold text-primary hidden sm:inline">
            Hugo Morales
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/70 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="/Hugo_Morales_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-primary px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Resume
        </a>
      </div>
    </header>
  );
}

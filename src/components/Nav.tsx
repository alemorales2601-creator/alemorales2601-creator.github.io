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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all ${
          scrolled
            ? "border-b border-border bg-background/85 backdrop-blur-md py-3"
            : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="HM" className="h-10 w-10 rounded-md object-contain" />
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
          <div className="flex items-center gap-3">
            <a
              href="/Hugo_Morales_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-primary px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Resume
            </a>
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-md focus:outline-none"
            >
              <span
                className={`block h-[2px] w-6 bg-primary rounded transition-all duration-300 origin-center ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-primary rounded transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-primary rounded transition-all duration-300 origin-center ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-x-0 top-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel */}
        <nav
          className={`absolute right-0 top-0 h-screen w-64 bg-background shadow-2xl flex flex-col pt-24 pb-10 px-8 gap-2 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base font-medium text-foreground/80 border-b border-border/40 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Hugo_Morales_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-6 rounded-full border border-primary px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary text-center transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Resume
          </a>
        </nav>
      </div>
    </>
  );
}

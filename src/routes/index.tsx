import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  Briefcase,
  GraduationCap,
  TrendingUp,
  BarChart3,
  Sparkles,
  Languages,
  Trophy,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowRight,
  Check,
} from "lucide-react";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CursorBlob from "@/components/CursorBlob";
import SquiggleUnderline from "@/components/SquiggleUnderline";
import FloatingShapes from "@/components/FloatingShapes";
import TestimonialCard from "@/components/TestimonialCard";

import globalPhoto from "@/assets/hugo-global.jpg";
import pitchPhoto from "@/assets/hugo-pitch.jpg";
import thomasImg from "@/assets/thomas-sanabria.jpg";
import carlosImg from "@/assets/carlos-pazos.jpg";
import andreyImg from "@/assets/andrey-rincon.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hugo Morales · Finance Student & Founder" },
      {
        name: "description",
        content:
          "Hugo Morales: Finance student at Walton College of Business, founder of Elite Level Scouting USA. Bilingual, analytical, results-driven.",
      },
      { property: "og:title", content: "Hugo Morales · Finance Student & Founder" },
      {
        property: "og:description",
        content:
          "Finance student at Walton College of Business with hands-on experience in financial modeling and business development.",
      },
    ],
  }),
  component: Index,
});

const SectionHeader = ({
  eyebrow,
  title,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}) => (
  <div className="reveal mb-14 max-w-2xl">
    <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-muted-foreground">
      <Icon className="h-4 w-4 text-accent" />
      {eyebrow}
    </div>
    <h2 className="font-serif-display text-4xl font-semibold leading-tight text-primary md:text-5xl">
      {title}
    </h2>
    <SquiggleUnderline className="mt-3" />
  </div>
);

function Index() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CursorBlob />
      <Nav />
      <main className="relative z-10">
        <Hero />

        {/* ABOUT / GLOBAL PERSPECTIVE */}
        <section
          id="about"
          className="relative py-24 md:py-32"
          style={{ backgroundColor: "hsl(var(--surface-alt))" }}
        >
          <FloatingShapes variant="dots" className="absolute right-8 top-12 opacity-50" />
          <div className="mx-auto flex max-w-4xl flex-col items-center px-5 text-center md:px-10">
            <div className="reveal mb-10 max-w-2xl">
              <div className="mb-3 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.32em] text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-accent" />
                Background
              </div>
              <h2 className="font-serif-display text-4xl font-semibold leading-tight text-primary md:text-5xl">
                A global perspective.
              </h2>
              <SquiggleUnderline className="mx-auto mt-3" />
            </div>

            <div className="reveal relative mb-10 aspect-[4/5] w-full max-w-xs overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
              <img
                src={globalPhoto}
                alt="Hugo Morales holding First Place certificate at Razorback Stadium"
                className="image-bright h-full w-full object-cover"
              />
            </div>

            <div
              className="reveal space-y-5 text-lg leading-relaxed text-foreground/85"
              style={{ transitionDelay: "120ms" }}
            >
              <p>
                Originally from Bolivia, I'm a{" "}
                <strong className="text-primary">student-athlete turned business student</strong>.
                At the Walton College, I'm obsessed with how Finance and AI can scale companies. I
                don't just study theory, I apply analytics to my own ventures.
              </p>
              <p>
                Beginning with an athletic scholarship in men's soccer at Fulton-Montgomery
                Community College, I now study{" "}
                <strong className="text-primary">Finance, Management & Investment</strong> with a
                Minor in Business Analytics at the University of Arkansas, combining an
                international perspective with hands-on entrepreneurship.
              </p>
              <p>
                My background across venture-building, cross-cultural operations, and competitive
                athletics shapes how I approach every problem: analytically, adaptively, and with
                long-term ownership in mind.
              </p>
            </div>
          </div>
        </section>

        {/* PITCH / FOUNDER */}
        <section id="pitch" className="relative overflow-hidden py-24 md:py-32">
          <FloatingShapes variant="lines" className="absolute -left-2 top-10 opacity-50" />
          <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2 md:px-10">
            <div className="reveal relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-tilt)]">
              <img
                src={pitchPhoto}
                alt="Hugo Morales presenting at the Made@U of A Entrepreneurship Showcase"
                className="image-bright h-full w-full object-cover"
              />
            </div>

            <div
              className="reveal flex flex-col justify-center"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                <Trophy className="h-4 w-4" />
                1st Place · Pitch Competition Winner
              </div>
              <h2 className="font-serif-display text-4xl font-semibold leading-[1.05] text-primary md:text-6xl">
                Made@U of A
                <br />
                Entrepreneurship
                <br />
                Showcase.
              </h2>
              <SquiggleUnderline className="mt-4" />
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Won top honors at the Made@U of A Entrepreneurship Showcase at the Walton College
                of Business. Presented a strategic business model to a panel of judges, focusing
                on market valuation and revenue scalability.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {[
                  "Public Speaking",
                  "Financial Forecasting",
                  "Strategy",
                  "Market Valuation",
                  "Revenue Scalability",
                  "Walton College · OEI",
                ].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="relative py-24 md:py-32"
          style={{ backgroundColor: "hsl(var(--surface-alt))" }}
        >
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <SectionHeader
              eyebrow="Professional Trajectory"
              title="Experience."
              icon={Briefcase}
            />

            <div className="space-y-12">
              {[
                {
                  num: "01",
                  date: "April 2025 to Present",
                  title: "Founder",
                  co: "Elite Level Scouting USA · Santa Cruz, Bolivia",
                  bullets: [
                    "Founded and scaled a sports-recruitment business from 0 to $2,200 average revenue per client through structured multi-year payment plans and a defined pricing model.",
                    "Managed a portfolio of 10+ active clients, maintaining recurring revenue forecasts, tracking payment timelines, and achieving a 100% placement rate for clients completing the program.",
                    "Analyzed pricing structures, client ROI, and competitive positioning to refine the revenue model and maintain profitability across all active engagements.",
                  ],
                },
                {
                  num: "02",
                  date: "April 2026 to Present",
                  title: "Operations & Strategic Insights Intern",
                  co: "Have More Safety · University of Arkansas Venture Intern Program",
                  bullets: [
                    "Analyzed behavioral patterns and student demographic data to identify operational friction points within university safety systems, translating qualitative findings into actionable insights for program scaling.",
                    "Synthesized complex research into a Strategic Insight Brief and Visual Map, providing data-driven recommendations to guide curriculum design and institutional messaging strategies.",
                    "Evaluated institutional risk mitigation frameworks and Title IX compliance standards to surface gaps in existing systems, contributing to the development of a scalable, digital-first training model.",
                  ],
                },
                {
                  num: "03",
                  date: "Dec 2025 to Jan 2026",
                  title: "Logistics Intern",
                  co: "Trebol Ingeniería y Construcción SRL",
                  bullets: [
                    "Supported coordination across 32 active construction projects.",
                    "Reduced coordination errors by ~50% via Google Workspace process redesign.",
                    "Maintained Excel-based inventory tracking across multi-site operations.",
                  ],
                },
                {
                  num: "04",
                  date: "August 2025 to December 2025",
                  title: "Operations Associate",
                  co: "Chartwells Dining Services · University of Arkansas",
                  bullets: [
                    "Managed high-volume financial transactions and point-of-sale (POS) operations, ensuring 100% accuracy in daily cash reconciliations and financial reporting for a high-traffic campus outlet.",
                    "Coordinated Chef Operations and inventory workflows, monitoring service quality and resource allocation to maintain operational efficiency and minimize waste during peak demand hours.",
                    "Optimized the customer experience by resolving real-time operational bottlenecks and serving as a key point of contact for diners, balancing fast-paced service with professional client relations.",
                  ],
                },
                {
                  num: "05",
                  date: "Jan 2024 to May 2025",
                  title: "Operations Supervisor",
                  co: "FMCC Library · Johnstown, NY",
                  desc: "Managed daily operations serving a 2,000+ student body. Maintained zero asset loss across all supervised equipment.",
                },
              ].map((e, i) => (
                <article
                  key={e.num}
                  className="reveal grid gap-6 border-t border-border/70 pt-8 md:grid-cols-[80px_1fr]"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="font-serif-display text-5xl text-accent/60">{e.num}</div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {e.date}
                    </div>
                    <h3 className="mt-1 font-serif-display text-3xl font-semibold text-primary">
                      {e.title}
                    </h3>
                    <div className="text-sm font-medium text-foreground/70">{e.co}</div>
                    {e.desc && (
                      <p className="mt-3 max-w-3xl leading-relaxed text-foreground/80">
                        {e.desc}
                      </p>
                    )}
                    {e.bullets && (
                      <ul className="mt-4 space-y-2 text-foreground/80">
                        {e.bullets.map((b) => (
                          <li key={b} className="flex gap-3">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="relative py-24 md:py-32">
          <FloatingShapes variant="dots" className="absolute -right-4 top-10 opacity-50" />
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <SectionHeader
              eyebrow="Core Competencies"
              title="Technical stack."
              icon={TrendingUp}
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Finance",
                  icon: TrendingUp,
                  items: [
                    "Capital Budgeting",
                    "NPV Modeling",
                    "Investment Valuation",
                    "Revenue Forecasting",
                  ],
                },
                {
                  name: "Analytics",
                  icon: BarChart3,
                  items: [
                    "Excel (Solver · Power Query)",
                    "Statistical Regression",
                    "Scenario Analysis",
                    "Financial Dashboards",
                  ],
                },
                {
                  name: "AI & Automation",
                  icon: Sparkles,
                  items: [
                    "Claude Code & Gemini",
                    "Workflow Automation",
                    "Prompt Engineering",
                    "Data Pipeline Design",
                  ],
                },
                {
                  name: "Languages",
                  icon: Languages,
                  items: ["Spanish · Native", "English · Fluent"],
                },
              ].map((s, i) => (
                <div
                  key={s.name}
                  className="tilt-card reveal rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <s.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-4 font-serif-display text-2xl font-semibold text-primary">
                    {s.name}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HONORS */}
        <section
          id="honors"
          className="relative py-24 md:py-32"
          style={{ backgroundColor: "hsl(var(--surface-alt))" }}
        >
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <SectionHeader eyebrow="Recognition" title="Honors & distinctions." icon={Award} />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  t: "1st Place · Made@U of A",
                  s: "Pitch Competition · Office of Entrepreneurship · Walton",
                },
                { t: "Bolivian Tuition Advantage Scholarship", s: "University of Arkansas" },
                { t: "Dean's List", s: "Fall 2023 · Spring 2024 · Spring 2025" },
                { t: "Athletic Scholarship", s: "Men's Soccer · FMCC" },
                { t: "Side Hustle Hub Member", s: "Office of Entrepreneurship · UofA" },
                {
                  t: "Junior · Finance, Management & Investment",
                  s: "Walton College of Business",
                },
              ].map((h, i) => (
                <div
                  key={h.t}
                  className="tilt-card reveal flex gap-4 rounded-2xl border border-border bg-card p-5"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <Trophy className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                  <div>
                    <div className="font-medium text-primary">{h.t}</div>
                    <div className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">
                      {h.s}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="reveal flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:flex-row md:items-center md:justify-between md:p-8">
              <div className="flex items-start gap-4">
                <Sparkles className="mt-1 h-6 w-6 text-accent" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Anthropic Certification
                  </div>
                  <h3 className="font-serif-display text-2xl font-semibold text-primary">
                    Claude Code in Action
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-foreground/75">
                    Hands-on proficiency using Claude Code for practical workflows, technical
                    execution, and AI-assisted problem solving.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-wider text-primary-foreground">
                <Check className="h-4 w-4" />
                Completed
              </span>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          id="testimonials"
          className="relative py-24 md:py-32"
          style={{ backgroundColor: "hsl(var(--surface-alt))" }}
        >
          <FloatingShapes variant="ring" className="absolute right-4 top-12 opacity-40" />
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <SectionHeader
              eyebrow="People who vouch for me"
              title="Client testimonials."
              icon={GraduationCap}
            />

            <div className="grid gap-7 md:grid-cols-3">
              <TestimonialCard
                photo={thomasImg}
                name="Thomas Sanabria"
                school="Doane University"
                spanish="Cuando llegué a Elite Level no sabía qué esperar. Encontré un proceso serio, con seguimiento real y objetivos concretos. Hoy estoy en Doane University."
                english="What I found was a serious process, with real follow-up and concrete goals. Today I am at Doane University."
              />
              <TestimonialCard
                photo={carlosImg}
                name="Carlos Pazos"
                school="Herkimer College"
                spanish="Contacté a Elite Level y en pocos meses tenía un plan claro y universidades concretas en la mesa. Hoy compito en Herkimer College, Nueva York."
                english="Within a few months I had a clear plan and concrete universities on the table. Today I compete at Herkimer College in New York."
                tiltRight
                delay={100}
              />
              <TestimonialCard
                photo={andreyImg}
                name="Andrey Rincón"
                school="University of Saint Mary"
                spanish="El proceso con Elite Level fue directo y honesto desde el primer día. Hoy estoy comprometido con la University of Saint Mary en Kansas."
                english="The process was direct and honest from the first day. Today I am committed to the University of Saint Mary in Kansas."
                delay={200}
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative py-24 md:py-32">
          <FloatingShapes variant="dots" className="absolute left-6 top-12 opacity-50" />
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <SectionHeader eyebrow="Let's talk" title="Initiate connection." icon={Mail} />

            <div className="grid gap-12 md:grid-cols-2">
              <div className="reveal space-y-7">
                <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                  For internship inquiries, collaborative scouting ventures, or professional
                  networking, let's connect.
                </p>

                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 text-accent" strokeWidth={1.5} />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        Email
                      </div>
                      <a
                        href="mailto:alemorales2601@gmail.com"
                        className="text-primary hover:underline"
                      >
                        alemorales2601@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 text-accent" strokeWidth={1.5} />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        Phone
                      </div>
                      <a href="tel:+17868986458" className="text-primary hover:underline">
                        786-898-6458
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 text-accent" strokeWidth={1.5} />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        Location
                      </div>
                      <div className="text-primary">Fayetteville, AR</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Linkedin className="mt-1 h-5 w-5 text-accent" strokeWidth={1.5} />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        LinkedIn
                      </div>
                      <a
                        href="https://www.linkedin.com/in/hugo-morales-arteaga/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline"
                      >
                        hugo-morales-arteaga
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <form
                className="reveal space-y-5 rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
                style={{ transitionDelay: "120ms" }}
                action="mailto:alemorales2601@gmail.com?subject=Website%20Inquiry%20for%20Hugo%20Morales"
                method="post"
                encType="text/plain"
              >
                <div>
                  <label
                    className="text-xs uppercase tracking-wider text-muted-foreground"
                    htmlFor="f-name"
                  >
                    Your name
                  </label>
                  <input
                    id="f-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Full name"
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label
                    className="text-xs uppercase tracking-wider text-muted-foreground"
                    htmlFor="f-email"
                  >
                    Your email
                  </label>
                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    required
                    placeholder="email@domain.com"
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label
                    className="text-xs uppercase tracking-wider text-muted-foreground"
                    htmlFor="f-msg"
                  >
                    Message
                  </label>
                  <textarea
                    id="f-msg"
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Send message
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <a
                    href="https://www.linkedin.com/in/hugo-morales-arteaga/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* TICKER */}
        <div className="overflow-hidden border-y border-border bg-primary py-5 text-primary-foreground">
          <div className="ticker-track text-sm uppercase tracking-[0.18em]">
            {Array.from({ length: 2 }).map((_, dup) => (
              <div key={dup} className="flex shrink-0 items-center">
                {[
                  "Elite Level Scouting USA · 100% Placement Rate",
                  "813K+ Organic Social Views",
                  "Finance, Management & Investment · Business Analytics Minor",
                  "Fayetteville, AR · Open to Summer 2026 Internships",
                  "1st Place · Made@U of A Pitch Competition",
                ].map((t) => (
                  <span key={`${dup}-${t}`} className="flex items-center px-8">
                    {t}
                    <span className="ml-8 h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <footer className="bg-background py-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 md:flex-row md:px-10">
            <div className="font-serif-display text-xl font-semibold text-primary">
              Hugo<span className="text-accent">.</span>Morales
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a
                href="https://www.linkedin.com/in/hugo-morales-arteaga/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                LinkedIn
              </a>
              <a href="mailto:alemorales2601@gmail.com" className="hover:text-primary">
                Email
              </a>
              <a href="#contact" className="hover:text-primary">
                Contact
              </a>
            </div>
            <div className="text-xs text-muted-foreground">
              © 2026 Hugo Morales · All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

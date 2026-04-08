"use client";

import { useState, useEffect, useRef } from "react";

const CALENDLY_URL = "https://calendly.com/danielbarhemula/30min";

/* ─── Intersection Observer Hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── Material Icon Component ─── */
function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
    >
      {name}
    </span>
  );
}

/* ═══════════════════════════════════════════
   HEADER
   ═══════════════════════════════════════════ */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "AI Add-ons", href: "#ai-addons" },
    { label: "Process", href: "#process" },
    { label: "Results", href: "#results" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-5 transition-all duration-300 ${
        scrolled
          ? "bg-[#131313]/90 backdrop-blur-[40px] border-b border-[#5A4137]/15"
          : "bg-transparent"
      }`}
    >
      <a href="#" className="text-2xl font-black tracking-tighter text-[#E5E2E1]">
        HARDWORKGROWTH
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8 items-center">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-bold text-sm tracking-wide uppercase text-[#E2BFB2] hover:text-[#E5E2E1] transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <a
        href={CALENDLY_URL}
        className="hidden md:inline-block bg-primary-container text-on-primary-container font-bold px-6 py-2.5 hover:brightness-110 transition-all uppercase tracking-tight text-sm"
      >
        Get Started
      </a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden text-on-surface"
        aria-label="Toggle menu"
      >
        <Icon name={mobileOpen ? "close" : "menu"} className="text-3xl" />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-[#131313]/95 backdrop-blur-[40px] border-b border-[#5A4137]/15 flex flex-col items-center gap-6 py-8 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="font-bold text-sm tracking-wide uppercase text-[#E2BFB2] hover:text-[#E5E2E1] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CALENDLY_URL}
            className="bg-primary-container text-on-primary-container font-bold px-8 py-3 uppercase tracking-tight text-sm"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 pb-20">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.9] uppercase mb-8 animate-fade-in-up">
            You Do the{" "}
            <span className="text-primary-container">Hard Work.</span>
            <br />
            We Build the{" "}
            <span className="text-primary-container">Growth Engine.</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-on-surface-variant max-w-2xl mb-12 font-medium animate-fade-in-up delay-200 opacity-0" style={{ animationFillMode: "forwards" }}>
            High-performance websites, precision ad campaigns, and AI automation
            — purpose-built for roofing, HVAC, dental, med spa, and plumbing
            businesses that refuse to stay small.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400 opacity-0" style={{ animationFillMode: "forwards" }}>
            <a
              href={CALENDLY_URL}
              className="bg-gradient-to-tr from-primary to-primary-container text-on-primary font-bold px-10 py-5 hover:brightness-110 transition-all uppercase tracking-tight text-lg text-center"
            >
              Book Free Strategy Call
            </a>
            <a
              href="#results"
              className="border-[1.5px] border-outline text-on-surface font-bold px-10 py-5 hover:bg-surface-container-high transition-all uppercase tracking-tight text-lg text-center"
            >
              See Our Work
            </a>
          </div>
        </div>
        <div className="lg:col-span-4 hidden lg:block relative animate-fade-in-up delay-300 opacity-0" style={{ animationFillMode: "forwards" }}>
          <div className="w-full aspect-square bg-surface-container-high relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon name="construction" className="text-primary-container text-[120px] opacity-30" />
            </div>
            <div className="absolute inset-0 border-[20px] border-surface" />
            <div className="absolute bottom-4 left-4 bg-primary-container p-4">
              <Icon name="construction" className="text-black text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   TRUST STRIP
   ═══════════════════════════════════════════ */
function TrustStrip() {
  const { ref, inView } = useInView();
  return (
    <section
      ref={ref}
      className={`bg-surface-container-lowest py-10 border-y border-[#5A4137]/15 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60 grayscale">
        <p className="text-sm font-bold tracking-[0.15em] uppercase text-on-surface-variant">
          Trusted by contractors, clinics &amp; service businesses nationwide
        </p>
        <div className="flex flex-wrap justify-center gap-10 font-black text-xl md:text-2xl tracking-tighter italic">
          <span>APEX_ROOFING</span>
          <span>DR.BRIGHT</span>
          <span>AIRFLOW_PRO</span>
          <span>SUMMIT_HVAC</span>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PAIN POINTS
   ═══════════════════════════════════════════ */
function PainPoints() {
  const { ref, inView } = useInView();
  const points = [
    "Your website looks good but books zero jobs?",
    "Spending on ads with nothing to show for it?",
    "Losing leads while you're out in the field?",
  ];
  return (
    <section
      ref={ref}
      className="py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#5A4137]/15"
    >
      {points.map((p, i) => (
        <div
          key={i}
          className={`bg-background py-16 px-10 text-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: `${i * 150}ms` }}
        >
          <h3 className="text-xl md:text-2xl font-black uppercase mb-4 tracking-tight">
            {p}
          </h3>
          <div className="w-12 h-1 bg-primary-container mx-auto" />
        </div>
      ))}
    </section>
  );
}

/* ═══════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════ */
function Services() {
  const { ref, inView } = useInView();
  const cards = [
    {
      icon: "web",
      title: "Conversion-Engineered Websites",
      desc: "More than a digital brochure. We architect fast, mobile-first sites that turn every visitor into a booked appointment — with tracking baked into every click.",
      tag: "01 / DEPLOYMENT",
    },
    {
      icon: "ads_click",
      title: "Precision Ads & Funnels",
      desc: "Google Ads and Meta campaigns built on data, not guesswork. We target the homeowners and patients actively searching for your services — and funnel them straight to your phone.",
      tag: "02 / ACQUISITION",
    },
    {
      icon: "smart_toy",
      title: "AI Automation Add-ons",
      desc: "Voice agents that answer calls at 2 AM. Chatbots that qualify leads instantly. Follow-up sequences that never drop the ball. Your business runs even when you're off the clock.",
      tag: "03 / OPTIMIZATION",
    },
  ];
  return (
    <section className="py-32 px-6 md:px-12" id="services" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <h2
            className={`text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none max-w-md transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            Our Growth Infrastructure.
          </h2>
          <p className="text-on-surface-variant uppercase tracking-widest font-bold text-sm">
            Industrial-Grade Marketing
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`bg-surface-container-low p-10 flex flex-col items-start hover:bg-surface-container-high transition-all duration-500 group ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <Icon
                name={c.icon}
                className="text-primary-container text-5xl mb-8 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-2xl font-black uppercase mb-4">{c.title}</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">{c.desc}</p>
              <div className="mt-auto pt-4 border-t border-[#5A4137]/30 w-full text-xs font-black tracking-widest uppercase">
                {c.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   AI ADD-ONS
   ═══════════════════════════════════════════ */
function AIAddons() {
  const { ref, inView } = useInView();
  const addons = [
    {
      icon: "settings_voice",
      title: "AI Voice Agent",
      desc: "Never miss a call again. Our AI answers 24/7, qualifies the lead, and books the appointment — before your competitor even picks up.",
    },
    {
      icon: "forum",
      title: "AI Chatbot",
      desc: "Engages every website visitor in real time. Answers questions, captures contact info, and routes hot leads straight to your CRM.",
    },
    {
      icon: "outgoing_mail",
      title: "AI Follow-Up Engine",
      desc: "Automatically nurtures cold and warm leads with personalized email and SMS sequences until they're ready to buy.",
    },
    {
      icon: "grade",
      title: "AI Review Booster",
      desc: "Systematically requests, monitors, and manages your online reviews — building the 5-star reputation that wins new customers on autopilot.",
    },
  ];
  return (
    <section
      className="bg-surface-container-lowest py-32 px-6 md:px-12 relative overflow-hidden"
      id="ai-addons"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-24 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic">
            Pick Your Power-Ups.
          </h2>
          <p className="text-on-surface-variant uppercase tracking-widest font-bold text-sm">
            Augment your operations with intelligent automation
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {addons.map((a, i) => (
            <div
              key={i}
              className={`border border-[#5A4137]/30 p-8 flex flex-col hover:border-primary-container transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="mb-6 flex justify-between items-center">
                <Icon name={a.icon} className="text-primary-container text-2xl" />
                <span className="text-[10px] font-bold tracking-widest text-primary-container">
                  CORE_UNIT
                </span>
              </div>
              <h4 className="text-xl font-black uppercase mb-3">{a.title}</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 hazard-stripe opacity-5 -translate-y-1/2 translate-x-1/2 rotate-45" />
    </section>
  );
}

/* ═══════════════════════════════════════════
   WHO IT'S FOR
   ═══════════════════════════════════════════ */
function Industries() {
  const { ref, inView } = useInView();
  const items = [
    { icon: "roofing", label: "Roofing" },
    { icon: "hvac", label: "HVAC" },
    { icon: "plumbing", label: "Plumbing" },
    { icon: "dentistry", label: "Dental" },
    { icon: "spa", label: "Med Spa" },
    { icon: "help", label: "Your Trade?", cta: true },
  ];
  return (
    <section className="py-32 px-6 md:px-12 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Built for the{" "}
          <span className="text-primary-container">High-Stakes</span> Trades.
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.cta ? CALENDLY_URL : "#services"}
              className={`aspect-square flex flex-col items-center justify-center border border-[#5A4137]/15 p-4 transition-all duration-500 group ${
                item.cta
                  ? "hover:bg-primary-container"
                  : "hover:bg-surface-container-highest"
              } ${inView ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Icon
                name={item.icon}
                className={`text-3xl mb-4 text-on-surface-variant ${
                  item.cta
                    ? "group-hover:text-on-primary"
                    : "group-hover:text-primary-container"
                }`}
              />
              <span
                className={`font-bold uppercase tracking-widest text-xs ${
                  item.cta ? "group-hover:text-on-primary" : ""
                }`}
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PROCESS / BLUEPRINT
   ═══════════════════════════════════════════ */
function Process() {
  const { ref, inView } = useInView();
  const steps = [
    {
      num: "01",
      title: "Strategy Call",
      desc: "We audit your current setup, map your competitive landscape, and identify the highest-impact growth levers for your specific market.",
    },
    {
      num: "02",
      title: "Build",
      desc: "Our team architects your custom site, ad campaigns, and AI integrations — no templates, no shortcuts, just infrastructure designed to perform.",
    },
    {
      num: "03",
      title: "Launch",
      desc: "Everything goes live with full tracking in place. Leads start flowing into your pipeline from day one, with real-time reporting you can actually read.",
    },
    {
      num: "04",
      title: "Scale",
      desc: "We optimize continuously — refining ad spend, tuning AI responses, and scaling what works. Your growth compounds month over month.",
    },
  ];
  return (
    <section
      className="py-32 px-6 md:px-12 bg-surface-container-low border-y border-[#5A4137]/15"
      id="process"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`mb-24 transition-all duration-700 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic">
            The Blueprint.
          </h2>
          <div className="h-2 w-32 bg-primary-container" />
        </div>
        <div className="relative flex flex-col md:flex-row gap-8">
          {steps.map((s, i) => (
            <div key={i} className="flex-1 flex items-start gap-0">
              <div
                className={`flex-1 relative transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                <div className="text-[64px] md:text-[80px] font-black text-[#5A4137]/20 absolute -top-8 md:-top-12 left-0 leading-none select-none">
                  {s.num}
                </div>
                <div className="relative z-10 pt-8">
                  <h4 className="text-xl md:text-2xl font-black uppercase mb-4 tracking-tight">
                    {s.title}
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed">{s.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center text-[#5A4137]/30 px-2 pt-8">
                  <Icon name="trending_flat" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   RESULTS / CASE STUDIES
   ═══════════════════════════════════════════ */
function Results() {
  const { ref, inView } = useInView();
  return (
    <section className="py-32 px-6 md:px-12" id="results" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div
            className={`lg:col-span-4 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
              Job Site Reports.
            </h2>
            <p className="text-on-surface-variant mb-12 leading-relaxed">
              Real results for real service businesses. No vanity metrics — just
              booked jobs, lower costs, and sustainable growth.
            </p>
            <div className="bg-surface-container-high p-8 border-l-4 border-primary-container">
              <p className="text-lg md:text-xl italic font-medium text-on-surface mb-6 leading-relaxed">
                &ldquo;HardWorkGrowth didn&apos;t just build us a website — they built a
                system that generates 30+ qualified leads every month. Our revenue
                is up 40% in two months.&rdquo;
              </p>
              <p className="font-black uppercase tracking-widest text-sm">
                — Mike D., Apex Roofing
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div
              className={`bg-surface-container-lowest group overflow-hidden transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="h-48 bg-surface-container-high relative flex items-center justify-center">
                <Icon
                  name="hvac"
                  className="text-[80px] text-on-surface-variant/20 group-hover:text-on-surface-variant/40 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent" />
              </div>
              <div className="p-8">
                <span className="text-primary-container font-black uppercase tracking-[0.2em] text-[10px]">
                  Case Study 01
                </span>
                <h4 className="text-xl font-bold uppercase mt-2 mb-4">
                  Summit HVAC Co.
                </h4>
                <div className="flex justify-between items-center">
                  <div className="text-3xl font-black">+142%</div>
                  <div className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">
                    Qualified Leads
                  </div>
                </div>
              </div>
            </div>
            {/* Case Study 2 */}
            <div
              className={`bg-surface-container-lowest group overflow-hidden transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              <div className="h-48 bg-surface-container-high relative flex items-center justify-center">
                <Icon
                  name="dentistry"
                  className="text-[80px] text-on-surface-variant/20 group-hover:text-on-surface-variant/40 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent" />
              </div>
              <div className="p-8">
                <span className="text-primary-container font-black uppercase tracking-[0.2em] text-[10px]">
                  Case Study 02
                </span>
                <h4 className="text-xl font-bold uppercase mt-2 mb-4">
                  BrightSmile Dental
                </h4>
                <div className="flex justify-between items-center">
                  <div className="text-3xl font-black">-$45</div>
                  <div className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">
                    Cost Per Acquisition
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════ */
function FinalCTA() {
  const { ref, inView } = useInView();
  return (
    <section
      className="py-32 md:py-40 px-6 md:px-12 bg-primary-container text-on-primary-container overflow-hidden relative"
      ref={ref}
    >
      <div
        className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-700 ${
          inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-8 leading-[0.85]">
          Stop Losing Leads. Start Scaling.
        </h2>
        <p className="text-lg md:text-2xl font-bold uppercase tracking-widest mb-12 opacity-80">
          Your competitors already have a system. It&apos;s time you built one too.
        </p>
        <a
          href={CALENDLY_URL}
          className="inline-block bg-surface text-on-surface font-black px-12 py-6 hover:bg-surface-container-highest transition-all uppercase tracking-tighter text-lg md:text-xl"
        >
          Book Your Free Strategy Call
        </a>
      </div>
      <div className="absolute inset-0 opacity-10 industrial-grid" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent opacity-50" />
    </section>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="bg-[#0E0E0E] w-full py-16 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#5A4137]/15">
      <div className="flex flex-col gap-2 items-center md:items-start">
        <div className="text-lg font-bold text-[#E5E2E1] tracking-tighter">
          HARDWORKGROWTH
        </div>
        <p className="text-[10px] tracking-[0.05em] uppercase font-semibold text-[#A98A7E]">
          &copy; {new Date().getFullYear()} HARDWORKGROWTH. ALL RIGHTS RESERVED.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {["Privacy", "Terms", "LinkedIn"].map((label) => (
          <a
            key={label}
            href="#"
            className="text-[10px] tracking-[0.05em] uppercase font-semibold text-[#A98A7E] hover:text-[#FF6B1A] transition-all"
          >
            {label}
          </a>
        ))}
      </div>
      <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-on-surface-variant flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse-glow" />
        SYSTEM_OPERATIONAL
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Header />
      <main className="industrial-grid">
        <Hero />
        <TrustStrip />
        <PainPoints />
        <Services />
        <AIAddons />
        <Industries />
        <Process />
        <Results />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

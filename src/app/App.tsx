import { useState, useEffect, useRef } from "react";
import { Menu, X, Mail, Phone, MapPin, Clock, ArrowRight, ChevronRight, ChevronLeft, Play, Pause } from "lucide-react";

import logoSrc from "../imports/logo_hc.png";
import video1 from "../imports/WhatsApp_Video_2026-07-02_at_14.52.05.mp4";
import video2 from "../imports/WhatsApp_Video_2026-07-02_at_14.52.05__1_.mp4";
import video3 from "../imports/WhatsApp_Video_2026-07-02_at_14.52.05__2_.mp4";
import video4 from "../imports/WhatsApp_Video_2026-07-02_at_14.52.05__3_.mp4";
import video5 from "../imports/WhatsApp_Video_2026-07-02_at_14.53.17.mp4";
import img1 from "../imports/WhatsApp_Image_2026-07-02_at_14.54.04.jpeg";
import img2 from "../imports/WhatsApp_Image_2026-07-02_at_14.54.04__1_.jpeg";
import img3 from "../imports/WhatsApp_Image_2026-07-02_at_14.54.04__2_.jpeg";
import img4 from "../imports/WhatsApp_Image_2026-07-02_at_14.53.17.jpeg";
import floorplan2d3d from "../imports/floorplan_2d_3d.png";
import interiorDesignImg from "../imports/interior_design.png";
import structuralDesignImg from "../imports/structural_design.png";
import renovationImg from "../imports/renovation.png";
import turnkeyImg from "../imports/turnkey.png";
import teamCeo from "../imports/team_ceo_mono.jpg";
import teamStructural from "../imports/team_structural_mono.jpg";
import teamHr from "../imports/team_hr_mono.jpg";
import teamMarketing from "../imports/team_marketing_mono.jpg";
import teamManoj from "../imports/team_manoj_mono.jpg";
import teamSandeep from "../imports/team_sandeep_mono.jpg";
import teamVaibhav from "../imports/team_vaibhav_mono.jpg";
import teamRajendra from "../imports/team_rajendra_mono.jpg";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Our Work", href: "#gallery" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const TEAM = [
  { name: "Mahendra Halmandge", role: "Founder & CEO", image: teamCeo },
  { name: "Gajendra Halmandge", role: "Co-Founder & Structural Engineer", image: teamStructural },
  { name: "Vaishnavi Halmandge", role: "HR", image: teamHr },
  { name: "Vishwas HD", role: "Marketing Head & Strategic Planner", image: teamMarketing },
  { name: "Manoj Kumar", role: "Project Manager", image: teamManoj },
  { name: "Sandeep K", role: "Sales Executive", image: teamSandeep },
  { name: "Vaibhav MH", role: "Technical Head", image: teamVaibhav },
  { name: "Rajendra Halmandge", role: "Supply Chain Manager", image: teamRajendra },
];

const SERVICES = [
  {
    number: "01",
    title: "Interior Design",
    description:
      "Transforming spaces into thoughtful, livable environments. Every room designed to reflect how you actually live — balancing aesthetics with function.",
    image: interiorDesignImg,
    alt: "Interior design moodboard with FF&E material swatches and palette",
  },
  {
    number: "02",
    title: "2D & 3D Design",
    description:
      "From floor plans to photorealistic renders — see your space before a single wall is built. We present multiple concepts so you choose with confidence.",
    image: floorplan2d3d,
    alt: "2D floor plan alongside a 3D top-down interior render",
  },
  {
    number: "03",
    title: "Structural Design",
    description:
      "Engineering integrity beneath every beautiful surface. Our structural work ensures your home is built to last — safe, compliant, and enduring.",
    image: structuralDesignImg,
    alt: "Building under construction with tower crane and structural drawings",
  },
  {
    number: "04",
    title: "Renovation",
    description:
      "Breathe new life into existing spaces. Whether a single room or a full overhaul, we manage every detail from demolition to finishing.",
    image: renovationImg,
    alt: "Renovation before-and-after: demolition on the left, finished room on the right",
  },
  {
    number: "05",
    title: "Turnkey Projects",
    description:
      "A complete, ready-to-move-in solution — design, construction, and all materials handled by us. You get the keys to a finished space with nothing left to source.",
    image: turnkeyImg,
    alt: "Turnkey project handover — a finished house with a key and included materials",
  },
];

const CONSULTATION = {
  title: "Free Consultation",
  description:
    "Every project begins with a conversation — no cost, no pressure. We listen, assess your space, and outline a path tailored to your vision and budget.",
};

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Conceptualization",
    body: "We begin by understanding your needs, lifestyle, and aspirations. Project scope, timeline, and budget are defined together from the start.",
  },
  {
    step: "2",
    title: "Design Brief",
    body: "A detailed brief covers space planning, material preferences, and style direction. Moodboards and sketches align us on the vision.",
  },
  {
    step: "3",
    title: "Design Development",
    body: "2D layouts evolve into 3D renders. See your home in full detail — lighting, textures, furniture — before any on-site work begins.",
  },
  {
    step: "4",
    title: "Execution",
    body: "Our team manages every contractor, material, and timeline. You receive regular updates and a finished space delivered on schedule.",
  },
];

const HOURS = [
  { day: "Monday – Friday", hours: "9:00 AM – 7:00 PM", closed: false },
  { day: "Saturday", hours: "10:30 AM – 8:00 PM", closed: false },
  { day: "Sunday", hours: "Closed", closed: true },
];

const VIDEOS = [
  { src: video1, label: "Project Showcase" },
  { src: video2, label: "Interior Work" },
  { src: video3, label: "Renovation Detail" },
  { src: video4, label: "Construction Detail" },
  { src: video5, label: "Site Walkthrough" },
];

const PHOTOS = [
  { src: img1, alt: "Halmandge Constructions & Interiors project" },
  { src: img2, alt: "Halmandge Constructions & Interiors project" },
  { src: img3, alt: "Halmandge Constructions & Interiors project" },
  { src: img4, alt: "Halmandge Constructions & Interiors project" },
];

function VideoCard({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (playing) { v.pause(); setPlaying(false); }
    else { v.play().catch(() => {}); setPlaying(true); }
  };

  return (
    <div
      className="relative group overflow-hidden bg-stone-900 cursor-pointer"
      onClick={toggle}
      style={{ minHeight: "240px" }}
    >
      <video
        ref={ref}
        src={src}
        loop
        playsInline
        className="w-full h-full object-cover absolute inset-0"
        onEnded={() => setPlaying(false)}
      />
      <div
        className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${
          playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        <div className="w-14 h-14 rounded-full border-2 border-white/70 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          {playing
            ? <Pause size={20} className="text-white" />
            : <Play size={20} className="text-white ml-1" />}
        </div>
        <span className="text-xs tracking-widest text-white/60 uppercase">{label}</span>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const servicesRef = useRef<HTMLDivElement>(null);
  const scrollServices = (dir: number) => {
    servicesRef.current?.scrollBy({ left: dir * 336, behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── NAV ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/96 backdrop-blur-sm border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3 shrink-0">
            <img
              src={logoSrc}
              alt="Halmandge Constructions & Interiors logo"
              className="h-12 lg:h-14 w-auto object-contain"
            />
            <span
              className={`text-lg lg:text-xl tracking-wide leading-none transition-colors duration-300 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}
            >
              Halmandge Constructions & Interiors
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <a
            href="tel:+918971346766"
            className="hidden lg:inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 hover:opacity-90 transition-opacity duration-200"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", letterSpacing: "0.1em" }}
          >
            Book Free Consult <ArrowRight size={14} />
          </a>

          <button
            className={`lg:hidden p-1 transition-colors duration-200 ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="text-left text-base text-foreground hover:text-accent transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href="tel:+918971346766"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 w-fit mt-2"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", letterSpacing: "0.1em" }}
            >
              Book Free Consult <ArrowRight size={14} />
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-end bg-stone-950">
        <img
          src="https://images.unsplash.com/photo-1638885930125-85350348d266?w=1800&h=1100&fit=crop&auto=format"
          alt="Luxury interior living space"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-accent" />
              <p
                className="inline-block text-sm sm:text-base lg:text-lg text-accent-foreground bg-accent px-4 py-2 tracking-[0.2em] uppercase shadow-lg"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Bidar's Premier Design Studio
              </p>
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-medium leading-[1.05] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Spaces designed
              <br />
              <em className="italic font-normal" style={{ color: "#F1B525" }}>to endure.</em>
            </h1>
            <p className="text-base lg:text-lg text-white/65 leading-relaxed mb-10 max-w-lg">
              Interior design, 3D visualization, structural engineering, and full renovation — crafted with care for homes and businesses across Bidar.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 hover:opacity-90 transition-opacity"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", letterSpacing: "0.1em" }}
              >
                Start Your Project <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo("#gallery")}
                className="inline-flex items-center gap-2 border border-white/25 text-white px-8 py-4 hover:border-accent hover:text-accent transition-colors duration-300"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", letterSpacing: "0.1em" }}
              >
                See Our Work <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-stone-950 py-10 px-6 lg:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-white/10">
          {[
            { label: "Years of Experience", value: "10+" },
            { label: "Projects Completed", value: "100+" },
            { label: "Services Offered", value: "5" },
            { label: "Free Consultation", value: "Always" },
          ].map((stat) => (
            <div key={stat.label} className="lg:px-10 first:lg:pl-0 last:lg:pr-0">
              <p
                className="text-3xl lg:text-4xl text-accent mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
              >
                {stat.value}
              </p>
              <p className="text-xs tracking-wide text-white/40 uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-accent mb-2 tracking-[0.2em] text-sm" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                WHAT WE DO
              </p>
              <h2 className="text-3xl lg:text-5xl font-medium leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Services
              </h2>
            </div>
            <div className="flex items-end justify-between gap-6 lg:justify-end lg:gap-8">
              <p className="text-muted-foreground max-w-sm leading-relaxed text-sm lg:text-base">
                From initial sketches to final handover — we handle every stage of your build or renovation in Bidar.
              </p>
              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  aria-label="Previous services"
                  onClick={() => scrollServices(-1)}
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:bg-foreground hover:text-background hover:border-foreground transition-colors duration-200"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Next services"
                  onClick={() => scrollServices(1)}
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:bg-foreground hover:text-background hover:border-foreground transition-colors duration-200"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div ref={servicesRef} className="flex overflow-x-auto snap-x snap-mandatory gap-px bg-border no-scrollbar">
            {SERVICES.map((s) => (
              <div
                key={s.number}
                className="group bg-background p-8 flex flex-col gap-5 hover:bg-card transition-colors duration-300 shrink-0 snap-start w-[300px] sm:w-[320px]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={s.image}
                    alt={s.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div>
                  <span className="text-sm text-accent tracking-[0.2em]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {s.number}
                  </span>
                  <h3 className="text-xl font-medium mt-1 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-accent mb-2 tracking-[0.2em] text-sm" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                HOW WE WORK
              </p>
              <h2 className="text-3xl lg:text-5xl font-medium leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                A clear path from
                <br />
                <em className="italic font-normal">idea to reality.</em>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
                Our four-stage process keeps you informed and in control — no surprises, no guesswork, no delays.
              </p>

              <div className="border border-border bg-background p-6 mb-8 max-w-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-xs text-accent tracking-[0.2em]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    STEP ZERO
                  </span>
                </div>
                <h3 className="text-xl font-medium mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {CONSULTATION.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{CONSULTATION.description}</p>
              </div>
              <a
                href="tel:+918971346766"
                className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-8 py-4 hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", letterSpacing: "0.1em" }}
              >
                Begin with a Free Call <ArrowRight size={16} />
              </a>
            </div>

            <div className="border border-border">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.step}
                  className={`p-7 flex gap-6 items-start ${i < PROCESS_STEPS.length - 1 ? "border-b border-border" : ""}`}
                >
                  <span
                    className="text-4xl text-accent/25 leading-none shrink-0 mt-1"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {step.step}
                  </span>
                  <div>
                    <h4 className="font-medium text-base mb-1.5" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR WORK ── */}
      <section id="gallery" className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent mb-2 tracking-[0.2em] text-sm" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            OUR WORK
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Built with intention.
          </h2>
          <p className="text-muted-foreground text-sm mb-12 max-w-md leading-relaxed">
            Real projects, real results. Watch our team at work across interior, structural, and renovation builds.
          </p>

          {/* Videos — row of 3, then row of 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            {VIDEOS.slice(0, 3).map((v) => (
              <VideoCard key={v.src} src={v.src} label={v.label} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            {VIDEOS.slice(3).map((v) => (
              <VideoCard key={v.src} src={v.src} label={v.label} />
            ))}
          </div>

          {/* Project photos — real images only */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
            {PHOTOS.map((p, i) => (
              <div key={i} className="overflow-hidden bg-muted aspect-square">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-accent mb-2 tracking-[0.2em] text-sm" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              WHO WE ARE
            </p>
            <h2 className="text-3xl lg:text-5xl font-medium leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              My Team
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed text-sm lg:text-base mt-4">
              The people behind every Halmandge build — from first concept to final handover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {TEAM.map((m) => (
              <div key={m.role} className="group">
                <div className="overflow-hidden bg-card aspect-[4/5]">
                  <img
                    src={m.image}
                    alt={`${m.name} — ${m.role}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="pt-5">
                  <p className="text-accent text-xs tracking-[0.2em] mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {m.role}
                  </p>
                  <h3 className="text-xl font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {m.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="bg-stone-950 text-white py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-accent mb-2 tracking-[0.2em] text-sm" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              GET IN TOUCH
            </p>
            <h2 className="text-3xl lg:text-5xl font-medium leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Let's build something
              <br />
              <em className="italic font-normal" style={{ color: "#F1B525" }}>beautiful together.</em>
            </h2>
            <p className="text-white/50 leading-relaxed mb-10 max-w-sm">
              Reach out to schedule your free consultation. We serve clients across Bidar and surrounding areas.
            </p>

            <div className="flex flex-col gap-6">
              {/* Studio */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-white/15 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-white/35 mb-0.5" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.2em" }}>
                    Studio
                  </p>
                  <a
                    href="https://share.google/UQyDilTonnTrBSwK6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/75 leading-relaxed hover:text-accent transition-colors duration-200"
                  >
                    15.3.55, Ganesh Colony, Kumbarvada Cross, Bidar – 585403
                  </a>
                </div>
              </div>

              {/* Phone (both numbers on one line) */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-white/15 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-white/35 mb-0.5" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.2em" }}>
                    Phone
                  </p>
                  <p className="text-sm text-white/75 leading-relaxed flex flex-wrap items-center gap-x-3 gap-y-1">
                    <a href="tel:+918971346766" className="hover:text-accent transition-colors duration-200">+91 89713 46766</a>
                    <span className="text-white/25">·</span>
                    <a href="tel:+919731200115" className="hover:text-accent transition-colors duration-200">+91 97312 00115</a>
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-white/15 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/35 mb-0.5" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.2em" }}>
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/918971346766?text=Hi%20Halmandge%20Construction%20%26%20Interiors%2C%20I%20found%20you%20online%20and%20would%20like%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/75 leading-relaxed hover:text-accent transition-colors duration-200"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 border border-white/15 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-white/35 mb-0.5" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.2em" }}>
                    Email
                  </p>
                  <a
                    href="mailto:halmandgeconstructions@gmail.com"
                    className="text-sm text-white/75 leading-relaxed hover:text-accent transition-colors duration-200"
                  >
                    halmandgeconstructions@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="border border-white/10 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={15} className="text-accent" />
                <span className="text-xs text-white/40" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.25em" }}>
                  BUSINESS HOURS
                </span>
              </div>
              <div className="flex flex-col divide-y divide-white/8">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-4">
                    <span className="text-sm text-white/55">{h.day}</span>
                    <span className={`text-sm font-medium ${h.closed ? "text-accent" : "text-white"}`}>{h.hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/25 mt-4">* Holiday hours may vary</p>
            </div>

            <a
              href="tel:+918971346766"
              className="group flex items-center justify-between bg-accent text-accent-foreground px-8 py-7 hover:opacity-90 transition-opacity duration-200"
            >
              <div>
                <p className="text-2xl" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}>
                  Book a Free Consultation
                </p>
                <p className="text-sm text-accent-foreground/65 mt-0.5">No commitment required</p>
              </div>
              <ArrowRight size={24} className="group-hover:translate-x-1.5 transition-transform duration-200 shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black text-white/35 py-8 px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p
            className="text-white/55 tracking-wide"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.15em", fontSize: "0.85rem" }}
          >
            Halmandge Constructions & Interiors
          </p>
          <p>Bidar, Karnataka – 585403</p>
          <p>halmandgeconstructions@gmail.com</p>
          <p>© {new Date().getFullYear()} All rights reserved</p>
        </div>

        <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-white/5 flex items-center justify-center gap-5">
          <a
            href="https://www.instagram.com/halmandge_construction?igsh=MTE0YWN1M250bWg3Yg=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-11 h-11 flex items-center justify-center bg-white rounded-xl hover:scale-110 transition-transform duration-200 shadow"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="igGrad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0" stopColor="#FEDA75" />
                  <stop offset="0.3" stopColor="#FA7E1E" />
                  <stop offset="0.6" stopColor="#D62976" />
                  <stop offset="0.85" stopColor="#962FBF" />
                  <stop offset="1" stopColor="#4F5BD5" />
                </linearGradient>
              </defs>
              <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="url(#igGrad)" strokeWidth="2.2" />
              <circle cx="12" cy="12" r="4.6" fill="none" stroke="url(#igGrad)" strokeWidth="2.2" />
              <circle cx="17.4" cy="6.6" r="1.4" fill="url(#igGrad)" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/share/1BPNVP2zHn/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-11 h-11 flex items-center justify-center bg-white rounded-xl hover:scale-110 transition-transform duration-200 shadow"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                fill="#1877F2"
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </a>
          <a
            href="https://youtube.com/@halmandgeconstructions?si=wln2ww6oR4MxfTes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-11 h-11 flex items-center justify-center bg-white rounded-xl hover:scale-110 transition-transform duration-200 shadow"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                fill="#FF0000"
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

import { useState, useEffect, useRef } from "react";
import { Menu, X, Mail, MapPin, Clock, ArrowRight, ChevronRight, Play, Pause } from "lucide-react";

import logoSrc from "../imports/ChatGPT_Image_Jul_2__2026__09_22_26_PM.png";
import video1 from "../imports/WhatsApp_Video_2026-07-02_at_14.52.05.mp4";
import video2 from "../imports/WhatsApp_Video_2026-07-02_at_14.52.05__1_.mp4";
import video3 from "../imports/WhatsApp_Video_2026-07-02_at_14.52.05__2_.mp4";
import video4 from "../imports/WhatsApp_Video_2026-07-02_at_14.52.05__3_.mp4";
import video5 from "../imports/WhatsApp_Video_2026-07-02_at_14.53.17.mp4";
import img1 from "../imports/WhatsApp_Image_2026-07-02_at_14.54.04.jpeg";
import img2 from "../imports/WhatsApp_Image_2026-07-02_at_14.54.04__1_.jpeg";
import img3 from "../imports/WhatsApp_Image_2026-07-02_at_14.54.04__2_.jpeg";
import img4 from "../imports/WhatsApp_Image_2026-07-02_at_14.53.17.jpeg";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Our Work", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    number: "01",
    title: "Interior Design",
    description:
      "Transforming spaces into thoughtful, livable environments. Every room designed to reflect how you actually live — balancing aesthetics with function.",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&h=400&fit=crop&auto=format",
    alt: "Elegant modern living room interior",
  },
  {
    number: "02",
    title: "2D & 3D Design",
    description:
      "From floor plans to photorealistic renders — see your space before a single wall is built. We present multiple concepts so you choose with confidence.",
    image: "https://images.unsplash.com/photo-1771327811766-5f4149190b3d?w=600&h=400&fit=crop&auto=format",
    alt: "Modern bedroom architectural design",
  },
  {
    number: "03",
    title: "Structural Design",
    description:
      "Engineering integrity beneath every beautiful surface. Our structural work ensures your home is built to last — safe, compliant, and enduring.",
    image: "https://images.unsplash.com/photo-1629946488804-217c002178cf?w=600&h=400&fit=crop&auto=format",
    alt: "Contemporary building architecture",
  },
  {
    number: "04",
    title: "Renovation",
    description:
      "Breathe new life into existing spaces. Whether a single room or a full overhaul, we manage every detail from demolition to finishing.",
    image: "https://images.unsplash.com/photo-1666969442529-caa46ad29336?w=600&h=400&fit=crop&auto=format",
    alt: "Grand interior staircase renovation",
  },
  {
    number: "05",
    title: "Free Consultation",
    description:
      "Every project begins with a conversation — no cost, no pressure. We listen, assess your space, and outline a path tailored to your vision and budget.",
    image: "https://images.unsplash.com/photo-1598928387577-d49b6d399110?w=600&h=400&fit=crop&auto=format",
    alt: "Warm dining room consultation space",
  },
];

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
  { src: img1, alt: "Halmandge Constructions project" },
  { src: img2, alt: "Halmandge Constructions project" },
  { src: img3, alt: "Halmandge Constructions project" },
  { src: img4, alt: "Halmandge Constructions project" },
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
          <a href="#" className="flex items-center shrink-0">
            <img
              src={logoSrc}
              alt="Halmandge Constructions logo"
              className="h-12 lg:h-14 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <a
            href="mailto:mahendrahalmandge@gmail.com?subject=Free%20Consultation%20Request"
            className="hidden lg:inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 hover:opacity-90 transition-opacity duration-200"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", letterSpacing: "0.1em" }}
          >
            Book Free Consult <ArrowRight size={14} />
          </a>

          <button
            className="lg:hidden text-foreground p-1"
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
              href="mailto:mahendrahalmandge@gmail.com?subject=Free%20Consultation%20Request"
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
                className="text-xs text-accent/90 tracking-[0.25em] uppercase"
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
            { label: "Projects Completed", value: "200+" },
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
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm lg:text-base">
              From initial sketches to final handover — we handle every stage of your build or renovation in Bidar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {SERVICES.map((s, i) => (
              <div
                key={s.number}
                className={`group bg-background p-8 flex flex-col gap-5 hover:bg-card transition-colors duration-300 ${
                  i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
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
              <p className="text-muted-foreground leading-relaxed mb-10 max-w-sm">
                Our four-stage process keeps you informed and in control — no surprises, no guesswork, no delays.
              </p>
              <a
                href="mailto:mahendrahalmandge@gmail.com?subject=Free%20Consultation%20Request"
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
              {[
                { icon: MapPin, label: "Studio", value: "15.3.55, Ganesh Colony, Kumbarvada Cross, Bidar – 585403" },
                { icon: Mail, label: "Email", value: "mahendrahalmandge@gmail.com" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 border border-white/15 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-white/35 mb-0.5" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.2em" }}>
                      {label}
                    </p>
                    <p className="text-sm text-white/75 leading-relaxed">{value}</p>
                  </div>
                </div>
              ))}
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
              href="mailto:mahendrahalmandge@gmail.com?subject=Free%20Consultation%20Request"
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

            <div className="flex justify-center pt-2">
              <img
                src={logoSrc}
                alt="Halmandge Constructions"
                className="h-24 w-auto object-contain opacity-70"
              />
            </div>
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
            Halmandge Constructions
          </p>
          <p>Bidar, Karnataka – 585403</p>
          <p>mahendrahalmandge@gmail.com</p>
          <p>© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

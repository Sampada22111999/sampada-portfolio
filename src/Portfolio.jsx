import React, { useState } from "react";
import {
  Mail, Phone, Github, Linkedin, ExternalLink, MapPin,
  ArrowDown, ArrowUpRight, Layers, Code2, Database, Wrench
} from "lucide-react";

const TOKENS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

.pf-root {
  --bg: #0F1720;
  --surface: #16202B;
  --surface-2: #1C2833;
  --ink: #ECE8E0;
  --muted: #8FA0AC;
  --accent: #E8A33D;
  --accent-soft: rgba(232,163,61,0.14);
  --accent-2: #4FB0A5;
  --accent-2-soft: rgba(79,176,165,0.14);
  --line: rgba(236,232,224,0.10);
  --font-display: 'Fraunces', serif;
  --font-body: 'IBM Plex Sans', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-body);
  min-height: 100%;
  width: 100%;
}
.pf-root * { box-sizing: border-box; }
.pf-eyebrow {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}
.pf-display { font-family: var(--font-display); }
.pf-mono { font-family: var(--font-mono); }
.pf-muted { color: var(--muted); }
.pf-line { border-color: var(--line) !important; }

.pf-navlink {
  font-family: var(--font-mono);
  font-size: 12.5px;
  letter-spacing: 0.04em;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;
  white-space: nowrap;
}
.pf-navlink:hover { color: var(--ink); }

.pf-btn-primary {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.03em;
  background: var(--accent);
  color: #14100A;
  border: none;
  padding: 12px 22px;
  border-radius: 3px;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.pf-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(232,163,61,0.25); }

.pf-btn-ghost {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.03em;
  background: transparent;
  color: var(--ink);
  border: 1px solid var(--line);
  padding: 11px 22px;
  border-radius: 3px;
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.pf-btn-ghost:hover { border-color: var(--accent); background: var(--accent-soft); }

.pf-strata {
  position: relative;
  border: 1px solid var(--line);
  border-radius: 6px;
  overflow: hidden;
  background: var(--surface);
}
.pf-layer {
  position: relative;
  padding: 26px 28px;
  border-bottom: 1px solid var(--line);
  transition: background 0.25s ease, padding-left 0.25s ease;
}
.pf-layer:last-child { border-bottom: none; }
.pf-layer:hover { background: var(--surface-2); padding-left: 36px; }
.pf-layer-depth {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.08em;
}
.pf-pill {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--ink);
  background: var(--surface);
  border: 1px solid var(--line);
  padding: 5px 11px;
  border-radius: 999px;
  display: inline-block;
}

.pf-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 26px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.pf-card:hover { transform: translateY(-3px); border-color: var(--accent); }

.pf-timeline-item { position: relative; padding-left: 28px; }
.pf-timeline-item::before {
  content: '';
  position: absolute;
  left: 0; top: 6px;
  width: 9px; height: 9px;
  border-radius: 50%;
  background: var(--accent);
}
.pf-timeline-item::after {
  content: '';
  position: absolute;
  left: 4px; top: 18px; bottom: -38px;
  width: 1px;
  background: var(--line);
}
.pf-timeline-item:last-child::after { display: none; }

.pf-section-num {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--muted);
}

@media (max-width: 720px) {
  .pf-hero-title { font-size: 42px !important; }
  .pf-nav-links { display: none !important; }
}
`;

const liveProjects = [
  {
    name: "Asher Oilfield Specialty",
    period: "Apr 2025 – Sep 2025",
    tech: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],
    desc: "Website for a 75+ employee Oklahoma oilfield service provider, structuring content across 9 service lines including Slickline, Braided Line, and Swabbing. Improved page-load performance by ~30% through code and query optimization.",
    link: "asheroilfieldservices.com",
  },
  {
    name: "Sklash Play",
    period: "Oct 2022 – Nov 2024",
    tech: ["Ruby on Rails", "Node.js", "Angular", "PostgreSQL", "REST APIs"],
    desc: "Online gaming platform offering Quiz, Sudoku, and Ludo with nationwide competitions. Boosted daily active users by 30% through feature improvements and platform optimization.",
    link: null,
  },
  {
    name: "Talentsverse",
    period: "Oct 2022 – Nov 2024",
    tech: ["Ruby on Rails", "Node.js", "Angular", "PostgreSQL", "REST APIs"],
    desc: "Talent showcase platform with live interactions, verified profiles, and competitive challenges — enabling global visibility for emerging talent.",
    link: null,
  },
  {
    name: "Heroic & Arenas",
    period: "Oct 2022 – Nov 2024",
    tech: ["Ruby on Rails", "JavaScript", "PostgreSQL", "REST APIs"],
    desc: "Live sports and gaming platform supporting Cricket, Football, Kabaddi, Teen Patti, and Matka. Built authentication, wallet management, contest creation, leaderboards, and payment integration.",
    link: null,
  },
];

const personalProjects = [
  {
    name: "Q-Kart",
    period: "Oct 2022",
    tech: ["React.js", "React Router", "Material UI", "REST APIs"],
    desc: "Full e-commerce flow — authentication, debounced product search, cart management, checkout — with 100+ dynamically rendered product listings.",
  },
  {
    name: "Q-Trip",
    period: "Apr 2024",
    tech: ["JavaScript (ES6)", "Bootstrap", "REST APIs", "Local Storage"],
    desc: "Trip-planning app with advanced filtering, conditional rendering, and an image carousel; persists user preferences locally. Deployed on Netlify and Heroku.",
  },
  {
    name: "X-Board",
    period: "Apr 2024",
    tech: ["JavaScript (ES6)", "Bootstrap", "REST APIs", "JSON"],
    desc: "Dynamic multi-category news feed built from scratch, rendering real-time content from Flipboard's RSS feed.",
  },
];

const experience = [
  {
    role: "PHP Developer",
    company: "Pulse Software Solution",
    period: "Apr 2025 – Sep 2025",
    points: [
      "Delivered service pages across 9 oilfield service lines for a production client site.",
      "Reduced average page load time by ~30% through code and asset optimization.",
      "Collaborated with a 4+ person cross-functional team to ship features and resolve issues.",
    ],
  },
  {
    role: "Software Developer",
    company: "Define Labs Pvt. Ltd.",
    period: "Oct 2022 – Nov 2024",
    points: [
      "Built and enhanced features across three live products using Ruby on Rails and PostgreSQL.",
      "Resolved 20+ critical production bugs, improving system stability.",
      "Improved key workflow response times by ~25% via backend optimization.",
    ],
  },
  {
    role: "Full Stack Developer Fellow",
    company: "Crio.Do (part-time, concurrent with Define Labs)",
    period: "Nov 2023 – Mar 2025",
    points: [
      "Completed an intensive part-time fellowship in React.js, Node.js, and REST APIs alongside full-time work.",
      "Built and deployed 3 full-stack projects covering auth, state management, and deployment.",
    ],
  },
];

const stackLayers = [
  { label: "Frontend", icon: Code2, items: ["React.js", "JavaScript (ES6+)", "Angular", "HTML5 / CSS3", "Bootstrap", "jQuery"] },
  { label: "Backend", icon: Layers, items: ["Node.js", "Ruby on Rails", "PHP", "REST API Design"] },
  { label: "Database", icon: Database, items: ["PostgreSQL", "MySQL"] },
  { label: "Tools & Practices", icon: Wrench, items: ["Git", "Postman", "CI/CD", "Agile / Scrum"] },
];

const NAV = [
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "live", label: "Live Work" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Section({ id, num, title, children, className = "" }) {
  return (
    <section id={id} className={`w-full max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24 ${className}`}>
      <div className="flex items-baseline gap-4 mb-10">
        <span className="pf-section-num">{num}</span>
        <h2 className="pf-display" style={{ fontSize: "30px", fontWeight: 600, letterSpacing: "-0.01em" }}>
          {title}
        </h2>
        <div className="flex-1 h-px pf-line" style={{ borderTop: "1px solid" }} />
      </div>
      {children}
    </section>
  );
}

export default function Portfolio() {
  const [hoveredLayer, setHoveredLayer] = useState(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pf-root">
      <style>{TOKENS}</style>

      {/* Nav */}
      <header className="sticky top-0 z-20 w-full backdrop-blur" style={{ background: "rgba(15,23,32,0.85)", borderBottom: "1px solid var(--line)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <span className="pf-mono" style={{ fontSize: "13px", color: "var(--ink)", letterSpacing: "0.02em" }}>
            SD<span style={{ color: "var(--accent)" }}>.</span>dev
          </span>
          <nav className="pf-nav-links flex items-center gap-7">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="pf-navlink" onClick={(e) => { e.preventDefault(); scrollTo(n.id); }}>
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full max-w-5xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20">
        <p className="pf-eyebrow mb-5">Full-Stack Software Developer</p>
        <h1 className="pf-display pf-hero-title" style={{ fontSize: "68px", lineHeight: 1.04, fontWeight: 600, letterSpacing: "-0.02em", maxWidth: "780px" }}>
          Sampada Deshmukh builds products from the database up.
        </h1>
        <p className="pf-muted mt-7" style={{ fontSize: "17px", maxWidth: "560px", lineHeight: 1.65 }}>
          3+ years shipping production web applications — React and Node on the surface,
          Ruby on Rails and PHP underneath, PostgreSQL and MySQL holding it all up.
          I own features end-to-end, from a pixel on screen to the query behind it.
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-9">
          <a href="#live" className="pf-btn-primary" onClick={(e) => { e.preventDefault(); scrollTo("live"); }}>
            View live work <ArrowUpRight size={15} />
          </a>
          <a href="#contact" className="pf-btn-ghost" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
            Get in touch
          </a>
        </div>
        <div className="flex items-center gap-2 mt-12 pf-muted" style={{ fontSize: "13px" }}>
          <MapPin size={14} />
          <span className="pf-mono">Pune, Maharashtra, India</span>
          <ArrowDown size={14} className="ml-2 animate-bounce" />
        </div>
      </section>

      {/* Stack — signature strata visualization */}
      <Section id="stack" num="01" title="The Stack">
        <p className="pf-muted mb-8" style={{ maxWidth: "560px", fontSize: "15px", lineHeight: 1.6 }}>
          Every layer I work in, arranged the way a request actually travels —
          from what a user sees, down to where the data lives.
        </p>
        <div className="pf-strata">
          {stackLayers.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.label}
                className="pf-layer"
                onMouseEnter={() => setHoveredLayer(i)}
                onMouseLeave={() => setHoveredLayer(null)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Icon size={16} color={hoveredLayer === i ? "var(--accent)" : "var(--muted)"} />
                    <span className="pf-display" style={{ fontSize: "17px", fontWeight: 600 }}>{layer.label}</span>
                  </div>
                  <span className="pf-layer-depth">depth {String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span key={item} className="pf-pill">{item}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" num="02" title="Experience">
        <div className="flex flex-col gap-10">
          {experience.map((job) => (
            <div key={job.role + job.company} className="pf-timeline-item">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="pf-display" style={{ fontSize: "19px", fontWeight: 600 }}>
                  {job.role} <span className="pf-muted" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>— {job.company}</span>
                </h3>
                <span className="pf-mono pf-muted" style={{ fontSize: "12px" }}>{job.period}</span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {job.points.map((p) => (
                  <li key={p} className="pf-muted" style={{ fontSize: "14.5px", lineHeight: 1.6 }}>— {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Live Projects */}
      <Section id="live" num="03" title="Live Work">
        <p className="pf-muted mb-8" style={{ maxWidth: "560px", fontSize: "15px", lineHeight: 1.6 }}>
          Products currently in production, used by real people.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {liveProjects.map((p) => (
            <div key={p.name} className="pf-card">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="pf-display" style={{ fontSize: "18px", fontWeight: 600 }}>{p.name}</h3>
                <span className="pf-mono pf-muted" style={{ fontSize: "11px", whiteSpace: "nowrap", marginTop: "4px" }}>{p.period}</span>
              </div>
              <p className="pf-muted" style={{ fontSize: "14px", lineHeight: 1.6, marginBottom: "16px" }}>{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="pf-pill" style={{ fontSize: "11px", padding: "3px 9px" }}>{t}</span>
                ))}
              </div>
              {p.link && (
                <span className="pf-mono" style={{ fontSize: "12px", color: "var(--accent-2)", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  <ExternalLink size={12} /> {p.link}
                </span>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Personal Projects */}
      <Section id="projects" num="04" title="Personal Projects">
        <p className="pf-muted mb-8" style={{ maxWidth: "560px", fontSize: "15px", lineHeight: 1.6 }}>
          Independent builds — where I test ideas outside of client scope.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {personalProjects.map((p) => (
            <div key={p.name} className="pf-card">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="pf-display" style={{ fontSize: "16px", fontWeight: 600 }}>{p.name}</h3>
                <span className="pf-mono pf-muted" style={{ fontSize: "10.5px" }}>{p.period}</span>
              </div>
              <p className="pf-muted" style={{ fontSize: "13px", lineHeight: 1.6, marginBottom: "14px" }}>{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="pf-pill" style={{ fontSize: "10.5px", padding: "3px 8px" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" num="05" title="Education">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="pf-display" style={{ fontSize: "16px", fontWeight: 600 }}>B.E., Computer Engineering</h3>
              <p className="pf-muted" style={{ fontSize: "13.5px" }}>Savitribai Phule Pune University, Ahilyanagar · CGPA 9.00</p>
            </div>
            <span className="pf-mono pf-muted" style={{ fontSize: "12px" }}>08/2019 – 07/2022</span>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="pf-display" style={{ fontSize: "16px", fontWeight: 600 }}>Diploma, Computer Engineering</h3>
              <p className="pf-muted" style={{ fontSize: "13.5px" }}>Maharashtra State Board of Technical Education, Nashik · 76.19%</p>
            </div>
            <span className="pf-mono pf-muted" style={{ fontSize: "12px" }}>08/2017 – 06/2019</span>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <footer id="contact" className="w-full" style={{ borderTop: "1px solid var(--line)", background: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <p className="pf-eyebrow mb-4">Get in touch</p>
          <h2 className="pf-display" style={{ fontSize: "36px", fontWeight: 600, letterSpacing: "-0.01em", maxWidth: "600px", marginBottom: "36px" }}>
            Open to full-stack roles and freelance builds.
          </h2>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <a href="tel:+919689497146" className="pf-navlink flex items-center gap-2" style={{ fontSize: "14px" }}>
              <Phone size={15} /> +91-9689497146
            </a>
            <a href="mailto:deshmukhsampada22@example.com" className="pf-navlink flex items-center gap-2" style={{ fontSize: "14px" }}>
              <Mail size={15} /> deshmukhsampada22@example.com
            </a>
            <a href="#" className="pf-navlink flex items-center gap-2" style={{ fontSize: "14px" }}>
              <Github size={15} /> GitHub
            </a>
            <a href="#" className="pf-navlink flex items-center gap-2" style={{ fontSize: "14px" }}>
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>
          <p className="pf-mono pf-muted mt-14" style={{ fontSize: "11px" }}>© 2026 Sampada Deshmukh — built layer by layer.</p>
        </div>
      </footer>
    </div>
  );
}

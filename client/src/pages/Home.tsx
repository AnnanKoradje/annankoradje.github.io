import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  Check,
  Code2,
  Copy,
  ExternalLink,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoveUpRight,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "JAGLAD Property Services",
    category: "Service marketplace / UK",
    description:
      "A trust-first marketplace for verified home-service professionals, shaped around provider sign-up, customer inquiry flows, testimonials, and conversion-focused proof points.",
    tags: ["Marketplace", "UX systems", "Forms"],
    url: "https://jay.great-site.net",
    accent: "lime",
    visual: "visual-jaglad",
    stat: "500+ customers",
  },
  {
    number: "02",
    title: "Elevate Your Essence",
    category: "Mentorship platform / London",
    description:
      "A warm, editorial digital home for mentorship, consultations, books, and long-form insight—with booking, paid programmes, e-commerce, and a living blog.",
    tags: ["E-commerce", "Booking", "Content"],
    url: "https://elevateyouressence.co.uk",
    accent: "coral",
    visual: "visual-elevate",
    stat: "15+ years of expertise",
  },
  {
    number: "03",
    title: "GEP Consultants",
    category: "Consultancy / Tesano + Rochester",
    description:
      "A secure, scalable company presence with a custom CMS that makes content management and client interactions feel as considered as the front end.",
    tags: ["CMS", "Full stack", "Leadership"],
    url: "https://gepsafety.co.uk",
    accent: "blue",
    visual: "visual-gep",
    stat: "Custom CMS",
  },
  {
    number: "04",
    title: "EzySolar",
    category: "Clean energy / Tesano",
    description:
      "A performance-minded website for solar solutions, pairing clear product storytelling with inquiry, contact, and booking flows that move visitors toward action.",
    tags: ["SEO", "Performance", "Responsive"],
    accent: "yellow",
    visual: "visual-solar",
    stat: "Solar, made clear",
  },
  {
    number: "05",
    title: "Soho Homecare",
    category: "Care services / UK",
    description:
      "An accessible care-services platform with appointment booking, structured service listings, and an admin panel built for safe, efficient updates.",
    tags: ["Admin panel", "Bookings", "Security"],
    accent: "violet",
    visual: "visual-soho",
    stat: "Care with clarity",
  },
  {
    number: "06",
    title: "Bold Crystals",
    category: "E-commerce / UK",
    description:
      "A responsive crystal retail experience that balances discovery, product storytelling, and secure checkout in a focused e-commerce system.",
    tags: ["E-commerce", "Checkout", "Responsive"],
    url: "https://boldcrystalslimited.co.uk",
    accent: "pink",
    visual: "visual-bold",
    stat: "Digital storefront",
  },
];

const experiences = [
  {
    year: "2024—NOW",
    role: "Full Stack Developer",
    company: "GEP Consultants Ltd",
    place: "Tesano / Rochester",
    summary: "Leading the build of secure, scalable web solutions and a custom CMS while guiding a cross-functional team of developers and designers.",
    tags: ["Leadership", "Laravel", "CMS"],
  },
  {
    year: "2023—NOW",
    role: "Lead Web Developer",
    company: "JAGLAD Property Services",
    place: "United Kingdom",
    summary: "Designed and developed a provider marketplace with sign-up, login, inquiry, trust, and conversion systems for a growing home-services brand.",
    tags: ["Marketplace", "UX", "Conversion"],
  },
  {
    year: "2023—NOW",
    role: "Lead Web Developer",
    company: "Elevate Your Essence",
    place: "London, UK",
    summary: "Created a mentorship and empowerment platform spanning paid programmes, consultations, published books, and an editorial blog.",
    tags: ["Booking", "Content", "E-commerce"],
  },
  {
    year: "2022—NOW",
    role: "Lead Web Developer",
    company: "EzySolar Ltd",
    place: "Tesano",
    summary: "Solely designed and developed a solar-energy website with SEO, performance tuning, mobile responsiveness, and lead capture.",
    tags: ["SEO", "Performance", "Lead gen"],
  },
  {
    year: "2022—2024",
    role: "Photographer & Content Creator",
    company: "University of Education, Winneba",
    place: "Media & Publications",
    summary: "Documented university life through photography and video, then turned events, stories, and speeches into digital narratives.",
    tags: ["Photography", "Video", "Storytelling"],
  },
];

const stack = ["HTML", "CSS", "JavaScript", "React", "PHP", "Laravel", "Node.js", "MySQL", "WordPress", "API integration"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("kofik1437g@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = "mailto:kofik1437g@gmail.com";
    }
  };

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className={`site-header ${menuOpen ? "is-open" : ""}`}>
        <a className="brand-mark" href="#home" onClick={() => goTo("home")} aria-label="Kofi Annan Koradje home">
          <span className="brand-square">K</span>
          <span className="brand-copy">Kofi Annan<br /><em>Koradje</em></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {["home", "work", "about", "contact"].map((item) => (
            <a key={item} className={activeSection === item ? "active" : ""} href={`#${item}`} onClick={(event) => { event.preventDefault(); goTo(item); }}>
              <span>0{["home", "work", "about", "contact"].indexOf(item) + 1}</span>{item}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="mailto:kofik1437g@gmail.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {["home", "work", "about", "contact"].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}<ArrowUpRight size={16} /></a>
            ))}
            <a href="mailto:kofik1437g@gmail.com" onClick={() => setMenuOpen(false)}>Start a conversation <Mail size={16} /></a>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-copy reveal-on-load">
            <div className="eyebrow"><span className="eyebrow-dot" /> Available for select projects <span className="eyebrow-line" /> Ghana ↔ world</div>
            <h1>Building the<br /><span>web with</span><br /><i>intention.</i></h1>
            <p className="hero-lede">Full-stack developer, product thinker, and digital storyteller. I turn ambitious ideas into <strong>useful, fast, human</strong> digital experiences.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowDown size={16} /></a>
              <a className="button button-ghost" href="mailto:kofik1437g@gmail.com">Start a conversation <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-note"><span className="scribble-arrow">↳</span><span>From clean HTML<br />to complex systems.</span></div>
          </div>
          <div className="hero-art reveal-on-load delay-1" aria-label="Abstract portrait of Kofi Annan Koradje" role="img">
            <div className="art-grid" />
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-sun" />
            <div className="art-monogram">K<span>.</span></div>
            <div className="art-caption"><span>01</span><strong>Full Stack<br />Developer</strong><span className="caption-arrow">↗</span></div>
            <div className="art-stamp"><Sparkles size={13} /> DIGITAL<br />MADE HUMAN</div>
            <div className="art-side-label">TESANO / GHANA</div>
          </div>
        </section>

        <div className="ticker" aria-label="Areas of expertise">
          <div className="ticker-track"><span>Websites that work</span><b>✳</b><span>Systems that scale</span><b>✳</b><span>Stories worth staying for</span><b>✳</b><span>Websites that work</span><b>✳</b><span>Systems that scale</span><b>✳</b><span>Stories worth staying for</span><b>✳</b></div>
        </div>

        <section className="proof-strip section-pad" aria-label="Selected facts">
          <div className="proof-intro"><span className="section-kicker">/ the short version</span><p>A builder with a bias for clarity, craft, and momentum.</p></div>
          <div className="proof-stat"><strong>06<span>+</span></strong><small>Products &amp; platforms<br />shipped</small></div>
          <div className="proof-stat"><strong>04</strong><small>Languages across<br />work &amp; life</small></div>
          <div className="proof-stat"><strong>4.9<span>★</span></strong><small>Trust signal on<br />JAGLAD marketplace</small></div>
        </section>

        <section id="work" className="work-section section-pad">
          <div className="section-heading">
            <div><span className="section-kicker">/ selected work</span><h2>Work with a<br /><em>point of view.</em></h2></div>
            <p>Every build starts with a business problem and ends with an experience people can actually use. Here are a few of the systems, sites, and stories I&apos;ve helped bring to life.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card accent-${project.accent}`} key={project.title}>
                <div className={`project-visual ${project.visual}`}>
                  <div className="visual-noise" />
                  <span className="project-number">{project.number}</span>
                  <span className="project-orb" />
                  <span className="project-word">{project.title.split(" ")[0]}</span>
                  <span className="project-stat">{project.stat}</span>
                </div>
                <div className="project-body">
                  <div className="project-meta"><span>{project.category}</span>{project.url && <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}><ExternalLink size={15} /></a>}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section section-pad">
          <div className="about-aside"><span className="section-kicker">/ the approach</span><div className="about-index">02<span>—</span>04</div></div>
          <div className="about-main">
            <h2>Technical depth.<br /><em>Human context.</em></h2>
            <p className="about-lede">I work at the intersection of engineering, design, and narrative—because the best digital products don&apos;t just function. They make sense.</p>
            <div className="about-columns">
              <div className="about-column"><span className="mini-label"><Code2 size={15} /> Build</span><p>Front-end craft, back-end architecture, databases, APIs, and CMS systems that stay sturdy after launch.</p></div>
              <div className="about-column"><span className="mini-label"><Layers3 size={15} /> Shape</span><p>Clear journeys, responsive layouts, strong calls to action, and the thoughtful details that earn trust.</p></div>
              <div className="about-column"><span className="mini-label"><Camera size={15} /> Tell</span><p>Photography, journalism, and content instincts that help products communicate with a point of view.</p></div>
            </div>
            <div className="stack-block"><span className="mini-label">The current toolkit</span><div className="stack-list">{stack.map((item, index) => <span key={item} style={{ "--i": index } as React.CSSProperties}>{item}</span>)}</div></div>
          </div>
        </section>

        <section className="experience-section section-pad">
          <div className="section-heading experience-heading"><div><span className="section-kicker">/ selected chapters</span><h2>Built in the<br /><em>real world.</em></h2></div><p>Not a list of job titles—an evolving practice of solving the right problems, with the right people, at the right level of detail.</p></div>
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <article className="experience-row" key={`${experience.company}-${experience.role}`}>
                <div className="experience-year">{experience.year}</div>
                <div className="experience-count">0{index + 1}</div>
                <div className="experience-detail"><div className="role-line"><h3>{experience.role}</h3><span>{experience.company}</span></div><p>{experience.summary}</p><div className="tag-row">{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                <div className="experience-place"><MapPin size={14} />{experience.place}</div>
                <MoveUpRight className="experience-arrow" size={20} />
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="contact-card">
            <div className="contact-topline"><span className="section-kicker">/ your next chapter</span><span className="contact-pulse"><span /> Open to thoughtful collaborations</span></div>
            <h2>Have a good<br /><em>idea?</em></h2>
            <p>Let&apos;s make it useful, beautiful, and unmistakably yours.</p>
            <div className="contact-actions"><a className="button button-primary" href="mailto:kofik1437g@gmail.com">Email Kofi <Mail size={16} /></a><a className="button button-light" href="https://wa.me/233595159440" target="_blank" rel="noreferrer">WhatsApp <MessageCircle size={16} /></a></div>
            <button className="email-copy" onClick={copyEmail} aria-label="Copy Kofi's email address">{copied ? <Check size={15} /> : <Copy size={15} />} {copied ? "Email copied" : "kofik1437g@gmail.com"}</button>
            <div className="contact-scribble">good work<br /><span>starts with hello.</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-pad">
        <div className="footer-brand"><span className="brand-square">K</span><span>© {new Date().getFullYear()} Kofi Annan Koradje</span></div>
        <div className="footer-links"><a href="mailto:kofik1437g@gmail.com"><Mail size={14} /> Email</a><a href="tel:+233538132211"><Phone size={14} /> Call</a><a href="https://kofiannankoradje.com" target="_blank" rel="noreferrer"><ExternalLink size={14} /> Website</a></div>
        <a className="back-top" href="#home" aria-label="Back to top"><ArrowUpRight size={17} /></a>
      </footer>
    </div>
  );
}

"use client";

import Image from "next/image";
import {
  ArrowDownRight, ArrowUpRight, AtSign, BrainCircuit, Cloud, Code2, GitBranch,
  Link2, Mail, Menu, Play, ShieldCheck, Sparkles, X,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/cjokuma23", icon: Link2 },
  { label: "GitHub", href: "https://github.com/Learnlife001", icon: GitBranch },
  { label: "X", href: "https://x.com/cjlearnlife", icon: X },
  { label: "Instagram", href: "https://www.instagram.com/cjlearnlife", icon: AtSign },
];

const services = [
  ["01", "AI Websites & Applications", "Designing and building responsive AI assisted products that turn ideas into useful digital experiences."],
  ["02", "Workflow Automation", "Connecting tools and intelligent workflows to reduce repetitive work, qualify information and accelerate follow up."],
  ["03", "Full Stack Development", "Building reliable frontends, APIs, databases and cloud deployments from one coherent product vision."],
  ["04", "AI Content & Visual Creation", "Creating images, videos, campaigns and platform ready content with practical generative AI workflows."],
  ["05", "Cybersecurity Solutions", "Developing threat monitoring, reconnaissance and security automation systems that make risk visible."],
];

const engineeringProjects = [
  {
    id: "cloud-honeypot",
    number: "01", title: "Cloud Honeypot SOC Platform", category: "Cybersecurity / Cloud",
    description: "A live SSH threat operations dashboard that captures malicious sessions, maps attacker locations and turns raw Cowrie telemetry into actionable intelligence.",
    tools: ["Python", "Cowrie", "Google Cloud", "Grafana", "Loki", "GeoIP"],
    live: "https://35-208-243-179.sslip.io/", github: "https://github.com/Learnlife001/Honeypot",
    image: "https://image.thum.io/get/width/1600/crop/900/noanimate/https://35-208-243-179.sslip.io/", accent: "cyan",
  },
  {
    id: "securetask-api",
    number: "02", title: "SecureTask API", category: "Backend / DevOps",
    description: "A production ready task and incident tracking API with JWT authentication, role based access control, audit logging and observability.",
    tools: ["FastAPI", "PostgreSQL", "Docker", "SQLAlchemy", "JWT", "Render"],
    live: "https://securetask-api-stys.onrender.com/docs", github: "https://github.com/Learnlife001/SecureTaskAPI",
    image: "/assets/securetask-api.jpg", accent: "mint",
  },
  {
    id: "cyberrecon",
    number: "03", title: "CyberRecon", category: "Threat Intelligence",
    description: "A modern reconnaissance workspace for mapping external attack surfaces, running targeted discovery and presenting security intelligence in one operational view.",
    tools: ["Python", "TypeScript", "Network APIs", "Threat Intelligence", "Vercel"],
    live: "https://cgreglab.space/", github: "https://github.com/Learnlife001/cyberrecon",
    image: "https://image.thum.io/get/width/1600/crop/900/noanimate/https://cgreglab.space/", accent: "violet",
  },
];

const acceleratorProjects = [
  { id: "sukuna-archive", title: "Sukuna Archive", type: "AI Website", description: "An immersive anime inspired experience combining storytelling, motion, visual design and AI assisted development.", href: "https://www.instagram.com/reel/Db02uQkO-gZ/", live: "https://ryomen-sukuna-archive.vercel.app", theme: "sukuna" },
  { id: "ai-brand-content", title: "AI Brand Content", type: "UGC & Video", description: "Product storytelling for skincare, body care and fabrics, created with consistent models and connected AI generated scenes.", href: "https://www.instagram.com/reel/Db05ePCjfe4/", theme: "ugc" },
  { id: "medicube-campaign", title: "Medicube Campaign", type: "Collaborative Content", description: "A collaborative skincare campaign presenting Medicube Zero Pore Pad 2.0 through short form visual content.", href: "https://www.instagram.com/p/Db1YR66DTCg/", theme: "medicube" },
  { id: "claude-ai", title: "5 Things I Do With Claude AI", type: "AI Education", description: "A practical breakdown of how I use AI for studying, debugging, career applications, product planning and video workflows.", href: "https://www.instagram.com/reel/Db6GbKTOYio/", theme: "claude" },
  { id: "private-ai-setup", title: "Private AI Setup", type: "Local AI & Privacy", description: "Built my own private AI setup with Gemma 4B running locally in LM Studio, then securely connected it to my iPhone through LM Link. The model stays on my own hardware while I can access it from my phone.", href: "https://www.instagram.com/reel/Db-sj73u4EP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", theme: "private-ai", video: "/assets/private-llm.mp4" },
];

const tools = ["ChatGPT", "Claude", "Gemini", "Google Flow", "Veo", "Higgsfield", "Lovable", "Canva", "Codex", "Python", "Next.js", "GitHub", "Vercel", "Azure", "Docker"];

const podMembers = [
  { name: "Natalina Amanda Freeman", image: "/assets/natalina.png" },
  { name: "Andrew Joshua Olayemi", image: "/assets/andrew.png" },
  { name: "James O. Akinsiun", image: "/assets/james.png" },
  { name: "Chigozie Okuma", image: "/assets/chigozie.png" },
  { name: "Justice Ekene Akason", image: "/assets/justice.png" },
  { name: "Azuka Jennifer Etue" }, { name: "Kenechukwu Onovo" }, { name: "Roselyne June" },
];

const podProjects = [
  { title: "Afrikonnect", label: "Live Website", href: "https://www.afrikonnect.online" },
  { title: "AI Visual Story 01", label: "Google Flow", href: "https://labs.google/fx/tools/flow/shared/video/96cf46c7-d8ad-4baa-915e-ac56215a4e84" },
  { title: "AI Visual Story 02", label: "Google Flow", href: "https://labs.google/fx/tools/flow/shared/video/88b3b55b-6ebc-4c70-aec7-a09ddb4dfdfd" },
  { title: "Product Vision & PRD", label: "Strategy", href: "https://docs.google.com/document/d/11OE8T-P9mvL5VUKfRXxhqaHcEa-eZsJnD1Kk05R_VMI/edit?usp=sharing" },
  { title: "POD Project Deck", label: "Presentation", href: "https://docs.google.com/presentation/d/1lV_mGaLVn7x5jQbGCMwBvCxxbe-5pnpZtMReFrMdNpI/edit?usp=sharing" },
  { title: "AI Campaign", label: "Instagram", href: "https://www.instagram.com/reel/Db5YBaYI-ao/" },
  { title: "AI & Productivity", label: "LinkedIn", href: "https://www.linkedin.com/posts/lanreakinsiun_artificialintelligence-productivity-tech-activity-7492888640180736001-FQSF" },
  { title: "Claude AI Content", label: "Instagram", href: "https://www.instagram.com/reel/Db6DuBdt2GD/" },
];

const reveal = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] as const } } };

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <motion.div className={className} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "50px" }} transition={{ delay }}>{children}</motion.div>;
}

function ContactButton({ label = "Contact me", compact = false }: { label?: string; compact?: boolean }) {
  return <a className={`contact-button ${compact ? "compact" : ""}`} href="mailto:gregcj06@gmail.com?subject=Project%20Inquiry"><span>{label}</span><ArrowUpRight size={18} /></a>;
}

function AnimatedText({ text }: { text: string }) {
  return <p className="animated-copy" aria-label={text}>{text.split("").map((char, index) => <motion.span key={`${char}-${index}`} aria-hidden="true" initial={{ opacity: 0.18 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-15% 0px -20% 0px" }} transition={{ delay: Math.min(index * 0.008, 1.4), duration: 0.25 }}>{char}</motion.span>)}</p>;
}

function ProjectCard({ project, index }: { project: (typeof engineeringProjects)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0.15, 0.9], [1, 0.94]);
  return <div ref={ref} className="project-stage" id={project.id}><motion.article className={`project-card ${project.accent}`} style={{ scale, top: 92 + index * 18 }}>
    <div className="project-meta"><span className="project-number">{project.number}</span><div><span className="eyebrow">{project.category}</span><h3>{project.title}</h3></div><a className="ghost-button" href={project.live} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={16} /></a></div>
    <div className="project-body"><div className="project-copy"><p>{project.description}</p><div className="tool-chips">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div><a className="text-link" href={project.github} target="_blank" rel="noreferrer"><GitBranch size={18} /> View source</a></div><a className="project-visual" href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><img src={project.image} alt={`${project.title} live interface`} loading="lazy" /><span className="visual-glow" /></a></div>
  </motion.article></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const workOverviewItems = [...engineeringProjects.map(({ title, id }) => ({ title, id })), ...acceleratorProjects.map(({ title, id }) => ({ title, id })), { title: "AI Lead Automation", id: "ai-lead-automation" }, { title: "POD 7", id: "pod-7" }];
  return <main className="site-shell">
    <section className="hero" id="home">
      <motion.nav className="nav" initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}><a className="mark" href="#home" aria-label="Home">CGO<span>.</span></a><div className={`nav-links ${menuOpen ? "open" : ""}`}><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#pod" onClick={() => setMenuOpen(false)}>POD</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div><button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button></motion.nav>
      <motion.div className="hero-title-wrap" initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.95 }}><p className="hero-kicker">AI BUILDER • FULL STACK DEVELOPER • AUTOMATION SPECIALIST</p><h1 className="hero-heading"><span>CHIGOZIE</span><span>G. OKUMA</span></h1></motion.div>
      <motion.div className="hero-portrait" initial={{ opacity: 0, y: 50, scale: 0.92 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.45, duration: 1 }} whileHover={{ x: 8, y: -6, rotate: 1.2 }}><Image src="/assets/chigozie.png" alt="Illustrated portrait of Chigozie G. Okuma" fill priority sizes="(max-width: 768px) 72vw, 420px" /></motion.div>
      <motion.div className="hero-bottom" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.8 }}><p>I build intelligent applications, automations and digital experiences that turn ambitious ideas into working products.</p><ContactButton label="Work with me" /></motion.div><div className="scroll-cue"><ArrowDownRight size={18} /><span>Scroll to explore</span></div>
    </section>

    <section className="work-overview-section" aria-label="Selected work"><div className="work-overview-heading"><p className="section-label">Selected work</p><p>Engineering, AI content and collaborative projects</p></div><div className="work-overview-grid">{workOverviewItems.map((item, index) => <motion.a className={`marquee-tile tile-${index % 5}`} href={`#${item.id}`} key={item.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: (index % 5) * 0.05, duration: 0.55 }} whileHover={{ y: -6 }}><span>{String(index + 1).padStart(2, "0")}</span>{index >= engineeringProjects.length ? <Sparkles size={24} /> : null}<strong>{item.title}</strong></motion.a>)}</div></section>

    <section className="about section-dark" id="about"><div className="orbit-icon orbit-one"><BrainCircuit /></div><div className="orbit-icon orbit-two"><Code2 /></div><div className="orbit-icon orbit-three"><Cloud /></div><div className="orbit-icon orbit-four"><ShieldCheck /></div><FadeIn><p className="section-label">01 / About</p><h2 className="display-heading gradient-text">ABOUT ME</h2></FadeIn><div className="about-copy"><AnimatedText text="I’m Chigozie G. Okuma, an AI Builder, Full Stack Developer, and Automation Specialist based in Germany. I combine artificial intelligence, software development, cloud technology, and cybersecurity to turn ideas into practical digital products." /><p className="about-support">I joined the AI Accelerator to move beyond simply using AI tools and learn how to apply them strategically. Today, I combine different tools into practical workflows and take ideas from concept to finished, shareable results.</p><ContactButton label="Start a conversation" /></div></section>

    <section className="services" id="services"><FadeIn><p className="section-label dark-label">02 / What I do</p><h2 className="display-heading ink">SERVICES</h2></FadeIn><div className="service-list">{services.map(([number, title, description], index) => <FadeIn key={title} delay={index * 0.08}><article className="service-item"><span className="service-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight /></article></FadeIn>)}</div></section>

    <section className="projects section-dark" id="work"><FadeIn><p className="section-label">03 / Engineering</p><h2 className="display-heading gradient-text">FEATURED WORK</h2><p className="section-intro">Three shipped systems across cybersecurity, cloud infrastructure and backend engineering.</p></FadeIn><div className="project-stack">{engineeringProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}</div></section>

    <section className="accelerator"><div className="accelerator-heading"><FadeIn><p className="section-label dark-label">04 / AI Accelerator</p><h2 className="display-heading ink">CREATED WITH AI</h2><p className="section-intro dark-intro">Experiments in generative video, visual storytelling, content and AI assisted web development.</p></FadeIn></div><div className="accelerator-grid">{acceleratorProjects.map((project, index) => <motion.article id={project.id} className={`accelerator-card ${project.theme}`} key={project.title} initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>{project.video && <video className="accelerator-video" src={project.video} autoPlay muted loop playsInline aria-label="Private AI setup preview" />}<div className="card-index">{String(index + 1).padStart(2, "0")}</div><span className="eyebrow">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="card-actions"><a href={project.href} target="_blank" rel="noreferrer">View post <ArrowUpRight size={16} /></a>{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live site <ArrowUpRight size={16} /></a>}</div></motion.article>)}</div></section>

    <section className="automation section-dark" id="ai-lead-automation"><FadeIn className="automation-copy"><p className="section-label">05 / Automation</p><h2>AI Lead Qualification<br />& Follow Up</h2><p>An intelligent n8n workflow that captures new enquiries, uses OpenAI to determine lead priority and create a personalised response, sends it through Gmail, logs the lead in a CRM sheet, and alerts the team when a high priority opportunity arrives.</p><div className="workflow-line"><span>New lead</span><i /><span>AI qualification</span><i /><span>Reply</span><i /><span>CRM</span></div><a className="ghost-button" href="https://www.instagram.com/reel/Db8wBychPjN/" target="_blank" rel="noreferrer"><Play size={16} /> Public proof</a><small>Private n8n Cloud workflow, accessible on request for verification.</small></FadeIn><FadeIn className="automation-media" delay={0.2}><video src="/assets/lead-automation.mp4" autoPlay muted loop playsInline aria-label="AI lead automation preview" /><div className="automation-screens"><Image src="/assets/automation-workflow.jpg" alt="n8n automation workflow" width={1200} height={588} /><Image src="/assets/automation-executions.jpg" alt="successful n8n executions" width={1387} height={768} /></div></FadeIn></section>

    <section className="stack-section section-dark"><FadeIn><p className="section-label">06 / My stack</p><h2 className="display-heading gradient-text">TOOLS I USE</h2></FadeIn><div className="tool-marquee"><div>{[...tools, ...tools].map((tool, i) => <span key={`${tool}-${i}`}>{tool}<b>✦</b></span>)}</div></div></section>

    <section className="pod" id="pod-7"><FadeIn><p className="section-label dark-label">07 / Community</p><h2 className="display-heading ink">POD 7</h2><p className="pod-vision">POD 7 is a community of AI builders committed to transforming ideas into useful products, compelling content, and practical solutions. We combine our individual skills, share knowledge, and build together to create work that delivers real value beyond the Accelerator.</p></FadeIn><div className="member-grid">{podMembers.map((member, index) => <FadeIn key={member.name} delay={(index % 4) * 0.06}><article className="member-card">{member.image ? <Image src={member.image} alt={`${member.name} AI Fellow portrait`} fill sizes="(max-width: 640px) 50vw, 25vw" /> : <div className="coming-soon"><span>{member.name.split(" ").map((part) => part[0]).join("")}</span><small>Headshot coming soon</small></div>}<div className="member-name"><h3>{member.name}</h3><span>AI Fellow</span></div></article></FadeIn>)}</div><div className="pod-projects"><h3>Built together</h3>{podProjects.map((project, index) => <a href={project.href} target="_blank" rel="noreferrer" key={project.title}><span>0{index + 1}</span><strong>{project.title}</strong><em>{project.label}</em><ArrowUpRight /></a>)}</div></section>

    <section className="certificate section-dark"><div className="certificate-card"><span className="section-label">08 / Certificate</span><Sparkles size={42} /><h2>AI ACCELERATOR<br />CERTIFICATE</h2><p>Certificate coming soon</p><div className="certificate-seal">AF<br /><small>2026</small></div></div></section>

    <footer className="contact" id="contact"><p className="section-label">09 / Contact</p><h2>LET’S BUILD<br />SOMETHING <span>REAL.</span></h2><p className="contact-copy">Available for freelance projects, working student roles, internships, full time opportunities and collaborations.</p><div className="contact-links"><a href="mailto:gregcj06@gmail.com?subject=Project%20Inquiry"><Mail /> Email me <ArrowUpRight /></a>{socialLinks.map(({ label, href, icon: Icon }) => <a href={href} target="_blank" rel="noreferrer" key={label}><Icon /> {label === "X" ? "Follow on X" : label === "LinkedIn" ? "Connect on LinkedIn" : label === "GitHub" ? "View GitHub" : "Instagram"}<ArrowUpRight /></a>)}</div><div className="footer-bottom"><span>© 2026 Chigozie G. Okuma</span><span>Built with intention and AI</span><a href="#home">Back to top ↑</a></div></footer>
  </main>;
}

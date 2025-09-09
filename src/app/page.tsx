"use client";

import React from "react";
import type { MotionProps } from "framer-motion";
import { motion } from "framer-motion";
import { Linkedin, Mail, FileDown, ExternalLink, MapPin, SunMedium, Moon, Link as LinkIcon, Star, Download } from "lucide-react";

import { SiGithub } from "@icons-pack/react-simple-icons";
import type { StaticImageData } from "next/image";
import Image from "next/image";



/* ---------- Types ---------- */
type IconType = React.ComponentType<{ size?: number; className?: string }>;

type Social = {
  name: string;
  href: string;
  icon: IconType;
};

type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

type ProjectLink = {
  label: string;
  href?: string; 
};

type Project = {
  title: string;
  description: string;
  impact?: string;
  tags: string[];
  links?: ProjectLink[];
  image?: string | StaticImageData;
  stars?: number;
  downloads?: number;
};

type SiteData = {
  name: string;
  role: string;
  tags: string[];
  summary: string;
  email: string;
  location: string;
  resumeUrl: string;
  socials: Social[];
  skills: Record<string, string[]>;
  experience: Experience[];
  projects: Project[];
};

/* ---------- THEME ---------- */
const P = {
  bg: "bg-[#0F0A1E]",
  bgSurface: "bg-[#15102A]",
  border: "border-[#2B2144]",
  text: "text-[#EAE6FF]",
  text2: "text-[#C9BEFF]",
  text3: "text-[#A698FF]",
  chipBg: "bg-[rgba(234,230,255,0.04)]",
  chipBorder: "border-[rgba(234,230,255,0.08)]",
  glow: "bg-[rgba(139,92,246,0.18)]",
  ring: "ring-[rgba(139,92,246,0.35)]",
  link: "text-[#D6CCFF]",
  linkHover: "hover:text-white",
  accentFrom: "from-[#8B5CF6]",
  accentTo: "to-[#7C3AED]",
};

/* ---------- DATA ---------- */
const DATA: SiteData = {
  name: "Kibirigi Rachel",
  role: "Full Stack Engineer",
  tags: ["JavaScript", "TypeScript", "Python"],
  summary:
    "Versatile Full-Stack Developer passionate about turning complex challenges into simple, valuable solutions",
  email: "kibirigirachel@gmail.com",
  location: "Tokyo, Japan",
  resumeUrl: "/docs/resume.pdf",

  socials: [
    {
      name: "GitHub",
      href: "https://github.com/RachelBlackmermaid",
      icon: SiGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rachel-kibirigi-65223887/",
      icon: Linkedin,
    },
    { name: "Email", href: "mailto:kibirigirachel@gmail.com", icon: Mail },
  ] as Social[],
  skills: {
    Languages: ["JavaScript", "TypeScript", "Python"],

    Frontend: [
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Framer Motion",
    ],

    Backend: [
      "FastAPI",
      "Node.js",
      "Express",
      "REST API Design",
      "SQLAlchemy",
      "Alembic",
    ],

    Databases: ["PostgreSQL", "MongoDB", "Supabase"],

    DevOps: [
      "Fly.io",
      "Vercel",
      "Render",
      "Docker",
      "GitHub Actions (CI/CD)",
      "Sentry",
    ],

    AIandData: ["OpenAI API (LLM)", "Prophet", "Tesseract OCR"],

    Testing: ["Pytest", "React Testing Library"],

    ToolsAndPractices: [
      "Git",
      "GitHub",
      "Agile Development",
      "VS Code",
      "REST client tools",
    ],

    IoTandSystems: ["Raspberry Pi", "Arduino", "Appwrite"],
  },
  experience: [
    {
      role: "Full stack Developer (Contract)",
      company: "CalenCents",
      period: "2023 → Present",
      bullets: [
        "Architected a full stack finance platform (FastAPI, PostgreSQL, Next.js, Docker) for budgeting, expense tracking, and savings goals.",
        "Integrated Prophet forecasting and OpenAI insights, flagging overspending patterns and guiding monthly targets with predictive recommendations.",
        "Implemented OCR receipt scanning (Tesseract), reducing manual entry and increasing data accuracy.",
        "Set up CI/CD with GitHub Actions, Docker Compose, and Pytest, enabling safer releases and faster iteration.",
      ],
    },
    {
      role: "Full stack Developer (Contract)",
      company: "LuxLather",
      period: "2023 → Present",
      bullets: [
        "Built an e‑commerce app (React + Vite + TypeScript, Node.js, Express, MongoDB) with intuitive browsing and secure checkout.",
        "Developed an admin dashboard for the full product lifecycle (CRUD, Cloudinary uploads, product detail pages), streamlining catalog management.",
        "Integrated Stripe payments and optimized checkout UX to reduce purchase friction and improve transaction reliability.",
        "Implemented state management with Zustand and UI tests with React Testing Library to harden cart/order flows.",
      ],
    },
    {
      role: "Full stack Developer (Contract)",
      company: "Health Management System",
      period: "2023 → Present",
      bullets: [
        "Developed a MERN + TypeScript healthcare platform for appointments and patient records with role‑based access via Appwrite, strengthening privacy and compliance.",
        "Built patient/doctor portals with scheduling and dashboards, replacing manual booking workflows.",
        "Configured monitoring with Sentry tests to detect issues early and improve reliability.",
      ],
    },

    {
      role: "IoT Business Developer (Intern)",
      company: "SoftBank Corp., Tokyo",
      period: "2021 → 2022 ",
      bullets: [
        "Supported IoT market expansion strategies using Customer Data Platform (CDP)  insights and M2M roaming analyses; contributed to business plans and investment proposals.",
        "Co‑led an executive webinar with global leaders from SoftBank, Meta, Safaricom/Vodafone, and Econet Global.",
        "Authored technical briefs to enhance cross-team knowledge and documentation.",
      ],
    },
    {
      role: "Graduate IoT Research (Njuna)",
      company: "Kobe Institute of Computing",
      period: "2019 → 2022 ",
      bullets: [
        "Designed and prototyped an IoT‑based women’s safety system using Raspberry Pi, Arduino, and mobile integration, showcasing hardware and software design.",
        "Presented findings at academic seminars and conferences, gaining recognition for applying technology to address real world social challenges.",
      ],
    },
  ],

  projects: [
    {
      title: "CalenCents — Personal Finance Dashboard with AI Insights",
      description:
        "Full-stack budgeting platform with saving goals, expense tracking, and AI-powered financial insights.",
      impact:
        "Automates manual spreadsheets with intelligent forecasts, AI guided budgeting, and OCR-based expense entry for greater accuracy and control.",
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind",
        "SWR",
        "Recharts",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "GitHub Actions",
        "Prophet",
        "OpenAI API",
        "Tesseract OCR",
        "Pytest",
      ],
      links: [
        {
          label: "Live",
          href: "https://calencents.xyz",
        },
      ],
      image: "/CalenCents Logo.png",
    },
    {
      title: "LuxLather — Full-Stack eCommerce Platform",
      description:
        "Modern eCommerce site with Stripe checkout, dynamic admin dashboard, and full product lifecycle management.",
      impact:
        "Streamlined product management and purchasing with intuitive browsing, secure payments, and robust state/test architecture.",
      tags: [
        "React",
        "Vite",
        "TypeScript",
        "Tailwind",
        "Zustand",
        "Stripe",
        "Node.js",
        "Express",
        "MongoDB",
        "Cloudinary",
        "React Testing Library",
      ],
      links: [
        {
          label: "Live",
          href: "https://luxlather.store",
        },
      ],
      image: "/luxlatherlogo.png",
    },
    {
      title: "Care — Health Management System",
      description:
        "Healthcare platform with appointment scheduling and patient records, built with MERN and TypeScript.",
      impact:
        "Replaces paper-based systems with digital patient/doctor portals, enabling secure scheduling and role-based access through Appwrite.",
      tags: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "TypeScript",
        "Tailwind",
        "Appwrite",
        "Sentry",
      ],
      links: [
        {
          label: "",
          href: "https://your-njunacare-site.com",
        },
      ],
      image: "/healthcarelogo.png",
    },
    {
      title: "Njuna — IoT Women's Safety System",
      description:
        "IoT-based safety system designed to enhance women's personal security using real-time alerts and mobile integration.",
      impact:
        "Aims to empower women through discreet wearable tech that enables real-time emergency alerts, with potential to reduce response times and influence future smart-city safety systems.",
      tags: [
        "IoT",
        "Raspberry Pi",
        "Arduino",
        "Python",
        "Mobile Integration",
        "Full-stack Development",
        "Real-time Systems",
        "Prototyping",
        "Kobe Institute of Computing",
      ],
      links: [
        {
          label: "Research",
        },
      ],
      image: "/njunalogo.png",
    },
  ],
};

/* ---------- UTILS ---------- */
const cx = (...classes: Array<string | undefined | false>) =>
  classes.filter(Boolean).join(" ");

const fadeIn: MotionProps = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.4, ease: "easeOut" },
};

const canonical = (s: string) => {
  const key = s.trim().toLowerCase().replace(/\s+/g, "");
  const map: Record<string, string> = {
    react: "React",
    javascript: "JavaScript",
    typescript: "TypeScript",
    nodejs: "Node.js",
    node: "Node.js",
    python: "Python",
    tailwind: "Tailwind CSS",
  };
  return map[key] ?? s;
};

/* ---------- PIECES ---------- */
function ThemeToggle({ on }: { on?: (dark: boolean) => void }) {
  const [dark, setDark] = React.useState(true);
  React.useEffect(() => void on?.(dark), [dark, on]);
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setDark((d) => !d)}
      className={cx(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[12px]",
        P.border,
        "bg-[rgba(255,255,255,0.04)]",
        P.text2,
        "hover:bg-[rgba(255,255,255,0.06)]"
      )}
    >
      {dark ? <SunMedium size={14} /> : <Moon size={14} />}
      <span className="hidden sm:inline">{dark ? "Light" : "Dark"}</span>
    </button>
  );
}

function TopBar({
  activeId,
  onTheme,
}: {
  activeId?: string;
  onTheme?: (d: boolean) => void;
}) {
  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
  ];
  return (
    <nav className="xl:hidden sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-[#0F0A1E]/70 border-[#2B2144]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className={cx("font-semibold tracking-tight", P.text)}>
          {DATA.name}
        </a>
        <div className="flex items-center gap-4">
          <ul className="hidden sm:flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cx(
                    "text-[13px] transition",
                    activeId === l.href.slice(1) ? "text-white" : P.link,
                    P.linkHover
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={DATA.resumeUrl}
            className={cx(
              "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[12px]",
              P.border,
              "bg-[rgba(255,255,255,0.04)]",
              P.text2,
              "hover:bg-[rgba(255,255,255,0.06)]"
            )}
          >
            <FileDown size={14} /> Résumé
          </a>
          <ThemeToggle on={onTheme} />
        </div>
      </div>
    </nav>
  );
}

function Section({
  id,
  title,
  children,
  kicker,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  kicker?: string;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-8">
      <div className="mx-auto max-w-3xl px-6 xl:max-w-none xl:px-0">
        <div className="mb-5 group">
          {kicker && (
            <div
              className={cx(
                "mb-2 inline-block rounded-full px-3 py-1 text-[10px]",
                P.glow,
                P.text3
              )}
            >
              {kicker}
            </div>
          )}
          <div className="flex items-center gap-2">
            <h2
              className={cx(
                "text-[24px] sm:text-[26px] font-semibold tracking-tight",
                P.text
              )}
            >
              {title}
            </h2>
            <a
              href={`#${id}`}
              className={cx(
                "opacity-0 group-hover:opacity-100 focus:opacity-100 transition",
                P.text3,
                "hover:text-white"
              )}
              aria-label={`Link to ${title}`}
            >
              <LinkIcon size={14} />
            </a>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function SectionDivider() {
  return (
    <div className="mx-auto max-w-3xl px-4 xl:max-w-none xl:px-0">
      <div className="relative my-4 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent">
        <div className="absolute left-1/2 -translate-x-1/2 -top-[3px] h-1.5 w-1.5 rounded-full bg-[#8B5CF6]/80 shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {DATA.socials.map((s) => {
        const Icon = s.icon;
        return (
          <a
            key={s.name}
            href={s.href}
            className={cx(
              "group inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-[12px]",
              P.border,
              "bg-[rgba(255,255,255,0.04)]",
              P.text2,
              "hover:bg-[rgba(255,255,255,0.06)]"
            )}
          >
            <Icon size={14} />
            <span>{s.name}</span>
            <ExternalLink
              size={12}
              className="opacity-60 group-hover:opacity-90"
            />
          </a>
        );
      })}
    </div>
  );
}

/* ---------- EXPERIENCE ---------- */
function ExperienceItem({ e }: { e: (typeof DATA.experience)[number] }) {
  return (
    <motion.li {...fadeIn} className="relative pl-6">
      <div
        className={cx(
          "absolute left-0 top-1 h-3 w-3 rounded-full",
          P.glow,
          "ring-2",
          P.ring
        )}
      />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className={cx("font-medium", P.text)}>
          {e.role} · <span className={P.text2}>{e.company}</span>
        </h3>
        <span className={cx("text-[14px]", P.text3)}>{e.period}</span>
      </div>
      <ul
        className={cx("mt-2 list-disc space-y-1 pl-5 text-[14zspx]", P.text2)}
      >
        {e.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </motion.li>
  );
}

/* ---------- PROJECTS ---------- */
function Spotlight({ selector }: { selector: string }) {
  React.useEffect(() => {
    const root = document.querySelector(selector) as HTMLElement | null;
    if (!root) return;
    const move = (e: MouseEvent) => {
      const rect = root.getBoundingClientRect();
      root.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
      root.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
    };
    root.addEventListener("mousemove", move);
    root.addEventListener("mouseleave", () => {
      root.style.setProperty("--spot-x", `-1000px`);
      root.style.setProperty("--spot-y", `-1000px`);
    });
    return () => root.removeEventListener("mousemove", move);
  }, [selector]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(420px circle at var(--spot-x, -1000px) var(--spot-y, -1000px), rgba(139,92,246,0.16), transparent 52%)",
      }}
    />
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={cx(
        "rounded-full px-2 py-0.5 text-[11px]",
        P.chipBorder,
        "border",
        P.chipBg,
        P.text2
      )}
    >
      {children}
    </span>
  );
}

function ProjectRow({ p, index }: { p: Project; index: number }) {
  const firstWithHref = React.useMemo(
    () => p.links?.find((l) => typeof l.href === "string" && l.href.length > 0),
    [p.links]
  );

  return (
    <li className="mb-12">
      <div
        className={cx(
          "group relative grid gap-4 pb-1 transition-all",
          "sm:grid-cols-8 sm:gap-4 md:gap-4"
        )}
      >
        {/* Hover backdrop */}
        <div
          className={cx(
            "absolute -inset-x-2 -inset-y-2 z-0 hidden rounded-md md:block transition",
            "group-hover:opacity-100",
            P.bgSurface,
            "opacity-0",
            "ring-1",
            P.border,
            "ring-inset"
          )}
        />

        {/* Image (always left, first on mobile too) */}
        <a
          href={firstWithHref?.href ?? "#"}
          className="z-10 order-1 sm:order-1 sm:col-span-2 sm:translate-y-1"
        >
          <div
            className={cx(
              "aspect-video w-full overflow-hidden rounded-md border-2 object-cover transition",
              P.border,
              "group-hover:border-[rgba(234,230,255,0.18)]"
            )}
          >
            { }
            {p.image ? (
             <Image
             src={p.image}
             alt={p.title}
             fill
             priority={index < 2}
             sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
             className="object-cover rounded-md antialiased shadow-md"
           />
            ) : (
              <div
                className={cx(
                  "flex h-full items-center justify-center text-[12px]",
                  P.text3
                )}
              >
                No image
              </div>
            )}
          </div>
        </a>

        {/* Text (always right) */}
        <div className="z-10 order-2 sm:order-2 sm:col-span-6">
          <h3 className="leading-tight">
            <a
              href={firstWithHref?.href ?? "#"}
              className={cx(
                "inline-flex items-baseline font-medium text-base",
                P.text,
                "hover:text-[#8B5CF6] focus-visible:text-[#8B5CF6]"
              )}
            >
              {p.title}
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </h3>

          <p className={cx("mt-2 text-sm leading-normal", P.text2)}>
            {p.description}
          </p>
          {p.impact && (
            <p className={cx("mt-1 text-[12px] leading-normal", P.text3)}>
              {p.impact}
            </p>
          )}

          {/* Links + meta */}
          <div className="mt-3 flex flex-wrap items-center gap-4 text-[12px]">
            {p.links
              ?.filter(
                (l): l is Required<ProjectLink> =>
                  !!l.href && l.href.length > 0
              )
              .slice(0, 2)
              .map((l) => (
                <a key={l.label} href={l.href} className={cx(P.link, P.linkHover)}>
                  {l.label}
                </a>
              ))}
            {(p.stars || p.downloads) && (
              <span className={cx("inline-flex items-center gap-2", P.text2)}>
                {p.stars && (
                  <span className="inline-flex items-center gap-1">
                    <Star size={13} className="opacity-90" />{" "}
                    {p.stars.toLocaleString()}
                  </span>
                )}
                {p.downloads && (
                  <span className="inline-flex items-center gap-1">
                    <Download size={13} className="opacity-90" /> {p.downloads}+
                    Installs
                  </span>
                )}
              </span>
            )}
          </div>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <Tag key={t}>{canonical(t)}</Tag>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

function BackToTop() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() =>
        document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })
      }
      className={cx(
        "fixed bottom-5 right-5 z-50 rounded-full px-3 py-2 text-[12px] backdrop-blur",
        "border bg-white/10 hover:bg-white/20",
        P.border,
        P.text
      )}
      aria-label="Back to top"
      title="Back to top"
    >
      ↑ Top
    </button>
  );
}

/* ---------- PAGE ---------- */
export default function IndigoPortfolio(): JSX.Element {
  // const [_dark, setDark] = React.useState(true);
  const [active, setActive] = React.useState<string>("about");
  const year = new Date().getFullYear();
  const flatSkills = React.useMemo(() => Object.values(DATA.skills).flat(), []);

  React.useEffect(() => {
    if (typeof window !== "undefined" && !window.location.hash) {
      window.history.replaceState(null, "", "#about");
      document
        .getElementById("about")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  React.useEffect(() => {
    const ids = ["about", "experience", "projects"];
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id)
        ),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div id="top" className="scroll-smooth">
      <div
        className={cx(
          "min-h-screen",
          P.bg,
          P.text,
          "bg-[radial-gradient(70rem_32rem_at_50%_-8rem,rgba(139,92,246,0.14),transparent_60%)]"
        )}
      >
        <TopBar activeId={active}  />

        <main className="mx-auto max-w-7xl px-2 xl:grid xl:grid-cols-[360px_minmax(0,1fr)] xl:gap-40 xl:px-2">
          {/* Sidebar (xl+) */}
          <aside className="hidden xl:block">
            <div className="sticky top-24">
              <div className="mb-10">
                <div
                  className={cx(
                    "inline-flex items-center gap-2 text-[12px]",
                    P.text2
                  )}
                >
                  <MapPin size={14} className="opacity-80" />
                  <span>{DATA.location}</span>
                </div>
                <h1 className="mt-3 text-4xl font-bold leading-relaxed tracking-tight sm:text-5xl">
                  {DATA.name}
                </h1>
                <p
                  className={cx(
                    "mt-3 text-lg font-semibold tracking-tight sm:text-xl",
                    P.text2
                  )}
                >
                  {DATA.role}
                </p>
                <p
                  className={cx(
                    "mt-4 max-w-xs text-[15px] leading-normal",
                    P.text2
                  )}
                >
                  {DATA.summary}
                </p>
                <div className="mt-16 ml-1 flex items-center gap-3">
                  <a
                    href={`mailto:${DATA.email}`}
                    className={cx(
                      "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px]",
                      P.border,
                      "bg-[rgba(255,255,255,0.04)]",
                      P.text,
                      "hover:bg-[rgba(255,255,255,0.06)]"
                    )}
                  >
                    <Mail size={14} /> Contact
                  </a>
                  <a
                    href={DATA.resumeUrl}
                    className={cx(
                      "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px]",
                      "border-[rgba(139,92,246,0.35)] bg-[rgba(139,92,246,0.14)] hover:bg-[rgba(139,92,246,0.22)] text-[#EDE9FE]"
                    )}
                  >
                    <FileDown size={14} /> Résumé
                  </a>
                </div>
              </div>

              <nav aria-label="Section navigation" className="mt-16 space-y-4">
                {[
                  { href: "#about", label: "ABOUT" },
                  { href: "#experience", label: "EXPERIENCE" },
                  { href: "#projects", label: "PROJECTS" },
                ].map((l) => {
                  const isActive = active === l.href.slice(1);
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      className={cx(
                        "group relative block pl-8 text-[16px] tracking-[0.14em]",
                        isActive ? "text-white" : P.text2,
                        "hover:text-white"
                      )}
                    >
                      <span
                        className={cx(
                          "absolute left-0 top-1/2 h-px w-6 -translate-y-1/2 bg-[rgba(255,255,255,0.18)] transition-all group-hover:w-8",
                          isActive &&
                            "w-10 bg-[#8B5CF6]/90 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                        )}
                      />
                      {l.label}
                    </a>
                  );
                })}
              </nav>

              <div className="ml-8 mt-20 flex items-center gap-8">
                {DATA.socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      className={cx(P.text2, "hover:text-white")}
                    >
                      <span className="sr-only">{s.name}</span>
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Content column */}
          <div className="pt-8 xl:pt-24">
            {/* Hero (mobile/tablet) */}
            <header className="xl:hidden pb-1">
              <motion.div {...fadeIn} className="flex flex-col gap-4">
                <div
                  className={cx(
                    "inline-flex items-center gap-2 text-[12px]",
                    P.text2
                  )}
                >
                  <MapPin size={14} className="opacity-80" />
                  <span>{DATA.location}</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-[#DDD6FE] via-[#EDE9FE] to-[#C4B5FD] bg-clip-text text-transparent">
                    {DATA.name}
                  </span>
                </h1>
                <p className={cx("max-w-2xl text-xl font-semibold", P.text2)}>
                  {DATA.role}
                </p>
                <p className={cx("max-w-2xl text-[14px]", P.text2)}>
                  {DATA.summary}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${DATA.email}`}
                    className={cx(
                      "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[12px]",
                      P.border,
                      "bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.06)]"
                    )}
                  >
                    <Mail size={14} /> Contact
                  </a>
                  <a
                    href={DATA.resumeUrl}
                    className="inline-flex items-center gap-2 rounded-full border border-[rgba(139,92,246,0.35)] bg-[rgba(139,92,246,0.14)] px-4 py-2 text-[12px] text-[#EDE9FE] hover:bg-[rgba(139,92,246,0.22)]"
                  >
                    <FileDown size={16} /> Résumé
                  </a>
                </div>
                <SocialLinks />
              </motion.div>
            </header>

            {/* About */}
            <Section id="about" title="About" kicker="Hello!">
              <motion.div
                {...fadeIn}
                className={cx("prose prose-invert max-w-none", P.text2)}
              >
                <div className="text-[16px] leading-7">
                  <p className="mb-4">
                    Beyond web platforms, I’ve also experimented with IoT
                    solutions, reflecting my curiosity and drive to explore
                    technologies that add real value for people. Known for
                    adaptability and collaboration, I thrive in diverse teams
                    and bring both technical expertise and a growth mindset to
                    every project.
                  </p>
                  <p className="mb-4">
                    I enjoy collaborating in diverse teams, bringing both
                    technical expertise and a growth mindset to every project.
                    Looking ahead, I’m excited to keep building and contributing
                    to solutions that make a difference.
                  </p>
                  <p className="mb-4">
                    Outside of coding, I draw inspiration from creative pursuits
                    like art, painting, Ikebana, and karate, which shape how I
                    approach problem-solving with balance, creativity, and
                    discipline.
                  </p>
                </div>
              </motion.div>
              {/* My Stack */}
              <div className="mt-8">
                <h3
                  className={cx(
                    "mb-3 text-[16px] font-semibold uppercase tracking-wide",
                    P.text3
                  )}
                >
                  My Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {flatSkills.map((s) => (
                    <span
                      key={s}
                      className={cx(
                        "rounded-full px-3 py-1 text-[12px] border-2",
                        P.chipBorder,
                        P.chipBg,
                        P.text2
                      )}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Section>

            <SectionDivider />

            {/* Experience */}
            <Section id="experience" title="Experience" kicker="">
              <ol
                className={cx(
                  "relative ml-1 space-y-6 border-l pl-6",
                  P.border
                )}
              >
                {DATA.experience.map((e, i) => (
                  <ExperienceItem key={i} e={e} />
                ))}
              </ol>
            </Section>

            <SectionDivider />

            {/* Projects with spotlight */}
            <Section id="projects" title="Projects" kicker="Selected projects">
              <div
                id="projects-spot"
                className={cx("relative rounded-3xl p-2 md:p-3 lg:p-4")}
              >
                <Spotlight selector="#projects-spot" />
                <ul className="divide-y divide-[rgba(255,255,255,0.06)]">
                  {DATA.projects.map((p, i) => (
                    <ProjectRow key={p.title} p={p} index={i} />
                  ))}
                </ul>
              </div>
            </Section>

            <footer className="mt-8 border-t border-[rgba(255,255,255,0.08)]">
              <div
                className={cx(
                  "flex items-center justify-between gap-4 py-7 text-[12px]",
                  P.text3
                )}
              >
                <p>
                  © {year} {DATA.name}. All rights reserved.
                </p>
                <div className="flex items-center gap-3">
                  {DATA.socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a key={s.name} href={s.href} className="hover:text-white">
                        <span className="sr-only">{s.name}</span>
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </footer>
          </div>
        </main>

        <BackToTop />
      </div>
    </div>
  );
}

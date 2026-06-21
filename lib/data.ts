import type { Project, Service, TechItem, ProcessStep } from "./types";

export const projects: Project[] = [
  {
    id: "northside-legal",
    title: "Northside Legal Group",
    industry: "Legal & Professional Services",
    description:
      "Complete brand overhaul and high-performance web presence for a boutique law firm. Resulted in a 3x increase in qualified lead enquiries within 60 days.",
    techStack: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"],
    caseStudyUrl: "#",
    liveUrl: "#",
  },
  {
    id: "peak-performance",
    title: "Peak Performance Co.",
    industry: "Health & Fitness",
    description:
      "Custom e-commerce and membership platform with real-time class booking and Stripe-powered subscription management.",
    techStack: ["Next.js", "TypeScript", "Stripe", "Supabase"],
    caseStudyUrl: "#",
    liveUrl: "#",
  },
  {
    id: "arclight-studio",
    title: "Arclight Architecture Studio",
    industry: "Architecture & Design",
    description:
      "Award-winning portfolio site with immersive project showcases, animated transitions, and a headless CMS for frictionless content management.",
    techStack: ["Next.js", "Framer Motion", "Contentful", "Vercel"],
    caseStudyUrl: "#",
    liveUrl: "#",
  },
  {
    id: "harbor-realty",
    title: "Harbor Realty Group",
    industry: "Real Estate",
    description:
      "Property listing platform with advanced filtering, map integration, and automated email notifications. Handles 10,000+ listings.",
    techStack: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    caseStudyUrl: "#",
    liveUrl: "#",
  },
  {
    id: "verdant-supply",
    title: "Verdant Supply Co.",
    industry: "E-Commerce & Retail",
    description:
      "Headless Shopify storefront with custom product configurator, lightning-fast page speeds (99 Lighthouse score), and personalised recommendations.",
    techStack: ["Next.js", "Shopify", "Tailwind CSS", "Vercel"],
    caseStudyUrl: "#",
    liveUrl: "#",
  },
  {
    id: "forma-consulting",
    title: "Forma Consulting",
    industry: "Business Consulting",
    description:
      "Lead-generation focused website with deep SEO architecture, conversion-optimised landing pages, and HubSpot CRM integration.",
    techStack: ["Next.js", "TypeScript", "HubSpot", "Sanity CMS"],
    caseStudyUrl: "#",
    liveUrl: "#",
  },
];

export const services: Service[] = [
  {
    id: "ui-ux-design",
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "Crafting intuitive, conversion-focused digital experiences that look stunning and perform even better.",
    features: [
      "User research & journey mapping",
      "High-fidelity Figma prototypes",
      "Design system creation",
      "Figma-to-code pixel precision",
      "Responsive across all breakpoints",
    ],
  },
  {
    id: "web-development",
    icon: "Code2",
    title: "Web Development",
    description:
      "Modern, scalable full-stack development using the latest frameworks — built for speed, SEO, and maintainability.",
    features: [
      "Next.js & React development",
      "Headless CMS integrations",
      "API & third-party integrations",
      "Lightning-fast performance",
      "Vercel & cloud deployment",
    ],
  },
  {
    id: "digital-strategy",
    icon: "TrendingUp",
    title: "Digital Strategy",
    description:
      "Data-driven strategy to maximise your website's impact — from first visit to loyal customer.",
    features: [
      "Conversion rate optimisation (CRO)",
      "Technical SEO audits",
      "Core Web Vitals optimisation",
      "Analytics setup & tracking",
      "Competitor & market analysis",
    ],
  },
];

export const techItems: TechItem[] = [
  { name: "Next.js", icon: "⬡", category: "frontend" },
  { name: "React", icon: "⚛", category: "frontend" },
  { name: "TypeScript", icon: "TS", category: "frontend" },
  { name: "Tailwind CSS", icon: "✦", category: "frontend" },
  { name: "Framer Motion", icon: "◐", category: "frontend" },
  { name: "Vercel", icon: "▲", category: "tooling" },
  { name: "Sanity CMS", icon: "S", category: "tooling" },
  { name: "Figma", icon: "F", category: "design" },
  { name: "Supabase", icon: "⚡", category: "backend" },
  { name: "Stripe", icon: "$", category: "backend" },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Strategy & Wireframing",
    description:
      "We start with a deep-dive discovery call to understand your business goals, audience, and competitive landscape. From this, I build detailed user flows and low-fidelity wireframes to align on structure before design begins.",
    icon: "Lightbulb",
  },
  {
    step: 2,
    title: "Design & High-Fidelity Mockups",
    description:
      "Using Figma, I craft polished, pixel-perfect designs with a clear visual hierarchy, consistent design system, and interactive prototype — so you see exactly what you're getting before a single line of code is written.",
    icon: "PenTool",
  },
  {
    step: 3,
    title: "Development & Launch",
    description:
      "Your design is brought to life with clean, type-safe code built on Next.js and deployed to Vercel. Full SEO configuration, performance auditing, and handover documentation included with every project.",
    icon: "Rocket",
  },
];

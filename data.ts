import type { Profile } from "@/types/profile";

/**
 * All portfolio content lives here. Edit this file to make the site your own:
 * text, links, experience, projects, skills, contact details and SEO.
 * Field descriptions: src/types/profile.ts
 */
export const profile: Profile = {
  name: "Muhammad Usman",
  role: "Full Stack Developer",
  location: "Lahore, Pakistan",
  intro:
    "I design and build production systems end to end, from data modelling and API design to deployment and support after launch.",
  email: "iamusmanmunawar@gmail.com",
  phone: "+92 317 4303225",
  whatsapp: "+92 317 4303225",
  resumeUrl: "",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-usman-b667072a8/" },
    { label: "GitHub", href: "https://github.com/i-usman-56" },
    { label: "Kaggle", href: "https://www.kaggle.com/usman5659" },
  ],

  about: {
    paragraphs: [
      "I'm a Full Stack Developer with 3+ years of experience, working mainly with Node.js, TypeScript, React and Next.js on PostgreSQL and MongoDB.",
      "I'm currently the sole developer of a multi-tenant SaaS platform used by UK schools, responsible for its architecture, serverless AWS infrastructure and security, including Cyber Essentials certification and an independent penetration test.",
      "I've also designed backends for healthcare, including a HIPAA-compliant EHR for a US clinic on Google Cloud, and for e-commerce and film-streaming products with Stripe and Apple In-App Purchase payments. I'm comfortable taking a product from an empty repository to production and keeping it stable as it grows.",
    ],
    facts: [
      { label: "Experience", value: "3+ years" },
      { label: "Based in", value: "Lahore, Pakistan" },
      { label: "Core stack", value: "Node.js, TypeScript, React, Next.js" },
      { label: "Databases", value: "PostgreSQL, MongoDB, Redis" },
      { label: "Compliance", value: "Cyber Essentials, HIPAA, UK GDPR" },
    ],
  },

  experience: [
    {
      role: "Full Stack Developer",
      company: "Techorphic",
      start: "Apr 2025",
      end: "Present",
      summary:
        "Client projects in healthcare, e-commerce, education and film streaming, mainly on the backend: the APIs behind iOS and Android apps, along with web dashboards and admin panels. I usually take a project from database and API design through to deployment and support after it goes live.",
      highlights: [
        "Built a telemedicine backend from scratch: a Node.js/Express/TypeScript API for five user roles, covering appointment booking, real-time chat (Pusher) and reminders by push, SMS and email in English and Arabic.",
        "Integrated Stripe PaymentIntents, Stripe Connect payouts and server-side Apple In-App Purchase verification for a pay-per-view film platform with automatic 50/50 revenue sharing with filmmakers.",
        "Secured sensitive data with JWT, OTP two-factor and passwordless authentication, AES-256 field-level encryption, audit logs and role-based access control.",
        "Deployed and ran production systems on AWS, DigitalOcean, Netlify and Vercel with GitHub Actions CI/CD, PM2, Nginx, SSL and separate staging environments.",
        "Fixed live production incidents, including an out-of-memory crash loop and duplicate payment grants caused by repeated in-app purchase calls.",
      ],
    },
    {
      role: "Frontend Developer (React / Next.js)",
      company: "Averlabz",
      start: "Feb 2024",
      end: "Mar 2025",
      summary:
        "Worked on client web applications in the frontend team, turning designs into responsive interfaces with React, Next.js and Angular. Built reusable components with Tailwind CSS and Bootstrap, managed data and state with React Query, Zustand and Redux, and picked up backend fundamentals with Node.js.",
    },
    {
      role: "Frontend Developer Intern",
      company: "Averlabz",
      start: "Aug 2023",
      end: "Feb 2024",
      summary:
        "Six-month internship working alongside senior developers on live client projects. Built responsive pages with React, Bootstrap and Tailwind CSS, handled state with React Query and Zustand, and took part in code reviews on production codebases.",
    },
  ],

  projects: [
    {
      name: "RefocusED",
      tagline: "SEMH intervention platform for UK schools",
      role: "Sole Developer",
      status: "Active",
      highlights: [
        "Multi-tenant SaaS platform that UK schools use to assess pupils' social, emotional and mental health needs, run intervention programmes and produce inspection-ready reports.",
        "Node.js/TypeScript REST API (Express, Prisma, PostgreSQL) deployed serverless on AWS Lambda and API Gateway, plus Next.js dashboards for three roles and a 20+ page public website.",
        "Intervention workflow with progress charts, PDF impact reports (headless Chromium), Stripe subscription billing and read-only Bromcom and Arbor MIS imports.",
        "Took the platform through Cyber Essentials certification and an independent penetration test, resolving every finding: field-level encryption, step-up MFA, CSRF protection, rate limiting, a private-VPC database and secrets in AWS SSM.",
        "CI/CD with GitHub Actions and AWS Amplify, with pre-push checks and automated unit tests (Jest).",
      ],
      tech: [
        "Node.js",
        "TypeScript",
        "Express",
        "Prisma",
        "PostgreSQL",
        "Next.js",
        "AWS Lambda",
        "Stripe",
      ],
    },
    {
      name: "The Cove",
      tagline: "Healthcare platform for Shoreline Wellness Center (US)",
      role: "Backend Developer",
      highlights: [
        "Backend of a US behavioural health platform: a REST API on Google Cloud Run with Cloud SQL, matched to an existing frontend's API contract.",
        "EHR with patient records, intake, insurance and copay, scheduling with database-enforced double-booking protection, signed clinical notes locked by a PostgreSQL trigger, and PHQ-9/GAD-7 screeners.",
        "Patient data protected under HIPAA with AES-256-GCM field-level encryption, audited chart access and caseload-based access control.",
        "Staff hub for scheduling, time clock, leave, messaging, help desk and learning, with GitHub Actions CI/CD and automated tests (Vitest, Supertest).",
      ],
      tech: [
        "Node.js",
        "TypeScript",
        "Express",
        "Prisma",
        "PostgreSQL",
        "Firebase Auth",
        "Cloud Run",
      ],
    },
    {
      name: "Blanca Fragrance Factory",
      tagline: "Custom perfume e-commerce platform",
      role: "Techorphic",
      highlights: [
        "Built and maintained a live custom-perfume store with a customer app and an admin panel, deployed on DigitalOcean and Vercel.",
        "Passwordless login (email OTP, magic link, QR code on the bottle), Stripe card payments with refunds, in-store cash orders, ShipStation fulfilment and gift cards.",
      ],
      tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Stripe", "ShipStation"],
    },
    {
      name: "IndieFilmsRUs",
      tagline: "Indie film streaming and distribution platform",
      role: "Techorphic",
      highlights: [
        "REST API serving the iOS and Android apps, plus a Next.js admin and producer dashboard for a pay-per-view film platform.",
        "Credit-based rental packages, a 50/50 revenue split with filmmakers, Stripe Connect payouts, monthly PDF revenue reports and direct-to-S3 multipart video uploads.",
      ],
      tech: ["Node.js", "Express", "MongoDB", "Next.js", "Stripe", "Apple IAP", "AWS S3"],
    },
    {
      name: "Shifa",
      tagline: "Telemedicine and doctor appointment platform",
      role: "Techorphic (Backend)",
      highlights: [
        "Designed the schema and built the full backend, including scheduled reminder jobs, audit logs, consent records and data retention for medical data.",
      ],
      tech: ["Node.js", "Express", "TypeScript", "MongoDB", "Pusher", "Twilio", "SendGrid"],
    },
    {
      name: "Transactional Email Service",
      tagline: "Self-hosted alternative to SendGrid and Resend",
      role: "Personal project",
      highlights: [
        "Multi-tenant API on a single VPS with API keys, queued sending, signed webhooks and Stripe billing.",
        "Configured SPF, DKIM, DMARC and reverse DNS and ran a three-month IP warm-up; emails reached the inbox in Gmail and Google Workspace.",
        "Go relay service with rate limiting, GitHub Actions CI/CD and a Cloudflare-only firewall.",
      ],
      tech: ["Node.js", "TypeScript", "Go", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
    },
  ],
  otherProjects: [
    "Fuel Stop",
    "HeyDividend",
    "Tangle Store",
    "Mubaader Realtor",
    "Wholesale ERP",
    "GoldPin",
  ],

  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Go", "SQL (PL/pgSQL)", "Python", "Bash"],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Prisma",
        "Mongoose",
        "Zod",
        "JWT",
        "OAuth",
        "Role-Based Access Control",
        "BullMQ",
        "RabbitMQ",
        "WebSockets / Pusher",
        "Webhooks",
        "OpenAPI",
        "Puppeteer",
        "Firebase Auth",
      ],
    },
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "Angular",
        "Redux Toolkit",
        "TanStack Query",
        "Zustand",
        "React Hook Form",
        "Tailwind",
        "shadcn/ui",
      ],
    },
    {
      category: "Databases",
      items: [
        "PostgreSQL (AWS RDS, Cloud SQL, Neon)",
        "MongoDB (Atlas, Aggregation)",
        "Redis",
        "MariaDB",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "AWS (Lambda, API Gateway, RDS, S3, EC2, VPC, SSM, CloudWatch, SES)",
        "Google Cloud (Cloud Run, Cloud SQL, Secret Manager)",
        "Azure",
        "Cloudflare (Workers, R2)",
        "DigitalOcean",
        "Vercel",
        "Serverless Framework",
        "Docker",
        "GitHub Actions",
        "Nginx",
        "PM2",
        "Linux",
      ],
    },
    {
      category: "Payments & APIs",
      items: [
        "Stripe (Payments, Connect, Subscriptions, Webhooks)",
        "Apple In-App Purchases",
        "SendGrid",
        "Twilio",
        "Firebase Cloud Messaging",
        "Bromcom / Arbor MIS APIs",
        "ShipStation",
      ],
    },
    {
      category: "Security",
      items: [
        "AES-256 Field-Level Encryption",
        "Step-Up MFA",
        "OTP / 2FA",
        "CSRF Protection",
        "Rate Limiting",
        "HSTS / CSP",
        "Audit Logging",
        "SPF / DKIM / DMARC",
        "Cyber Essentials",
        "Penetration Test (VAPT) Remediation",
        "HIPAA",
        "UK GDPR",
      ],
    },
    {
      category: "Testing & Tools",
      items: [
        "Jest",
        "Vitest",
        "Supertest",
        "SonarQube",
        "ESLint",
        "Prettier",
        "Husky",
        "Git",
        "Postman",
      ],
    },
  ],

  education: [
    {
      qualification: "BSc in Information Technology (BSIT)",
      institution: "Punjab University",
      location: "Lahore",
    },
    {
      qualification: "Intermediate in Computer Science (ICS)",
      institution: "Islamia College Civil Lines",
      location: "Lahore",
    },
  ],
  certifications: [
    "Python for Data Science and Machine Learning Bootcamp (Pandas, Scikit-learn, TensorFlow, Keras)",
  ],
  languages: ["English (Professional)", "Urdu (Native)", "Punjabi (Native)"],

  contact: {
    heading: "Get in touch",
    message:
      "The quickest way to reach me is by email. You can also call me or send a message on WhatsApp, or find me on LinkedIn and GitHub.",
  },

  seo: {
    title: "Muhammad Usman | Full Stack Developer",
    description:
      "Full Stack Developer (Node.js, TypeScript, React, Next.js) with 3+ years building production systems end to end, from API design to deployment.",
    keywords: [
      "Muhammad Usman",
      "Full Stack Developer",
      "Node.js Developer",
      "TypeScript",
      "React",
      "Next.js",
      "Backend Developer",
    ],
    locale: "en_GB",
  },
};

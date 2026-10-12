/**
 * Shape of the portfolio content in `data.ts` (project root).
 * Every field is documented so the data file can be edited without reading the components.
 */

/** A labelled external link, e.g. LinkedIn or GitHub. */
export type ProfileLink = {
  label: string;
  href: string;
};

/** A short label/value pair shown in the About section, e.g. "Based in" / "Lahore". */
export type ProfileFact = {
  label: string;
  value: string;
};

/** One role in the Experience section, most recent first. */
export type Experience = {
  role: string;
  company: string;
  /** Free text, e.g. "Apr 2025". */
  start: string;
  /** Free text, e.g. "Mar 2025" or "Present". */
  end: string;
  location?: string;
  /** One or two sentences about the role. */
  summary?: string;
  /** Achievements, one sentence each. */
  highlights?: string[];
};

/** One card in the Projects section. */
export type Project = {
  name: string;
  /** What the product is, e.g. "Healthcare platform for a US clinic". */
  tagline: string;
  /** Your role or context, e.g. "Sole Developer" or "Personal project". */
  role: string;
  /** Optional status badge, e.g. "Active". */
  status?: string;
  highlights: string[];
  tech: string[];
  /** Optional public URL (live site or repository). */
  href?: string;
};

/** A group of skills, e.g. "Backend". */
export type SkillGroup = {
  category: string;
  items: string[];
};

/** A degree or qualification. */
export type Education = {
  qualification: string;
  institution: string;
  location?: string;
  /** Free text, e.g. "2019 – 2023". Leave out if you prefer not to show dates. */
  period?: string;
};

/** Everything the site renders. Edit `data.ts` to change the content. */
export type Profile = {
  name: string;
  /** Job title shown under your name, e.g. "Full Stack Developer". */
  role: string;
  location: string;
  /** One or two sentences shown in the hero. */
  intro: string;
  email: string;
  /**
   * Optional, international format (e.g. "+44 20 7946 0000"). Adds a "Call" button that dials it.
   * The number is never shown as text, but it is in the page's link, so it isn't private.
   */
  phone?: string;
  /** Optional WhatsApp number, international format. Adds a "WhatsApp" button that opens a chat. */
  whatsapp?: string;
  /** Optional path to a CV in `public/`, e.g. "/cv.pdf". Empty hides the download button. */
  resumeUrl?: string;
  links: ProfileLink[];
  about: {
    /** Paragraphs of the About section. */
    paragraphs: string[];
    facts: ProfileFact[];
  };
  experience: Experience[];
  projects: Project[];
  /** Smaller projects listed by name under the project cards. */
  otherProjects?: string[];
  skills: SkillGroup[];
  education: Education[];
  certifications?: string[];
  languages?: string[];
  contact: {
    heading: string;
    message: string;
  };
  seo: {
    /** Browser tab and search result title. */
    title: string;
    /** Search result and link preview text (50–160 characters). */
    description: string;
    keywords: string[];
    /** `en_GB` or `en_US`; also sets the page language. */
    locale: string;
  };
};

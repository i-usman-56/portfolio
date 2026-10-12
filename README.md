# Portfolio

A clean, single-page developer portfolio built with Next.js 16, TypeScript, Tailwind CSS v4 and
shadcn/ui. Light and dark themes, subtle scroll animations, and SEO set up out of the box.

All content comes from one file, so you can turn this into **your** portfolio by editing
[`data.ts`](data.ts). You don't need to touch any components.

## Use it for your own portfolio

### 1. Get the code

You need [Node.js](https://nodejs.org) 20.9 or newer.

```bash
git clone https://github.com/i-usman-56/portfolio.git my-portfolio
cd my-portfolio
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. You'll see the current owner's portfolio. Next, replace it with yours.

### 2. Add your details in `data.ts`

Open [`data.ts`](data.ts) and replace the content. Each part controls one area of the site:

| Field in `data.ts`                         | Where it appears                                    |
| ------------------------------------------ | --------------------------------------------------- |
| `name`, `role`, `location`, `intro`        | Top of the page (hero)                              |
| `links`                                    | LinkedIn, GitHub, etc. in the hero, contact, footer |
| `about.paragraphs`, `about.facts`          | About section and its key-facts panel               |
| `experience`                               | Experience section, most recent first               |
| `projects`, `otherProjects`                | Project cards and the "Also worked on" line         |
| `skills`                                   | Skills section, grouped by category                 |
| `education`, `certifications`, `languages` | Education section                                   |
| `email`, `contact`                         | Contact section                                     |
| `seo`                                      | Browser tab title, Google results, link previews    |

Save the file and the page updates straight away. Your editor will warn you if a field is missing
or has the wrong type; every field is explained in [`src/types/profile.ts`](src/types/profile.ts).

Good to know:

- Dates are plain text, so write them however you like (`"Apr 2025"`, `"Present"`).
- Optional lists (`otherProjects`, `certifications`, `languages`) can be removed or left empty, and
  their part of the page is hidden.
- The page title, link-preview image and search-engine data are all generated from `data.ts`.

### 3. Optional extras

- **CV download:** create a `public/` folder, put your CV in it as `cv.pdf`, then set
  `resumeUrl: "/cv.pdf"`. A "Download CV" button appears in the hero.
- **Call button:** set `phone` (international format, e.g. `"+44 20 7946 0000"`). Visitors can tap to
  call. The number isn't shown on the page, but anyone can still find it in the page source.
- **WhatsApp button:** set `whatsapp` to your WhatsApp number to add a button that opens a chat.
- **Project links:** add `href` to a project to link its name to a live site or repository.
- **Status badge:** add `status: "Active"` (or any short text) to a project.

### 4. Replace the favicon

Swap [`src/app/favicon.ico`](src/app/favicon.ico) for your own icon (same file name).

### 5. Check everything

```bash
npm run lint
npm run typecheck
npm run build
```

### 6. Deploy

The easiest option is [Vercel](https://vercel.com/new):

1. Push your copy to GitHub.
2. Import the repository on Vercel.
3. Add an environment variable `NEXT_PUBLIC_SITE_URL` set to your domain, e.g. `https://yourname.dev`.
4. Deploy.

`NEXT_PUBLIC_SITE_URL` matters: without it, links in Google results and social previews point to
`localhost`. The build prints a warning if it's missing.

Any host that runs Node.js also works: `npm run build`, then `npm run start`.

## Customising further

- **Remove a section:** delete it from [`src/app/page.tsx`](src/app/page.tsx) and remove its link
  from `nav` in [`src/config/site.ts`](src/config/site.ts).
- **Add a section:** create a component in `src/features/portfolio/components/`, export it from
  `src/features/portfolio/index.ts`, add it to the page, and (optionally) add a `nav` link.
- **Colours:** the theme colours are in [`src/app/globals.css`](src/app/globals.css) (`:root` for
  light, `.dark` for dark). The site opens in light mode; change `defaultTheme` in
  [`src/providers/theme-provider.tsx`](src/providers/theme-provider.tsx) to `"system"` or `"dark"`.
- **Animations:** add the `reveal` class to any element to fade it in as it scrolls into view.

## Scripts

| Script                 | What it does                                |
| ---------------------- | ------------------------------------------- |
| `npm run dev`          | Start the dev server                        |
| `npm run build`        | Production build                            |
| `npm run start`        | Serve the production build                  |
| `npm run lint`         | ESLint (150-line limit + JSDoc on exports)  |
| `npm run typecheck`    | Generate route types, then TypeScript check |
| `npm run format`       | Format everything with Prettier             |
| `npm run format:check` | Check formatting without writing            |

## Project structure

```
data.ts              All portfolio content (the only file you need to edit)
src/
  app/               Routes: thin pages plus metadata files (robots, sitemap, manifest, OG image)
  features/          Feature modules; the portfolio sections live in features/portfolio
  components/
    ui/              shadcn/ui primitives
    common/          Reusable building blocks (Section, ButtonLink, TagList, error boundaries)
    layout/          Header, footer, theme toggle
  providers/         App-wide providers (theme)
  hooks/             Shared hooks
  lib/               Helpers (cn, SEO metadata, structured data)
  config/site.ts     Site settings derived from data.ts (navigation, URL, theme colours)
  types/             Shared types, including the data.ts schema (profile.ts)
```

## Conventions

If you extend the code, these keep it consistent:

- Files in `src/` stay under 150 lines, and every export has a JSDoc comment (checked by `npm run lint`).
- Server Components by default; `"use client"` only where interactivity is needed.
- Content is server-rendered so search engines and link previews can read all of it.
- Use the theme tokens (`bg-background`, `text-muted-foreground`, …) rather than fixed colours, so
  light and dark mode both keep working.
- Animations stay subtle and switch off for visitors who prefer reduced motion.

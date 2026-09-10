# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Migrating **https://sreepvf.org/** (WordPress, SKT-Trust theme + Elementor/ElementsKit + nivo-slider +
owl-carousel) into a static HTML + CSS + Bootstrap site, page by page. Changing only the technology —
not the UI, content, SEO, or user experience. See [WEBSITE-STANDARDS.md](WEBSITE-STANDARDS.md), which is
**authoritative and unmodified** for folder structure, naming, CSS/JS architecture, the partial-include
system, backup/deploy workflow, and the QA checklist — read it before touching structure or file
placement. This file adds the migration-specific rules and this project's Data Dictionary on top of it.

> **CHANGE THE TECHNOLOGY, NOT THE UI.** This is not a redesign, a content rewrite, or a modernization
> pass. Success test: *if the client opens the static version without being told the tech changed,
> would they notice a redesign?* The answer must be **no**.

## Data Dictionary (per WEBSITE-STANDARDS.md §9)

| Fact | Canonical value | Notes |
|---|---|---|
| Business name | Sree Padmavathi Venkateswara Foundation (SreePVF) | |
| Phone | +91-9866656456 | from footer |
| WhatsApp | — | not used on the live site |
| Email | sreepvfkrishna@gmail.com | also shown in header top bar |
| Address | 40-3-13, Gummadi Raja Gopala Rao Street, M.G. Road, Vijayawada-520 010, Andhra Pradesh, India | |
| Hours | — | not published on the live site |
| Social links | — | none linked on the homepage |
| Maps link | — | not published |
| Website | https://sreepvf.org/ | |
| Include mode | fetch (`data-include` + `include.js`) | |
| CSS framework | Bootstrap 5.3.3 (pinned), layered under custom CSS | |
| Breakpoints | Bootstrap defaults (sm/md/lg/xl/xxl) | |
| Pinned CDN libraries | Bootstrap 5.3.3 (CSS+JS), Bootstrap Icons 1.11.3 (CSS), Google Fonts "Poppins" (weights 300–800) | |

## Design tokens extracted from the live site (`css/variables.css`)

- Font: **Poppins** (Google Fonts), body text `#2B2B2B` at 15px base.
- Accent (coral/terracotta — section eyebrow labels, founder/about labels): `#D55343`.
- Navy (nav bar, buttons, "Explore Grants" CTA, ticker badge): `#2B4959`.
- Navy-deep (Our Mission section background): `#273341`.
- Navy-footer (footer background): `#1E2436`.
- Gold (active nav link): `#EFC94C`.
- White `#FFFFFF` on dark sections/buttons.
- Header is **not** sticky on the live site (`position: static/relative`) — don't add sticky behavior.
- Hero is a 2-slide slider (nivo-slider originally) — "Biomedical Sciences" / "Agricultural Sciences" —
  rebuilt as a Bootstrap carousel, autoplaying, 100vh.
- Testimonials (`.skt-testimonials`, originally owl-carousel) — 5 slides, quote + name + title.
- Upcoming Events (`.skt-events`, originally owl-carousel) — 4 slides, image + title + date/venue +
  excerpt + "Learn More" link.
- Per the client's instruction, **every carousel auto-advances every 4 seconds and has visible
  prev/next arrows** (`data-bs-interval="4000"` on each `.carousel`).

## Images — placeholder policy for this migration

No image/media assets have been supplied yet (no WordPress backup, no manual uploads). Per the client's
explicit instruction: **every image slot — `<img>` or CSS background-image — gets a visible placeholder**
(`images/placeholder.svg`, or the `.bg-placeholder` CSS pattern for background-image sections) rather
than a substitute image or an omitted element. Each placeholder carries the real `alt` text recovered
from the live site and a `data-image-slot` key. [images/IMAGE-MANIFEST.md](images/IMAGE-MANIFEST.md)
maps every slot key to its original source URL/filename on sreepvf.org so images can be dropped in
later without hunting back through the HTML.

## What must be preserved (non-negotiable)

- **Visual design**: layout, section order, grid/columns, spacing, borders, radii, shadows, backgrounds,
  gradients, icons, image positioning/cropping/sizing, responsive behavior at all breakpoints.
- **Typography**: font family/source/weights/sizes, line-height, letter-spacing, text-transform, heading
  hierarchy. Poppins throughout — don't substitute.
- **Colors**: the palette above — no new palette.
- **Header & footer**: reproduced exactly (logo, nav hierarchy incl. dropdowns, mobile menu, hover/active
  states; footer columns, contact info, copyright). Shared across pages via `partials/`.
- **Content**: exact copy — headings, paragraphs, lists, CTAs, labels, captions, contact details. Do not
  "fix" or improve wording unless explicitly instructed.
- **SEO**: the live homepage has no meta description/OG tags/JSON-LD — don't invent ones that didn't
  exist; preserve `<title>` (`SreePVF`), canonical, and `lang="en-US"` as-is.
- **URLs**: preserve slugs matching the live site's page structure (e.g. `about-us.html` for
  `/about-us/`) per WEBSITE-STANDARDS.md §4 flat-file naming.
- **Interactions**: nav dropdowns, mobile menu, back-to-top button, and the three carousels described
  above — functional equivalence of user-facing behavior, not literal plugin reproduction.

## Status

Homepage (`index.html`) is the page currently in progress. Additional pages will be migrated one at a
time per WEBSITE-STANDARDS.md Workflow A/B once supplied.

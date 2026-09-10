# WEBSITE-STANDARDS.md

**Version 1.1** — last updated 2026-09-03
_Changelog: v1.0 — initial standard. v1.1 — Bootstrap 5 promoted to default framework; added explicit
responsiveness requirements; added guidance for using an external template/site as a design reference._

This is the **one shared source of truth** for building and maintaining our HTML + CSS + vanilla-JS
client websites. It exists because different developers use different AI tools (free Claude.ai chat,
ChatGPT, Codex, Claude Code) on the same projects with no shared convention, and that "context hell"
has produced sites with duplicated markup, competing templates, dead code left commented-in, and
facts (like phone numbers) that drift out of sync across dozens of files.

Follow this document exactly, on every project, regardless of which AI tool you're using that day.

---

## 0. How to use this document

There are three ways this file gets used. Pick whichever matches your situation — the rules are
identical either way.

1. **Paste it as chat context (default — always works).** Copy this entire file and paste it as the
   first message in a new AI chat (Claude.ai, ChatGPT, Codex, anything), then add one of the
   [prompt templates](#1-copy-paste-prompt-templates) below describing what you actually want done.
   This works even if the tool has no file access — see the note at the end of Section 1 for that case.
2. **Drop it into the project folder unmodified**, saved as both `CLAUDE.md` and `AGENTS.md` at the
   project's root. Claude Code and Codex CLI read these automatically at the start of a session, so
   you don't need to paste anything by hand.
3. **(Optional, later, secondary)** This same file can be wrapped as an installable Claude Code
   "Skill" for teams that standardize on Claude Code. That's a packaging convenience, not a
   different standard — see the [Appendix](#18-appendix--repo-drop--skill-usage).

### Non-negotiables (read this even if you read nothing else)

- **Stack stays HTML + CSS + vanilla JS, no build step — not even a dev-only one.** "No frameworks"
  means no build-dependent JS framework (React, Vue, etc.) and no bundler/compiler stage. Bootstrap 5,
  pulled in as a plain pinned CDN `<link>`/`<script>` (see [§5](#5-css-architecture)), is not a build
  dependency and is the project's default — every file you ship is still a plain file a browser reads
  directly.
- **Every page works cleanly at phone, tablet, and desktop widths.** No horizontal scroll, no cut-off
  or overlapping content, a mobile nav that actually opens and works. See
  [Responsiveness requirements](#responsiveness-requirements-all-screen-sizes) and the
  [QA checklist](#16-post-change-qa-checklist).
- **Shared header/nav/footer/floating-buttons live in `partials/`, once.** No page ever hand-copies
  this markup again.
- **Every repeated fact (phone, address, hours, socials, tracking IDs) has exactly one authoritative
  home.** See [Section 9](#9-single-source-of-truth-for-repeated-facts).
- **Never comment out dead code — delete it.** A dated backup zip is the undo button. See
  [Section 15](#15-the-never-comment-out-never-duplicate-documents-rule).
- **Take a dated backup zip before touching anything, on every project, every time — even one that
  never had a backup before.**
- **Change one page at a time when fixing an existing site. Verify after every step.**

---

## 1. Copy-paste prompt templates

Use these verbatim (fill in the brackets) as your actual request, right after pasting this document.

### Template A — Starting a brand-new site

> You are building a new HTML/CSS/vanilla-JS site. Follow WEBSITE-STANDARDS.md above exactly —
> folder structure, CSS/JS file breakdown, the partials + `include.js` pattern, naming conventions,
> and the backup/deploy workflow. Use Bootstrap 5 (pinned version) as the default responsive layer
> per Section 5, unless I've told you this project is framework-free. Do not introduce a build tool,
> a JS framework (React/Vue/etc.), or a different folder structure.
> Start with **Workflow A** ("New Site From an Empty Folder") and stop after each numbered step for
> me to verify before continuing.
>
> Business facts to use in the Data Dictionary: **[business name, phone, WhatsApp, email, address,
> hours, socials, etc.]**

### Template B — Routine work on a site that already follows this standard

> This project already follows WEBSITE-STANDARDS.md. Read the existing `partials/`, `css/`, and `js/`
> files before writing anything. Only edit inside `<!-- PAGE-CONTENT:START -->` /
> `<!-- PAGE-CONTENT:END -->` markers unless I explicitly ask you to change shared header/footer/CSS.
> Never comment out old code — delete it and rely on your dated zip backups. My request:
> **[describe the change]**

### Template C — Auditing and fixing an existing messy site

> This project does **not** yet follow WEBSITE-STANDARDS.md and needs to be brought into line without
> breaking the live site. Follow **Workflow B** ("Auditing and Fixing an Existing Messy Site") exactly,
> starting with step 0 (a dated backup zip of the current state). Do not batch-edit more than one page
> per step. Show me
> the Audit Log (step 1) before changing anything.

### If your AI tool can't read or write files directly

Some tools (notably the free Claude.ai web chat) can only see what you paste and can only give you
text back. In that case:
- Paste this document, then a template above, then paste the actual file(s) you're asking about.
- The AI hands you back full file contents (or a clear list of exact changes) for you to save yourself.
- **You** make the dated backup zip and upload it/the updated files to Hostinger yourself, following
  [Section 12](#12-backup-and-deployment-workflow-zip-snapshots) — the AI can tell you exactly what to
  back up and when, but can't do it for you.

### Using an external template or site as a reference

A Bootstrap starter template/theme, or another live website (or one specific section of one — "make
the hero like example.com's hero"), may be handed over as a design/structural reference for a new
page or section. That's fine, and expected — it does **not** relax anything else in this document:

- Treat the reference as **inspiration for layout, spacing, and visual rhythm only** — look at it,
  don't copy from it. Never vendor its CSS/JS files into the project, and never paste its markup or
  class names in verbatim.
- Rebuild whatever's borrowed using **this project's own** canonical folder structure
  ([Section 3](#3-canonical-folder-structure)), fixed CSS file set ([Section 5](#5-css-architecture)),
  and naming conventions ([Section 4](#4-naming-conventions)). The reference's own file layout,
  framework, or build tooling never overrides the standard, even if the reference itself is built with
  a completely different stack.
- If a **full Bootstrap template is the starting scaffold for a brand-new site** (Workflow A), still
  re-file everything into the canonical structure before building further — don't keep the template's
  own folder layout, and don't keep its own bundled copy of Bootstrap if it's a different or unpinned
  version. Reconcile to one pinned version and record it in the Data Dictionary
  ([Section 9](#9-single-source-of-truth-for-repeated-facts)).
- Any third-party asset that comes along with the reference (image, icon, stock photo, custom font)
  stays out unless it's actually licensed for this project — swap in the project's own images or a
  properly licensed source instead.

---

## 2. Core principles (quick reference)

| # | Principle | Detail |
|---|---|---|
| 1 | One stack, no exceptions | HTML + CSS + vanilla JS only — [Non-negotiables](#non-negotiables-read-this-even-if-you-read-nothing-else) |
| 2 | One copy of shared markup | [§7 Partial-Include System](#7-the-partial-include-system-recommended-default) or [§8 Manual Fallback](#8-manual-fallback-convention-for-file-only-projects) |
| 3 | One home per fact | [§9 Single Source of Truth](#9-single-source-of-truth-for-repeated-facts) |
| 4 | Delete, never comment out | [§15](#15-the-never-comment-out-never-duplicate-documents-rule) |
| 5 | A dated zip backup is the undo button | [§12 Backup & Deploy](#12-backup-and-deployment-workflow-zip-snapshots) |
| 6 | One page at a time on live sites | [§14 Workflow B](#14-workflow-b--auditing-and-fixing-an-existing-messy-site) |
| 7 | Fixed CSS/JS file set, fixed load order | [§5](#5-css-architecture) / [§6](#6-javascript-architecture) |
| 8 | Responsive by default, at every width | [§5 Responsiveness requirements](#responsiveness-requirements-all-screen-sizes) |
| 9 | A reference template/site is inspiration, not the standard | [§1 Using an external template or site](#using-an-external-template-or-site-as-a-reference) |

---

## 3. Canonical folder structure

```
my-site/
├── WEBSITE-STANDARDS.md          ← this file, unmodified
├── page-template.html            ← blank scaffold every new page is copied from
├── index.html
├── about.html
├── contact.html
├── [slug].html                   ← one flat file per page, filename == URL slug
├── partials/
│   ├── header.html                (nav + any mega-menus)
│   ├── footer.html
│   └── floating-buttons.html      (call + WhatsApp buttons)
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── utilities.css
│   └── pages/
│       └── [slug].css             ← optional, only if a page needs unique rules
├── js/
│   ├── site-config.js
│   ├── include.js
│   ├── main.js
│   └── pages/
│       └── [slug].js              ← optional
├── images/
└── videos/
```

**Rules:**
- Pages stay **flat at the root** — the filename matches the URL slug exactly
  (`back-pain-treatment.html`, not `services/back-pain-treatment.html`). This keeps URLs stable and
  matches how these sites are actually structured today. Only reconsider subfolders past roughly
  60 pages.
- `<head>` boilerplate (charset, viewport, pinned CDN `<link>`/`<script>` tags) is still duplicated
  per page — that's an accepted trade-off under the no-build-tool constraint. Only the **body chrome**
  (header/nav/footer/floating buttons) goes through the partial system below.
- Don't invent new top-level folders. If something doesn't fit, it probably belongs in `css/pages/`
  or `js/pages/`.
- Backup zips are **not** kept inside this folder — they go wherever the team already keeps zips
  (Drive, a local backups folder, etc.), so a zip of the project never accidentally zips up old
  zips of itself. See [Section 12](#12-backup-and-deployment-workflow-zip-snapshots).

---

## 4. Naming conventions

- **Page files**: kebab-case, identical to the URL slug (`sports-injury-treatment.html`).
- **Partials**: fixed names, never renamed per project — `partials/header.html`,
  `partials/footer.html`, `partials/floating-buttons.html`.
- **Page-specific CSS/JS**: same slug as the page — `css/pages/sports-injury-treatment.css`,
  `js/pages/sports-injury-treatment.js`.
- **CSS classes**: plain kebab-case, component-first (`.card`, `.card-title`, `.btn`,
  `.btn-primary`). Search `components.css` for an existing class before inventing a new one.
- **IDs**: reserved for JS/include hooks only (`#site-header`, `#site-footer`,
  `#floating-buttons`) — never used for styling. If you need to style something, give it a class.
- **Images**: kebab-case, descriptive enough to double as the basis for `alt` text
  (`heel-joint-treatment-hero.webp`, not `img4.png`).
- **Backup zip filenames**: `sitename_YYYY-MM-DD_HHMM_short-note.zip`, e.g.
  `dr-zope_2026-03-14_1130_before-nav-fix.zip`. The date and note are what let you find the right
  restore point later — an undated `site-final-v2.zip` is not a real backup.

---

## 5. CSS architecture

Fixed file set, always loaded in this order:

| File | Purpose |
|---|---|
| `variables.css` | CSS custom properties — colors, spacing scale, font stack, breakpoints. The **one** theming file; every project fills this in with its own brand values. |
| `base.css` | Reset/normalize-lite + sitewide element defaults (`body`, headings, links, lists). |
| `layout.css` | Structural rules for shared chrome (header/nav/mega-menus, footer, floating buttons) plus page container/grid scaffolding. |
| `components.css` | Reusable visual components used on 2+ pages (buttons, cards, badges, forms). |
| `utilities.css` | Small single-purpose helpers. **This is the only file `!important` is allowed in**, and every use must have a one-line comment explaining why. |
| `css/pages/[slug].css` | Page-unique overrides only. Loaded last, only by that one page. Optional — most pages won't need one. |

`<link>` order in every page's `<head>`, exactly:

```html
<!-- Bootstrap 5, exact pinned version (see §11) — the default responsive layer -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
<!-- any other pinned third-party CSS -->
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/utilities.css">
<!-- <link rel="stylesheet" href="css/pages/[slug].css"> if this page has one -->
```

**Rules:**
- **Bootstrap 5 by default, layered under the custom system.** Pull in Bootstrap — exact pinned
  version, via CDN, per [§11](#11-third-party-library--cdn-policy) — for the grid, breakpoints, and
  base component behavior (nav collapse, dropdowns, etc.). The five custom files above still exist and
  still carry every brand-specific rule and override; Bootstrap gives the responsive skeleton, the
  custom files give the actual look. Never silently mix in a *second* framework or a different
  Bootstrap version on the same site. Going framework-free instead is now the exception, not the
  default — allowed only as a deliberate, documented, per-project choice recorded in the
  [Data Dictionary](#9-single-source-of-truth-for-repeated-facts). Either way, never fight a
  framework's own `!important` rules with more `!important` rules — override at the custom CSS layer,
  in `components.css`/`utilities.css`, with normal specificity instead. (Fighting `!important` with
  `!important` is exactly what produced cascade chaos in a past project.)
- No inline `<style>` blocks in page files, except a documented last resort with a comment
  explaining why it couldn't go in a real CSS file.
- Never stack a new `!important` on top of an existing one to "win" a fight — fix the rule at its
  source file instead.
- Two pages must never silently use a different, undocumented CSS file set. If a page is
  special-cased, that has to be visible from `css/pages/[slug].css` existing, not from it quietly
  loading none of the shared files.

### Responsiveness requirements (all screen sizes)

Every page must render cleanly at phone, tablet, and desktop widths — this is a non-negotiable
(see the top of this document), not an afterthought pass at the end.

- **Breakpoints:** use Bootstrap's own default scale — `sm` 576px, `md` 768px, `lg` 992px, `xl`
  1200px, `xxl` 1400px — rather than inventing project-specific ones. A project may need custom
  breakpoints for a real reason; if so, record them in the Data Dictionary rather than leaving future
  editors to guess why a media query uses an odd number.
- **Build mobile-first:** write base rules for the smallest screen, then use `min-width` media
  queries to add complexity as the viewport grows. Writing desktop-first and patching downward with
  `max-width` overrides tends to produce exactly the kind of narrow-width bugs described below.
- **Known failure points to check for specifically** (each of these has broken a real site):
  - The nav must actually collapse to a working hamburger menu below `lg` — not just look collapsed,
    open it and confirm the links are tappable.
  - A **custom-positioned dropdown or mega-menu needs its mobile behavior verified independently of
    desktop.** Bootstrap's dropdown component defaults to JS-driven (Popper) positioning, which can
    silently fight a project's own CSS positioning for that same dropdown at narrow widths — the
    desktop version can look perfect while the mobile version renders shifted off-screen. If the
    project supplies its own positioning CSS for a dropdown/mega-menu, add
    `data-bs-display="static"` to its trigger so Bootstrap leaves positioning to that CSS entirely.
  - Floating buttons (call/WhatsApp/back-to-top) must not overlap page content at narrow widths.
  - Images need `max-width: 100%` so they scale down instead of forcing horizontal scroll.
  - Touch targets should be comfortably tappable (roughly 44px or more), not just visually fine on a
    mouse cursor.
  - Nothing should force horizontal scroll on the page at any tested width.
- **Testing procedure:** test at a minimum of three widths — phone (~375px), tablet (~768px), and
  desktop (~1280px+) — using the browser's device toolbar or a real device. At each width, **actually
  open the interactive elements** (mobile nav, dropdowns, accordions) rather than only looking at
  their closed state — a menu's closed appearance can look completely fine while its open/expanded
  state is broken.

---

## 6. JavaScript architecture

Fixed file set, always loaded in this order, at the end of `<body>`:

| File | Purpose |
|---|---|
| `site-config.js` | The single JS object holding every repeated business fact. See [§9](#9-single-source-of-truth-for-repeated-facts). |
| `include.js` | Fetches and injects the shared partials. See [§7](#7-the-partial-include-system-recommended-default). |
| `main.js` | Sitewide interactive behavior (menu toggles, sliders, back-to-top, counters, and applying `site-config.js` values to the page — see §9). Waits for the `partials:loaded` event before touching header/footer DOM. |
| `js/pages/[slug].js` | Optional, page-unique scripts only. |

```html
<!-- Bootstrap's JS bundle (nav collapse, dropdowns) if the project uses Bootstrap components -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<!-- any other pinned third-party JS -->
<script src="js/site-config.js"></script>
<script src="js/include.js"></script>
<script src="js/main.js"></script>
<!-- <script src="js/pages/[slug].js"></script> if this page has one -->
```

---

## 7. The partial-include system (recommended default)

This is the concrete fix for "every page hand-copies the header/nav/footer," using nothing beyond
plain `fetch()` — zero dependencies, zero build step.

**Placeholders in every page:**

```html
<div id="site-header" data-include="partials/header.html"></div>

<!-- PAGE-CONTENT:START -->
  ...this page's unique content goes here...
<!-- PAGE-CONTENT:END -->

<div id="site-footer" data-include="partials/footer.html"></div>
<div id="floating-buttons" data-include="partials/floating-buttons.html"></div>
```

**`js/include.js` — copy this file verbatim into every project:**

```js
/**
 * include.js — loads shared partials into any page. Zero dependencies, zero build step.
 * Place the <script> tag for this file AFTER every [data-include] element in the page,
 * and BEFORE main.js.
 *
 * Requires the page to be served over http(s) — fetch() cannot read local files opened
 * with file://. For local preview, run a simple server, e.g.:
 *   python -m http.server 8080
 * or use your editor's "Live Server" extension.
 */
(function () {
  const slots = document.querySelectorAll("[data-include]");
  let pending = slots.length;

  function done() {
    document.dispatchEvent(new CustomEvent("partials:loaded"));
  }

  if (pending === 0) {
    done();
    return;
  }

  slots.forEach((slot) => {
    const url = slot.getAttribute("data-include");

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`${url} -> HTTP ${response.status}`);
        return response.text();
      })
      .then((html) => {
        slot.innerHTML = html;
        slot.removeAttribute("data-include");
      })
      .catch((error) => {
        console.error("[include.js] Failed to load partial:", error);
        slot.innerHTML = `<!-- include failed: ${url} -->`;
      })
      .finally(() => {
        pending -= 1;
        if (pending === 0) done();
      });
  });
})();
```

**Rules:**
- Partials don't nest — a partial never contains another `[data-include]`. Keep it flat and simple.
- Local preview always needs a server (`python -m http.server`, "Live Server", etc.) — `fetch` fails
  silently-ish on `file://`. This is the one real cost of this approach.
- There's a brief flash of empty header/footer before the fetch resolves. Acceptable trade-off; don't
  try to "fix" it with extra tooling.
- **Non-negotiable:** unique page content — the `<h1>`, body copy, meta tags, and JSON-LD — always
  live in the real per-page HTML, **never** inside a fetched partial. Partials are for identical
  boilerplate chrome only (header/nav, footer, floating buttons).

---

## 8. Manual fallback convention (for `file://`-only projects)

Use this **only** when a project must support plain double-click / `file://` preview with no server
at all (e.g. a client insists on opening the folder locally). Decide this **once**, per project, up
front, and record it in that project's Data Dictionary — never mix fetch-mode and fallback-mode
pages in the same site.

Wrap the shared blocks in every page with identical markers:

```html
<!-- SHARED:HEADER:START -->
  ...byte-for-byte copy of partials/header.html's content...
<!-- SHARED:HEADER:END -->
```

Same pattern for `SHARED:FOOTER` and `SHARED:FLOATING`.

**Rules:**
- `partials/header.html` etc. still exist and are still the canonical copy, even though they're
  never fetched — they're what you copy *from*.
- To change the header: edit `partials/header.html` first, then find every `SHARED:HEADER:START` /
  `SHARED:HEADER:END` pair across all pages and replace the content between them with the new
  version, verbatim.
- Sync checklist: edit the partial → grep every page for the marker pair → replace → confirm the
  number of files changed equals the page count → save a dated backup zip → upload the updated files
  to Hostinger.
- Prompt to hand an AI tool for this: _"Take the new content of `partials/header.html` and replace
  everything between `<!-- SHARED:HEADER:START -->` and `<!-- SHARED:HEADER:END -->` in every `.html`
  file at the project root with it, unchanged elsewhere. Show me a list of files you changed."_

---

## 9. Single source of truth for repeated facts

**The fact list:** business name, phone, WhatsApp number, email, address, hours, social links, Google
Maps link, analytics/tracking IDs (GA4, Meta Pixel, GTM), pinned third-party library versions.

**`js/site-config.js` — copy and fill in per project:**

```js
// site-config.js — the ONE place repeated business facts live.
window.SITE_CONFIG = {
  businessName: "Business Name",
  phone: "+91 90000 00000",       // used to build tel: links — keep spaces as you want them displayed
  whatsapp: "919000000000",       // digits only, no + or spaces — required format for wa.me links
  email: "hello@example.com",
  address: "Street, City, State, PIN",
  hours: "Mon–Sat, 10:00 AM – 7:00 PM",
  socials: {
    facebook: "",
    instagram: ""
  },
  mapsUrl: "",
  analytics: {
    ga4: "",
    metaPixel: "",
    gtm: ""
  }
};
```

**The mechanism that actually kills duplication:** anywhere on the site — inside a partial *or*
directly on a page — a phone/WhatsApp/email link is written with a `data-*` hook instead of a
hardcoded `href`, and `main.js` fills it in from `SITE_CONFIG` once, on load:

```html
<a data-phone-link data-phone-text>Call Now</a>
<a data-whatsapp-link>WhatsApp</a>
<a data-email-link>Email us</a>
```

```js
// main.js (excerpt) — apply SITE_CONFIG to every matching element on the page.
function applySiteConfig() {
  const cfg = window.SITE_CONFIG;
  if (!cfg) return;

  document.querySelectorAll("[data-phone-link]").forEach((el) => {
    el.href = `tel:${cfg.phone.replace(/\s+/g, "")}`;
  });
  document.querySelectorAll("[data-phone-text]").forEach((el) => {
    el.textContent = cfg.phone;
  });
  document.querySelectorAll("[data-whatsapp-link]").forEach((el) => {
    el.href = `https://wa.me/${cfg.whatsapp}`;
  });
  document.querySelectorAll("[data-email-link]").forEach((el) => {
    el.href = `mailto:${cfg.email}`;
  });
}

document.addEventListener("partials:loaded", applySiteConfig);
document.addEventListener("DOMContentLoaded", applySiteConfig);
```

This works identically in fetch-mode and fallback-mode, since it only depends on `main.js` running —
not on how the header/footer markup got onto the page. Change the number once, in
`site-config.js`, and every phone/WhatsApp/email link on every page updates itself.

**The one exception: JSON-LD.** A page's `<script type="application/ld+json">` block must be real,
static text present when the page loads (search engines and validators shouldn't have to run JS to
see it), so it is **not** auto-filled by `main.js`. Instead:
- Its values must match `site-config.js` exactly.
- Before shipping any fact change, grep every page for the old value to confirm nothing was missed —
  this is a mandatory step in both workflows below, and it's exactly the check that would have caught
  a stale placeholder phone number surviving on one page while the rest of the site had been updated.

### Data Dictionary template

Every project completes this table (in its own copy of this doc, or in a project README) before
Workflow A step 3 / Workflow B step 3:

| Fact | Canonical value | Authoritative source | Notes |
|---|---|---|---|
| Business name | | `site-config.js` | |
| Phone | | `site-config.js` | |
| WhatsApp | | `site-config.js` | digits only |
| Email | | `site-config.js` | |
| Address | | `site-config.js` | |
| Hours | | `site-config.js` | |
| Social links | | `site-config.js` | |
| Maps link | | `site-config.js` | |
| Analytics IDs | | `site-config.js` | |
| Include mode | fetch / fallback | this table | pick one, don't mix |
| CSS framework | Bootstrap 5 (default) / framework-free | this table | framework-free is the documented exception, not the default |
| Breakpoints | Bootstrap defaults (sm/md/lg/xl/xxl) unless noted | this table | only fill in if customized |
| Pinned CDN libraries | | this table | exact versions |

---

## 10. Page template

**`page-template.html` — copy this file to create every new page:**

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title | Business Name</title>
  <meta name="description" content="150-160 character description.">
  <link rel="canonical" href="https://example.com/page-slug.html">
  <meta property="og:title" content="Page Title">
  <meta property="og:description" content="Same as meta description, or a close variant.">
  <meta property="og:type" content="website">
  <meta property="og:image" content="images/og-image.jpg">
  <link rel="icon" href="images/favicon.svg" type="image/svg+xml">

  <!-- Bootstrap 5, exact pinned version — the default responsive layer (record the version below) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <!-- any other pinned third-party CSS (record versions in the Data Dictionary) -->

  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/utilities.css">
  <!-- <link rel="stylesheet" href="css/pages/page-slug.css"> -->

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Business Name",
    "telephone": "+91 90000 00000",
    "email": "hello@example.com",
    "url": "https://example.com/page-slug.html"
  }
  </script>
</head>
<body>

  <div id="site-header" data-include="partials/header.html"></div>

  <!-- PAGE-CONTENT:START -->
  <main>
    <h1>Page Heading</h1>
    <p>Unique page content goes here. Never put page-specific content inside a partial.</p>
  </main>
  <!-- PAGE-CONTENT:END -->

  <div id="site-footer" data-include="partials/footer.html"></div>
  <div id="floating-buttons" data-include="partials/floating-buttons.html"></div>

  <!-- Bootstrap's JS bundle (nav collapse, dropdowns) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <!-- any other pinned third-party JS -->

  <script src="js/site-config.js"></script>
  <script src="js/include.js"></script>
  <script src="js/main.js"></script>
  <!-- <script src="js/pages/page-slug.js"></script> -->

</body>
</html>
```

**Per-page SEO/meta checklist** before publishing any page: unique `<title>`, unique meta
description, canonical URL set, Open Graph tags filled in, JSON-LD present and matching the Data
Dictionary. For full on-page SEO guidance (keyword targeting, heading structure, schema depth), use
the team's `my-seo` skill/process rather than duplicating that guidance here.

---

## 11. Third-party library / CDN policy

- Every third-party library is pinned to an **exact version** in its `<link>`/`<script>` URL
  (never `@latest` or an unpinned major version).
- Every pinned version is recorded once in that project's Data Dictionary.
- Bumping a version is a single, deliberate change — take a backup zip first, test it on one
  representative page, then roll it out sitewide.

---

## 12. Backup and deployment workflow (zip snapshots)

No version control tooling of any kind — this team works in zips, uploaded straight to Hostinger.
That's fine; it's still a real undo mechanism as long as it's followed every time, not just when
someone remembers.

- **Before making any change, on any project — zip the entire project folder as it currently is**
  and save it, dated, wherever the team keeps backups (Drive, a local backups folder, etc.), using
  the filename convention from [Section 4](#4-naming-conventions). If the project is already messy,
  this first zip is a baseline snapshot of that mess, exactly as it is — so there's something to
  restore if anything goes wrong later.
- **After a change is verified working** (see the [QA checklist](#16-post-change-qa-checklist)),
  zip the project folder again and upload it to Hostinger (via its File Manager or FTP), extracting
  over the live files. Immediately reload the live site and re-run the QA checklist against it —
  the upload isn't done until the *live* site has been checked, not just the local copy.
- **Keep the previous zip.** If the newly uploaded version breaks something, the fix is to re-upload
  and re-extract the last dated zip that was known to work — that's the entire rollback procedure.
- A dated backup zip is what replaces "comment it out just in case." See
  [Section 15](#15-the-never-comment-out-never-duplicate-documents-rule). You always have the
  previous version sitting in a zip — there's never a reason to also keep a dead copy inside the
  live files.
- If your AI tool has no file access, it can still tell you exactly what to zip and when — you do
  the zipping and uploading yourself after saving whatever it gave you.

---

## 13. Workflow A — New site from an empty folder

1. Create the empty folder scaffold, then zip and save it as your first dated backup.
2. Create the folder tree from [Section 3](#3-canonical-folder-structure) exactly.
3. Fill in the [Data Dictionary](#data-dictionary-template) with real business facts and the
   fetch/fallback decision.
4. Write `js/site-config.js` from the Data Dictionary.
5. Build the three partials (`header.html`, `footer.html`, `floating-buttons.html`),
   `page-template.html`, and copy in `js/include.js` and `js/main.js`.
6. Build the homepage from `page-template.html`. Serve it locally, confirm the header/footer render,
   confirm phone/WhatsApp links resolve correctly. Save a dated backup zip.
7. Add every further page **one at a time**: copy `page-template.html`, fill in its content, add its
   entry to `partials/header.html`'s nav, verify it in the browser, save a dated backup zip.
8. Fill in `css/variables.css` with the project's brand tokens, then `base.css`/`layout.css`/
   `components.css`/`utilities.css` as needed. Check
   [responsiveness](#responsiveness-requirements-all-screen-sizes) at phone/tablet/desktop widths.
   Save a dated backup zip.
9. Run the [QA checklist](#16-post-change-qa-checklist) across every page. Zip and upload to
   Hostinger as your "go live" package, then verify the live site.

---

## 14. Workflow B — Auditing and fixing an existing messy site

Goal: bring an existing site into line with this standard **without ever breaking the live site**,
by treating it as a series of small, independently verifiable, independently revertible steps.

0. **Stop. Don't edit anything yet.** Zip the current project folder exactly as it is (bugs and all)
   and save it, dated, as your baseline backup. This is your undo point if anything goes wrong later —
   the entire safety net for this workflow depends on this zip actually existing before step 1.
1. **Read-only inventory.** For every page, record which CSS/JS files it actually links and which
   template pattern it follows, in an Audit Log table (Page | CSS files linked | JS files linked |
   Template pattern | Notes). No edits yet.
2. **Pathology scan.** For every file, check for: more than one `<!doctype`/`<html>` occurrence in a
   single file, unusually large HTML comment blocks (dead code), and hardcoded facts (phone, email,
   etc.) that differ from page to page. Record findings — don't fix yet.
3. **Decide canonical values.** Fill in the Data Dictionary using the real, majority/authoritative
   values found in step 2 (not guesses).
4. **Add the new structure additively.** Create `partials/`, `page-template.html`, `js/site-config.js`,
   `js/include.js`, and the CSS file set from Section 5 *alongside* the existing files. Delete
   nothing yet.
5. **Migrate one page at a time** (start with the lowest-traffic page): replace its duplicated
   header/nav/footer/floating-button markup with the `data-include` placeholders, delete any
   dead/commented-out document or block found in that specific file (see Section 15), verify the
   page renders identically in a browser — including at phone/tablet/desktop widths, see
   [Responsiveness requirements](#responsiveness-requirements-all-screen-sizes) — then save a dated
   backup zip, referencing only that page in the filename's note.
6. **Repeat step 5 for every remaining page.** Never batch more than one page per zip/upload.
7. **Sitewide grep-and-fix pass.** Once every page is migrated, grep for every fact in the Data
   Dictionary across all files to catch any straggler (this is the step that catches a stale
   placeholder phone number left on one page). Save a dated backup zip.
8. **Delete unused legacy files** (old CSS/JS files no page references anymore) — only after
   grepping to confirm zero remaining references. Save a dated backup zip.
9. **Final regression pass**: run the [QA checklist](#16-post-change-qa-checklist) on every page,
   then zip and upload the finished result to Hostinger as the release package, and verify the live
   site immediately after.

---

## 15. The "never comment out, never duplicate documents" rule

**The rule:** delete dead code immediately — a whole document, a stale block, a leftover function,
an old CSS rule you replaced. Never wrap it in a comment "just in case." A dated backup zip is the
safety net; that's what step 0 of every workflow above exists for.

**Why this is its own section:** the single worst bug found in the project used as this standard's
cautionary example was exactly this — a developer's AI tool, asked to update a page, left the entire
old version of the page sitting inside an HTML comment and pasted a completely different new version
after it. Both were technically "in the file." Only the second one rendered. Nobody noticed for a
while, because a commented-out block looks inert and safe — until someone edits the live (second)
version while reading the dead (first) one, or a future tool gets confused about which one is real.

**Detection checklist** (run this in Workflow B step 2, and periodically on any project):
- Count `<!doctype`/`<html>` occurrences per file (case-insensitive) — more than one means a dead
  document is probably sitting in there.
- Scan for unusually large `<!-- ... -->` blocks (more than a few lines) — a real explanatory comment
  is short; a multi-hundred-line comment is almost always a dead file.
- Search for comments literally saying things like "old version", "backup", "keep for reference".

---

## 16. Post-change QA checklist

Run this after **every** change, no matter how small:

- [ ] Visually check the page(s) you touched in a browser.
- [ ] Check the browser console for errors (especially failed partial fetches).
- [ ] Click every nav link that could plausibly have changed.
- [ ] Confirm phone/WhatsApp/email links resolve to the right values.
- [ ] Check the page at phone (~375px), tablet (~768px), and desktop (~1280px+) widths — no
      horizontal scroll, no cut-off or overlapping content at any of them. See
      [Responsiveness requirements](#responsiveness-requirements-all-screen-sizes).
- [ ] At mobile/tablet width, actually open the mobile nav and any dropdown/mega-menu — don't just
      look at them closed. A dropdown's mobile positioning is often driven by entirely different CSS
      than its desktop version and can break independently.
- [ ] Re-run the doctype/duplicate-document check from Section 15 on any file you edited.
- [ ] A dated backup zip of this state exists before you upload/overwrite anything on Hostinger.

---

## 17. Troubleshooting / FAQ

- **"The header/footer isn't showing up at all."** You're probably opening the page via `file://` on
  a fetch-mode project. Either serve it locally (`python -m http.server`, "Live Server") or switch
  that project to [fallback-mode](#8-manual-fallback-convention-for-file-only-projects).
- **"I fixed the phone number but it's still wrong somewhere."** Re-run the Section 9 grep step —
  something (probably a JSON-LD block) wasn't caught by the `data-phone-link` mechanism.
- **"The AI rewrote my whole file when I asked for one small change."** Re-paste this document and
  use Template B, which restricts edits to inside the `PAGE-CONTENT` markers.
- **"There are two versions of my page again."** That's a Section 15 violation — find and delete the
  dead one, then save an updated backup zip.
- **"I uploaded a zip to Hostinger and now the live site is broken."** Re-upload and extract the last
  dated backup zip that was known to work — see [Section 12](#12-backup-and-deployment-workflow-zip-snapshots).
  That's the entire rollback procedure; there's no other undo mechanism in this setup.

---

## 18. Appendix — repo-drop / skill usage

- This file can be saved verbatim as `CLAUDE.md` and/or `AGENTS.md` at a project's root folder with no
  edits — Claude Code and Codex CLI will pick it up automatically at the start of a session.
- For teams standardizing on Claude Code specifically, this same content can later be packaged as an
  installable Claude Code "Skill" (a `SKILL.md` wrapper around this document). That's an optional,
  secondary convenience for that one tool — it is not required, and every rule in this document works
  the same with or without it.

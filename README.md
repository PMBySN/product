# Shubham Nayak — Associate Product Manager (Growth) · Portfolio & PM Resource Hub

A portfolio *and* a free learning hub for aspiring product managers. It showcases Shubham Nayak's work while giving students and early-career PMs a genuinely useful library of case studies, frameworks, guides and a community to grow in.

**Live site:** _add your GitHub Pages / custom domain link here_

---

## What's inside

- **Portfolio** — hero, about, selected work with outcome metrics, testimonials/recommendations, and a "hire me" flow.
- **Free Study Library** — 100+ worked case studies across the core PM interview & craft topics:
  - **RCA** (root-cause analysis), **Metrics**, **Guesstimates**, **Product Improvement**, **Product Design**
  - **Personal Insights** — a "lessons learned" booklet of long-form articles
- **Zero-to-PM Roadmap** — an interactive, clickable roadmap; open any node for a full explanation, mark topics as read, and bookmark them.
- **Bookmarks** — a scroll-anchored button on every page; save any article, case study or roadmap node into one reading list shared across the whole site.
- **Sign-in wall** — articles show an intro + first section, then ask visitors to sign in (free) to keep reading, print, or download.
- **Ratings** — 1–5 stars per article (shows the average).
- **Comments** — on every article, auto-published.
- **Forum** — group discussions where like-minded people connect, share resources and grow.
- **Hidden admin** — reachable at `#admin`, password-gated, to manage content and moderate.

## Voice & design

- **Voice:** warm, energetic, motivational and practical — written to genuinely help the reader.
- **Design system:** neo-brutalist editorial — cream base, chunky black outlines, hard offset shadows, sticker chips, hand-drawn underline accents.
- **Palette:** cream `#e9e7e2` / `#f4f1ea`, ink `#1a1712`, violet `#5b2fe0`, lime `#c6f24e`, coral `#ff5a3c`.
- **Type:** Bricolage Grotesque (display), Manrope (body), JetBrains Mono (labels/meta).

## How it's built

- Plain, self-contained HTML pages — no build step, no framework install. Open any file in a browser and it works.
- **Firebase** (free tier) powers accounts, ratings, comments and the forum:
  - **Authentication:** Google, GitHub, Email/Password, and passwordless magic-link.
  - **Firestore:** stores users, ratings, comments and forum threads, shared across all visitors.
- Content lives in small, editable `*-data.js` files — the single source each page reads from.
- Runs in **demo mode** (browser-local storage) automatically until Firebase keys are added, then flips to **live mode**.

## Project structure

```
index.html                     → entry point, redirects to the portfolio
Portfolio.dc.html              → the main portfolio page
RCA / Metrics / Guesstimates / Product-Improvement / Product-Design.dc.html
CaseStudy.dc.html              → shared reader for every case study
Personal-Insights.dc.html      → lessons index
Insight.dc.html                → shared reader for each lesson
Zero-to-PM.dc.html             → interactive roadmap
Forum.dc.html                  → community discussions
Setup-Guide.dc.html            → private, plain-English backend setup guide
community.js                   → auth + ratings + comments + forum (Firebase-ready)
bookmarks.js                   → site-wide bookmark system
support.js                     → runtime helper (required by every page)
*-data.js                      → all editable content
```

## Going live (short version)

1. Create a free **Firebase** project, enable the sign-in methods, and create a **Firestore** database. (Full click-by-click steps are in `Setup-Guide.dc.html`.)
2. Paste your Firebase config into the top of **`community.js`**.
3. Upload all files to a host — **GitHub Pages** works out of the box.
4. Add your live domain to Firebase → Authentication → **Authorized domains** so Google/GitHub sign-in works.

## Editing content

- **Text:** open the relevant `*-data.js` file (e.g. `personal-insights-data.js`) and edit the entries — pages and counts update automatically.
- **Photos:** the hero and about photos are drag-and-drop on the live site (saved per browser).
- **Contact:** the "request my number" form opens WhatsApp with the visitor's details pre-filled; the number stays private until Shubham replies.

## Contact

- Work: **shubham.nayak@scholarin.fyi**
- Personal: **shubhamnayakximb@gmail.com**

---

_Built as a portfolio and a gift to the next wave of product managers. If it helps you break in, that's the whole point._

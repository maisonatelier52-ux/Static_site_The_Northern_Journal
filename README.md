# The Northern Journal — Next.js news starter

A JavaScript-only, JSON-driven news website inspired by the supplied editorial layouts. The homepage, category pages, author profiles and article pages all share a responsive visual system while keeping their own page-specific composition.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Content model

- `json/articel.json` contains every article, including body sections and key takeaways.
- `json/author.json` contains author profiles.
- The `json` directory intentionally contains only those two requested files.
- Articles automatically appear newest-first on the homepage.

## Routes

- `/` — homepage
- `/[category]` — category page, for example `/sport`
- `/[category]/[slug]` — article detail page
- `/author/[slug]` — author profile

## Important project structure

```text
app/
  [category]/
    [slug]/page.jsx
    page.jsx
  author/[slug]/page.jsx
  globals.css
  layout.jsx
  page.jsx
components/
  home/
    Featured.jsx
    HomePage.jsx
    LatestVideo.jsx
    LeadNews.jsx
    Newsletter.jsx
    OpinionStrip.jsx
    Sponsored.jsx
    TopicSection.jsx
  ui/
    SectionHeading.jsx
    StoryCard.jsx
  Footer.jsx
  Header.jsx
  JsonLd.jsx
json/
  articel.json
  author.json
lib/
  data.js
```

## SEO and performance

The project includes route metadata, Open Graph data, NewsArticle structured data, a sitemap, robots configuration, static parameter generation, optimized `next/image` media, semantic landmarks and restrained client-side JavaScript. Replace `https://example.com` in `app/layout.jsx`, `app/robots.js` and `app/sitemap.js` with the production domain before launch.

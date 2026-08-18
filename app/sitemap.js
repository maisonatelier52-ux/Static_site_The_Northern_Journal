import { articles, authors, parseDate } from '@/lib/data';

export default function sitemap() {
  const base = 'https://example.com';
  return [
    { url: base, changeFrequency: 'daily', priority: 1 },
    ...['news', 'opinion', 'sport', 'business', 'life'].map((category) => ({
      url: `${base}/${category}`,
      changeFrequency: 'daily',
      priority: 0.8,
    })),
    ...articles.map((article) => ({
      url: `${base}/${article.category}/${article.slug}`,
      lastModified: parseDate(article.date).toISOString(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })),
    ...authors.map((author) => ({
      url: `${base}/author/${author.category}`,
      changeFrequency: 'weekly',
      priority: 0.5,
    })),
  ];
}

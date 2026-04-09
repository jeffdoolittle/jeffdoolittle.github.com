import type { CollectionEntry } from 'astro:content';

/**
 * Derives the Jekyll-compatible URL for a blog post.
 * Jekyll permalink pattern: /:year/:month/:day/:title/
 * where :title strips the YYYY-MM-DD- prefix from the filename.
 *
 * e.g. "2020-01-24-antifragile-architecture-barry-oreilly" →
 *      "/2020/01/24/antifragile-architecture-barry-oreilly/"
 */
export function postUrl(post: CollectionEntry<'blog'>): string {
  const d = post.data.date;
  const year = d.getUTCFullYear().toString().padStart(4, '0');
  const month = (d.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = d.getUTCDate().toString().padStart(2, '0');
  // Strip leading YYYY-MM-DD- prefix from the collection slug
  const slug = post.slug.replace(/^\d{4}-\d{2}-\d{2}-/, '');
  return `/${year}/${month}/${day}/${slug}/`;
}

export function formatDate(d: Date | string, style: 'long' | 'short' = 'long'): string {
  return new Date(d).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    month: style === 'long' ? 'long' : 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

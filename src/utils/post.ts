import type { CollectionEntry } from 'astro:content';

/**
 * Extracts a UTC midnight Date from the post's filename slug (YYYY-MM-DD prefix).
 * This is the authoritative date for URLs and display — mirrors Jekyll's behavior
 * where the filename date is the permalink date, regardless of frontmatter time/offset.
 */
export function slugDate(post: CollectionEntry<'blog'>): Date {
  const match = post.slug.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return post.data.date;
  return new Date(`${match[1]}-${match[2]}-${match[3]}T00:00:00Z`);
}

/**
 * Derives the Jekyll-compatible URL for a blog post.
 * Jekyll permalink pattern: /:year/:month/:day/:title/
 * Uses the filename slug date as the authoritative date source.
 */
export function postUrl(post: CollectionEntry<'blog'>): string {
  const d = slugDate(post);
  const year = d.getUTCFullYear().toString().padStart(4, '0');
  const month = (d.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = d.getUTCDate().toString().padStart(2, '0');
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

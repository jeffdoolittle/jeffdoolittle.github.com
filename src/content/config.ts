import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    // Note: Astro 5 does not support `layout` in content collections.
    // The `layout` field is ignored by the glob loader; routing pages handle layout.
    title: z.string(),
    date: z.coerce.date(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    published: z.boolean().default(true),
    episode_url: z.string().url().optional(),
    guest: z.string().optional(),
    footnotes: z.array(z.object({
      id: z.number(),
      content: z.string(),
    })).optional(),
    quotes: z.record(z.string(), z.string()).optional(),
    locations: z.array(z.object({
      name: z.string(),
      slug: z.string(),
      summary: z.string().optional(),
      base_path: z.string(),
      photos: z.array(z.object({
        file: z.string(),
        description: z.string().optional().nullable().transform(v => v ?? undefined),
      })),
    })).optional(),
    show_banner: z.boolean().optional(),
    show_recents: z.boolean().optional(),
    show_title: z.boolean().optional(),
    redirect_to: z.string().optional(),
    sitemap: z.boolean().optional(),
    permalink: z.string().optional(),
    pagenav: z.array(z.object({
      title: z.string(),
      href: z.string(),
      external: z.boolean().optional(),
    })).optional(),
  }),
});

export const collections = { blog };

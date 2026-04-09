import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { postUrl } from '../utils/post';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => data.published !== false);
  posts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    title: 'Jeff Doolittle',
    description: 'Software Architect. Strategic Business Leader. I help make good software professionals great!',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.excerpt ?? '',
      link: postUrl(post),
    })),
  });
}

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  return rss({
    title: 'TinkerForge AI Blog',
    description: 'Latest insights on AI safety, research, and development',
    site: 'https://tinkerforge.ai',
    items: posts.map(post => ({
      link: `/blog/${post.slug}/`,
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
    })),
  });
}

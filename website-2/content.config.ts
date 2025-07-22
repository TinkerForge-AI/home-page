import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      author: z.string().optional(),
      date: z.string(),
      tags: z.array(z.string()).optional(),
    }),
  }),
  // Add other collections as needed
};

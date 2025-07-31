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
  projects: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      status: z.string().optional(),
      tags: z.array(z.string()).optional(),
      github: z.string().url(),
      demo: z.string().url().optional(),
    }),
  }),
  tinkerings: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      tags: z.array(z.string()).optional(),
      github: z.string().url(),
      demo: z.string().url().optional(),
      builtWithAssistants: z.boolean().optional(),
    }),
  }),
};

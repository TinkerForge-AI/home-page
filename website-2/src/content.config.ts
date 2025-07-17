import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    type: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    readingTime: z.string().optional(),
    category: z.string().optional(),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    type: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    readingTime: z.string().optional(),
    category: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
    status: z.string().optional(),
    tags: z.array(z.string()).optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
  }),
});

export const collections = {
  blog,
  research,
  projects,
};

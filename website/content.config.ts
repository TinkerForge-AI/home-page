import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        author: z.string().optional(),
        date: z.string(),
        tags: z.array(z.string()).optional(),
        category: z.string().optional(),
        image: z.string().optional()
      })
    }),
    // Add other collections as needed, e.g. research, philosophy, etc.
    research: defineCollection({
      type: 'page',
      source: 'research/**/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        // add other fields as needed
      })
    }),
    philosophy: defineCollection({
      type: 'page',
      source: 'philosophy/**/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
      })
    }),
    // fallback for all other content
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
})
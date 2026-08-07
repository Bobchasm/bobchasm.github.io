import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    date: z.coerce.date(),
    category: z.enum(['cs', 'math', 'physics', 'void']),
    order: z.number().default(0),
    draft: z.boolean().default(false)
  })
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    tech: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

const moments = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    text: z.string().default(''),
    images: z.array(z.string()).default([]),
    video: z.string().optional(),
    mood: z.string().default(''),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog, notes, projects, moments };

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    headlineMetric: z.object({
      value: z.string(),
      label: z.string(),
    }),
    role: z.string(),
    org: z.string(),
    dateRange: z.string(),
    team: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    status: z.string().optional(),
    heroImage: z.string(),
    heroAlt: z.string(),
    cardImage: z.string().optional(),
    cardAlt: z.string().optional(),
    cardPosition: z.string().optional(),
    order: z.number().default(99),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
  }),
});

export const collections = { projects };

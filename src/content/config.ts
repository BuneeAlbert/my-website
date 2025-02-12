import { defineCollection, z } from 'astro:content';
import { categories } from '../data/categories';

// Extract category names for the enum
const categoryNames = categories.map(category => category.name);

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    featuredImage: z.string().optional(),
    publishDate: z.string().transform(str => new Date(str)),
    publish: z.boolean().optional(),
    categories: z.array(z.enum(categoryNames as [string, ...string[]])),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      image: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
}; 
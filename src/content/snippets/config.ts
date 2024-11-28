import { z, defineCollection } from 'astro:content';

const snippetsCollection = defineCollection({
    schema: z.object({
        publishDate: z.date().optional(),
        updateDate: z.date().optional(),
        draft: z.boolean().optional(),
        title: z.string(),
        excerpt: z.string().optional(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
        author: z.string().optional(),
    }),
});

export const collections = {
    'snippets': snippetsCollection,
};
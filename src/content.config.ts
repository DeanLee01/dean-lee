import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Essays.
const essays = defineCollection({
	loader: glob({ base: './src/content/essays', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			column: z.string().optional(),
			number: z.number().optional(),
		}),
});

// Papers — working drafts and published work.
const papers = defineCollection({
	loader: glob({ base: './src/content/papers', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		status: z.enum(['working', 'published']).default('working'),
		venue: z.string().optional(),
		pubDate: z.coerce.date(),
		url: z.string().url().optional(),
	}),
});

export const collections = { essays, papers };

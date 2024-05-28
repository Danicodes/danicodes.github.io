import { z, defineCollection } from "astro:content";

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array;
	const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(lowercaseItems);
	return Array.from(distinctItems);
}

const post = defineCollection({
	schema: z.object({
		title: z.string().max(60),
		description: z.string().min(50).max(160),
		publishDate: z.string().transform((str) => new Date(str)),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
		ogImage: z.string().optional(),
	}),
});

const minis = defineCollection({
    schema: z.object({
        title: z.string().max(60),
        description: z.string().min(40).max(100),
        publishDate: z.string().transform((str) => new Date(str)),
        image: z.string().optional(),
        video: z.string().optional(),
        isDraft: z.boolean(),
		tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
    }),
});

export const collections = { 
    'post': post
    ,'minis': minis
};

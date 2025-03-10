// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        pubDate: z.date(),
        editDate: z.date(),
        description: z.string(),
        cover: image(),
        alt: z.string(),
        caption: z.string(),
        tags: z.array(z.string())
    })
});
const tuts = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/tuts" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        pubDate: z.date(),
        editDate: z.date(),
        description: z.string(),
        image: z.object({
            url: image(),
            alt: z.string(),
            caption: z.string()
        }),
        tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog, tuts };
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      image: image().optional(),
      imageAlt: z.string().default("An illustration for the article."),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { blog };

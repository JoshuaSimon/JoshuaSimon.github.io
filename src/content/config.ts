import { defineCollection, z } from "astro:content";

const recipes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    time: z.number().positive().int(),
    rating: z.number().min(1).max(5),
    ingredients: z.array(z.string()),
    notes: z.string().optional(),
  }),
});

export const collections = { recipes };

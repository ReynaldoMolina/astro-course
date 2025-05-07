import { defineCollection, z } from "astro:content";

const product = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    price: z.coerce.number()
  })
});

export const collections = { product };
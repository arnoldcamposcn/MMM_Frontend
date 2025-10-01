import { z } from "zod";

export const ArticleSchema = z.object({
    title: z.string(),
    content: z.string(),
    author: z.string(),
    created_at: z.string(),
    });
 export type Article = z.infer<typeof ArticleSchema>;

 
import { z } from "zod";

export const categoriesPortfolioSchema = z.object({
    id: z.number(),
    name: z.string(),
});
export type categoriesPortfolio = z.infer<typeof categoriesPortfolioSchema>;


export const portfolioSchema = z.object({
    id: z.number(),
    category: z.object({
        id: z.number(),
        name: z.string(),
    }),
    title: z.string(),
    short_description: z.string(),
    image: z.string().url(),
});

export type portfolio = z.infer<typeof portfolioSchema>;


export const categoriesServicesSchema = z.object({
    id: z.number(),
    name: z.string(),
});
export type categoriesServices = z.infer<typeof categoriesServicesSchema>;


export const servicesSchema = z.object({
    id: z.number(),
    category: z.object({
        id: z.number(),
        name: z.string(),
    }),
    title: z.string(),
    slug: z.string(),
    image: z.string(),
    description: z.string(),
    features: z.array(
        z.object({
            title: z.string(),
            description: z.string(),
            order: z.number(),
        })
    ),
    media: z.array(
        z.object({
            media_type: z.enum(["image", "video", "other"]).default("image"), // puedes ajustarlo según tu API
            file: z.string(),
            order: z.number(),
        })
    ),
});

export type servicesSchema = z.infer<typeof servicesSchema>;

export const testimonialsSchema = z.object({
    company_name: z.string(),
    comment: z.string(),
    manager_name: z.string(),
    manager_position: z.string(),
    manager_image: z.string().url(),
});
export type testimonials = z.infer<typeof testimonialsSchema>;


export const informationServiceSchema = z.object({
    id: z.number(),
    category: z.object({
      id: z.number(),
      name: z.string(),
    }),
    title: z.string(),
    slug: z.string(),
    image: z.string().url(), // porque viene como URL
    description: z.string(),
    features: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        order: z.number(),
      })
    ),
    media: z.array(
      z.object({
        media_type: z.enum(["image", "video"]).or(z.string()), // ajusta si conoces los tipos fijos
        file: z.string().url(),
        order: z.number(),
      })
    ),
  });
  
export type informationService = z.infer<typeof informationServiceSchema>;


export const newsletterSchema = z.object({
  email: z.string().email(),
});
export type newsletter = z.infer<typeof newsletterSchema>;

export const formContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  position: z.string(),
  empresa_organizacion: z.string(),
  website: z.string(),
  message: z.string(),
});
export type formContact = z.infer<typeof formContactSchema>;

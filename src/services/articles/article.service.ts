// services/articles/article.service.ts
import { apiClient } from "../Instance";
import type { formContact, newsletter, portfolio, testimonials } from "../../schema/mmm/types";
import type { informationService } from "../../schema/mmm/types";
import type { servicesSchema } from "../../schema/mmm/types";

export const getPortfolio = async (): Promise<portfolio[]> => {
  const data = await apiClient.get<portfolio[]>("/portfolio/items");
  return data;
};


export const getServices = async (): Promise<servicesSchema[]> => {
  const data = await apiClient.get<servicesSchema[]>("/services");
  return data;
};


export const getInformationService = async (slug: string): Promise<informationService> => {
  const data = await apiClient.get<informationService>(`/services/${slug}`);
  return data;
};


export const getTestimonials = async (): Promise<testimonials[]> => {
  const data = await apiClient.get<testimonials[]>("/testimonials");
  return data;
};


export const postNewsletter = async (
  payload: newsletter
): Promise<newsletter> => {
  return apiClient.post<newsletter>("/newsletter/", payload);
};

export const postFormContact = async (
  payload: formContact
): Promise<formContact> => {
  return apiClient.post<formContact>("/contact/", payload);
};

import { useTranslation } from 'react-i18next';
import { type ValueData } from './values.data';

export const useBenefitsData = (): ValueData[] => {
  const { t } = useTranslation();
  
  return [
    {
      icon: "/icons/impacto.png",
      title: t("informationService.benefits.items.0.title"),
      description: t("informationService.benefits.items.0.description"),
    },
    {
      icon: "/icons/comunicacion.svg",
      title: t("informationService.benefits.items.1.title"),
      description: t("informationService.benefits.items.1.description"),
    },
    {
      icon: "/icons/colaboracion.png",
      title: t("informationService.benefits.items.2.title"),
      description: t("informationService.benefits.items.2.description"),
    },
    {
      icon: "/icons/innovacion.svg",
      title: t("informationService.benefits.items.3.title"),
      description: t("informationService.benefits.items.3.description"),
    },
  ];
};

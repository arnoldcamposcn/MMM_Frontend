
import { useTranslation } from 'react-i18next';

export interface ValueData {
  icon: string;
  title: string;
  description: string;
}

export const useValuesData = (): ValueData[] => {
  const { t } = useTranslation();
  
  return [
    {
      icon: "/icons/innovacion.svg",
      title: t("about.values.items.0.title"),
      description: t("about.values.items.0.description"),
    },
    {
      icon: "/icons/rigor.png",
      title: t("about.values.items.1.title"),
      description: t("about.values.items.1.description"),
    },
    {
      icon: "/icons/colaboracion.png",
      title: t("about.values.items.2.title"),
      description: t("about.values.items.2.description"),
    },
    {
      icon: "/icons/impacto.png",
      title: t("about.values.items.3.title"),
      description: t("about.values.items.3.description"),
    },
  ];
};

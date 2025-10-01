import { useTranslation } from 'react-i18next';

export interface InfoCardData {
  number: string;
  title: string;
  description: string;
}

export const useChooseUsData = (): InfoCardData[] => {
  const { t } = useTranslation();
  
  return [
    {
      number: "01",
      title: t("home.chooseUs.items.0.title"),
      description: t("home.chooseUs.items.0.description"),
    },
    {
      number: "02",
      title: t("home.chooseUs.items.1.title"),
      description: t("home.chooseUs.items.1.description"),
    },
    {
      number: "03",
      title: t("home.chooseUs.items.2.title"),
      description: t("home.chooseUs.items.2.description"),
    },
    {
      number: "04",
      title: t("home.chooseUs.items.3.title"),
      description: t("home.chooseUs.items.3.description"),
    },
  ];
};

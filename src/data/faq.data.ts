import { useTranslation } from 'react-i18next';

export interface FaqData {
  question: string;
  answer: string;
}

export const useFaqData = (): FaqData[] => {
  const { t } = useTranslation();
  
  return [
    {
      question: t("informationService.faq.items.0.question"),
      answer: t("informationService.faq.items.0.answer"),
    },
    {
      question: t("informationService.faq.items.1.question"),
      answer: t("informationService.faq.items.1.answer"),
    },
    {
      question: t("informationService.faq.items.2.question"),
      answer: t("informationService.faq.items.2.answer"),
    },
    {
      question: t("informationService.faq.items.3.question"),
      answer: t("informationService.faq.items.3.answer"),
    },
    {
      question: t("informationService.faq.items.4.question"),
      answer: t("informationService.faq.items.4.answer"),
    },
  ];
};

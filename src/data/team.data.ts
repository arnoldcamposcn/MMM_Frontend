
import { useTranslation } from 'react-i18next';

export interface TeamMember {
  member?: {
    name: string;
    title: string;
  };
  image?: string;
}

export const useTeamMembers = (): TeamMember[] => {
  const { t } = useTranslation();
  
  return [
    { member: { name: t("about.team.members.0.name"), title: t("about.team.members.0.title") } },
    { image: "/people/bill-clint.jpg" },
    { member: { name: t("about.team.members.1.name"), title: t("about.team.members.1.title") } },
    { image: "/people/nilson-garrido.jpg" },
    { member: { name: t("about.team.members.2.name"), title: t("about.team.members.2.title") } },
    { image: "/people/july-risco.jpeg" },
    { member: { name: t("about.team.members.3.name"), title: t("about.team.members.3.title") } },
    { image: "/people/victor-porta.jpeg" },
  ];
};

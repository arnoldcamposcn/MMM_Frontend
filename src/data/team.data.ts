
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
    { image: "/people/avatar1.jpg" },
    { member: { name: t("about.team.members.1.name"), title: t("about.team.members.1.title") } },
    { image: "/people/avatar2.jpg" },
    { member: { name: t("about.team.members.2.name"), title: t("about.team.members.2.title") } },
    { image: "/people/avatar3.jpeg" },
    { member: { name: t("about.team.members.3.name"), title: t("about.team.members.3.title") } },
    { image: "/people/woman.jpg" },
  ];
};

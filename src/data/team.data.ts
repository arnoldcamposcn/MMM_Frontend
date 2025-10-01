
export interface TeamMember {
  member?: {
    name: string;
    title: string;
  };
  image?: string;
}

export const teamMembers: TeamMember[] = [
  { member: { name: "Bill Clint", title: "CEO - Meta Mining Media" } },
  { image: "/people/avatar1.jpg" },
  { member: { name: "Nilson Garrido", title: "Jefe de Proyectos - Meta Mining Media" } },
  { image: "/people/avatar2.jpg" },
  { member: { name: "Jorge Ramirez", title: "Lider de Operaciones - Meta Mining Media" } },
  { image: "/people/avatar3.jpeg" },
  { member: { name: "Fernando López", title: "Lider de desarrollo - Meta Mining Media" } },
  { image: "/people/woman.jpg" },
];

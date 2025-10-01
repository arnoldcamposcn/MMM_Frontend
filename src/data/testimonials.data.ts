import avatar1 from '@/assets/avatars/avatar1.png';

export type TestimonialCardType = 'dark' | 'gradient' | 'light';

export interface TestimonialData {
  category: string;
  text: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  type: TestimonialCardType;
}

export const testimonialsData: TestimonialData[] = [
  {
    category: "AUDIOVISUAL - HUDBAY",
    text: "La producción audiovisual y la cobertura en vivo del Mining Fest superó nuestras expectativas.",
    author: {
      name: "Mark Vandenberg",
      title: "CTO, NeuralTech",
      avatar: avatar1,
    },
    type: "dark",
  },
  {
    category: "AUDIOVISUAL - HUDBAY",
    text: "La producción audiovisual y la cobertura en vivo del Mining Fest superó nuestras expectativas.",
    author: {
      name: "Elena Rojas",
      title: "AI Researcher, DeepMind",
      avatar: avatar1,
    },
    type: "gradient",
  },
  {
    category: "EVENTOS - CODEA MINING",
    text: "La producción audiovisual y la cobertura en vivo del Mining Fest superó nuestras expectativas.",
    author: {
      name: "David Laurent",
      title: "CEO, FutureAI Labs",
      avatar: avatar1,
    },
    type: "light",
  },
  {
    category: "AUDIOVISUAL - HUDBAY",
    text: "La producción audiovisual y la cobertura en vivo del Mining Fest superó nuestras expectativas.",
    author: {
      name: "Mark Vandenberg",
      title: "CTO, NeuralTech",
      avatar: avatar1,
    },
    type: "dark",
  },
  {
    category: "AUDIOVISUAL - HUDBAY",
    text: "La producción audiovisual y la cobertura en vivo del Mining Fest superó nuestras expectativas.",
    author: {
      name: "Elena Rojas",
      title: "AI Researcher, DeepMind",
      avatar: avatar1,
    },
    type: "gradient",
  },
  {
    category: "EVENTOS - CODEA MINING",
    text: "La producción audiovisual y la cobertura en vivo del Mining Fest superó nuestras expectativas.",
    author: {
      name: "David Laurent",
      title: "CEO, FutureAI Labs",
      avatar: avatar1,
    },
    type: "light",
  },
  // Puedes agregar más testimonios aquí
];

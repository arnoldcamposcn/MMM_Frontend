// WorkflowSection.tsx (Archivo único)

import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// --- 1. DATA TIPADA ---
interface TimelineItem {
  id: number;
  title: string;
  // Usamos una key para i18next
  contentKey: string; 
}

const timelineItems: TimelineItem[] = [
  { id: 1, title: 'Brief & Contexto', contentKey: 'home.workflow.steps.brief' },
  { id: 2, title: 'Diagnostico & Auditoría', contentKey: 'home.workflow.steps.diagnosis' },
  { id: 3, title: 'Propuesta & Alcance', contentKey: 'home.workflow.steps.proposal' },
  { id: 4, title: 'Plan de Ejecución', contentKey: 'home.workflow.steps.execution' },
  { id: 5, title: 'Implementación & Producción', contentKey: 'home.workflow.steps.implementation' },
  { id: 6, title: 'Validación & Optimización', contentKey: 'home.workflow.steps.validation' },
  { id: 7, title: 'Entrega Final & Reportes', contentKey: 'home.workflow.steps.delivery' },
  { id: 8, title: 'Evolución & Innovación', contentKey: 'home.workflow.steps.evolution' },
];

// --- 2. COMPONENTE DE ÍTEM (Anidado para mantener un solo archivo) ---
interface TimelineItemProps {
  item: TimelineItem;
  index: number;
}

const TimelineItemComponent: React.FC<TimelineItemProps> = ({ item, index }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLLIElement>(null);
  const isOdd = index % 2 !== 0; // Para alternar la posición (0-indexed)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);


  // La línea vertical y el círculo que cambia de color
  const itemClasses = `
  relative w-[6px] mx-0 md:mx-32 lg:mx-auto pt-12 bg-white list-none transition-all duration-500
  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 
  after:w-7 after:h-7 after:rounded-full after:z-10
  after:transition-colors after:duration-500 after:ease-in-out
  ${isVisible ? 'after:bg-white' : 'after:bg-white'}
`;


  const contentClasses = `
  relative p-5 bg-white transition-all duration-500 ease-in-out shadow-lg
  w-[300px] mx-auto -mt-6 rounded-lg
  hover:scale-105 hover:shadow-xl cursor-pointer

  ${isVisible 
    ? 'opacity-100 visible translate-x-0' 
    : 'opacity-0 invisible translate-y-4'
  }

  md:w-[400px] lg:w-[400px] 
  ${isOdd 
    ? 'md:left-[0px] lg:left-[50px]' 
    : 'md:-left-[0px] lg:-left-[445px]'
  }

  ${isOdd 
    ? 'before:left-[-15px] before:border-r-[16px] before:border-r-white' 
    : 'before:right-[-15px] before:border-l-[16px] before:border-l-white'
  }

  // 👇 SOLO MOBILE - CORREGIDO
  max-[900px]:w-[250px]
  max-[900px]:left-[45px]
  max-[900px]:before:left-[-15px]
  max-[900px]:before:border-r-[16px]
  max-[900px]:before:border-r-white

  max-[600px]:w-[calc(100vw-91px)]
  max-[600px]:left-[45px]
  max-[600px]:before:left-[-15px]
  max-[600px]:before:border-r-[16px]
  max-[600px]:before:border-r-white
  max-[600px]:before:right-auto
`;


  return (
    <li ref={itemRef} className={itemClasses}>
      <div className={contentClasses}>
        <time className="block text-xl font-bold mb-2 text-black">{item.title}</time>
        <p className="text-black text-[15px]">{t(item.contentKey)}</p>
      </div>
    </li>
  );
};

// --- 3. COMPONENTE PRINCIPAL ---
// NOTA: Reemplaza <Container> con un div o tu componente real de Container
export const WorkflowSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    // <Container className="w-full bg-[#456990] text-white min-h-screen">
    <div className="w-full justify-center items-center  text-white min-h-screen">
      <div className="flex flex-col items-center justify-center gap-6 md:gap-6 px-0 md:px-8">
        
        {/* INTRO SECTION */}
        <section className="w-full">
          <div className="text-center">
            <h1 className="text-2xl md:text-[28px] font-sans font-bold uppercase pb-4">
              {t("home.workflow.title")}
            </h1>
            <p className="mt-2 text-base max-w-2xl mx-auto">
              {t("home.workflow.description")}
            </p>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section className="timeline mt-6 md:mt-12 w-full max-w-7xl">
          <ul className="">
            {timelineItems.map((item, index) => (
              <TimelineItemComponent key={item.id} item={item} index={index} />
            ))}
          </ul>
        </section>
        
      </div>
    {/* </Container> */}
    </div>
  );
};
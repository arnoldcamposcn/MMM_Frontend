import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useFetch } from '../../hooks/useFetch';
import { getServices } from '../../services/articles/article.service';
import type { servicesSchema } from '../../schema/mmm/types';
import { Button } from '../atoms/Button';
import { Link } from 'react-router-dom';
import useResponsive from '../../hooks/useResponsive';

interface GroupedServices {
  [category: string]: servicesSchema[];
}

export const ServicesSection = () => {
  const { t } = useTranslation();
  const { data: services, loading, error } = useFetch<servicesSchema[]>(getServices);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<servicesSchema | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useResponsive();

  const groupedServices = useMemo(() => {
    if (!services) return {};
    return services.reduce((acc, service) => {
      const categoryName = service.category.name;
      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }
      acc[categoryName].push(service);
      return acc;
    }, {} as GroupedServices);
  }, [services]);

  useEffect(() => {
    // Al cargar, establece el primer servicio por defecto para ambas vistas.
    if (!activeService && services && Object.keys(groupedServices).length > 0) {
      const firstCategory = Object.keys(groupedServices)[0];
      setActiveService(groupedServices[firstCategory][0]);
    }
  }, [services, groupedServices, activeService]);

  const handleCategoryClick = (category: string) => {
    if (!isMobile) return;
    if (activeCategory === category) {
      setIsOpen((prev) => !prev);
    } else {
      setActiveCategory(category);
      setIsOpen(true);
      // Al cambiar de categoría en móvil, no cambiamos el servicio activo.
      // La caja de información mantiene el servicio anterior hasta que se seleccione uno nuevo.
    }
  };

  const handleMouseEnter = (category: string) => {
    if (isMobile) return;
    setActiveCategory(category);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setIsOpen(false);
  };

  const handleServiceClick = (service: servicesSchema) => {
    if (activeService?.id === service.id) {
      // Si se hace clic en el mismo servicio, solo se cierra el desplegable.
      setIsOpen(false);
    } else {
      // Si es un servicio nuevo, se actualiza y se cierra el desplegable.
      setActiveService(service);
      setIsOpen(false);
    }
  };

  if (loading) return <p className="text-white text-center">{t("servicesSection.loading")}</p>;
  if (error) return <p className="text-white text-center">{t("servicesSection.error")}</p>;

  return (
    <div className="flex flex-col items-center justify-center px-0 md:px-8 w-full">
      <h1 className="text-3xl font-bold text-white text-center pb-12">
        {t("servicesSection.title")}
      </h1>
      

      <div className={`relative uppercase text-white font-medium py-2 px-0 ${
        isMobile
          ? 'flex w-full gap-4'
          : 'flex flex-wrap items-center justify-center gap-6'
      }`}>
        {Object.keys(groupedServices).map((category) => (
          <div 
            key={category} 
            className="relative"
            onMouseEnter={() => handleMouseEnter(category)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCategoryClick(category)}
          >
            <div
              className={`
                menu-services cursor-pointer pb-1 whitespace-nowrap
                ${activeCategory === category && isOpen
                  ? 'border-b-2 border-white'
                  : 'border-b-2 border-transparent hover:border-gray-300'}
              `}
            >
              {category}
            </div>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 transition-all duration-500 ease-in-out overflow-hidden z-10 ${
                activeCategory === category && isOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="bg-white p-4 shadow-lg rounded-sm w-max">
                <ul className="space-y-2">
                  {groupedServices[category].map((service) => (
                    <li 
                      key={service.id}
                      className="text-gray-700 hover:text-green-700 normal-case whitespace-nowrap cursor-pointer"
                      onClick={() => handleServiceClick(service)}>
                      {service.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeService && (
        <div className="grid grid-cols-1 md:grid-cols-[6fr_5fr] items-center justify-center gap-14 mt-12">
          <div>
            <img src={activeService.image} alt={activeService.title} className="rounded-lg object-cover w-full h-auto" />
          </div>
          <div className="flex flex-col gap-4">
          

            <span className="text-sm font-bold uppercase tracking-widest text-gradient inline-flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-gradient-to-r from-[#53C1A9] to-[#4AB39A]"></span>
                    {activeService.category.name}
                  </span>
            
            
            <h2 className="text-4xl font-semibold text-white uppercase">{activeService.title}</h2>
            <p className="text-white text-justify">
              {activeService.description}
            </p>
            
            <div className="flex mt-2">
              <Link to={`/servicios/${activeService.slug}`}>
                <Button variant="gradient" className="uppercase group">
                    <span>{t("servicesSection.button")}</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

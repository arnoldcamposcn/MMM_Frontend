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
    <div className="flex flex-col items-center justify-center px-0 md:px-10 lg:px-12 w-full">
      <h1 className="text-2xl md:text-3xl lg:text-[28px] font-bold text-white text-center pb-6 md:pb-10">
        {t("servicesSection.title")}
      </h1>
      

      <div className={`relative uppercase text-white font-medium py-2 px-0 w-full ${
        isMobile
          ? 'flex flex-col gap-2'
          : 'flex flex-wrap items-center justify-center gap-4 lg:gap-6'
      }`}>
        {Object.keys(groupedServices).map((category) => (
          <div 
            key={category} 
            className={`relative ${isMobile ? 'w-full' : ''}`}
            onMouseEnter={() => handleMouseEnter(category)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCategoryClick(category)}
          >
            <div
              className={`
                menu-services cursor-pointer pb-1 text-sm md:text-base lg:text-lg
                ${isMobile ? 'w-full text-center py-2 border-b border-gray-600' : 'whitespace-nowrap'}
                ${activeCategory === category && isOpen
                  ? isMobile 
                    ? 'border-b-2 border-white bg-gray-800/50' 
                    : 'border-b-2 border-white'
                  : isMobile
                    ? 'border-b border-transparent hover:border-gray-400'
                    : 'border-b-2 border-transparent hover:border-gray-300'}
              `}
            >
              {category}
            </div>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 transition-all duration-500 ease-in-out overflow-hidden z-10 ${
                activeCategory === category && isOpen ? 'max-h-96' : 'max-h-0'
              } ${isMobile ? 'w-full' : ''}`}
            >
              <div className={`bg-white p-4 shadow-lg rounded-sm ${isMobile ? 'w-full' : 'w-max'}`}>
                <ul className={`${isMobile ? 'space-y-3' : 'space-y-2'}`}>
                  {groupedServices[category].map((service) => (
                    <li 
                      key={service.id}
                      className={`text-gray-700 hover:text-green-700 normal-case cursor-pointer transition-colors
                        ${isMobile ? 'text-center py-2 border-b border-gray-200 last:border-b-0' : 'whitespace-nowrap'}`}
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
        <div className="grid grid-cols-1 lg:grid-cols-[6fr_5fr] items-center justify-center gap-8 lg:gap-14 mt-8 md:mt-10 w-full">
          <div className="order-1 lg:order-1">
            <img 
              src={activeService.image} 
              alt={activeService.title} 
              className="rounded-lg object-cover w-full h-auto max-w-md mx-auto lg:max-w-none" 
            />
          </div>
          <div className="flex flex-col gap-4 lg:gap-5 order-2 lg:order-2 px-0 lg:px-0">
            <span className="text-xs md:text-[15px] font-bold  tracking-widest text-gradient inline-flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gradient-to-r from-[#53C1A9] to-[#4AB39A]"></span>
              {activeService.category.name}
            </span>
            
            <h2 className="text-xl md:text-2xl lg:text-[28px] font-semibold text-white uppercase leading-tight">
              {activeService.title}
            </h2>
            
            <p className="text-white text-justify text-sm md:text-[15px] leading-relaxed">
              {activeService.description}
            </p>
            
            <div className="flex justify-center lg:justify-start mt-2 md:mt-0">
              <Link to={`/servicios/${activeService.slug}`}>
                <Button variant="gradient" className="px-5 py-3">
                  <span>{t("servicesSection.button")}</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

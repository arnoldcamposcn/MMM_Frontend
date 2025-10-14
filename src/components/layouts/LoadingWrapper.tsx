import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PageLoader } from '../organisms/PageLoader';

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Mostrar loading al cambiar de ruta
    setIsLoading(true);
    
    // Scroll hacia arriba suavemente
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Tiempo de carga mínimo para una mejor UX y animación
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800); // 1500ms (1.5 segundos) de loading mínimo

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        {children}
      </div>
    </>
  );
};


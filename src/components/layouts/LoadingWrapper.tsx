import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PageLoader } from '../organisms/PageLoader';
import { useLoadingContext } from '../../contexts/LoadingContext';

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ children }) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [minLoadingComplete, setMinLoadingComplete] = useState(false);
  const location = useLocation();
  const { isAnyLoading } = useLoadingContext();

  // Combinar el loading de navegación con el loading de datos
  const isLoading = isNavigating || (isAnyLoading && !minLoadingComplete);

  useEffect(() => {
    // Al cambiar de ruta
    setIsNavigating(true);
    setMinLoadingComplete(false);
    
    // Scroll hacia arriba suavemente
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Tiempo mínimo de loading para evitar flashes
    const minTimer = setTimeout(() => {
      setIsNavigating(false);
      setMinLoadingComplete(true);
    }, 1000); // 1 segundo mínimo para ver la animación

    return () => clearTimeout(minTimer);
  }, [location.pathname]);

  // Extender el loading si aún hay datos cargándose
  useEffect(() => {
    if (!isAnyLoading && minLoadingComplete) {
      // Pequeño delay adicional para transición suave
      const delayTimer = setTimeout(() => {
        setMinLoadingComplete(true);
      }, 300);
      return () => clearTimeout(delayTimer);
    }
  }, [isAnyLoading, minLoadingComplete]);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        {children}
      </div>
    </>
  );
};


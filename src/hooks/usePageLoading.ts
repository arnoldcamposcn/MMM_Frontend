import { useEffect } from 'react';
import { useLoadingContext } from '../contexts/LoadingContext';

/**
 * Hook para registrar el estado de carga de un componente
 * @param isLoading - Estado de carga del componente
 * @param key - Identificador único del componente (ej: 'services-section', 'portfolio-section')
 */
export const usePageLoading = (isLoading: boolean, key: string) => {
  const { registerLoading, unregisterLoading } = useLoadingContext();

  useEffect(() => {
    if (isLoading) {
      registerLoading(key);
    } else {
      unregisterLoading(key);
    }

    // Cleanup al desmontar
    return () => {
      unregisterLoading(key);
    };
  }, [isLoading, key, registerLoading, unregisterLoading]);
};


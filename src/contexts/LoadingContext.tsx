import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface LoadingContextType {
  registerLoading: (key: string) => void;
  unregisterLoading: (key: string) => void;
  isAnyLoading: boolean;
  loadingCount: number;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loadingKeys, setLoadingKeys] = useState<Set<string>>(new Set());

  const registerLoading = useCallback((key: string) => {
    setLoadingKeys((prev) => {
      const newSet = new Set(prev);
      newSet.add(key);
      return newSet;
    });
  }, []);

  const unregisterLoading = useCallback((key: string) => {
    setLoadingKeys((prev) => {
      const newSet = new Set(prev);
      newSet.delete(key);
      return newSet;
    });
  }, []);

  const isAnyLoading = loadingKeys.size > 0;
  const loadingCount = loadingKeys.size;

  useEffect(() => {
    // Debug: mostrar qué componentes están cargando
    if (process.env.NODE_ENV === 'development') {
      console.log('Loading keys:', Array.from(loadingKeys));
    }
  }, [loadingKeys]);

  return (
    <LoadingContext.Provider value={{ registerLoading, unregisterLoading, isAnyLoading, loadingCount }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoadingContext debe usarse dentro de LoadingProvider');
  }
  return context;
};


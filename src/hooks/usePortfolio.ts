// hooks/usePortfolio.ts
import { useState, useEffect } from 'react';
import { getPortfolio } from '../services/articles/article.service';
import type { portfolio } from '../schema/mmm/types';

export const usePortfolio = (language: string = 'es') => {
  const [items, setItems] = useState<portfolio[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPortfolio = async (lang: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await getPortfolio(lang);
      setItems(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio(language);
  }, [language]);

  return { 
    items, 
    loading, 
    error, 
    refetch: () => fetchPortfolio(language) 
  };
};
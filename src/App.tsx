// components/Portfolio.tsx
import React, { useState } from 'react';
import { usePortfolio } from './hooks/usePortfolio';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const { items, loading, error } = usePortfolio(language);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Selector de idioma */}
      <div className="language-selector">
        <button 
          onClick={() => setLanguage('es')}
          className={language === 'es' ? 'active' : ''}
        >
          Español
        </button>
        <button 
          onClick={() => setLanguage('en')}
          className={language === 'en' ? 'active' : ''}
        >
          English
        </button>
      </div>

      {/* Lista de proyectos */}
      <div className="portfolio-grid">
        {items.map(item => (
          <div key={item.id} className="portfolio-item">
            <h3>{item.title}</h3>
              <h3>{item.short_description}</h3>
            {/* <p>{item.short_description}</p> */}
            {/* <p>{item.image}</p> */}
            {/* <span className="category">{item.category.name}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
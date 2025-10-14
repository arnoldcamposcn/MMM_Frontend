import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../layouts/Container';
import ValueCard from '../molecules/ValueCard';
import { useValuesData, type ValueData } from '../../data/values.data';

interface ValuesSectionProps {
  title?: string;
  data?: ValueData[]; // Permitir pasar datos externos
}

const ValuesSection: React.FC<ValuesSectionProps> = ({ title, data: externalData }) => {
  const { t } = useTranslation();
  const defaultData = useValuesData();
  
  // Usar datos externos si se proporcionan, sino usar los valores por defecto
  const data = externalData || defaultData;
  
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-6 md:gap-12 px-2 md:px-12">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl lg:text-[28px] font-semibold text-white uppercase">{title || t("about.values.title")}</h2>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 items-stretch justify-center gap-6 px-0 max-w-7xl">
          {data.map((item, index) => (
            <ValueCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ValuesSection;

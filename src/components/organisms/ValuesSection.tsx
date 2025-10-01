import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../layouts/Container';
import ValueCard from '../molecules/ValueCard';
import { useValuesData } from '../../data/values.data';

interface ValuesSectionProps {
  title?: string;
}

const ValuesSection: React.FC<ValuesSectionProps> = ({ title }) => {
  const { t } = useTranslation();
  const data = useValuesData();
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-14 px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-white uppercase">{title || t("about.values.title")}</h2>
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

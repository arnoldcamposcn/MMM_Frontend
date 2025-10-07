import React from 'react';
import { Button } from '../atoms/Button';
import Container from '../layouts/Container';
import InfoCard from '../molecules/InfoCard';
import { type InfoCardData } from '../../data/chooseUs.data';

interface ChooseUsSectionProps {
  // title: string;
  data: InfoCardData[];
  showButton?: boolean;
}

const ChooseUsSection: React.FC<ChooseUsSectionProps> = ({  data, showButton = false }) => {
  return (
    <section className="flex flex-col items-center justify-center">
      <Container className="w-full">
        <div className="flex flex-col items-center justify-center gap-14 px-0">
          {/* <h1 className="text-4xl font-bold text-white text-center uppercase">{title}</h1> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 text-white text-lg font-medium">
            {data.map((item) => (
              <InfoCard
                key={item.number}
                number={item.number}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          {showButton && (
            <Button variant="gradient" className="uppercase">
              Ver todos los proyectos
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ChooseUsSection;

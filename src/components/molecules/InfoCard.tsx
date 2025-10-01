import React from 'react';

interface InfoCardProps {
  number: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col gap-5 bg-grayCustom py-14 px-10 rounded-3xl">
      <div>
        <h2 className="text-white text-2xl font-bold uppercase">
          {title.split(' ').map((word, index) => (
            <React.Fragment key={index}>
              {word}
              {index === 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div>
          <span className="text-[150px] font-bold text-gradient leading-[0.5]">{number}</span>
        </div>
        <div className="max-w-md">
          <p className="text-sm md:text-base font-normal whitespace-pre-wrap">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

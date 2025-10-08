import React from 'react';

interface InfoCardProps {
  number: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col gap-5 bg-grayCustom py-8 md:py-12 px-8 md:px-12 rounded-3xl">
      <div>
        <h2 className="text-white text-xl md:text-2xl font-bold uppercase w-auto pr-0 md:pr-24 text-center md:text-left">
          {title}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div>
          <span className="text-[150px] font-bold text-gradient leading-[0.5]">{number}</span>
        </div>
        <div className="max-w-md">
          <p className="text-[15px] font-normal whitespace-pre-wrap text-center md:text-left">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

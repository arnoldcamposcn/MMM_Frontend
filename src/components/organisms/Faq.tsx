import React from 'react';
import FaqItem from '../molecules/FaqItem';
import { type FaqData } from '../../data/faq.data';

interface FaqProps {
  data: FaqData[];
}

const Faq: React.FC<FaqProps> = ({ data }) => {
  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col gap-4">
        {data.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;

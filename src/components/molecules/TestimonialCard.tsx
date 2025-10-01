import React from 'react';
import { StarIcon } from '../atoms/StarIcon';
import { type TestimonialData, type TestimonialCardType } from '../../data/testimonials.data';

interface TestimonialCardProps {
  data: TestimonialData;
}

const getCardStyles = (type: TestimonialCardType) => {
  switch (type) {
    case 'dark':
      return 'bg-grayCustom text-white';
    case 'gradient':
      return 'bg-cyan-gradient-card text-white';
    case 'light':
      return 'bg-grayTestimonials text-grayCustom';
    default:
      return 'bg-grayCustom text-white';
  }
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
  const { category, text, author, type } = data;
  const cardStyles = getCardStyles(type);

  return (
    <div className={`grid grid-rows-[1fr_auto] px-10 py-16 rounded-3xl h-full cursor-pointer ${cardStyles}`}>
      <div>
        <h3 className="text-xl font-bold uppercase">{category}</h3>
        <p className="mt-4 text-base opacity-80">{text}</p>
      </div>
      <div className="mt-8">
        <div className="flex items-center gap-4">
          <img src={author.avatar} alt={author.name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="font-bold">{author.name}</p>
            <p className="text-sm opacity-80">{author.title}</p>
          </div>
        </div>
        <div className="flex mt-4">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 text-gold" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

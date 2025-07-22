// components/SetupCard.jsx
import Image from 'next/image';
import React from 'react';

const SetupCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-start gap-4 p-4 border-[0.5px]">
      <div className="bg-[#111114] rounded-full w-10 h-10 flex-shrink-0">
        <Image src={image} alt={title} className="object-contain" />
      </div>
      <div className='space-y-2'>
        <h3 className="text-lg font-semibold text-[#F9F9F9]">{title}</h3>
        <p className="text-base text-[#BBBBBB] font-medium max-w-md">{description}</p>
      </div>
    </div>
  );
};

export default SetupCard;

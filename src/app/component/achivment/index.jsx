import React from 'react';
import Image from 'next/image';

export default function AchivementCard({ className, number, title, description, image }) {
  return (
    <div className={`relative max-w-[245px] ${className} bg-[#111114] overflow-hidden rounded-md`}>
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Arrow-image"
          fill
          className=""
        />
      </div>

      <div className="relative z-10 flex flex-col justify-end h-full p-4 bg-gradient-to-t from-[#111114]/90 to-transparent text-center">
        <div className="text-center">
          <h2 className="text-[32px] font-bold text-[#F9F9F9]">{number}</h2>
          <h4 className="text-base text-[#F9F9F9] font-semibold">{title}</h4>
          <p className="text-[#BBBBBB] text-sm font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
}

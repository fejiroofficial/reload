import Image from 'next/image';
import React from 'react';
import Line from '../../assets/png/Line 4.png';
import { otherFeatures, ourFeatures } from '@/app/component/data';
import logo from '../../assets/svg/logo.svg'
import Badge from '@/app/component/Badge';

const FeatureList = ({ title, titleImg, features, titleClass }) => (
  <div className="w-full flex flex-col items-center gap-4 justify-center">
    {titleImg ? (
      <Image src={titleImg} alt="title logo" />
    ) : (
      <p className={titleClass}>{title}</p>
    )}
    <div className="w-full max-w-[510px] max-h-[397px] flex flex-col gap-6 bg-[#111114] border border-[#282828] rounded-[32px] p-4">
      {features.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-row items-center gap-4">
            <Image src={item.icon} alt="icon" width={15} height={15} />
            <p className="text-[#F3F3F3] text-base">{item.text}</p>
          </div>
          {index !== features.length - 1 && (
            <Image
              src={Line}
              alt="Decorative Line"
              width={500}
              height={100}
              className="w-full"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);


export default function Comparison() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 mx-auto px-4 md:px-12 lg:px-20 xl:px-24 2xl:px-40 pt-16 md:pb-4 w-full mt-6">
    <Badge text="Comparison" />
      <h1 className='text-[48px] pb-8'>What makes us Stand Out</h1>
      <div className="flex flex-col lg:flex-row items-center gap-3">
        <FeatureList
          titleImg={logo}
          features={ourFeatures}
          titleClass="text-[20px] md:text-[25px] lg:text-[32px] uppercase font-[800] text-[#F3F3F3]"
        />
        <FeatureList
          title="Others"
          features={otherFeatures}
          titleClass="text-[20px] md:text-[25px] lg:text-[24px] font-medium italic text-[#AAAAAA]"
        />
      </div>
    </section>
  );
}

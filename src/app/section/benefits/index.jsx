
import Badge from '@/app/component/Badge';
import React from 'react';
import dasboard from '../../assets/svg/benefit.svg';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import SetupCard from '@/app/component/setup';
import Operation from '@/app/component/Operation';
import Graph from '@/app/component/graph';
import { bottomCards, graphCards, topCards } from '@/app/component/data';

export default function Benefits() {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col text-center items-center">
        <Badge text="Benefits" />
        <h1 className="text-[48px] font-semibold py-6">
          More Speed. Less Stress.
          <br />
          Real Results
        </h1>
      </div>

      <div className="flex justify-between items-center pt-16 text-wrap">
        <Image src={dasboard} alt="Dasboard-image" />
        <div className="space-y-4">
          <h2 className="text-[32px]">
            Move, Launch and Scale Fast <br /> & Effortlessly.
          </h2>
          <p className="text-base text-[#BBB]">
            Deploy in seconds and iterate effortlessly with speed-first cloud <br /> infrastructure.
          </p>
          <p className="flex items-center gap-2 pt-4">
            GET STARTED <FaArrowRight />
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center pt-8">
        {topCards.map((card, index) => (
          <SetupCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      <Operation />

      <div className="flex flex-col lg:flex-row pt-8 justify-center items-center">
        {bottomCards.map((card, index) => (
          <SetupCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      <Graph />
         <div className="flex flex-col lg:flex-row pt-8 justify-center items-center">
        {graphCards.map((card, index) => (
          <SetupCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

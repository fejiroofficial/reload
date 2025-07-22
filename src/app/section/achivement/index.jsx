import AchivementCard from '@/app/component/achivment'
import Badge from '@/app/component/Badge'
import React from 'react'
import arrow from '../../assets/svg/arrow.svg';
import cloud from '../../assets/svg/devops.svg';
import baloon from '../../assets/svg/baloon.svg';
import globe from '../../assets/svg/country.svg';

export default function Achivements() {
  return (
    <div className=''>
        <div className='flex flex-col items-center py-16'>
         <Badge text="Achivements" />
          <h1 className='text-[48px] text-[#F9F9F9] '>Real Numbers. Real Impact.</h1>
        </div>
    <div className='flex flex-col lg:flex-row gap-6'>
  
<AchivementCard
  number="45,000+"
  title="Deployments Processed"
  description="Startups rely on Reload to launch faster & without fail."
  className="h-[300px]"
  image={arrow}
/>
<AchivementCard
  number="52%"
  title="Reduction In DevOps Overhead"
  description="Reload automates what used to eat hours"
  className="h-[245px]"
  image={cloud}
/>
<AchivementCard
  number="12,000+"
  title="Active Users"
  description="Loved by founders, engineers, and growth teams"
  className="h-[200px]"
  image={baloon}
/>
<AchivementCard
  number="40+"
  title="Uptime Guarantee"
  description="Built to run fast and stay up."
  className="h-[300px]"
  image={globe}
/>
    </div>
    </div>
  )
}

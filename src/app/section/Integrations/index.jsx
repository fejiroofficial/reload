import React from 'react'
import Image from 'next/image'
import banner from '../../assets/svg/integration.svg'
import wall from '../../assets/svg/leftWall.svg'
import wall0 from '../../assets/svg/rightWall.svg'
import Badge from '@/app/component/Badge'

export default function Integration() {
  return (
    <div className="relative flex items-center justify-center w-full px-4 py-16 gap-4">
      <div className="hidden md:block">
        <Image src={wall0} alt="left wall" />
      </div>

      <div className="text-center flex flex-col items-center max-w-3xl px-4">
        <Badge text="Integrations" />
        <h1 className="text-[32px] md:text-[48px] font-semibold text-[#F9F9F9] mt-4 leading-tight">
          Integrate Everything. <br />
          Sync Effortlessly.
        </h1>
        <div className="mt-8">
          <Image src={banner} alt="integration banner" />
        </div>
      </div>
      <div className="hidden md:block">
        <Image src={wall} alt="right wall" />
      </div>
    </div>
  )
}

import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import opertaion from '../../assets/svg/operation.svg'
import Image from 'next/image';
export default function Operation() {
  return (
    <div className='flex lg:flex-row flex-col-reverse justify-between items-center container mx-auto pt-16'>
        <div className='space-y-2'>
  <h1 className='text-[32px] text-[#F9F9F9] font-medium'>Simplify Operations & Eliminate <br/> Overload</h1>
      <p className='max-w-md text-[#BBBBBB] text-base font-medium'>Manage everything in one secure platform without the usual headaches.</p>
        <p className='flex items-center gap-2 pt-4 text-base font-bold'>GET STARTED <FaArrowRight /></p>
        </div>
    
        <div>
            <Image src={opertaion} alt='' />
        </div>
    </div>
  )
}

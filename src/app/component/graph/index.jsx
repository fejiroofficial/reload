import Image from 'next/image'
import React from 'react'
import graph from '../../assets/svg/tableGraph.svg'
import { FaArrowRight } from "react-icons/fa";
export default function Graph() {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center container mx-auto py-16'>
            <Image src={graph} alt='graph-image' />
            <div className='space-y-2'>
                <h1 className='text-[32px] font-medium text-[#F9F9F9]'>Faster Load Times. Higher <br /> Conversions</h1>
                <p className='text-[#BBBBBB] text-base font-meduim'>Watch performance, productivity, and revenue grow backed <br /> by real metrics.</p>
                <p className='flex items-center gap-2 pt-4 text-base font-bold'>GET STARTED <FaArrowRight /></p>
            </div>
        </div>
    )
}

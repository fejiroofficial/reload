import React from 'react'
import growth from '../../assets/svg/growth.svg'
import Image from 'next/image'
export default function Growth() {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center container mx-auto py-16'>
  <div>
            <h1 className='text-[#F9F9F9] text-[32px]'>Eliminate the Chaos That’s <br/> Costing You Growth</h1>
            <p className='text-[#BBBBBB] text-[16px] max-w-md'>No more tool overload, dev bottlenecks, or infrastructure headaches. Reload brings everything together so you can focus on building, not babysitting your backend.</p>
        </div>
<div>
    <Image src={growth} alt='Image'/>
  
</div>
        </div>
      
    )
}

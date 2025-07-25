import React from 'react'
import Image from "next/image";
import background from "../../assets/svg/background.svg";
import dashboard from "../../assets/svg/dasboard.svg";
import Button from '@/app/component/Button';

export default function Dashboard() {
  return (
 <section className="container mx-auto relative flex flex-col items-center text-center w-full border-1 border-[#282828] rounded-[24px] mt-[2rem] bg-[#111114]">
      <Image
        src={background}
        alt="background-image"
        className="absolute inset-0 w-full h-full object-cover -z-10 top-0"
      />
      <div className="relative z-10 pt-5">
        <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-bold text-center flex-wrap text-[#F9F9F9]">
        Ready to Move Faster <br/> and Scale Smarter?
        </h1>
        <p className="text-[18px] md:text-xl mb-8 text-[#BBBBBB] py-3">
        Start your free trial today — no credit card, no delays.
        </p>
        <div className="flex flex-col lg:flex-row justify-center gap-6">

        <Button className="bg-[#0064E0] py-4">Try for Free</Button>
         <Button className="bg-[transparent] border-1 rounded-xl py-4">Get Template</Button>
        </div>
      </div>
      <div className="pt-[3rem]">
        <Image src={dashboard} alt="dashboard-image" />
      </div>
    </section>
  )
}

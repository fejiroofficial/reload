import React from "react";
import Button from "../../component/Button";
import Image from "next/image";
import background from "../../assets/svg/background.svg";
import dashboard from "../../assets/svg/dasboard.svg";
import enyata from "../../assets/svg/enyata.svg";
import alt from "../../assets/svg/alt-school.svg";
import mobina from "../../assets/svg/mobina.svg";
import bet from "../../assets/svg/nairabet.svg";
import okra from "../../assets/svg/okra.svg";

const Hero = () => {
  return (
    <section className="container mx-auto relative flex flex-col items-center text-center w-full ">
      <Image
        src={background}
        alt="background-image"
        className="absolute inset-0 w-full h-full object-cover -z-10 top-0"
      />
      <div className="relative z-10 lg:pt-[8rem]">
        <h1 className="text-[56px] lg:text-[64px] font-bold text-center flex-wrap text-[#F9F9F9]">
         Tired of Clunky Tools <br/> Slowing your Business?
        </h1>
        <p className="text-[18px] md:text-xl mb-8 text-[#BBBBBB] py-3">
        Our cloud platform replaces friction with flow. Everything you need, finally in <br/> one place
        </p>
        <div className="flex justify-center gap-6">

        <Button className="bg-[#0064E0]">Try for Free</Button>
         <Button className="bg-[transparent] border-1 rounded-xl">Get Template</Button>
        </div>
      </div>
      <div className="pt-[10rem]">
        <Image src={dashboard} alt="dashboard-image" />
        <div className="pt-16 bg-[#0B0B0B]">
          <h2 className="text-base font-[350] text-[#F9F9F9]">Trusted by</h2>
          <div className="flex items-center justify-center gap-10 py-6 mb-16">
            <Image src={enyata} alt="social-icon" />
               <Image src={alt} alt="social-icon" />
                  <Image src={okra} alt="social-icon" />
                     <Image src={mobina} alt="social-icon" />
                        <Image src={bet} alt="social-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

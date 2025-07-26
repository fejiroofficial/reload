"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import reload from "../../assets/svg/footer.svg";
import line from "../../assets/svg/fotterLine.svg";
import leftLine from "../../assets/svg/leftLine.svg";
import Button from "@/app/component/Button";
import logo from "../../assets/svg/logo.svg";
import IG from '../../assets/svg/Instagram.svg'
import X from '../../assets/svg/x.svg'
import linkdln from '../../assets/svg/linkdln.svg'

const Footer = () => {
   const [isMediumUp, setIsMediumUp] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMediumUp(window.innerWidth >= 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);


  return (
    <>
        <div className="md:py-16 px-6">
      <Image src={line} alt="line" className="hidden lg:block"/>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center lg:py-12 gap-6 pb-4">
        <Image src={logo} alt="logo" />
          <Image src={leftLine} alt="line" className="hidden lg:block"/>
        <h2>Overview</h2>
         <Image src={leftLine} alt="line" className="hidden lg:block"/>
        <h2>Product</h2>
         <Image src={leftLine} alt="line" className="hidden lg:block"/>
        <h2>Pricing</h2>
         <Image src={leftLine} alt="line" className="hidden lg:block"/>
        <h2>Resources</h2>
         <Image src={leftLine} alt="line" className="hidden lg:block"/>
        <Button className="bg-[#0064E0] py-4 w-full lg:w-[312px]">Try for Free</Button>
      </div>
       <Image src={line} alt="line" className="hidden lg:block"/>
       <div className="flex flex-col lg:flex-row justify-between lg:py-16 gap-4">
   <div className="flex gap-16 justify-between">
        <h2>Instagram</h2>
         <Image src={IG} alt="Intagram-logo" width={20} height={20}/>
       </div>
        <div className="flex gap-16 justify-between">
        <h2>X (Twitter)</h2>
         <Image src={X} alt="X-logo" width={20} height={20} />
       </div>
        <div className="flex gap-16 justify-between">
        <h2>LInkedin</h2>
         <Image src={linkdln} alt="linkdln-logo" width={20} height={20} />
       </div>
       </div>
    <div className="text-center">
      <h4>Copyright 2025-Udoka</h4>
    </div>

    </div>
      <div
      className="flex flex-col lg:flex-row items-start lg:items-center lg:h-44 justify-between gap-8 lg:gap-0 mx-auto px-4 md:px-12 lg:px-20 xl:px-24 2xl:px-40 3xl:px-60 pt-8 md:pb-4 w-full mt-4 bg-cover bg-center bg-no-repeat"
      style={isMediumUp ? { backgroundImage: `url(${reload.src})` } : {}}
    >


      <Image
        src={reload}
        alt="reload-image"
        width={400}
        height={300}
        className="block md:hidden"
      />
    </div>
  
    </>

  );
};

export default Footer;

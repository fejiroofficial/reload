"use client";

import Image from "next/image";
import React from "react";
// import x from "../../asset/footer/x_logo.svg.svg";
// import Linkdln from "../../asset/footer/Symbol.svg.svg";
// import facebook from "../../asset/footer/Symbol.svg (1).svg";
// import discord from "../../asset/footer/discord_symbol.svg.svg";
import reload from "../../assets/svg/footer.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <footer
      className="flex flex-col lg:flex-row items-start lg:items-center lg:h-44 justify-between gap-8 lg:gap-0 mx-auto px-4 md:px-12 lg:px-20 xl:px-24 2xl:px-40 3xl:px-60 pt-8 md:pb-4 w-full mt-4 bg-cover bg-center bg-no-repeat"
      style={isMediumUp ? { backgroundImage: `url(${reload.src})` } : {}}
    >


      <Image
        src={reload}
        alt="reload-image"
        width={400}
        height={100}
        className="block md:hidden"
      />
    </footer>
  );
};

export default Footer;

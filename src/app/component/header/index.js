import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/svg/logo.svg";
import rectangle from "../../assets/svg/vector.svg";
import Nav from "../Nav";
import Button from "../Button";

const Header = () => {
  return (
    <div className="container lg:mx-auto relative lg:top-10">
    <header className=" bg-[#111114] lg:py-2 rounded-md lg:px-2 lg:mx-20">
      <Image
        src={rectangle}
        alt="background-image"
        className="absolute inset-0 w-full object-cover -z-10 top-2 lg:top-[-6rem] "
      />

      <div className="flex justify-between items-center px-2 lg:px-6">
        <Link href="/">
          <div className="">
            <Image src={logo} alt="logo" />
          </div>
       
        </Link>
        <Nav />
<div className="hidden lg:block">

        <Button className="bg-[#0064E0]">Try for Free</Button>
</div>
      </div>
    </header>
    </div>

  );
};

export default Header;

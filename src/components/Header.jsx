import React from "react";
import Button from "./Button";
import gradient from '../assets/images/gradient.webp'
import logo from '../assets/images/logo.webp'
const Header = () => {
  return (
    <>
      <div className="flex-grow flex justify-center items-center relative max-lg:py-[100px]" >
        <div className="container max-w-[1140px] pl-4 mx-auto">
          <h1 className="lg:text-6xl   md:text-[55px] sm:text-5xl text-[40px] leading-[1.2] font-recharge lg:leading-[75.6px] font-bold text-white max-w-[578px]" data-aos="fade-right">
            {" "}
            <span className="text-[#02CDCF]">Nexai</span> is an advanced
            AI-powered home assistant
          </h1>
          <p className=" font-poppins !opacity-70 sm:text-base text-sm font-normal text-white md:pt-4 pt-3" data-aos="fade-right">
            Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla
            odio.
          </p>
          <Button
            class="mt-[51px]"
            text="Know More"
          />
        </div>
        <img src={gradient} alt="gr" className="absolute bottom-[-5%] left-0 right-0" />
        <img src={logo} alt="logo" className="absolute xl:right-[14%] xl:top-[37.5%] hidden xl:block"/>
      </div>
    </>
  );
};

export default Header;

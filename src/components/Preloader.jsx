import React from "react";
import logo from '../assets/images/logo.webp'
const Preloader = () => {
  return (
    <div>
      <div className="bg-[#040404] h-screen fixed top-0 left-0 right-0 overflow-hidden flex justify-center items-center">
      <div className="relative flex justify-center items-center">
    <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#02CDCF]"></div>
    <img src={logo}  className="rounded-full h-28 w-28"/>
</div>
        </div>
      </div>
  );
};

export default Preloader;
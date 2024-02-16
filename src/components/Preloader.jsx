import React from "react";
import ai from '../assets/images/ai.webp'
const Preloader = () => {
  return (
    <div>
      <div className="bg-[#040404] h-screen fixed top-0 left-0 right-0 overflow-hidden flex justify-center items-center">
        <div className="flex items-center animate-bounce">
            <h1 className="text-[#02CDCF] font-recharge text-6xl font-bold ">Nex</h1>
        <img src={ai} alt="ai" className=" w-[200px] h-[200px]"  />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
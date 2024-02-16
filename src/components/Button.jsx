import React from "react";

const Button = (props) => {
  return (
    <div>
      <button data-aos="zoom-out-up"
        className={`${props.class} bg-[#02CDCF] rounded-xl text-[#0B0A0A] hover:text-[#02CDCF] font-recharge sm:text-lg before:transition-all before:ease-linear before:hover:bg-black duration-300 before:duration-300 before:absolute before:left-[-100%] z-[1] before:z-[-1] before:bg-transparent before:hover:left-[0] before:hover:w-full before:top-0 before:w-full before:h-full border-none outline-none hover:outline-[4px] hover:outline-[#02CDCF] relative overflow-hidden inline-block text-base font-bold sm:leading-[21.6px] sm:py-[18px] py-4 sm:px-8 px-7`}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;

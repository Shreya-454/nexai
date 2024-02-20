import React from "react";
import ai from "../assets/images/ai-powered.webp";
import Button from "./Button";
const Ai = () => {
  return (
    <div className="relative lg:pt-[86px] lg:pb-[70px] md:py-10 pt-5 pb-0" id="ai">
      <div className="max-w-[1246px] mx-auto px-3 ">
        <div className="flex flex-wrap flex-row -mx-3">
          <div className="lg:w-1/2 w-full px-3 relative max-lg:mb-10 max-sm:mb-5 flex max-lg:justify-center ">
            <img src={ai} alt="ai" className="" data-aos="zoom-in-right" />
            <div className="w-[231px] h-[231px] bg-[#02CDCF] blur-[100px]  top-[30%] left-[30%] hidden md:block absolute  mix-blend-lighten  rounded-full"></div>
          </div>
          <div className="lg:w-1/2 w-full px-3" >
            <h2 className=" font-recharge md:text-[40px] sm:text-4xl text-3xl font-bold text-[#02CDCF] leading-[50.4px] mb-4 max-lg:text-center" data-aos="fade-left">
              Ai-Powered Home Assistant
            </h2>
            <p className="font-poppins sm:text-base text-sm text-white sm:leading-[25.6px] !opacity-70 font-normal max-lg:text-center lg:max-w-[517px] mb-[6px]" data-aos="fade-left">
              Nexai is an advanced AI-powered home assistant that brings the
              future to your fingertips. With its ability to engage in natural,
              fluent conversations in over 15 languages,
            </p>
            <p className="font-poppins sm:text-base text-sm text-white sm:leading-[25.6px] !opacity-70 font-normal max-lg:text-center lg:max-w-[517px] mb-[6px]" data-aos="fade-left">
              Nexai offers an incredibly futuristic experience. It can take the
              initiative to ask about your day, schedule meetings, provide
              timely reminders
            </p>
            <p className="font-poppins sm:text-base text-sm text-white sm:leading-[25.6px] !opacity-70 font-normal max-lg:text-center lg:max-w-[517px]" data-aos="fade-left">
              assist with cooking by suggesting ingredients, track your fitness
              and nutrition goals, and even handle bill payments.
            </p>
            <div className="flex max-lg:justify-center"><Button class="md:!mt-10 !mt-5" text="Learn More" /></div>
          </div>
        </div>
      </div>
      <div className="w-[228px] h-[245px] bg-[#02CDCF] blur-[127px] hidden lg:block absolute top-[27%] right-[-8%] rounded-full"></div>
    </div>
  );
};

export default Ai;

import React from "react";
import ai from '../assets/images/ai.webp'
import Button from "./Button";
const What = () => {
  return (
    <div className="lg:py-20 md:py-10 py-5  max-xl:px-6" id="what">
      <div className="max-w-[1340px] md:px-[100px] sm:px-6 px-3 mx-auto  border border-solid overflow-hidden lg:py-[163px] md:pb-20 sm:pb-10 relative pb-5 border-[#FCFCFC] rounded-3xl bg-[url(./assets/images/whatimg.webp)] bg-cover bg-center bg-no-repeat" data-aos="zoom-in-up">
          <div className="flex flex-wrap lg:flex-row flex-col-reverse">
            <div className="lg:w-1/2 w-full">
              <h2 className=" font-recharge max-lg:text-center md:text-[40px] sm:text-4xl text-3xl md:leading-[50.4px] text-[#02CDCF] font-bold mb-4" data-aos="fade-right">
                What is NexAi?
              </h2>
              <p className=" font-poppins max-lg:text-center sm:text-base text-sm text-white opacity-70 sm:leading-[25.6px] mb-2" data-aos="fade-right">
                Beyond its convenience, Nexai revolutionizes the way you
                interact with your home environment. It enhances productivity,
                efficiency, and overall well-being. From managing your schedules
                to transforming the way you experience smart living, Nexai opens
                up a world of possibilities.
              </p>
              <p className="font-poppins max-lg:text-center sm:text-base text-sm text-white opacity-70 sm:leading-[25.6px]" data-aos="fade-right">
                Nexai's software can be installed on all your smart devices,
                including smartphones, computers, smart TVs, and kitchen
                appliances. It acts as a centralized control hub, allowing you
                to manage and interact with all your devices seamlessly. Whether
                it's adjusting the temperature, turning on appliances, or even
                accessing files on your home computer from anywhere, Nexai
                empowers you with effortless control.
              </p>
              <div className="flex max-lg:justify-center"><Button text="Learn More" class="md:!mt-10 !mt-5"/></div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center relative">
                <img src={ai} alt="a" data-aos="zoom-in" />
                <div className="w-[468px] h-[463px] rounded-full bg-[#02CDCF] absolute blur-[240px] mix-blend-lighten"></div>
            </div>
          </div>
          <div className="w-[228px] h-[228px] blur-[190px] bg-[#02CDCF] absolute left-0 bottom-0 hidden md:block"></div>
        </div>
    </div>
  );
};

export default What;

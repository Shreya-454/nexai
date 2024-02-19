import React from "react";
import { Clock1, Clock2, Msg, Wire } from "./Icons";
const Unique = () => {
  return (
    <div className=" lg:pt-[120px] pt-10 md:pb-10 pb-5 lg:pb-20  max-xl:px-6" id="uni">
      <div className="max-w-[1340px] mx-auto border border-solid  overflow-hidden border-[#FCFCFC] bg-[url(./assets/images/services.webp)] bg-center bg-no-repeat bg-cover  lg:px-[100px] px-3 lg:pt-20 md:pt-10 pt-5 rounded-[32px]" data-aos="zoom-in-up">
        <h2 className=" text-white text-center font-recharge md:text-[40px] sm:text-4xl text-3xl md:leading-[50.4px] font-bold mb-4">
          Unique features
        </h2>
        <p className=" text-white opacity-70 sm:text-base text-sm font-normal font-poppins text-center sm:leading-[25.6px] max-w-[397px] mx-auto  lg:pb-[60px] pb-5 ">
          ability to engage in natural, fluent conversations in over 15
          languages,
        </p>
        <div className="flex flex-wrap flex-row -mx-3 h-[496px] lg:pb-20 md:pb-10 pb-5 overflow-y-scroll">
          <div className="md:w-1/2 w-full  max-lg:flex max-lg:flex-col max-lg:items-center px-3">
            <div className="max-w-[364px] bg-white w-full pt-[30px] px-6 rounded-2xl md:mb-[152px] mb-10">
              <Clock1 />
              <h4 className=" font-recharge text-[#0B0A0A] md:text-xl sm:text-lg text-base md:leading-[32px] font-bold mt-[30px]">
                Remote Access and File Management
              </h4>
              <p className="text-[#0B0A0A] opacity-70 font-poppins sm:text-base text-sm sm:leading-[25.6px] font-normal pb-11">
                {" "}
                While you're out with your family, you may wonder if you
                remembered to turn off the stove. Thanks to Nexai, this is no
                longer a concern. Using the Nexai app, you can initiate a video
                call with Nexai and activate the mini drone stationed in your
                home.
              </p>
            </div>
            <div className="max-w-[364px] bg-white w-full pt-[30px] px-6 rounded-2xl ">
              <Msg />
              <h4 className=" font-recharge text-[#0B0A0A] md:text-xl sm:text-lg text-base md:leading-[32px]  font-bold mt-[30px]">
                Autonomous and Natural Language Communication
              </h4>
              <p className="text-[#0B0A0A] opacity-70 font-poppins sm:text-base text-sm sm:leading-[25.6px] font-normal pb-11">
                Nexai goes beyond standard home assistants by taking proactive
                initiatives and engaging in natural language conversations. It
                communicates with you as if you're talking to a friend,
              </p>
            </div>
          </div>
          <div className="md:w-1/2 w-full px-3 md:pt-[300px] pt-10 flex flex-col lg:items-end items-center">
            <div className="max-w-[364px] bg-white w-full pt-[30px] px-6 rounded-2xl md:mb-[152px] mb-10">
              <Clock2 />
              <h4 className=" font-recharge text-[#0B0A0A] md:text-xl sm:text-lg text-base md:leading-[32px]  font-bold mt-[30px]">
                Real-time Home Monitoring
              </h4>
              <p className="text-[#0B0A0A] opacity-70 font-poppins sm:text-base text-sm sm:leading-[25.6px] font-normal pb-11">
                {" "}
                Imagine you're at work, and you realize you forgot to bring an
                important file stored on your desktop computer at home. No
                worries! Simply open the Nexai app on your phone, initiate a
                call with Nexai, and request access to your computer.{" "}
              </p>
            </div>
            <div className="max-w-[364px] bg-white w-full pt-[30px] px-6 rounded-2xl">
              <Wire />
              <h4 className=" font-recharge text-[#0B0A0A] md:text-xl sm:text-lg text-base md:leading-[32px]  font-bold mt-[30px]">
                Intelligent Contextual Awareness
              </h4>
              <p className="text-[#0B0A0A] opacity-70 font-poppins sm:text-base text-sm sm:leading-[25.6px] font-normal pb-11">
                {" "}
                Nexai utilizes the hardware sensors placed throughout your home
                to understand your location and deliver relevant information or
                actions. For instance, if you're in the bedroom and there's a
                smart TV present, Nexai will automatically display on the TV
                screen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;

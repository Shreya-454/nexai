import React from "react";
import bg from "../assets/images/footbg.webp";
import { Facebook, Telegram, Twitter } from "./Icons";
const Footer = () => {
  return (
    <div className="bg-[url(./assets/images/footbg.webp)] bg-center bg-cover bg-no-repeat lg:pt-[145px] md:pt-10 pt-5">
      <div className="max-w-[1140px] mx-auto max-lg:px-3">
        <div className="flex flex-wrap flex-row pb-[30px] max-lg:-mx-3">
          <div className="md:w-1/2 w-full max-lg:px-3 md:pt-9 max-md:mb-10">
            <p className="text-white font-recharge opacity-70 text-sm sm:text-base font-bold sm:leading-[25.6px] max-w-[356px]">
              Nullam viverra natoque amet et sed scelerisque viverra fringilla
              platea. Ullamcorper.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://www.facebook.com/" className="hover:scale-110 duration-300">
                <Facebook />
              </a>
              <a href="https://twitter.com/" className="hover:scale-110 duration-300">
                <Twitter />
              </a>
              <a href="https://telegram.org/" className="hover:scale-110 duration-300">
                <Telegram />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 w-full max-lg:px-3">
            <div className="flex flex-wrap flex-row">
              <div className="sm:w-1/2 w-full flex lg:justify-end max-sm:mb-[30px]">
                <ul>
                  <li className="font-recharge text-white sm:text-lg text-base  font-bold sm:leading-[21.6px] md:mb-5 mb-2.5">
                    Quick links
                  </li>
                  <li className="md:mb-5 mb-2.5">
                    <a
                      href=""
                      className="text-white font-recharge relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-white hover:opacity-100 opacity-70 text-sm sm:text-base font-bold sm:leading-[19.2px]"
                    >
                      Home
                    </a>
                  </li>
                  <li className="md:mb-5 mb-2.5">
                    <a
                      href=""
                      className="text-white font-recharge opacity-70 text-sm relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-white hover:opacity-100 sm:text-base font-bold sm:leading-[19.2px]"
                    >
                      Features
                    </a>
                  </li>
                  <li className="md:mb-5 mb-2.5">
                    <a
                      href=""
                      className="text-white font-recharge opacity-70 text-sm sm:text-base font-bold sm:leading-[19.2px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-white hover:opacity-100"
                    >
                      Marketplace
                    </a>
                  </li>
                  <li className="md:mb-5 mb-2.5">
                    <a
                      href=""
                      className="text-white font-recharge opacity-70 text-sm sm:text-base font-bold sm:leading-[19.2px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-white hover:opacity-100"
                    >
                      Tokens
                    </a>
                  </li>
                  <li className="md:mb-5 mb-2.5">
                    <a
                      href=""
                      className="text-white font-recharge opacity-70 text-sm sm:text-base font-bold sm:leading-[19.2px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-white hover:opacity-100"
                    >
                      NexChat
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-white font-recharge opacity-70 text-sm sm:text-base font-bold sm:leading-[19.2px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-white hover:opacity-100"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sm:w-1/2 w-full flex lg:justify-end">
                <ul>
                <li className="font-recharge text-white sm:text-lg text-base  font-bold sm:leading-[21.6px] md:mb-5 mb-2.5">
                Information's
                  </li>
                  <li className="md:mb-5 mb-2.5">
                    <a
                      href=""
                      className="text-white font-recharge opacity-70 text-sm sm:text-base font-bold sm:leading-[19.2px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-white hover:opacity-100"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="md:mb-5 mb-2.5">
                    <a
                      href=""
                      className="text-white font-recharge opacity-70 text-sm sm:text-base font-bold sm:leading-[19.2px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-white hover:opacity-100"
                    >
                      Phone
                    </a>
                  </li>
                  <li className="md:mb-5 mb-2.5">
                    <a
                      href=""
                      className="text-white font-recharge opacity-70 text-sm sm:text-base font-bold sm:leading-[19.2px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-white hover:opacity-100"
                    >
                      terms
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-white font-recharge opacity-70 text-sm sm:text-base font-bold sm:leading-[19.2px] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-3px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-white hover:opacity-100"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-[#FCFCFC] rounded-2xl opacity-40"></div>
        <p className="font-recharge text-white text-center opacity-70 text-sm sm:text-base font-bold sm:leading-[19.2px] py-5">@Copyright.nexai</p>
      </div>
    </div>
  );
};

export default Footer;

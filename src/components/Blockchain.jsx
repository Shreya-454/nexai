import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import w1 from "../assets/images/w1.webp";
const mycard = [
  {
    num: 1,
    text: "Security and Privacy",
    class: "!pb-[145px]",
    aos:"fade-down"
  },
  {
    num: 2,
    text: "Transparent and Reliable Data Management",
    class: "!translate-y-20",
    aos:"fade-up"
  },
  {
    num: 3,
    text: "Self-learning and Personalization",
    aos:"fade-down"
  },
  {
    num: 4,
    text: "Automated and Transparent Transactions",
    class: "!translate-y-20",
    aos:"fade-up"
  },
];
const Blockchain = () => {
  const mycards = mycard.map((mycard, e) => (
    <div
      key={e}
      className={`${mycard.class} max-w-[327px] min-h-[367px] group pt-[70px]  w-full bg-[url(./assets/images/Polygon.webp)] bg-full bg-center bg-no-repeat`}
      data-aos={mycard.aos}
    >
      <div className="flex justify-center">
        <div
          className="w-[58px] h-[58px] rounded-full bg-[#040404]  shadow-[inset_0px_4px_16px_0px_#02CDCF99] flex justify-center items-center
                "
        >
          <span className="text-white sm:text-[32px] text-2xl font-recharge font-bold text-center">
            {mycard.num}
          </span>
        </div>
      </div>
      <p className="text-white sm:text-xl text-base font-recharge font-bold group-hover:text-[#02CDCF] sm:leading-[32px] text-center max-w-[212px] mx-auto pt-[30px]">
        {mycard.text}
      </p>
    </div>
  ));
  var slider2 = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnFocus: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className=" blockchain overflow-x-clip lg:pb-[100px] md:py-10 py-5 lg:pt-20 relative ">
      <div className="max-w-[1140px] mx-auto relative">
        <h2
          className=" text-[#02CDCF] text-center md:text-[40px] sm:text-4xl text-3xl md:leading-[50.4px] font-recharge mb-4 font-bold"
          data-aos="fade-down"
        >
          Blockchain & AI technology
        </h2>
        <p
          className="text-white opacity-70 font-poppins sm:text-base text-sm font-normal leading-[25.6px] text-center max-w-[997px] mx-auto lg:mb-24 md:mb-[60px] mb-[30px]"
          data-aos="zoom-in"
        >
          Nexai is an advanced home assistant that will revolutionize the way we
          interact with our smart devices at home. Powered by sophisticated
          artificial intelligence, it leverages blockchain technology to offer a
          secure and efficient user experience.
        </p>
        <p
          className="text-white font-recharge sm:text-xl text-base leading-[32px] text-center max-w-[684px] mx-auto font-bold mb-[60px]"
          data-aos="zoom-in"
        >
          By building the software on blockchain, Nexai provides the following
          advantages
        </p>
        <Slider {...slider2} className="h-[478px]">
          {mycards}
        </Slider>
      </div>
      <div className="w-[302px] h-[262px] blur-[190px] absolute z-[1] rounded-full top-[12%] left-[-15%] bg-[#02CDCF] hidden lg:block"></div>
      <div className="w-[302px] h-[262px] blur-[170px] absolute z-[1] rounded-full top-[10%] right-[-15%] bg-[#02CDCF] hidden lg:block"></div>
      <img src={w1} alt="w" className="absolute right-0 top-[-3%]" />
    </div>
  );
};

export default Blockchain;

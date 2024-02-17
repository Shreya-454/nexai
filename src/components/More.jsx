import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import w2 from '../assets/images/w2.webp'
const card1 = [
  {
    text: "NexAi, Turn on light",
    class: " py-[72px]",
    aos:"fade-down"
  },
  {
    text: "NexAi, set alarm of 5:00 am",
    pro: "!max-w-[230px]",
    class: "py-[53px]",
    aos:"fade-up"
  },
  {
    text: "NexAi, measure this table",
    class: " py-[72px]",
    aos:"fade-down"
    
  },
  {
    text: "NexAi, Turn on music",
    class: "pt-[59px] pb-[85px]",
    aos:"fade-up"
  },
];
const card2 = [
  {
    text: "NexAi, measure this table",
    class: " py-[72px]",
    aos:"fade-down"
  },
  {
    text: "NexAi, Turn on music",
    class: "py-[72px]",
    aos:"fade-up"
  },
  {
    text: "NexAi, Turn on light",
    class: "pt-[59px] pb-[85px]",
    aos:"fade-down"
  },
  {
    text: "NexAi, is the front door locked?",
    class: "pt-[59px] pb-[85px]",
    pro: "!max-w-[278px]",
    aos:"fade-up"
  },
];
const card3 = [
  {
    text: "NexAi, Turn on TV",
    class: "pt-[59px] pb-[85px]",
    aos:"fade-down"
  },
  {
    text: "NexAi, Turn on music",
    class: "pt-[59px] pb-[85px]",
    aos:"fade-up"
  },
  {
    text: "NexAi, Turn of AC.",
    class: "pt-[59px] pb-[85px]",
    aos:"fade-down"
    
  },
  {
    text: "NexAi, is the front door locked?",
    class: "pt-[59px] pb-[85px]",
    pro: "!max-w-[278px]",
    aos:"fade-up"
  },
];
const More = () => {
  const cards1 = card1.map((card1, i) => (
    <div
      key={i}
      className={`${card1.class} max-w-[340px] w-full group h-[220px] rounded-2xl bg-[#FFFFFF05] shadow-[0px_4px_20px_0px_#02CDCF29] flex justify-center items-center`}
      data-aos={card1.aos}
    >
      <p
        className={`text-white ${card1.pro} group-hover:text-[#02CDCF] font-recharge sm:text-2xl text-lg sm:leading-[38.4px] text-center max-w-[254px] mx-auto py-auto`}
      >
        {card1.text}
      </p>
    </div>
  ));
  const cards2 = card2.map((card2, r) => (
    <div
      key={r}
      className={`${card2.class} max-w-[340px] w-full h-[220px] group rounded-2xl bg-[#FFFFFF05] shadow-[0px_4px_20px_0px_#02CDCF29] flex justify-center items-center`}
    data-aos={card2.aos}>
      <p
        className={`text-white ${card2.pro} font-recharge group-hover:text-[#02CDCF] sm:text-2xl text-lg sm:leading-[38.4px] text-center max-w-[254px] mx-auto py-auto`}
      >
        {card2.text}
      </p>
    </div>
  ));
  const cards3 = card3.map((card3, k) => (
    <div
      key={k} data-aos={card3.aos}
      className={`${card3.class} max-w-[340px] w-full h-[220px] group rounded-2xl bg-[#FFFFFF05] shadow-[0px_4px_20px_0px_#02CDCF29] flex justify-center items-center`}
    >
      <p
        className={`text-white ${card3.pro} font-recharge group-hover:text-[#02CDCF] sm:text-2xl text-lg sm:leading-[38.4px] text-center max-w-[254px] mx-auto py-auto`}
      >
        {card3.text}
      </p>
    </div>
  ));
  var settings = {
    dots: false,
    infine: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 4,
    pauseOnFocus: false,
    responsive:[
      {
        breakpoint:1280,
        settings:{
          slidesToShow: 3,
        }
      },
      {
        breakpoint:992,
        settings:{
          slidesToShow:2,
        }
      },
      {
        breakpoint:500,
        settings:{
          slidesToShow:1,
        }
      }
    ]
  };
  var slider1 = {
    dots: false,
    infine: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 4,
    pauseOnFocus: false,
    slidesToScroll: -1,
    responsive:[
      {
        breakpoint:1280,
        settings:{
          slidesToShow: 3,
        }
      },
      {
        breakpoint:992,
        settings:{
          slidesToShow:2,
        }
      },
      {
        breakpoint:500,
        settings:{
          slidesToShow:1,
        }
      }
    ]
  };
  var slider3 = {
    dots: false,
    infine: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 4,
    pauseOnFocus: false,
    responsive:[
      {
        breakpoint:1280,
        settings:{
          slidesToShow: 3,
        }
      },
      {
        breakpoint:992,
        settings:{
          slidesToShow:2,
        }
      },
      {
        breakpoint:500,
        settings:{
          slidesToShow:1,
        }
      }
    ]
    
  };
  return (
    <div className=" overflow-x-clip relative lg:pb-20 lg:pt-[100px] md:py-10 py-5" id="more">
      <div className="max-w-[1140px] mx-auto px-3">
        <h2 className="md:text-[40px] sm:text-4xl text-3xl font-recharge text-[#02CDCF] text-center md:leading-[50.4px] font-bold mb-4" data-aos="zoom-in-down">
          NexAi does all this. And more.
        </h2>
        <p className="text-white opacity-70 font-poppins font-normal sm:text-base text-sm sm:leading-[25.6px] text-center max-w-[912px] mx-auto lg:mb-[90px] md:mb-[60px] mb-[30px]" data-aos="fade-left">
          Nexai is an advanced home assistant that will revolutionize the way we
          interact with our smart devices at home. Powered by sophisticated
          artificial intelligence, it leverages blockchain technology to offer a
          secure and efficient user experience.
        </p>
      </div>
      <Slider className="mb-10" {...settings}>
        {cards1}
      </Slider>
      <Slider className="mb-10" {...slider1}>
        {cards2}
      </Slider>
      <Slider {...slider3}>
        {cards3}
      </Slider>
      <img src={w2} alt="w2" className="absolute left-0 top-[-8%]" />
      <div className="w-[233px] h-[233px] bg-[#02CDCF] blur-[150px] rounded-full absolute right-[-5%] top-[-4%] hidden lg:block"></div>
    </div>
  );
};

export default More;

import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "../components/Navbar";
import DownArrowHeadIcon from "../components/DownArrowHeadIcon";

import bg from "../assets/bg2.png";
import treasure from "../assets/treasure.png";
import richardHeroImage from "../assets/richard copy.png";
import cardLayout from "../assets/card-layout.png";
import vitalip from "../assets/heroes/vitalip.png";
import richard from "../assets/heroes/richard.png";
import gz from "../assets/heroes/gz.png";
import trunk from "../assets/heroes/trunk.png";
import jesus from "../assets/heroes/jesus.png";
import elom from "../assets/heroes/elom.png";
import satoshi from "../assets/heroes/satoshi.png";
import crystalBg from "../assets/hero-crystal-bg.png";
import bottomCrystal from "../assets/hero-bottom-crystal.png";
import Footer from "../components/Footer";
import "../styles/Home.css";

const heroData = [
  {
    image: vitalip,
    name: "vitalip",
  },
  {
    image: richard,
    name: "richard",
  },
  {
    image: gz,
    name: "gz",
  },
  {
    image: trunk,
    name: "trunk",
  },
  {
    image: jesus,
    name: "jesus",
  },
  {
    image: elom,
    name: "elom",
  },
  {
    image: satoshi,
    name: "satoshi",
  },
];

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    className: "center",
    centerMode: true,
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white bg-[#41305f] flex flex-col justify-between overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Top left leaklight */}
      {/* <div className="absolute -top-[140px] -left-[80px] size-[550px] bg-[#9F129A] rounded-full blur-[140px]"></div> */}

      {/* Middle right leaklight */}
      {/* <div className="absolute top-1/2 -translate-y-1/2 -right-[80px] size-[550px] bg-[#9F129A] rounded-full blur-[140px]"></div> */}

      {/* Bottom crystal */}
      {/* <div className="absolute -bottom-24 -left-[40px]">
        <img src={bottomCrystal} alt="Crystal" className="size-fit" />
      </div> */}

      {/* Hero section */}
      <section className="relative container mx-auto px-[36px] mt-[50px] z-[2]">
        <div className="grid grid-cols-12 items-end sm:items-center">
          <div className="col-span-7 lg:col-span-6">
            <div className="hidden sm:block">
              <h3 className="font-montserrat-alternates text-[16px] sm:text-[22px] md:text-[28px] lg:text-[34px] xl:text-[37px] 2xl:text-[40px]">
                Pulse Your Way to Victory!
              </h3>
              <h1 className="font-vermin-vibes-v text-[29px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px]">
                Pulse
                <span className="text-[#F241E5] font-vermin-vibes-v">r</span>oes
              </h1>
              <div className="w-[12ch] h-1 bg-[#D9D9D9] text-[29px] mt-3 sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px]"></div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-[1em] text-[13px] mt-[1.5em] sm:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[29px] 2xl:text-[32px]">
              <div className="flex flex-col-reverse sm:flex-col">
                <div className="relative">
                  <button
                    className="relative flex items-center gap-x-[1.3125em] bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v ps-[0.8em] pe-[0.3em] py-[0.2em] sm:px-[0.8em] 2xl:px-[1.15625em] transition-all duration-500 hover:bg-right hover:shadow-[0_0_5px_0_#B014A5] hover:[text-shadow:_0_0_3px_white] z-[1]"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    BUY CHEST{" "}
                    <div
                      className={`${
                        isOpen ? "-rotate-180" : ""
                      } transition-transform duration-200 ease-in-out`}
                    >
                      <DownArrowHeadIcon />
                    </div>
                  </button>
                  <div
                    className={`${
                      !isOpen
                        ? "h-0"
                        : "h-[154px] border sm:h-[166px] md:h-[178px] lg:h-[190px] xl:h-[199px] 2xl:h-[208px]"
                    } absolute top-[36px] sm:top-[46px] md:top-[56px] lg:top-[66px] xl:top-[76px] 2xl:top-[80px] left-0 right-0 w-full font-vermin-vibes-v text-[12px] bg-[#D9D9D94D] 2xl:px-5 backdrop-blur-[10px] overflow-hidden transition-all duration-500 sm:text-[13px] md:text-[16px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]`}
                  >
                    <button className="w-full flex items-center justify-center gap-x-[1.3125em] py-3 border-b border-b-white/50 transition-colors duration-100 hover:text-white/80">
                      BUY CHEST
                      <span className="font-vermin-vibes-v">01</span>
                    </button>
                    <button className="w-full flex items-center justify-center gap-x-[1.3125em] py-3 border-b border-b-white/50 transition-colors duration-100 hover:text-white/80">
                      BUY CHEST
                      <span className="font-vermin-vibes-v">05</span>
                    </button>
                    <button className="w-full flex items-center justify-center gap-x-[1.3125em] py-3 transition-colors duration-100 hover:text-white/80">
                      BUY CHEST
                      <span className="font-vermin-vibes-v">10</span>
                    </button>
                  </div>
                </div>
                <h2 className="font-saira-condensed font-semibold text-[42px] sm:text-[60px] md:text-[75px] lg:text-[90px] xl:text-[100px] 2xl:text-[105px]">
                  23:37:23
                </h2>
              </div>
              <div className="w-[113px] sm:w-[132px] md:w-[151px] lg:w-[170px] xl:w-[179px] 2xl:w-[188px]">
                <img src={treasure} alt="Pulsehero chest" />
              </div>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-6">
            <div className="relative z-[1] flex items-center justify-center">
              <img src={richardHeroImage} alt="Richard" className="" />
              <div className="absolute left-0 right-0 mx-auto bottom-[3%] w-14 sm:w-18 md:w-24 lg:w-28 xl:w-30 2xl:w-32 h-[1000px] bg-gradient-to-t from-[#460844] to-[#AC14A6] -z-[1]"></div>
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <h3 className="font-montserrat-alternates text-[16px] sm:text-[22px] md:text-[28px] lg:text-[34px] xl:text-[37px] 2xl:text-[40px]">
            Pulse Your Way to Victory!
          </h3>
          <h1 className="font-vermin-vibes-v text-[29px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px]">
            Pulse
            <span className="text-[#F241E5] font-vermin-vibes-v">r</span>oes
          </h1>
          <div className="w-[12ch] h-1 bg-[#D9D9D9] text-[29px] mt-3 sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px]"></div>
        </div>
      </section>

      {/* Card section */}
      <section className="relative mt-10">
        <div className="absolute top-0 left-0 right-0 w-fit mx-auto -translate-y-1/4">
          <img src={crystalBg} alt="Crystal" className="size-fit" />
        </div>

        {/* <div className="relative container mx-auto pb-[100px] z-[1] flex justify-around">
          {heroData.map(({ image, name }) => (
            <article className="relative w-[176px] h-[232px] flex items-end justify-end transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <img src={cardLayout} alt="Card layout" className="absolute" />
              <div
                className="absolute inset-0 w-[90%] h-[98%] m-auto bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <p className="absolute bottom-0 left-0 right-0 w-fit mx-auto translate-y-full font-vermin-vibes-v text-[19px] z-[1]">
                {name}
              </p>
            </article>
          ))}
        </div> */}

        <div className="relative container mx-auto pb-[100px] z-[1]">
          <Slider {...settings}>
            {heroData.map(({ image, name }) => (
              <article className="relative w-fit max-w-fit mx-auto my-10 flex items-end justify-end transition-transform duration-300 hover:-translate-y-1">
                <img
                  src={cardLayout}
                  alt="Card layout"
                  className="w-[122px] h-[170px] sm:w-[136px] sm:h-[188px] md:w-[150px] md:h-[206px] lg:w-[162px] lg:h-[220px] xl:w-[170px] xl:h-[226px] 2xl:w-[176px] 2xl:h-[232px]"
                />
                <div
                  className="absolute inset-0 w-[90%] h-[98%] m-auto bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <p className="absolute bottom-0 left-0 right-0 w-fit mx-auto translate-y-full font-vermin-vibes-v text-[19px] z-[1]">
                  {name}
                </p>
              </article>
            ))}
          </Slider>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

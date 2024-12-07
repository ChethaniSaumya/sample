import React, { useState } from "react";

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

  return (
    <div
      className="relative bg-cover bg-center text-white bg-white overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Top left leaklight */}
      <div className="absolute -top-[140px] -left-[80px] size-[550px] bg-[#9F129A] rounded-full blur-[140px]"></div>

      {/* Middle right leaklight */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-[80px] size-[550px] bg-[#9F129A] rounded-full blur-[140px]"></div>

      {/* Bottom crystal */}
      <div className="absolute -bottom-24 -left-[40px]">
        <img src={bottomCrystal} alt="Crystal" className="size-fit" />
      </div>

      {/* Hero section */}
      <section className="relative container mx-auto mt-[50px] z-[2]">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-6">
            <div>
              <h3 className="text-[40px] font-montserrat-alternates">
                Pulse Your Way to Victory!
              </h3>
              <h1 className="text-[80px] font-vermin-vibes-v">
                Pulse
                <span className="text-[#F241E5] font-vermin-vibes-v">r</span>oes
              </h1>
              <div className="w-[12ch] h-1 bg-[#D9D9D9] text-[80px] mt-3"></div>
            </div>
            <div className="flex items-center gap-x-[30px] text-[32px] mt-[1.5em]">
              <div>
                {/* <div className="h-[64px]  relative overflow-hidden bg-white/20 h-[288px]"> */}
                <div className="relative">
                  <button
                    className="relative flex items-center gap-x-[1.3125em] bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v px-[1.15625em] transition-all duration-500 hover:bg-right hover:shadow-[0_0_5px_0_#B014A5] hover:[text-shadow:_0_0_3px_white] z-[1]"
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
                    {/* {!isOpen ? <DownArrowHeadIcon c /> : <UpArrowHeadIcon />} */}
                  </button>
                  <div
                    className={`${
                      !isOpen ? "h-0" : "h-[208px] border"
                    } absolute top-16 left-0 right-0 w-full font-vermin-vibes-v text-[24px] bg-[#D9D9D94D] px-5 mt-3 backdrop-blur-[10px] overflow-hidden transition-all duration-500`}
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
                <h2 className="font-saira-condensed font-semibold text-[105px]">
                  23:37:23
                </h2>
              </div>
              <div className="w-[188px]">
                <img src={treasure} alt="Pulsehero chest" />
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="relative z-[1]">
              <img src={richardHeroImage} alt="Richard" />
              <div className="absolute left-1/2 bottom-[50px] -translate-x-full w-32 h-[1000px] bg-gradient-to-t from-[#460844] to-[#AC14A6] -z-[1]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero terrain */}
      {/* <div className="relative w-full -mt-36 z-[1]">
        <img src={terrain} alt="terrain" className="w-full" />
        <div className="absolute left-0 bottom-0 w-full h-52 bg-gradient-to-t from-black to-transparent"></div>
      </div> */}

      {/* Card section */}
      <section className="relative">
        <div className="absolute top-0 left-0 right-0 w-fit mx-auto -translate-y-1/4">
          <img src={crystalBg} alt="Crystal" className="size-fit" />
        </div>

        {/* <div className="absolute left-0 top-0 w-full h-52 bg-gradient-to-b from-black to-transparent"></div> */}
        <div className="relative container mx-auto pb-[100px] z-[1] flex justify-around">
          {/* <article
            className="w-fit flex items-center justify-center"
            style={{
              clipPath:
                "polygon(7% 0%, 0% 4.5%, 0% 32%, 6% 38%, 6% 58%, 0% 63%, 0 94%, 8% 100%, 92% 100%, 100% 94.5%, 100% 82%, 95% 78%, 95% 67%, 100% 63%, 100% 0%)",
            }}
          >
            <div
              className="w-[176px] h-[232px] bg-black/40 m-0.5"
              style={{
                clipPath:
                  "polygon(7% 0%, 0% 4.5%, 0% 32%, 6% 38%, 6% 58%, 0% 63%, 0 94%, 8% 100%, 92% 100%, 100% 94.5%, 100% 82%, 95% 78%, 95% 67%, 100% 63%, 100% 0%)",
              }}
            ></div>
            </article> */}
          {heroData.map(({ image, name }) => (
            <article className="relative w-[176px] h-[232px] flex items-end justify-end transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <img src={cardLayout} alt="Card layout" className="absolute" />
              <div
                className="absolute inset-0 w-[90%] h-[98%] m-auto bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                {/* <img src={image} alt="hero" /> */}
              </div>
              <p className="absolute bottom-0 left-0 right-0 w-fit mx-auto translate-y-full font-vermin-vibes-v text-[19px] z-[1]">
                {name}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

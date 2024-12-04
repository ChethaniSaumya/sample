import React, { useState } from "react";

import Navbar from "../components/Navbar";
import DownArrowHeadIcon from "../components/DownArrowHeadIcon";
import UpArrowHeadIcon from "../components/UpArrowHeadIcon";

import bg from "../assets/bg2.png";
import topCrystal from "../assets/hero-top-crystal.png";
import treasure from "../assets/treasure.png";
import richard from "../assets/richard copy.png";
import terrain from "../assets/hero-terrain.png";
import cardLayout from "../assets/card-layout.png";
import biden from "../assets/biden-without-bg.png";
import cz from "../assets/cz-without-bg.png";
import elom from "../assets/elom-without-bg.png";
import crystalBg from "../assets/hero-crystal-bg.png";
import bottomCrystal from "../assets/hero-bottom-crystal.png";
import logo from "../assets/logo.png";
import "../styles/Home.css";

const heroData = [
  {
    image: biden,
    name: "biden",
  },
  {
    image: cz,
    name: "cz",
  },
  {
    image: elom,
    name: "elom",
  },
  {
    image: biden,
    name: "biden",
  },
  {
    image: cz,
    name: "cz",
  },
  {
    image: elom,
    name: "elom",
  },
];

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative bg-cover bg-center text-white bg-white overflow-x-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Top left leaklight */}
      <div className="absolute -top-[140px] -left-[80px] size-[550px] bg-[#9F129A] rounded-full blur-[140px]"></div>

      {/* Middle right leaklight */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-[80px] size-[550px] bg-[#9F129A] rounded-full blur-[140px]"></div>

      {/* Top crystal */}
      <div className="absolute -top-[60px] -right-[70px]">
        <img src={topCrystal} alt="Crystal" />
      </div>

      {/* Bottom crystal */}
      <div className="absolute bottom-[40px] -left-[100px]">
        <img src={bottomCrystal} alt="Crystal" />
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
                    className="relative flex items-center gap-x-[1.3125em] bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v px-[1.15625em] transition-all duration-500 hover:bg-right hover:shadow-[0_0_5px_0_#B014A5] z-[1]"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    BUY CHEST{" "}
                    {!isOpen ? <DownArrowHeadIcon /> : <UpArrowHeadIcon />}
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
              <img src={richard} alt="Richard" />
              <div className="absolute left-1/2 bottom-[50px] -translate-x-full w-32 h-[1000px] bg-gradient-to-t from-[#460844] to-[#AC14A6] -z-[1]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero terrain */}
      <div className="relative w-full -mt-36 z-[1]">
        <img src={terrain} alt="terrain" className="w-full" />
        <div className="absolute left-0 bottom-0 w-full h-52 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Card section */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${crystalBg})` }}
      >
        <div className="absolute left-0 top-0 w-full h-52 bg-gradient-to-b from-black to-transparent"></div>
        <div className="relative pt-[260px] pb-[40px] container mx-auto z-[1] flex justify-between">
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
              <div className="absolute right-[15px] bottom-0 w-[190px] flex justify-center">
                <img src={image} alt="hero" />
              </div>
              <p className="relative font-vermin-vibes-v text-[19px] mb-1 me-6 z-[1]">
                {name}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="h-[160px] bg-black/10 backdrop-blur-md">
        <div className="container h-full mx-auto flex items-center justify-center gap-x-[60px]">
          <div className="w-[337px] h-px bg-white/50"></div>
          <a
            href="/"
            className="flex items-center gap-3 hover:text-white hover:scale-105 transition-transform duration-150 will-change-transform"
          >
            <div className="size-[52px] rounded-full bg-white">
              <img src={logo} alt="Pulseheroes" className="rounded-full" />
            </div>
            <h2 className="text-[25px] font-bold">PULSEHEROES</h2>
          </a>
          <div className="w-[337px] h-px bg-white/50"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;

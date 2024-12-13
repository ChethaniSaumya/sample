import React, { useState } from "react";

import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <section className="relative z-50">
      <div className="navbar-clip bg-[#41305F6B] backdrop-blur-md">
        <nav className="container mx-auto px-[12px] flex h-[72px] justify-between sm:h-[62px] md:h-[72px] lg:h-[88px] xl:h-[102px] 2xl:h-[115px]">
          <a
            href="/"
            className="flex items-center gap-[0.5em] hover:text-white hover:scale-105 transition-transform duration-150 will-change-transform text-[12px] sm:text-[15px] md:text-[18px] lg:text-[21px] xl:text-[23px] 2xl:text-[25px]"
          >
            <div className="size-[2em] rounded-full bg-white">
              <img src={logo} alt="Pulseheroes" className="rounded-full" />
            </div>
            <h2 className="font-bold">PULSEHEROES</h2>
          </a>
          <div className="flex text-[12px] xl:text-[14px] 2xl:text-[16px] xl:gap-[20px] 2xl:gap-[40px] -translate-y-[14px] lg:-translate-y-[18px] xl:-translate-y-[22px] 2xl:-translate-y-[23px] items-center">
            <ul className="desktop-links xl:gap-[10px] 2xl:gap-[15px]">
              <li className="nav-link-hover font-bold">
                <a href="/">CHESTS PRESALE</a>
              </li>
              <li className="nav-link-hover font-bold">
                <a href="buy-chests">BUY CHESTS</a>
              </li>
              <li className="nav-link-hover font-bold">
                <a href="/">MARKETPLACE</a>
              </li>
              <li className="nav-link-hover font-bold">
                <a href="battle">BATTLE</a>
              </li>
              <li className="nav-link-hover font-bold">
                <a href="sec-batttle">SEC BATTLE</a>
              </li>
              <li className="nav-link-hover font-bold">
                <a href="/">MORE</a>
              </li>
            </ul>
            <button className="connect-button bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v text-[10px] xl:text-[11px] 2xl:text-[13px] px-[3.5em] py-[0.8em] transition-all duration-500 hover:bg-right hover:shadow-[0_0_5px_0_#B014A5]">
              CONNECT
            </button>
            <button
              className={`${
                isToggled
                  ? "animate-toggle-button"
                  : "reverse-animate-toggle-button"
              } relative h-4 w-6 transition-opacity duration-300 lg:hidden`}
              onClick={() => setIsToggled((prev) => !prev)}
            >
              <div className="absolute -mt-[0.5px] h-[1px] w-full rounded drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] transition-all duration-700 ease-in-out before:absolute before:left-0 before:h-[1px] before:w-full before:-translate-y-[6px] before:rounded before:bg-white before:transition-transform before:duration-700 before:ease-in-out after:absolute after:left-0 after:h-[1px] after:w-full after:translate-y-[6px] after:rounded after:bg-white after:transition-transform after:duration-700 after:ease-in-out"></div>
            </button>
          </div>
        </nav>
      </div>
      <div className="absolute top-[60%] right-0 w-full">
        <div className="container w-full mx-auto flex justify-end">
          <nav
            className={` ${
              isToggled ? "h-[409px]" : "h-0"
            } px-3 bg-white/50 backdrop-blur-md overflow-hidden transition-all ease-in-out duration-500 z-[1] lg:hidden`}
          >
            <ul className="flex flex-col text-center">
              <li className="font-bold py-3 border-b">
                <a href="/">CHESTS PRESALE</a>
              </li>
              <li className="font-bold py-3 border-b">
                <a href="buy-chests">BUY CHESTS</a>
              </li>
              <li className="font-bold py-3 border-b">
                <a href="/">MARKETPLACE</a>
              </li>
              <li className="font-bold py-3 border-b">
                <a href="battle">BATTLE</a>
              </li>
              <li className="font-bold py-3 border-b">
                <a href="sec-batttle">SEC BATTLE</a>
              </li>
              <li className="font-bold py-3 border-b">
                <a href="/">MORE</a>
              </li>
            </ul>
            <button className="bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v text-[13px] my-[1em] px-[3.5em] py-[0.8em] transition-all duration-500 hover:bg-right hover:shadow-[0_0_5px_0_#B014A5]">
              CONNECT
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

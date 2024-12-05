import React from "react";

import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <section
      className="relative bg-[#41305F6B] py-6 backdrop-blur-md z-50"
      style={{
        clipPath:
          "polygon(0% 0%, 100% 0%, 100% 60%, 34% 60%, 32% 100%, 0% 100%)",
      }}
    >
      <nav className="container mx-auto flex h-[64px] justify-between">
        <a
          href="/"
          className="flex items-center gap-3 hover:text-white hover:scale-105 transition-transform duration-150 will-change-transform"
        >
          <div className="size-[52px] rounded-full bg-white">
            <img src={logo} alt="Pulseheroes" className="rounded-full" />
          </div>
          <h2 className="text-[25px] font-bold">PULSEHEROES</h2>
        </a>
        <div className="flex -translate-y-[23px] items-center gap-x-[60px]">
          <ul className="flex items-center gap-x-[15px] translate-y-0.5">
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
          <button className="bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v text-[13px] px-[3.5em] py-[0.8em] transition-all duration-500 hover:bg-right hover:shadow-[0_0_5px_0_#B014A5]">
            CONNECT
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

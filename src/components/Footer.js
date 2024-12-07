import React from "react";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <section className="h-[160px] bg-black/10 backdrop-blur-md z-50">
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
  );
};

export default Footer;

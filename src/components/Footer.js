import React from "react";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <section className="h-[85px] sm:h-[100px] md:h-[115px] lg:h-[130px] xl:h-[145px] 2xl:h-[160px] bg-black/10 backdrop-blur-md z-50">
      <div className="container h-full mx-auto flex items-center justify-between">
        <div className="w-[100px] sm:w-[145px] md:w-[190px] lg:w-[235px] xl:w-[290px] 2xl:w-[337px] h-px bg-white/50"></div>
        <a
          href="/"
          className="flex items-center gap-[0.5em] hover:text-white hover:scale-105 transition-transform duration-150 will-change-transform text-[12px] sm:text-[15px] md:text-[18px] lg:text-[21px] xl:text-[23px] 2xl:text-[25px]"
        >
          <div className="size-[2em] rounded-full bg-white">
            <img src={logo} alt="Pulseheroes" className="rounded-full" />
          </div>
          <h2 className="font-bold">PULSEHEROES</h2>
        </a>
        <div className="w-[100px] sm:w-[145px] md:w-[190px] lg:w-[235px] xl:w-[290px] 2xl:w-[337px] h-px bg-white/50"></div>
      </div>
    </section>
  );
};

export default Footer;

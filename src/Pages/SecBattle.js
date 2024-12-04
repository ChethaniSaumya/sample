import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HealthBar from "../components/HealthBar";

import bg from "../assets/bg1.png";
import battleStage from "../assets/battle-stage.png";
import richard from "../assets/RICHARD-removebg.png";
import letterV from "../assets/versus-letter-v.png";
import letterS from "../assets/versus-letter-s.png";
import gary from "../assets/GARY-removebg.png";
import middleCrystal from "../assets/sec-battle-middle-crystal.png";
import bottomCrystal from "../assets/sec-battle-bottom-crystal.png";
import "../styles/SecBattle.css";

const SecBattle = () => {
  const [isVisble, setIsVisble] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisble(true);
      setTimeout(() => {
        setIsVisble(false);
      }, 2500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-screen flex flex-col bg-cover bg-center text-white bg-white overflow-x-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Bottom crystal */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-[90px]">
        <img src={middleCrystal} alt="Crystal" />
      </div>

      {/* Bottom crystal */}
      <div className="absolute bottom-[20px] -left-[130px]">
        <img src={bottomCrystal} alt="Crystal" />
      </div>

      <div
        className="flex-grow flex items-center justify-center bg-cover bg-center -mt-[60px]"
        style={{ backgroundImage: `url(${battleStage})` }}
      >
        <div className="relative container w-full grid grid-cols-12 z-[1]">
          {/* Player */}
          <div className="col-span-4">
            <HealthBar type="player" label="player" healthPercentage={66} />
            <div
              className="h-96 bg-contain bg-no-repeat mt-12"
              style={{ backgroundImage: `url(${richard})` }}
            ></div>
          </div>

          {/* VS */}
          <div className="relative col-span-4 flex flex-col items-center justify-center gap-y-14">
            <div className="relative flex z-[2] vs-bounce-animation">
              {isVisble && (
                <div className="absolute top-0 z-[1]">
                  <div className="absolute inset-0 z-10"></div>
                  <iframe
                    src="https://giphy.com/embed/Vd8jRsGoIOZPXoREMe"
                    className="-translate-y-2 pointer-events-none"
                    width={250}
                    height={180}
                    allowFullScreen
                    title="Lightning Bolt GIF"
                  ></iframe>
                </div>
              )}
              <div className="letter-v-slide-in">
                <img src={letterV} alt="Letter V" className="object-contain" />
              </div>
              <div className="letter-s-slide-in z-[2]">
                <img src={letterS} alt="Letter S" className="object-contain" />
              </div>
            </div>
            <button className="bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v text-[20px] px-[3.8em] py-[0.9em] transition-all duration-500 rounded-full hover:bg-right hover:shadow-[0_0_10px_0_#B014A5] hover:[text-shadow:_0_0_3px_white]">
              COMBAT
            </button>
          </div>

          {/* Enemy */}
          <div className="col-span-4">
            <HealthBar type="enemy" label="enemy" healthPercentage={96} />
            <div
              className="h-96 bg-contain bg-no-repeat mt-12 -scale-x-100"
              style={{ backgroundImage: `url(${gary})` }}
            ></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SecBattle;

import React, { useEffect, useState } from "react";

import Lottie from "react-lottie";

import Navbar from "../components/Navbar";

import bg from "../assets/bg1.png";
import battleStage from "../assets/battle-stage.png";
import playerHP from "../assets/player-health-bar.png";
import enemyHP from "../assets/enemy-health-bar.png";
import richard from "../assets/RICHARD-removebg.png";
import letterV from "../assets/versus-letter-v.png";
import lightning from "../assets/animations/lightning.json";
import letterS from "../assets/versus-letter-s.png";
import gary from "../assets/GARY-removebg.png";
import logo from "../assets/logo.png";
import "../styles/SecBattle.css";
import garyNoBg from "../assets/Gary-remove.png";

const SecBattle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [_combat, setCombat] = useState(0);

  const close = () => {
		window.location.reload(true);
	}

	const combat = () => {
		setCombat(1);
	}

  const defaultOptions = {
    loop: false,
    autoplay: isVisible,
    animationData: lightning,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative min-h-screen flex flex-col bg-cover text-white bg-white overflow-x-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]"></div>

      <div
        className="relative flex-grow flex items-center justify-center bg-cover bg-center -mt-[60px]"
        style={{ backgroundImage: `url(${battleStage})` }}
      >
        <div className="container w-full grid grid-cols-12">
          {/* Player */}
          <div className="relative col-span-4 z-[1]">
            <div className="flex items-center justify-start">
              <img src={playerHP} alt="Player HP" className="object-contain" />
            </div>
            <div
              className="h-96 bg-contain bg-no-repeat mt-12"
              style={{ backgroundImage: `url(${richard})` }}
            ></div>
          </div>

          {_combat > 0 ?
            <div class="popup-containerMain3">
              <div class="popup-containerMain">
                <div class="popup">
                  <img src={garyNoBg} alt="Man" class="character" />
                  <span class="close-button" onClick={close}>&times;</span>
                  <p class="popup-text">SEC WON!</p>
                </div>
              </div>
            </div> : null}


          {/* VS */}
          <div className="relative col-span-4 flex flex-col items-center justify-center gap-y-14 tests z-[1]">
            <div className="relative flex z-[2] vs-bounce-animation">
              <div
                className={`absolute inset-0 z-[1] ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <Lottie options={defaultOptions} />
              </div>
              <div className="letter-v-slide-in">
                <img src={letterV} alt="Letter V" className="object-contain" />
              </div>
              <div className="letter-s-slide-in z-[2]">
                <img src={letterS} alt="Letter S" className="object-contain" />
              </div>
            </div>
            <button onClick={combat} className="bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v text-[20px] px-[3.8em] py-[0.9em] transition-all duration-500 rounded-full hover:bg-right hover:shadow-[0_0_10px_0_#B014A5] hover:[text-shadow:_0_0_3px_white]">
              COMBAT
            </button>
          </div>

          {/* Enemy */}
          <div className="relative col-span-4 z-[1]">
            <div className="flex items-center justify-end">
              <img src={enemyHP} alt="Sec HP" className="object-contain" />
            </div>
            <div
              className="h-96 bg-contain bg-no-repeat mt-12 -scale-x-100"
              style={{ backgroundImage: `url(${gary})` }}
            ></div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute left-0 bottom-0 w-full h-52 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <section className="relative h-[160px] bg-black/10 backdrop-blur-md z-50">
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black to-transparent"></div>

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

export default SecBattle;

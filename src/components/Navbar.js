import React, { useState, useRef, useEffect } from "react";

import logo from "../assets/logo.png";
import music from "../assets/music.png";
import discord from "../assets/discord.png";
import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.png";
import notification from "../assets/notification.png";
import "../styles/Navbar.css";
import { Web3Button, Web3Modal, useWeb3Modal } from "@web3modal/react";
import {
  mainnet,
  useAccount,
  useContractRead,
  useContractReads,
  useContractWrite,
  useNetwork,
  usePublicClient,
  useSwitchNetwork,
  useWaitForTransaction,
  useDisconnect,
} from "wagmi";
import {
  createPublicClient,
  formatEther,
  http,
  parseEther,
  webSocket,
} from "viem";
import Countdown from "react-countdown";
import { pulsechainV4 } from "wagmi/chains";
import DownArrowHeadIcon from "./DownArrowHeadIcon";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const [isMobileDropdownShown, setIsMobileDropdownShown] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState({});

  const spanRef = useRef();
  const dropdownRef = useRef();

  const { open } = useWeb3Modal();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const [_connected, setConnected] = useState(false);
  const { disconnect } = useDisconnect();

  useEffect(() => {
    const handleResize = () => {
      const { x, y, height } = spanRef.current.getBoundingClientRect();

      console.log(x, y, height);
      setDropdownStyle({
        position: "absolute",
        top: `${y + height}px`,
        left: `${x}px`,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        spanRef.current &&
        !spanRef.current.contains(event.target)
      ) {
        setIsDropdownShown(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const { address: walletAddress } = useAccount({
    async onConnect() {
      handleConnect();
    },
  });

  const transport = webSocket("wss://pulsechain-testnet-rpc.publicnode.com");

  const publicClient = createPublicClient({
    chain: pulsechainV4,
    transport,
  });

  async function handleConnect() {
    if (chain.id !== 943) {
      switchNetwork(943);
    }

    setConnected(true);
  }

  async function disconnectWallet() {
    setConnected(false);
    disconnect();
    //window.location.reload(true);
  }

  function shortenAddress(walletAddress) {
    try {
      return _connected
        ? walletAddress.slice(0, 3) + "..." + walletAddress.slice(-4)
        : "Connect";
    } catch (error) {
      console.log(error);
    }
  }

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
            <ul className="desktop-links xl:gap-[0px] 2xl:gap-[10px]">
              <li className="nav-link-hover font-bold">
                <Link to="/">BUY PRESALE</Link>
              </li>
              {/*<li className="nav-link-hover font-bold">
                <Link to="/buy-chests">BUY CHESTS</Link>
              </li>*/}
              <li className="nav-link-hover font-bold">
                 <Link to="/mynft">MY NFT</Link>
              </li>
              <li className="nav-link-hover font-bold">
                <Link to="/marketplace">MARKETPLACE</Link>
              </li>
              <li className="nav-link-hover font-bold">
                <Link to="/battle">BATTLE</Link>
              </li>
              <li className="nav-link-hover font-bold">
                <Link to="/sec-batttle">SEC BATTLE</Link>
              </li>
              <li className="nav-link-hover font-bold">
                <span
                  ref={spanRef}
                  onClick={() => setIsDropdownShown((prev) => !prev)}
                >
                  MORE
                </span>
              </li>
              <img className="music" src={music} alt="Music" />
               <div className="notification-container">
                <img src={notification} alt="notification" className="icon" />
                {/*count > 0 && <span className="badge">{count}</span>*/}
                {<span className="badge">1</span>}
              </div>
            </ul>

            {_connected ? (
              <button
                onClick={() => disconnectWallet()}
                className="connect-button bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v text-[10px] xl:text-[11px] 2xl:text-[13px] px-[3.5em] py-[0.8em] transition-all duration-500 hover:bg-right hover:shadow-[0_0_5px_0_#B014A5]"
              >
                {walletAddress === ""
                  ? "CONNECT"
                  : shortenAddress(walletAddress)}
              </button>
            ) : (
              <button
                onClick={() => {
                  open();
                }}
                className="connect-button bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v text-[10px] xl:text-[11px] 2xl:text-[13px] px-[3.5em] py-[0.8em] transition-all duration-500 hover:bg-right hover:shadow-[0_0_5px_0_#B014A5]"
              >
                CONNECT
              </button>
            )}
            <button
              className={`${isToggled
                ? "animate-toggle-button"
                : "reverse-animate-toggle-button"
                } relative h-4 w-6 transition-opacity duration-300 xl:hidden`}
              onClick={() => {
                setIsToggled((prev) => !prev);
                setIsMobileDropdownShown(false);
              }}
            >
              <div className="absolute -mt-[0.5px] h-[1px] w-full rounded drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] transition-all duration-700 ease-in-out before:absolute before:left-0 before:h-[1px] before:w-full before:-translate-y-[6px] before:rounded before:bg-white before:transition-transform before:duration-700 before:ease-in-out after:absolute after:left-0 after:h-[1px] after:w-full after:translate-y-[6px] after:rounded after:bg-white after:transition-transform after:duration-700 after:ease-in-out"></div>
            </button>
          </div>
        </nav>
      </div>
      <div className="absolute top-[60%] right-0 w-full">
        <div className="container w-full mx-auto flex justify-end">
          <nav
            className={` ${isToggled ? "h-[610px]" : "h-0"
              } px-3 bg-white/50 backdrop-blur-md transition-all overflow-hidden ease-in-out duration-500 z-[1] xl:hidden`}
          >
            <ul className="flex flex-col text-center">
              <li className="font-bold py-3 border-b">
                <Link to="/">BUY PRESALE</Link>
              </li>
              {/*<li className="font-bold py-3 border-b">
                <Link to="/buy-chests">BUY CHESTS</Link>
              </li>*/}
              <li className="font-bold py-3 border-b">
                <Link to="/mynft">MY NFT</Link>
              </li>
              <li className="font-bold py-3 border-b">
                <Link to="/marketplace">MARKETPLACE</Link>
              </li>
              <li className="font-bold py-3 border-b">
                <Link to="/battle">BATTLE</Link>
              </li>
              <li className="font-bold py-3 border-b">
                <Link to="/sec-batttle">SEC BATTLE</Link>
              </li>
              <li className="relative font-bold py-3 border-b">
                <span onClick={() => setIsMobileDropdownShown((prev) => !prev)}>
                  MORE
                </span>
                <ul
                  className={`mobile-nav-dropdown ${isMobileDropdownShown ? "" : "hide"
                    } absolute bottom-full left-0 right-0 mx-auto w-fit z-50 bg-black/80 text-white border pt-[0.5em] pb-[0.8em] uppercase backdrop-blur-sm text-[1.1em]`}
                >
                  <li className="px-[1.4em] py-[0.5em]">
                    <a
                      href="/"
                      className="hover:text-white/80"
                      onClick={() => setIsMobileDropdownShown(false)}
                    >
                      White paper
                    </a>
                  </li>
                  <hr className="w-[80%] mx-auto" />
                  <li className="px-[1.4em] py-[0.5em]">
                    <a
                      href="/"
                      className="hover:text-white/80"
                      onClick={() => setIsMobileDropdownShown(false)}
                    >
                      Team
                    </a>
                  </li>
                  <hr className="w-[80%] mx-auto" />
                  <li className="px-[1.4em] py-[0.5em]">
                    <a
                      href="/"
                      className="hover:text-white/80"
                      onClick={() => setIsMobileDropdownShown(false)}
                    >
                      Staking
                    </a>
                  </li>
                  <hr className="w-[80%] mx-auto" />
                  <li className="px-[1.4em] py-[0.5em]">
                    <div className="socialIcons">
                      <img src={twitter} />
                      <img src={discord} />
                      <img src={telegram} />
                    </div>
                  </li>
                  <hr className="w-[80%] mx-auto" />
                </ul>
              </li>

              <li className="font-bold py-3 border-b">
                <img className="music" src={music} alt="Music" />
              </li>

              <li className="font-bold py-3 border-b">
              <div className="notification-container">
                <img src={notification} alt="notification" className="icon" />
                {/*count > 0 && <span className="badge">{count}</span>*/}
                {<span className="badge">1</span>}
              </div>
              </li>

            </ul>
            {_connected ? (
              <button
                onClick={() => disconnectWallet()}
                className="bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v text-[13px] my-[1em] px-[3.5em] py-[0.8em] transition-all duration-500 hover:bg-right hover:shadow-[0_0_5px_0_#B014A5]"
              >
                {walletAddress === ""
                  ? "CONNECT"
                  : shortenAddress(walletAddress)}
              </button>
            ) : (
              <button
                onClick={() => {
                  open();
                }}
                className="bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v text-[13px] my-[1em] px-[3.5em] py-[0.8em] transition-all duration-500 hover:bg-right hover:shadow-[0_0_5px_0_#B014A5]"
              >
                CONNECT
              </button>
            )}
          </nav>
        </div>
      </div>

      <ul
        ref={dropdownRef}
        style={dropdownStyle}
        className={`nav-dropdown ${isDropdownShown ? "" : "hide"
          } w-fit z-50 bg-white/30 text-white border pt-[0.5em] pb-[0.8em] uppercase backdrop-blur-sm -translate-x-[18%] translate-y-[12%] text-[1.1em]`}
      >
        <li className="px-[1.4em] py-[0.5em]">
          <a
            href="/"
            className="hover:text-white/80"
            onClick={() => setIsDropdownShown(false)}
          >
            White paper
          </a>
        </li>
        <hr className="w-[80%] mx-auto" />
        <li className="px-[1.4em] py-[0.5em]">
          <a
            href="/"
            className="hover:text-white/80"
            onClick={() => setIsDropdownShown(false)}
          >
            Team
          </a>
        </li>
        <hr className="w-[80%] mx-auto" />
        <li className="px-[1.4em] py-[0.5em]">
          <a
            href="/"
            className="hover:text-white/80"
            onClick={() => setIsDropdownShown(false)}
          >
            Staking
          </a>
        </li>
        <hr className="w-[80%] mx-auto" />
        <li className="px-[1.4em] py-[0.5em]">
          <div className="socialIcons">
            <img src={twitter} />
            <img src={discord} />
            <img src={telegram} />
          </div>
        </li>
        <hr className="w-[80%] mx-auto" />
      </ul>
    </section>
  );
};

export default Navbar;

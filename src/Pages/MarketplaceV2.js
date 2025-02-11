import React, { useRef, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import vitalip from "../assets/heroes/vitalip.png";
import richard from "../assets/heroes/richard.png";
import gz from "../assets/heroes/gz.png";
import trunk from "../assets/heroes/trunk.png";
import jesus from "../assets/heroes/jesus.png";
import elom from "../assets/heroes/elom.png";
import satoshi from "../assets/heroes/satoshi.png";

import cardLayout from "../assets/card-layout.png";
import terrain from "../assets/marketplacev2/terrain.png";
import bg from "../assets/marketplaceBG.jpg";
import "../styles/MarketplaceV2.css";

const heroData = [
  {
    image: vitalip,
    name: "vitalip",
    rarity: 7,
    level: 10,
    heroClass: "A",
    lastFought: "2025-01-01T10:30:00",
    owner: "OX3EJFIOS22",
    floorPrice: "3 PLS",
    price: 24300,
  },
  {
    image: richard,
    name: "richard",
    rarity: 5,
    level: 8,
    heroClass: "B",
    lastFought: "2024-12-20T14:45:00",
    owner: "OX9DSFJWE33",
    floorPrice: "4 PLS",
    price: 28100,
  },
  {
    image: gz,
    name: "gz",
    rarity: 3,
    level: 4,
    heroClass: "C",
    lastFought: "2024-11-15T09:15:00",
    owner: "OX8DJKWIE29",
    floorPrice: "6 PLS",
    price: 17900,
  },
  {
    image: trunk,
    name: "trunk",
    rarity: 6,
    level: 7,
    heroClass: "A",
    lastFought: "2024-12-30T16:20:00",
    owner: "OX5KDJSWE45",
    floorPrice: "8 PLS",
    price: 12300,
  },
  {
    image: jesus,
    name: "jesus",
    rarity: 4,
    level: 6,
    heroClass: "B",
    lastFought: "2024-10-22T11:10:00",
    owner: "OX1JDHWLE19",
    floorPrice: "12 PLS",
    price: 8000,
  },
  {
    image: elom,
    name: "elom",
    rarity: 7,
    level: 9,
    heroClass: "S",
    lastFought: "2025-01-05T18:30:00",
    owner: "OX2KDJWLZ11",
    floorPrice: "5 PLS",
    price: 20780,
  },
  {
    image: satoshi,
    name: "satoshi",
    rarity: 2,
    level: 5,
    heroClass: "C",
    lastFought: "2024-09-14T07:50:00",
    owner: "OX4LDFJKW77",
    floorPrice: "9 PLS",
    price: 28920,
  },
];

const sliderOneSettings = {
  dots: false,
  arrows: false,
  slidesToShow: 7,
  slidesToScroll: 1,
  speed: 2000,
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
        slidesToShow: 3,
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

const sliderTwoSettings = {
  dots: false,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 2000,
  responsive: [
    {
      breakpoint: 1535,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 639,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const MarketplaceV2 = () => {
  const sliderOne = useRef(null);
  const sliderTwo = useRef(null);
  const [selectedRarity, setSelectedRarity] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative min-h-screen bg-cover bg-top"
      style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed' }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <Navbar />

      {/* Container */}
      <section className="relative container mx-auto px-[20px] z-[1]">
        <h1 className="font-american-captain text-[35px] text-center mt-[1em] sm:text-[38px] md:text-[41px] lg:text-[44px] xl:text-[46px] 2xl:text-[48px]">
          Marketplace
        </h1>
        {/* Container for rarity and level filter */}
        <div id="borderStyles" className="w-fit bg-white/30 mx-auto px-[3em] pt-[1em] pb-[1.6em] *:font-american-captain text-[15px] text-center backdrop-blur-md sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[26px]">
          <h6 className="mb-[0.3em] tracking-wider">Rarity</h6>
          <div className="flex items-center justify-center gap-[1em] *:font-american-captain">
            {Array(7)
              .fill(undefined)
              .map((_e, i) => {
                const rarityValue = i + 1;
                const isSelected = selectedRarity.includes(rarityValue);

                const toggleRarity = () => {
                  setSelectedRarity((prev) =>
                    isSelected
                      ? prev.filter((r) => r !== rarityValue)
                      : [...prev, rarityValue]
                  );
                };

                return (
                  <button
                    key={i}
                    className={`${isSelected
                      ? "bg-[#6514DB] text-white"
                      : "bg-white/30 text-[#6514DB]"
                      }  px-[0.5em] py-[0.2em] leading-none rounded-[0.2em] backdrop-blur-md`}
                    style={{ border: "1px solid #6514DB" }}
                    onClick={toggleRarity}
                  >
                    {rarityValue}
                  </button>
                );
              })}
          </div>
          <div>
            {/*<div className="floorPrice1">
              <div>Floor Price </div>
              <div className="fp">80 PLS</div>
            </div>*/}
            <div>
              <h6 id="levelTxt" className="mt-[1em] mb-[0.3em] tracking-wider font-vermin-vibes-v text-center z-[1]">Level range</h6>
              <div className="flex items-center justify-center gap-[0.5em]">
                <input
                  type="number"
                  className="w-[7ch] bg-black/20 px-[0.5em] py-[0.2em] rounded-[0.2em] backdrop-blur-md outline-none"
                  style={{ border: "1px solid #7E0081" }}
                />
                <p>-</p>
                <input
                  type="number"
                  className="w-[7ch] bg-black/20 px-[0.5em] py-[0.2em] rounded-[0.2em] backdrop-blur-md outline-none"
                  style={{ border: "1px solid #7E0081" }}
                />
              </div>
            </div>
            {/*<div className="floorPrice2">
             <div>Accept Offer</div>
             <button className="ao">60 PLS</button>
            </div>*/}
          </div>
          <div className="floorPrice1">
              <div>Floor Price </div>
              <div className="fp">80 PLS</div>
            </div>

        </div>

        {/* Slider 
        <div className="relative px-[30px] -mt-8 sm:-mt-9 md:-mt-10 lg:-mt-11 xl:-mt-13 2xl:-mt-14">
          <Slider ref={sliderOne} {...sliderOneSettings}>
            {heroData.map(({ image }) => (
              <div className="flex items-center justify-center">
                <article className="relative w-fit max-w-fit mx-auto my-1.5 flex items-end justify-end transition-transform duration-300 hover:-translate-y-1">
                  <img
                    src={cardLayout}
                    alt="Card layout"
                    className="w-[122px] h-[170px] sm:w-[136px] sm:h-[188px] md:w-[150px] md:h-[206px] lg:w-[162px] lg:h-[220px] xl:w-[170px] xl:h-[226px] 2xl:w-[176px] 2xl:h-[232px]"
                  />
                  <div
                    className="absolute inset-0 w-[90%] h-[98%] m-auto bg-contain bg-no-repeat bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                </article>
              </div>
            ))}
          </Slider>
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 text-[3em] hover:opacity-80"
            onClick={() => sliderOne?.current?.slickPrev()}
          >
            &#x276E;
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 text-[3em] hover:opacity-80"
            onClick={() => sliderOne?.current?.slickNext()}
          >
            &#x276F;
          </button>
        </div>
*/}
        {/* Reset and filter dropdown*/}
        <div className="flex flex-col items-center gap-[0.5em] mt-[0.4em] mb-[2em] text-[28px]">
          <button className="group w-fit mx-auto font-american-captain tracking-wider hover:text-white/90">
            Reset &#10226;
          </button>
          <div className="relative w-[16ch] z-[1]">
            <button
              className="relative flex items-center gap-x-[1.3125em] bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-american-captain tracking-wider mx-auto ps-[0.8em] pe-[0.3em] py-[0.2em] transition-all duration-500 hover:bg-right hover:shadow-[0_0_5px_0_#B014A5] hover:[text-shadow:_0_0_3px_white] z-[1]"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              FILTER{" "}
              <div
                className={`${isOpen ? "-rotate-180" : ""
                  } text-[0.8em] transition-transform duration-200 ease-in-out`}
              >
                &#8645;
              </div>
            </button>
            <div
              className={`absolute top-full left-0 right-0 bg-[#D9D9D94D] font-american-captain tracking-wider mt-[0.3em] text-[12px] 2xl:px-5 backdrop-blur-[10px] overflow-hidden transition-all duration-500 sm:text-[13px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[19px] ${!isOpen
                ? "max-h-0 border-0"
                : "max-h-[500px] border border-white/50"
                }`}
            >
              <button className="w-full flex items-center justify-center gap-x-[1.3125em] py-3 border-b border-b-white/50 transition-colors duration-100 hover:text-white/80">
                Lowest to highest price
              </button>
              <button className="w-full flex items-center justify-center gap-x-[1.3125em] py-3 border-b border-b-white/50 transition-colors duration-100 hover:text-white/80">
                highest to lowest price
              </button>
              <button className="w-full flex items-center justify-center gap-x-[1.3125em] py-3 border-b border-b-white/50 transition-colors duration-100 hover:text-white/80">
                Last sold
              </button>
              <button className="w-full flex items-center justify-center gap-x-[1.3125em] py-3 transition-colors duration-100 hover:text-white/80">
                Last added
              </button>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="relative text-[12px] my-[2em] px-[30px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15.5px] 2xl:text-[16px]">
          <Slider ref={sliderTwo} {...sliderTwoSettings}>
            {heroData.map(
              ({
                image,
                name,
                rarity,
                level,
                heroClass,
                lastFought,
                owner,
                floorPrice,
                price,
              }) => (
                <div className="flex items-center justify-center">
                  <article className="w-[17em] max-w-[17em] mx-auto text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15.5px] 2xl:text-[16px]">
                    <div
                      className="relative h-[14em] bg-contain bg-bottom bg-no-repeat z-[1] animate-hover"
                      style={{ backgroundImage: `url(${image})` }}
                    ></div>

                    <div
                      className="relative bg-gradient-to-br from-[#DF00824D] to-[#FFFFFF4D] -mt-[4.8em] pt-[5em] pb-[1em] rounded-[0.5em] backdrop-blur-md"
                      style={{ border: "1px solid #FFFFFF4D" }}
                    >
                      <div
                        className="absolute inset-0 h-[50%] bg-contain bg-center bg-no-repeat rounded-[0.5em] animate-terrain-hover"
                        style={{ backgroundImage: `url(${terrain})` }}
                      ></div>

                      <div className="w-[15em] mx-auto bg-white/30 px-[0.5em] py-[1em] rounded-[0.5em]">
                        <h3 className="relative font-vermin-vibes-v text-[1.8em] text-center z-[1]">
                          {name}
                        </h3>

                        <hr className="my-[1em]" />

                        <p className="uppercase font-bold">
                          Rarity:{" "}
                          <span className="text-[#6E0B35]">{rarity}</span>
                        </p>
                        <p className="uppercase font-bold">
                          TIME LEFT:{" "}
                          <span className="text-[#6E0B35]">27849H:21M:37S</span>
                        </p>
                        <p className="uppercase font-bold">
                          Owner: <span className="text-[#6E0B35]">{owner}</span>
                        </p>

                        <hr className="my-[1em]" />

                        <div className="priceSection">
                          <p className="font-vermin-vibes-v text-[1.8em] text-[#6E0B35] text-center">
                            {price}
                          </p>
                          <button className="acceptBtn">BUY</button>
                          <button className="acceptBtn">MAKE AN OFFER</button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-[2em]">
                      <button className="bg-white font-vermin-vibes-v text-[#6E0B35] px-[5em] py-[0.3em] rounded-full hover:shadow-[0_0_5px_0_white]">
                        Connect
                      </button>
                    </div>
                  </article>
                </div>
              )
            )}
          </Slider>
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 text-[3em] hover:opacity-80"
            onClick={() => sliderTwo?.current?.slickPrev()}
          >
            &#x276E;
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 text-[3em] hover:opacity-80"
            onClick={() => sliderTwo?.current?.slickNext()}
          >
            &#x276F;
          </button>
        </div>
      </section>
      <div className="absolute left-0 right-0 bottom-0 h-[10%] bg-gradient-to-t from-black to-transparent"></div>
      <Footer />
    </div>
  );
};

export default MarketplaceV2;

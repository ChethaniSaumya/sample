import React, { useEffect, useState, useRef } from 'react';
import "../styles/ChestOpening.css";

import cl from '../assets/chainlink.png';
import chest from '../assets/chest.png';
import chestAnim from '../assets/Comp 1-vp9-chrome.webm';
import logo from '../assets/logo.png';
import Navbar from "../components/Navbar";
import treasure from "../assets/Comp 1_00088.png";
import cz from "../assets/cz-without-bg.png";
import "../styles/Home.css";
import cardLayout from "../assets/card-layout.png";
import vitalip from "../assets/heroes2/vitalip.png";
import richard from "../assets/heroes2/richard.png";
import gz from "../assets/heroes2/gz.png";
import trunk from "../assets/heroes2/trunk.png";
import jesus from "../assets/heroes2/jesus.png";
import elom from "../assets/heroes2/elon.png";
import satoshi from "../assets/heroes2/satoshi.png";

import vitalip2 from "../assets/heroes/vitalip.png";
import richard2 from "../assets/heroes/richard.png";
import gz2 from "../assets/heroes/gz.png";
import trunk2 from "../assets/heroes/trunk.png";
import jesus2 from "../assets/heroes/jesus.png";
import elom2 from "../assets/heroes/elom.png";
import satoshi2 from "../assets/heroes/satoshi.png";

var Scroll = require('react-scroll');

var Link = Scroll.Link;
var Element = Scroll.Element;

const heroData = [
	{
		image: vitalip2,
		name: "vitalip",
	},
	{
		image: richard2,
		name: "richard",
	},
	{
		image: gz2,
		name: "gz",
	},
	{
		image: trunk2,
		name: "trunk",
	},
	{
		image: jesus2,
		name: "jesus",
	},
	{
		image: elom2,
		name: "elom",
	},
	{
		image: satoshi2,
		name: "satoshi",
	},
];

const ChestOpening = () => {
	const [_navbarOpen, setNavbarOpen] = useState(0);
	const [isDropdownVisible, setDropdownVisible] = useState(false);
	const [loading, setLoading] = useState(true);
	//const [isOpen, setIsOpen] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	const [_chestOpen, set_chestOpen] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [carouselRun, setCarouselRun] = useState(0);
	const [carouselRunMob, setCarouselRunMob] = useState(0);


	const [cardShow, setCardShow] = useState(0);
	const [spreadRun, setSpreadRun] = useState(0);

	const [showSecondDiv, setShowSecondDiv] = useState(0);
	const nftSectionRef = useRef(null); // Create a reference


	const chestOpen = async () => {
		set_chestOpen(1);

		await new Promise(resolve => setTimeout(resolve, 4500));
		carouseOpen();


		/*await new Promise(resolve => setTimeout(resolve, 6000));
		nftSectionRef.current.scrollIntoView({ behavior: 'smooth' });
*/
	};

	const chestOpenMob = async () => {
		set_chestOpen(1);

		await new Promise(resolve => setTimeout(resolve, 4500));
		carouseOpenMob();


		/*await new Promise(resolve => setTimeout(resolve, 6000));
		nftSectionRef.current.scrollIntoView({ behavior: 'smooth' });
*/
	};



	const carouseOpen = async () => {
		// Scroll to the nftSection
		setSpreadRun(1);
		set_chestOpen(0);

		await new Promise(resolve => setTimeout(resolve, 2300));
		setCarouselRun(1);
		setSpreadRun(0);

		await new Promise(resolve => setTimeout(resolve, 10000));

		setCardShow(1);
		await new Promise(resolve => setTimeout(resolve, 6000));
		setCarouselRun(0);
		await new Promise(resolve => setTimeout(resolve, 5000));
		setCardShow(0);

		await new Promise(resolve => setTimeout(resolve, 4000));
		window.location.reload(true);
	};

	const carouseOpenMob = async () => {
		// Scroll to the nftSection
		setCarouselRunMob(1);
		set_chestOpen(0);

		await new Promise(resolve => setTimeout(resolve, 10000));

		setCardShow(1);
		await new Promise(resolve => setTimeout(resolve, 6000));
		setCarouselRun(0);
		await new Promise(resolve => setTimeout(resolve, 5000));
		setCardShow(0);

		await new Promise(resolve => setTimeout(resolve, 4000));
		window.location.reload(true);
	};



	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};


	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false); // Hide loader after 1.5 seconds
		}, 1500);

		return () => clearTimeout(timer); // Cleanup on unmount
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
		}, 2000); // Change image every 2 seconds

		return () => clearInterval(interval); // Cleanup on unmount
	}, []);

	const close = () => {
		window.location.reload(true);
	}

	return (

		<div className='contMain'>

			<Navbar />

			<div className='cont-2'>
				<div className='titleMain'>FIND YOUR PULSE HERO <span>NFT</span></div>
				<div className='title2Main'>Secured by <img className='chainlink' src={cl} /></div>

				<div className='nftSection'>
 					{_chestOpen > 0 ?
						<div className='treasureIMG2Div'>
							<video id="treasureIMG2" className={`${cardShow > 0 ? "fade-out" : ""
								} ${carouselRun > 0 ? "hidden" : ""}`} autoPlay loop muted playsInline>
								<source src={chestAnim} type="video/webm" />
							</video></div> :
						<div className="video-container"><img className='treasureIMG' src={treasure} /></div>}
 
					<div>
						{spreadRun > 0 ?

							<div className="carouselImgs">
								<img src={vitalip} style={{ "--target-left": "10vw" }} alt="Vitalip" />
								<img src={richard} style={{ "--target-left": "23vw" }} alt="Richard" />
								<img src={gz} style={{ "--target-left": "36vw" }} alt="GZ" />
								<img src={trunk} style={{ "--target-left": "49vw" }} alt="Trunk" />
								<img src={jesus} style={{ "--target-left": "62vw" }} alt="Jesus" />
								<img src={elom} style={{ "--target-left": "75vw" }} alt="Elom" />
								<img src={satoshi} style={{ "--target-left": "88vw" }} alt="Satoshi" />

							</div> : null}

						{carouselRun > 0 ?
							<div
								id="rowImgs"
								className={`relative overflow-hidden container mx-auto pb-[100px] z-[1] ${cardShow > 0 ? "fade-out" : ""
									} ${cardShow > 0 && carouselRun === 0 ? "hidden" : ""}`}
							>
								<div className="carousel-track flex w-fit animate-carousel">
									{/* Duplicate images for seamless looping */}
									{heroData.concat(heroData).map(({ image, name }, index) => (
										<article
											key={index}
											className="relative w-fit max-w-fit mx-3 my-10 flex items-end justify-end transition-transform duration-300 hover:-translate-y-1"
										>
											<img
												src={cardLayout}
												alt="Card layout"
												style={{
													width: '10vw', // Adjust width based on viewport width
													height: '14vw', // Adjust height based on viewport width
												}}
											/>
											<div
												className="absolute inset-0 w-[90%] h-[98%] m-auto bg-contain bg-no-repeat bg-center"
												style={{ backgroundImage: `url(${image})` }}
											></div>
											<p id="sizeFonts">
												{name}
											</p>
										</article>
									))}
								</div>
							</div>
							: null}
 
						{carouselRunMob > 0 ?
							<div
								id="rowImgs"
								className={`relative overflow-hidden container mx-auto pb-[100px] z-[1] ${cardShow > 0 ? "fade-out" : ""
									} ${cardShow > 0 && carouselRun === 0 ? "hidden" : ""}`}
							>
								<div className="carousel-track flex w-fit animate-carousel">
									{/* Duplicate images for seamless looping */}
									{heroData.concat(heroData).map(({ image, name }, index) => (
										<article
											key={index}
											className="relative w-fit max-w-fit mx-5 my-10 flex items-end justify-end transition-transform duration-300 hover:-translate-y-1"
										>
											<img
												src={cardLayout}
												alt="Card layout"
												className="w-[122px] h-[170px] sm:w-[136px] sm:h-[188px] md:w-[150px] md:h-[206px] lg:w-[162px] lg:h-[220px] xl:w-[170px] xl:h-[226px] 2xl:w-[176px] 2xl:h-[232px]"
											/>
											<div
												className="absolute inset-0 w-[90%] h-[98%] m-auto bg-contain bg-no-repeat bg-center"
												style={{ backgroundImage: `url(${image})` }}
											></div>
											<p className="absolute bottom-0 left-0 right-0 w-fit mx-auto translate-y-full font-vermin-vibes-v text-[19px] z-[1]">
												{name}
											</p>
										</article>
									))}
								</div>
							</div>
							: null}

					</div>

					<div>

						{cardShow > 0 ?
							<div className='popUpImgMain'>
								<div className='popUpImg'>
									<span class="close-button" onClick={close}>&times;</span>

									<article
										className="relative w-fit max-w-fit mx-5 my-10 flex items-end justify-end transition-transform duration-300 hover:-translate-y-1 magic-card"
									>
										<img
											src={cardLayout}
											alt="Card layout"
											className="w-[122px] h-[170px] sm:w-[136px] sm:h-[188px] md:w-[150px] md:h-[206px] lg:w-[162px] lg:h-[220px] xl:w-[170px] xl:h-[226px] 2xl:w-[176px] 2xl:h-[232px]"
										/>
										<div
											className="absolute inset-0 w-[90%] h-[98%] m-auto bg-contain bg-no-repeat bg-center"
											style={{ backgroundImage: `url(${cz})` }}
										></div>
										<p className="absolute bottom-0 left-0 right-0 w-fit mx-auto translate-y-full font-vermin-vibes-v text-[19px] z-[1]">
											CZ
										</p>


									</article>
								</div>
							</div> : null}

					</div>
				</div>

				<div className='btns3'>

					<button className='btn1' id="btn1PC" onClick={chestOpen} ><img src={chest} /> <div className='txt'><span>04</span> OPEN CHEST</div></button>
					<button id="btn1Mobile" className='btn1' onClick={chestOpenMob} ><img src={chest} /> <div className='txt'><span>04</span> OPEN CHEST</div></button>

					<button className='btn2'><div>Purchase Chests</div></button>

					<div className="dropdown-container">
						<button className="btn2" onClick={toggleDropdown}>
							<div>1 - 10</div>
							<span id="arrow-icon" className={isOpen ? "rotate" : ""}>▼</span>
						</button>
						{isOpen &&
							<div id='dropdown'>
								<button className="dropdown-item">1</button>
								<button className="dropdown-item">3</button>
								<button className="dropdown-item">5</button>
								<button className="dropdown-item" id="lastNum">10</button>
							</div>}
					</div>
				</div>

			</div>

			<div className='nftSection'></div>

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
}

export default ChestOpening;

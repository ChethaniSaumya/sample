import React, { useEffect, useState, useRef } from 'react';
import "../styles/ChestOpening.css";
import '../styles/carousel.css';

import cl from '../assets/chainlink.png';
import chest from '../assets/chest.png';
import chestAnim from '../assets/Comp 1-vp9-chrome.webm';
import logo from '../assets/logo.png';
import Navbar from "../components/Navbar";
import treasure from "../assets/Comp 1_00088.png";
import cz from "../assets/cz-without-bg.png";
import "../styles/Home.css";
import cardLayout from "../assets/card-layout.png";

import vitalip from "../assets/heroes/vitalip.png";
import richard from "../assets/heroes/richard.png";
import gz from "../assets/heroes/gz.png";
import trunk from "../assets/heroes/trunk.png";
import jesus from "../assets/heroes/jesus.png";
import elom from "../assets/heroes/elom.png";
import satoshi from "../assets/heroes/satoshi.png";

import vitalip2 from "../assets/heroes2/vitalip.png";
import richard2 from "../assets/heroes2/richard.png";
import gz2 from "../assets/heroes2/gz.png";
import trunk2 from "../assets/heroes2/trunk.png";
import jesus2 from "../assets/heroes2/jesus.png";
import elom2 from "../assets/heroes2/elon.png";
import satoshi2 from "../assets/heroes2/satoshi.png";


import $ from 'jquery';
import Carousel from '../components/carousel';
import right from "../assets/heroes2/right.png";

var Scroll = require('react-scroll');

var Link = Scroll.Link;
var Element = Scroll.Element;




const heroData = [
	{
		image: vitalip,
		name: "vitalip",
	},
	{
		image: richard,
		name: "richard",
	},
	{
		image: gz,
		name: "gz",
	},
	{
		image: trunk,
		name: "trunk",
	},
	{
		image: jesus,
		name: "jesus",
	},
	{
		image: elom,
		name: "elom",
	},
	{
		image: satoshi,
		name: "satoshi",
	},
];


const ChestOpening = () => {

	const carouselTrackRef = useRef(null); // Ref for the carousel track
	let lapTime = 1.8; // Initial animation duration in seconds
	let animationActive = false; // To prevent multiple animations running simultaneously


	const [_navbarOpen, setNavbarOpen] = useState(0);
	const [isDropdownVisible, setDropdownVisible] = useState(false);
	const [loading, setLoading] = useState(true);
	//const [isOpen, setIsOpen] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	const [_chestOpen, set_chestOpen] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [carouselRun, setCarouselRun] = useState(0);
	const [carouselRunMob, setCarouselRunMob] = useState(0);
	const [arrowShow, setArrowShow] = useState(0);


	const [cardShow, setCardShow] = useState(0);
	const [spreadRun, setSpreadRun] = useState(0);
	const [isSlowing, setIsSlowing] = useState(false);
	const [_lapTime, setLapTime] = useState(0.6);

	const [number, setNumber] = useState(null);

	const generateRandomNumber = () => {
		const randomNum = Math.floor(Math.random() * 7) + 1; // Generate a random number between 1 and 7
		setNumber(randomNum);
	};


	const chestOpen = async () => {
		generateRandomNumber();
		set_chestOpen(1);

		await new Promise(resolve => setTimeout(resolve, 4500));
		carouseOpen();


		/*await new Promise(resolve => setTimeout(resolve, 6000));
		nftSectionRef.current.scrollIntoView({ behavior: 'smooth' });
*/
	};

	const chestOpenMob = async () => {
		generateRandomNumber();
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
		setArrowShow(1);
		setSpreadRun(0);

		await new Promise(resolve => setTimeout(resolve, 24000));

		setCardShow(1);
		setArrowShow(0);
		await new Promise(resolve => setTimeout(resolve, 5000));
		setCarouselRun(0);
		await new Promise(resolve => setTimeout(resolve, 5000));
		setCardShow(0);

		await new Promise(resolve => setTimeout(resolve, 4000));
		window.location.reload(true);
	};


	const carouseOpenMob = async () => {
		// Scroll to the nftSection
		setCarouselRunMob(1);
		setArrowShow(1);
		set_chestOpen(0);

		await new Promise(resolve => setTimeout(resolve, 24000));

		setCardShow(1);
		setArrowShow(0);
		await new Promise(resolve => setTimeout(resolve, 5000));
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

	/*useEffect(() => {

		$(document).ready(function () {
			const carouselTrack = $(".carousel-track");
			let lapTime = 0.6; // Initial animation duration in seconds

			console.log("2222222222");


			// Function to start animation with the current lap time
			function startCarousel() {
				carouselTrack.css({
					"animation-duration": `${lapTime}s`,
					animation: `carousel ${lapTime}s linear infinite`,
				});

				// Listen for the animationend event to update the lap time
				carouselTrack.one("animationiteration", function () {
					lapTime += 0.2; // Increase lap time by 0.2 seconds
					setLapTime(lapTime);
					startCarousel(); // Restart animation with updated duration
				});
			}

			// Start the carousel animation
			//startCarousel();
		});


	}, [_lapTime]);*/


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
				<div className='titleMain'>FIND YOUR PULSE HEROS <span>NFT</span></div>
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

							<div className="carouselImgs-2">
								<img src={vitalip2} style={{ "--target-left": "10vw" }} alt="Vitalip" />
								<img src={richard2} style={{ "--target-left": "23vw" }} alt="Richard" />
								<img src={gz2} style={{ "--target-left": "36vw" }} alt="GZ" />
								<img src={trunk2} style={{ "--target-left": "49vw" }} alt="Trunk" />
								<img src={jesus2} style={{ "--target-left": "62vw" }} alt="Jesus" />
								<img src={elom2} style={{ "--target-left": "75vw" }} alt="Elom" />
								<img src={satoshi2} style={{ "--target-left": "88vw" }} alt="Satoshi" />

							</div> : null}

						<div>
							{carouselRun > 0 ? (
								<>
									<Carousel number={number} />
									{arrowShow > 0 ?
										<div class="highlighter2"><img className='arrow' src={right} /></div> : null}
								</>
							) : null}

						</div>

						{carouselRunMob > 0 ?
							<>
								<Carousel number={number} />
								{arrowShow > 0 ?
									<div class="highlighter2"><img className='arrow' src={right} /></div> : null}
							</>
							: null}

					</div>

					<div>

						{cardShow > 0 ?
							<div className='popUpImgMain'>

								{number === 1 &&
									<>
										<span class="close-button-2" onClick={close}>&times;</span>

										<img src={trunk2} />
									</>
								}

								{number === 2 &&
									<>
										<span class="close-button-2" onClick={close}>&times;</span>

										<img src={vitalip2} />
									</>
								}

								{number === 3 &&
									<>
										<span class="close-button-2" onClick={close}>&times;</span>

										<img src={richard2} />
									</>}

								{number === 4 &&
									<>
										<span class="close-button-2" onClick={close}>&times;</span>

										<img src={gz2} />
									</>}

								{number === 5 &&
									<>
										<span class="close-button-2" onClick={close}>&times;</span>

										<img src={jesus2} />
									</>}

								{number === 6 &&
									<>
										<span class="close-button-2" onClick={close}>&times;</span>

										<img src={elom2} />
									</>}

								{number === 7 &&
									<>
										<span class="close-button-2" onClick={close}>&times;</span>

										<img src={satoshi2} />
									</>}


							</div>
							: null}
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

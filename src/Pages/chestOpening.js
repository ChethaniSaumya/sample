import React, { useEffect, useState } from 'react';
import "../styles/ChestOpening.css";

import cl from '../assets/chainlink.png';
import chest from '../assets/chest.png';
import chestAnim from '../assets/chestAnimation.mp4';
import logo from '../assets/logo.png';
import Navbar from "../components/Navbar";
import treasure from "../assets/treasure.png";
import cz from "../assets/cz-without-bg.png";
import "../styles/Home.css";
import DownArrowHeadIcon from "../components/DownArrowHeadIcon";
import UpArrowHeadIcon from "../components/UpArrowHeadIcon";

const heroData = [

	{
		image: cz,
		name: "cz",
	},
];

const ChestOpening = () => {
	const [_navbarOpen, setNavbarOpen] = useState(0);
	const [isDropdownVisible, setDropdownVisible] = useState(false);
	const [loading, setLoading] = useState(true);
	//const [isOpen, setIsOpen] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	const [_chestOpen, set_chestOpen] = useState(0);

	const chestOpen = () => {
		set_chestOpen(1);
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

	return (

		<div className='contMain'>

			<Navbar />

			<div className='cont-2'>
				<div className='titleMain'>FIND YOUR PULSE HERO <span>NFT</span></div>
				<div className='title2Main'>Secured by <img className='chainlink' src={cl} /></div>

				<img className='treasureIMG' src={treasure} />

				{/*_chestOpen > 0 ?
				<div className="video-container">
					<video
						className="treasure"
						src={chestAnim} // Adjust the path if needed
						autoPlay
						loop
						muted
					>
					</video>
				</div>:
				<img className='treasure' src={treasure} />*/}

				<div className='btns3'>
					<button className='btn1' onClick={chestOpen}><img src={chest} /> <div className='txt'><span>04</span> OPEN CHEST</div></button>
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

				<div className='nftSection'>

					{/*heroData.map(({ image, name }) => (
						<article className="relative w-[176px] h-[232px] flex items-end justify-end transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
							<img src={cardLayout} alt="Card layout" className="absolute" />
							<div className="absolute right-[15px] bottom-0 w-[190px] flex justify-center">
								<img src={image} alt="hero" />
							</div>
							<p className="relative font-vermin-vibes-v text-[19px] mb-1 me-6 z-[1]">
								{name}
							</p>
						</article>
					))*/}

				</div>


			</div>

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

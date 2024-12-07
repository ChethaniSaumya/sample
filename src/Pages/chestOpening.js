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
	const [isOpen, setIsOpen] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	const [_chestOpen, set_chestOpen] = useState(0);


	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	const chestOpen = () => {
		set_chestOpen(1);
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
					<button className='btn2'><div>Purchase Crates</div></button>

					<div className="relative">
						<button
							className="btn2"
							onClick={() => setIsOpen((prev) => !prev)}
						>
							<div>1 - 10</div>
							{!isOpen ? <DownArrowHeadIcon /> : <UpArrowHeadIcon />}
						</button>
						<div
							className={`${!isOpen ? "h-0" : "h-[350px] border"} 
                absolute top-16 left-0 right-0 w-full font-vermin-vibes-v text-[20px] bg-[#D9D9D94D] px-5 mt-3 backdrop-blur-[10px] overflow-hidden transition-all duration-500 z-50`}
						>
							<button className="w-full flex items-center justify-center text-center gap-x-[1.3125em] py-3 border-b border-b-white/50 transition-colors duration-100 hover:text-white/80">
								1
							</button>
							<button className="w-full flex items-center justify-center text-center gap-x-[1.3125em] py-3 border-b border-b-white/50 transition-colors duration-100 hover:text-white/80">
								3
							</button>
							<button className="w-full flex items-center justify-center text-center gap-x-[1.3125em] py-3 border-b border-b-white/50 transition-colors duration-100 hover:text-white/80">
								5
							</button>
							<button className="w-full flex items-center justify-center text-center gap-x-[1.3125em] py-3 border-b border-b-white/50 transition-colors duration-100 hover:text-white/80">
								10
							</button>
						</div>
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

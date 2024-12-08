/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React, { useEffect, useMemo, useState } from 'react';
import "../styles/Home.css";
import RICHARD from '../assets/RICHARD-removebg.png';
import GARY from '../assets/GARY-removebg.png';
import fight from '../assets/fight.png';
import Navigation from '../components/Navigation';
import $ from 'jquery';
import logo from '../assets/logo.png';
import man1 from '../assets/man1.png';
import man2 from '../assets/man2.png';
import man3 from '../assets/man3.png';
import crystels from '../assets/crystels.png';
import crystels2 from '../assets/crystels2.png';
import crd1 from '../assets/crd1.png';
import crd2 from '../assets/crd2.png';
import crd3 from '../assets/crd3.png';
import crd4 from '../assets/crd4.png';
import crd5 from '../assets/crd5.png';
import Navbar from '../components/Navbar';
import left from "../assets/Chevron Left.png";
import right from "../assets/Chevron Right.png";
import vs from "../assets/Group-1253.png";
import biden from "../assets/Group 1283.png";
import jesus from "../assets/Group 1284.png";
import bar1 from "../assets/bar1.png";
import bar2 from "../assets/bar2.png";
import letterV from "../assets/versus-letter-v.png";
import letterS from "../assets/versus-letter-s.png";
import jesusNoBg from "../assets/GESU-remove.png";

var Scroll = require('react-scroll');
const images = [crd1, crd2, crd3, crd4, crd5];

const Vs = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [selectedMan, setSelectedMan] = useState(null); // State to track the clicked man
	const [showNftSection, setShowNftSection] = useState(false);
	const [isVisble, setIsVisble] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [_combat, setCombat] = useState(0);
	const [cardSelected, setCardSelected] = useState(0);


	useEffect(() => {
		const interval = setInterval(() => {
			setIsVisble(true);
			setTimeout(() => {
				setIsVisble(false);
			}, 2500);
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	const handleLeftClick = () => {
		setCurrentIndex((prevIndex) =>
			(prevIndex - 1 + images.length) % images.length
		);
	};

	const handleRightClick = () => {
		setCurrentIndex((prevIndex) =>
			(prevIndex + 1) % images.length
		);
	};

	const close = () => {
		window.location.reload(true);
	}

	const combat = () => {
		setCombat(1);
	}

	const visibleImages = () => {
		let visible = [];
		for (let i = 0; i < 5; i++) {
			visible.push(images[(currentIndex + i) % images.length]);
		}
		return visible;
	};

	const visibleImagesMob = () => {
		let visible = [];
		for (let i = 0; i < 3; i++) {
			visible.push(images[(currentIndex + i) % images.length]);
		}
		return visible;
	};

	const handleImageClick = (man, image) => {
		if (image === crd1) {
			setShowNftSection(false); // Hide nftSection3Main
			console.log("IF showNftSection : " + showNftSection);
			setCardSelected(1);

		} else {
			setShowNftSection(true);
			setCardSelected(0);
			console.log("ELSE showNftSection : " + showNftSection);

		}
		setSelectedMan((prevMan) => (prevMan === man ? null : man));

	};

	return (
		<div class="allWrap">
			<div class="light">

				<div className='cont3'>
					<div className='cont-2'>
						<Navbar />


						{_combat > 0 ?
							<div class="popup-containerMain3">
								<div class="popup-containerMain">
									<div class="popup">
										<img src={jesusNoBg} alt="Man" class="character" />
										<span class="close-button" onClick={close}>&times;</span>
										<p class="popup-text">YOU WIN!</p>
									</div>
								</div>
							</div> : null}

						{!cardSelected > 0 ?
							<>
								<div className='title3'>PULSEHE<span>R</span>OES</div>
								<img className='fight' src={fight} />
							</>
							: null}

						{!showNftSection && !cardSelected ? (
							<div className='nftSection3Main'></div>) : null}

						{!showNftSection && !cardSelected ? (
							<div className='nftSection3Main-mob'></div>) : null}


						{showNftSection ? (
							<div className='nftSection3Main'>

								<div className='arrowsDiv' onClick={handleLeftClick}>
									<img className='arrows' src={left} alt="Left Arrow" />
								</div>

								<div className='nftSection3'>
									{visibleImages().map((image, index) => (
										<div className="imageContainer" key={index}>

											<img
												src={image}
												alt={`Slide ${index + 1}`}
												className="nftImage"
												onClick={() => handleImageClick('man1', image)} // Pass image to handler
											/>

											{image !== crd1 && (
												<div className="overlay">
													<div className="timer">
														<div>03 : 54 : <span className='sec'>23</span></div>
														<div>HOURS LEFT</div>
													</div>
												</div>
											)}
										</div>
									))}
								</div>

								<div className='arrowsDiv' onClick={handleRightClick}>
									<img className='arrows' src={right} alt="Right Arrow" />
								</div>
							</div>

						) : null}

						{showNftSection ? (
							<div className='nftSection3Main-mob'>

								<div className='arrowsDiv' onClick={handleLeftClick}>
									<img className='arrows' src={left} alt="Left Arrow" />
								</div>

								<div className='nftSection3'>
									{visibleImagesMob().map((image, index) => (
										<div className="imageContainer" key={index}>

											<img
												src={image}
												alt={`Slide ${index + 1}`}
												className="nftImage"
												onClick={() => handleImageClick('man1', image)} // Pass image to handler
											/>

											{image !== crd1 && (
												<div className="overlay">
													<div className="timer">
														<div>03 : 54 : <span className='sec'>23</span></div>
														<div>HOURS LEFT</div>
													</div>
												</div>
											)}
										</div>
									))}
								</div>

								<div className='arrowsDiv' onClick={handleRightClick}>
									<img className='arrows' src={right} alt="Right Arrow" />
								</div>
							</div>

						) : null}

						{cardSelected > 0 ?
							<div className='battleSectionMain'>
								<div className='battleSection'>
									<div className='battleSection2'>
										<div>
											<img id="bar1" src={bar1} />
											<img id="battleImgs" src={jesus} />
										</div>
										<div id="vsMain" className="relative col-span-4 flex flex-col items-center justify-center gap-y-14">
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
										</div>
										<div>
											<img className='bar2' src={bar2} />
											<img id="battleImgs" src={biden} />
										</div>
									</div>
								</div>

								<div className='combat'>
									<button onClick={combat} className="bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v text-[20px] px-[3.8em] py-[0.9em] transition-all duration-500 rounded-full hover:bg-right hover:shadow-[0_0_10px_0_#B014A5] hover:[text-shadow:_0_0_3px_white]">
										COMBAT
									</button>
								</div>
							</div>
							: null}


						<div className='line'></div>

						<div className='nftSection2'>
							<img
								src={man1}
								onClick={() => handleImageClick('man1')}
								alt="Man 1"
								className={selectedMan === 'man1' ? 'selected' : ''} />
							<img
								src={man2}
								onClick={() => handleImageClick('man2')}
								alt="Man 2"
								className={selectedMan === 'man2' ? 'selected' : ''} />
							<img
								src={man3}
								onClick={() => handleImageClick('man3')}
								alt="Man 3"
								className={selectedMan === 'man3' ? 'selected' : ''} />
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

					<div>

					</div>

				</div>
			</div>


		</div >
	)

}
export default Vs;

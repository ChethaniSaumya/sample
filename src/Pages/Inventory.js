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
import correct2 from "../assets/correct2.png";
import wrong from "../assets/wrong.png";
import terrain from "../assets/terrain.png";
import bg from "../assets/bg4.png";
import InventoryBattle from './InventoryBattle';
import { useNavigate, useLocation } from "react-router-dom";

import { Web3Button, Web3Modal, useWeb3Modal } from '@web3modal/react';
import { mainnet, useAccount, useContractRead, useContractReads, useContractWrite, useNetwork, usePublicClient, useSwitchNetwork, useWaitForTransaction } from 'wagmi';
import { createPublicClient, formatEther, http, parseEther, webSocket } from 'viem';
import { pulsechainV4 } from 'wagmi/chains'
//import Web3 from "web3";
//const web3 = new Web3();
import contractPulse from '../Contracts/contractPulse.json';
import contractSecBattle from '../Contracts/contractSecBattle.json';
const address = contractPulse.address;
const ABI = contractPulse.abi;

const address_contractSecBattle = contractSecBattle.address;
const ABI_contractSecBattle = contractSecBattle.abi;

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

const Inventory = () => {

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
	const [_chestsPurchasedAmount, setChestsPurchasedAmount] = useState(0);
	const navigate = useNavigate();

	const [number, setNumber] = useState(null);
	//const [selectedRarity, setSelectedRarity] = useState([1, 2, 3, 4, 5, 6, 7]);
	const [selectedRarity, setSelectedRarity] = useState(null); // To hold the selected rarity

	/*const generateRandomNumber = () => {
		const randomNum = Math.floor(Math.random() * 7) + 1;
		setNumber(randomNum);
	};*/

	const { open } = useWeb3Modal()
	const { chain } = useNetwork()
	const { switchNetwork } = useSwitchNetwork()

	const { address: walletAddress } = useAccount({
		async onConnect() {
			handleConnect()
		}
	})

	const websocketUrl = process.env.REACT_APP_WEBSOCKET_URL;

	//const transport = webSocket(websocketUrl);

	//const transport = webSocket('wss://go.getblock.io/997658fff0bf424fb505a599611c550d')
	const transport = webSocket('wss://pulsechain-testnet-rpc.publicnode.com')

	const publicClient = createPublicClient({
		chain: pulsechainV4,
		transport,
	})

	const [_totalSupply, settotalSupply] = useState(0);
	const [statusError, setstatusError] = useState("");
	const [showErrorDiv, setshowErrorDiv] = useState("");
	const [statusLoading, setstatusLoading] = useState("");
	const [success, setsuccess] = useState("");
	const [_statusAnimations, setstatusAnimations] = useState("");

	const [statusErrorPurchase, setstatusErrorPurchase] = useState("");
	const [showErrorDivPurchase, setshowErrorDivPurchase] = useState("");
	const [statusLoadingPurchase, setstatusLoadingPurchase] = useState("");
	const [successPurchase, setsuccessPurchase] = useState("");

	const [nftMintingAmount, setnftMintingAmount] = useState(1);
	const [_publicMintMsg, set_publicMintMsg] = useState("Mint Here");
	const [_cost, set_publicSaleCost] = useState("");
	const [_max_per_wallet, set_max_per_wallet] = useState(1);
	const [_owner, set_owner] = useState("");
	const [myNFTWallet, setmyNFTWallet] = useState(0);
	const [_public_mint_status, set_public_mint_status] = useState("");
	const [_MAX_SUPPLY, set_MAX_SUPPLY] = useState("");
	const [_lastRarity, setLastRarity] = useState("0");
	const [_sell, setSell] = useState(false);
	const [_connected, setConnected] = useState(false);
	const [selectedValue, setSelectedValue] = useState("1 - 10");
	const [_MyMints, setFetchMyMints] = useState([]);

	const filteredMints = selectedRarity
		? _MyMints.filter((nft) => Number(nft.rarity) + 1 === selectedRarity)
		: _MyMints;

	const handleRarityClick = (rarityValue) => {
		setSelectedRarity((prev) => (prev === rarityValue ? null : rarityValue));
	};


	const contract = {
		address: address,
		abi: ABI
	}

	async function handleConnect() {
		if (chain.id !== 943) {
			switchNetwork(943)
		}

		//var data = await getBalance();
		//setmyNFTWallet(Number(data.data));
		//console.log("myNFTWallet :" + data.data);
		setConnected(true);
	}

	/*	const { refetch: getTotalSupply } = useContractRead({
			...contract,
			functionName: 'totalSupply',
		})
	
		const { refetch: getBalance } = useContractRead({
			...contract,
			functionName: 'balanceOf',
			args: [walletAddress ? walletAddress : '0x']
		})*/

	const { refetch: lastRarity } = useContractRead({
		...contract,
		functionName: 'getLastRarity',
	})

	const { refetch: lastRarityOfTheUser } = useContractRead({
		...contract,
		functionName: 'getLastRarityOfTheUser',
		args: [walletAddress]

	})

	const { refetch: chestsPurchasedAmount } = useContractRead({
		...contract,
		functionName: 'chestsPurchased',
		args: [walletAddress]

	})

	const { refetch: myMints } = useContractRead({
		...contract,
		/*functionName: 'my_mints',
		args: [walletAddress]*/
		functionName: 'getMyMints',
		args: [walletAddress],           // Pass the user's address as an argument
	})


	useEffect(() => {

		if (statusError) {
			const timer = setTimeout(() => {
				setstatusError(false);  // Assuming you have a setter to change the state
			}, 4000); // 4 minutes in milliseconds

			// Cleanup the timeout when the component unmounts or the statusError changes
			return () => clearTimeout(timer);
		}

		if (showErrorDiv) {
			const timer = setTimeout(() => {
				setshowErrorDiv(false);  // Assuming you have a setter to change the state
			}, 4000); // 4 minutes in milliseconds

			// Cleanup the timeout when the component unmounts or the statusError changes
			return () => clearTimeout(timer);
		}

		async function fetchChestsPurchasedAmount() {
			var data = await chestsPurchasedAmount();

			setChestsPurchasedAmount(Number(data.data))
			console.log("chestsPurchasedAmount : " + data.data)

		}

		async function fetchMyMints() {
			try {
				var data = await myMints();

				// Convert BigInt values to Number or String as needed
				/*const serializedData = JSON.stringify(data.data, (key, value) =>
					typeof value === "bigint" ? value.toString() : value
				);*/

				/*setFetchMyMints(Number(data.data)); // Assuming `data.data` is convertible to a Number
				console.log("Fetch MyMints : " + serializedData);
				console.log("s_Length : " + serializedData.length);
				console.log("s_[0] : " + serializedData[0]);*/

				setFetchMyMints(data.data);

				console.log("fetchMyMints data: " + data.data);
				console.log("fetchMyMints data[0]: " + data.data[0].tokenid);

			} catch (error) {
				console.error("Error fetching mints:", error);
			}
		}



		if (_connected) {
			//fetchLastRarity();
			fetchChestsPurchasedAmount();
			fetchMyMints();
		}

		// eslint-disable-next-line no-use-before-define
	}, [showErrorDiv, statusError, _connected, _MyMints /*getBalance, getCost, getTotalSupply, nftMintingAmount*/]);

	/*async function fetchMyWallet() {
		try {
			// Fetch user's NFT data
			const response = await myWallet(); // Replace with your actual function/API call
			const nftData = response.data || []; // Ensure the data is an array
			setMyWallet(nftData);
			console.log("MyWallet NFTs: ", nftData);
		} catch (error) {
			console.error("Error fetching wallet data: ", error);
			setMyWallet([]); // Set as an empty array on error
		}
	}*/


	/*useEffect(() => {
		fetchMyWallet();
	}, []);*/

	const { writeAsync } = useContractWrite({
		...contract,
		onError(error) {
			if (error.message.includes('balance')) {
				setstatusError(true)
				setstatusLoading(false)
			}
		}
	})

	//Use this to test
	async function fetchLastRarity() {
		var data = await lastRarity();

		//setNumber(Number(data.data))
		console.log("Last Rarity : " + data.data)

	}

	async function fetchLastRarityOfNumber() {
		var data = await lastRarityOfTheUser();

		//setLastRarityOfTheUser(Number(data.data))
		setNumber(Number(data.data))
		console.log("Last Rarity Of Th eUser : " + data.data)

	}

	async function onMint() {
		try {

			setstatusLoading(true)
			setstatusError(false)

			var res = await writeAsync({
				functionName: 'mint'
			})

			var result = await publicClient.waitForTransactionReceipt(res)
			if (result.status === 'success') {
				await fetchLastRarityOfNumber();

				chestOpen();

				setstatusLoading(false)
				setstatusError(false)
				setstatusAnimations(true)
				/*setstatusError(false)
				setsuccess(true)
				setstatusLoading(false)
				setshowErrorDiv(false);*/
				/*await new Promise(resolve => setTimeout(resolve, 5000));
				window.location.reload(true);*/

			} else if (result.status) {
				setsuccess(false)
				setstatusError(true)
				setstatusLoading(false)
				setshowErrorDiv(false);
			}

		} catch (e) {
			console.error("Transaction failed:", e);
			if (e.message.includes("Transaction with hash")) {

				setsuccess(true);

				await new Promise(resolve => setTimeout(resolve, 5000));
				window.location.reload(true);
			}
			if (e.message.includes("err: insufficient funds for gas")) {
				//setErrorMsg1("Insufficient funds");
				setshowErrorDiv(true); // Show the error div for insufficient funds
				setstatusError(false);
				setstatusLoading(false);

			} else if (e.message.includes("User rejected the request")) {
				//setErrorMsg1("User Rejected");
				setshowErrorDiv(false);
				setstatusError(false);
				setstatusLoading(false);
			} else {
				//setErrorMsg1("Sorry, something went wrong");
				setshowErrorDiv(false);
				setstatusError(true);
				setstatusLoading(false);
			}

		}
	}

	async function onMintMob() {
		try {

			setstatusLoading(true)
			setstatusError(false)

			var res = await writeAsync({
				functionName: 'mint'
			})

			var result = await publicClient.waitForTransactionReceipt(res)
			if (result.status === 'success') {
				await fetchLastRarityOfNumber();

				chestOpenMob();

				setstatusLoading(false)
				setstatusError(false)
				setstatusAnimations(true)

				/*setstatusError(false)
				setsuccess(true)
				setstatusLoading(false)
				setshowErrorDiv(false);*/
				/*await new Promise(resolve => setTimeout(resolve, 5000));
				window.location.reload(true);*/

			} else if (result.status) {
				setsuccess(false)
				setstatusError(true)
				setstatusLoading(false)
				setshowErrorDiv(false);
			}

		} catch (e) {
			console.error("Transaction failed:", e);
			if (e.message.includes("Transaction with hash")) {

				setsuccess(true);

				await new Promise(resolve => setTimeout(resolve, 5000));
				window.location.reload(true);
			}
			if (e.message.includes("err: insufficient funds for gas")) {
				//setErrorMsg1("Insufficient funds");
				setshowErrorDiv(true); // Show the error div for insufficient funds
				setstatusError(false);
				setstatusLoading(false);

			} else if (e.message.includes("User rejected the request")) {
				//setErrorMsg1("User Rejected");
				setshowErrorDiv(false);
				setstatusError(false);
				setstatusLoading(false);
			} else {
				//setErrorMsg1("Sorry, something went wrong");
				setshowErrorDiv(false);
				setstatusError(true);
				setstatusLoading(false);
			}

		}
	}

	async function purchase() {
		try {

			setstatusLoadingPurchase(true)
			setstatusErrorPurchase(false)

			//const amount = web3.utils.toWei("0.001", "ether");

			// Convert selectedValue to BN (Big Number) and multiply
			const totalValue = 1000000000000000 * selectedValue;


			var res = await writeAsync({
				functionName: 'purchase',
				args: [selectedValue],
				value: totalValue.toString() // 0.01 Ether in Wei
			})

			var result = await publicClient.waitForTransactionReceipt(res)
			if (result.status === 'success') {
				setstatusErrorPurchase(false)
				setsuccessPurchase(true)
				setstatusLoadingPurchase(false)
				setshowErrorDivPurchase(false);

				await new Promise(resolve => setTimeout(resolve, 5000));
				window.location.reload(true);

			} else if (result.status) {
				setsuccessPurchase(false)
				setstatusErrorPurchase(true)
				setstatusLoadingPurchase(false)
				setshowErrorDivPurchase(false);
			}

		} catch (e) {
			console.error("Transaction failed:", e);
			if (e.message.includes("Transaction with hash")) {

				setsuccess(true);

				await new Promise(resolve => setTimeout(resolve, 5000));
				window.location.reload(true);
			}
			if (e.message.includes("err: insufficient funds for gas")) {
				//setErrorMsg1("Insufficient funds");
				setshowErrorDivPurchase(true); // Show the error div for insufficient funds
				setstatusErrorPurchase(false);
				setstatusLoadingPurchase(false);

			} else if (e.message.includes("User rejected the request")) {
				//setErrorMsg1("User Rejected");
				setshowErrorDivPurchase(false);
				setstatusErrorPurchase(false);
				setstatusLoadingPurchase(false);
			} else {
				//setErrorMsg1("Sorry, something went wrong");
				setshowErrorDivPurchase(false);
				setstatusErrorPurchase(true);
				setstatusLoadingPurchase(false);
			}

		}
	}


	const chestOpen = async () => {
		//generateRandomNumber();

		set_chestOpen(1);

		await new Promise(resolve => setTimeout(resolve, 4500));
		carouseOpen();


	};

	const chestOpenMob = async () => {
		//generateRandomNumber();
		set_chestOpen(1);

		await new Promise(resolve => setTimeout(resolve, 4500));
		carouseOpenMob();

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

	const sellPopUp = () => {
		setSell(true);
	}

	const sellClose = () => {
		setSell(false);
	}

	const handleSelection = (value) => {
		setSelectedValue(value);
		setIsOpen(false); // Close the dropdown after selection
	};

	const rarityImages = {
		'0': 'https://bafybeihehlxu7tvcezj24ad77qiesz5ee22f2wfp6nhsmicvngxaazfmea.ipfs.w3s.link/0.png',
		'1': 'https://bafybeihehlxu7tvcezj24ad77qiesz5ee22f2wfp6nhsmicvngxaazfmea.ipfs.w3s.link/1.png',
		'2': 'https://bafybeihehlxu7tvcezj24ad77qiesz5ee22f2wfp6nhsmicvngxaazfmea.ipfs.w3s.link/2.png',
		'3': 'https://bafybeihehlxu7tvcezj24ad77qiesz5ee22f2wfp6nhsmicvngxaazfmea.ipfs.w3s.link/3.png',
		'4': 'https://bafybeihehlxu7tvcezj24ad77qiesz5ee22f2wfp6nhsmicvngxaazfmea.ipfs.w3s.link/4.png',
		'5': 'https://bafybeihehlxu7tvcezj24ad77qiesz5ee22f2wfp6nhsmicvngxaazfmea.ipfs.w3s.link/5.png',
		'6': 'https://bafybeihehlxu7tvcezj24ad77qiesz5ee22f2wfp6nhsmicvngxaazfmea.ipfs.w3s.link/6.png',
	};

	const imgNames = {
		'0': 'Vitalip',
		'1': 'GZ',
		'2': 'Satoshi',
		'3': 'Jesus',
		'4': 'Trunk',
		'5': 'Elom',
		'6': 'Richard',
	};

	  const location = useLocation(); // Add this import from 'react-router-dom'
  
  // Initialize showBattleView from location state or default to false
  const [showBattleView, setShowBattleView] = useState(
    location.state?.showBattleView || false
  );


	// Toggle function
	const toggleView = () => {
		setShowBattleView(!showBattleView);
	};

	return (

		<div
			className="relative min-h-screen bg-cover bg-center text-white bg-[#41305f] flex flex-col justify-between overflow-hidden"
			style={{
				backgroundImage: `url(${bg})`,
				backgroundAttachment: 'fixed',
			}}
		>

			<Navbar />

			<div className="flex justify-center my-4">
				<div className="relative inline-block w-64 h-12 rounded-full bg-[#6514DB]/20 backdrop-blur-md">
					<button
						onClick={toggleView}
						className={`absolute top-0 w-32 h-12 rounded-full transition-all duration-300 flex items-center justify-center font-bold ${showBattleView
							? 'left-0 bg-[#6514DB] text-white shadow-lg'
							: 'left-32 bg-[#6514DB] text-white shadow-lg'
							}`}
					>
						{showBattleView ? 'Sec Battle NFTs' : 'Battle NFTs'}
					</button>
					<div className="flex h-full" >
						<span onClick={toggleView}
							className={`flex-1 flex items-center justify-center font-bold transition-all duration-300 cursor-pointer ${showBattleView ? 'text-gray-400' : 'text-white'
								}`}
						>
							Sec Battle NFTs
						</span>
						<span onClick={toggleView}
							className={`flex-1 flex items-center justify-center font-bold transition-all duration-300 cursor-pointer ${!showBattleView ? 'text-gray-400' : 'text-white'
								}`}
						>
							Battle NFTs
						</span>
					</div>
				</div>
			</div>

			{showBattleView ? (
				<InventoryBattle />
			) : (
				<div className='cont-2'>
					<div id="titles" className='titleMain'>My Battle NFTs</div>

					{/* Container for rarity*/}
					<div id="borderStyles2" className="w-fit bg-white/30 mx-auto px-[3em] pt-[1em] pb-[1.3em] *:font-american-captain text-[15px] rounded-[0.5em] text-center backdrop-blur-md sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[26px]">
						<h6 className="mb-[0.3em] tracking-wider">Rarity</h6>
						<div className="flex items-center justify-center gap-[1em] *:font-american-captain">
							{Array(7)
								.fill(undefined)
								.map((_e, i) => {
									const rarityValue = i + 1;
									const isSelected = selectedRarity === rarityValue;

									return (
										<button
											key={i}
											className={`${isSelected ? "bg-[#6514DB] text-white" : "bg-white/30 text-[#6514DB]"
												} px-[0.5em] py-[0.2em] leading-none rounded-[0.2em] backdrop-blur-md`}
											style={{ border: "1px solid #6514DB" }}
											onClick={() => handleRarityClick(rarityValue)}
										>
											{rarityValue}
										</button>
									);
								})}
						</div>

					</div>
					{/*<div className='title2Main'>Secured by <img className='chainlink' src={cl} /></div>*/}

					{/*<div className="nfts-grid">
					{_MyWallet.length > 0 ? (
						_MyWallet.map((nft, index) => (
							<div key={index} className="nft-card">
								<img
									src={nft.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgCPQmyPHrOWxnUvbmQIRwOipjW8woZUreA&s'}
									alt={nft.name || 'NFT'}
									className="nft-image"
								/>
								<h3 className="nft-title">{nft.name || 'Unknown NFT'}</h3>
								<p className="nft-description">
									{nft.description || 'No description available.'}
								</p>
							</div>
						))
					) : (
						<p className="no-nfts-message">No NFTs found.</p>
					)}
				</div>*/}


					{filteredMints && filteredMints.length > 0 ? (
						<div id="showMyNFTs" className="relative text-[12px] my-[2em] px-[30px]">
							{filteredMints.map((nft, index) => {
								const nexttime = ((Number(nft.lastBattleTime) * 1000) + 14400000);
								console.log("nexttime :" + nexttime);
								const timeDiff = Number(nexttime) - Number(Date.now());
								console.log("timeDiff :" + timeDiff);

								const formatTime = (ms) => {
									let totalSeconds = Math.floor(ms / 1000);
									let hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
									let minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
									let seconds = String(totalSeconds % 60).padStart(2, '0');

									return { hours, minutes, seconds };
								};

								const { hours, minutes, seconds } = formatTime(timeDiff);

								return (
									<div key={index}>
										<div className="flex items-center justify-center">
											<article className="w-[17em] max-w-[17em] mx-auto text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15.5px] 2xl:text-[16px]">
												<div
													className="relative h-[14em] bg-contain bg-bottom bg-no-repeat z-[1] animate-hover"
													style={{
														backgroundImage: `url(${rarityImages[nft.rarity]})`,
													}}
												></div>
												<div className="relative bg-gradient-to-br from-[#DF00824D] to-[#FFFFFF4D] -mt-[4.8em] pt-[5em] pb-[1em] rounded-[0.5em] backdrop-blur-md">
													<div
														className="absolute inset-0 h-[60%] bg-contain bg-center bg-no-repeat rounded-[0.5em] animate-terrain-hover"
														style={{ backgroundImage: `url(${terrain})` }}
													></div>
													<div className="w-[15em] mx-auto bg-white/30 px-[0.5em] py-[1em] rounded-[0.5em]">
														<h3 className="relative font-vermin-vibes-v text-[1.8em] text-center z-[1]">
															{imgNames[nft.rarity]}
														</h3>
														<hr className="my-[1em]" />
														<p className="uppercase font-bold">
															Token ID:{" "}
															<span className="text-[#6E0B35]">{nft.tokenid.toString()}</span>
														</p>
														<p className="uppercase font-bold">
															Rarity: <span className="text-[#6E0B35]">{Number(nft.rarity) + 1}</span>
														</p>

														{Number(nft.battlesRemainingInCoolingPeriod) < 1 && timeDiff > 0 ? (
															<p className="uppercase font-bold">
																Time Left:{" "}
																<span className="text-[#6E0B35]">
																	{hours}H:{minutes}M:{seconds}S
																</span>
															</p>) :
															(<p className="uppercase font-bold">
																Time Left:{" "}
																<span className="text-[#6E0B35]">
																	-
																</span>
															</p>)
														}

														{Number(nft.battlesRemainingInCoolingPeriod) > 0 ?
															<p className="uppercase font-bold">
																Fights Left: <span className="text-[#6E0B35]">{Number(nft.battlesRemainingInCoolingPeriod)}</span>
															</p> : null}

														<hr className="my-[1em]" />
														<div className="inBtnsMain">

															{Number(nft.battlesRemainingInCoolingPeriod) > 0 ?
																<button
																	className="inBtns1"
																	onClick={() => { navigate(`/battle2/${nft.tokenid}/${nft.rarity}`); }}
																	style={{ cursor: "pointer" }}
																>
																	Fight
																</button> :
																timeDiff < 0 ?
																	<button
																		className="inBtns1"
																		onClick={() => { navigate(`/battle2/${nft.tokenid}/${nft.rarity}`); }}
																		style={{ cursor: "pointer" }}
																	>
																		Fight
																	</button> :

																	<button
																		className="inBtns1"
																		style={{ cursor: "not-allowed", opacity: 0.5 }}
																	>
																		Fight
																	</button>

															}

															<button className="inBtns2" onClick={sellPopUp}>
																Sell
															</button>
														</div>
													</div>
												</div>
											</article>
										</div>
									</div>
								);
							})}
						</div>
					) : (
						<p className="noNFTs">No NFTs found</p>
					)}


					{_sell ?
						<div class="popup-containerIn">
							<div class="popupIn">
								<div class="popup-closeIn" onClick={sellClose}>×</div>
								<h2>Set Selling Price</h2>
								<input type="number" id="price" placeholder="Enter amount" />
								<button className='listBtn'><a href="marketplace">List in the Marketplace</a></button>
							</div>
						</div> : null}
				</div>
			)}
			<div className='nftSectionIn'></div>

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

			{successPurchase ?
				<div class="popup-containerMain3">
					<div class="popup-containerMain">
						<div class="popupNotifications">
							<span class="close-button" onClick={close}>&times;</span>

							<img src={correct2} alt="success" class="notifications" />
							<p class="popup-text">CHEST PURCHASED SUCCESSFULLY!</p>
						</div>
					</div>
				</div> : null}

			{statusErrorPurchase ?
				<div class="popup-containerMain3">
					<div class="popup-containerMain">
						<div class="popupNotifications">
							<span class="close-button" onClick={close}>&times;</span>

							<img src={wrong} alt="success" class="notifications" />
							<p class="popup-text" id="wrongMsg">SORRY SOMETHING WENT WRONG <br /> PLEASE TRY AGAIN LATER!</p>
						</div>
					</div>
				</div> : null}

			{statusLoadingPurchase ?
				<div class="popup-containerMain3">
					<div class="popup-containerMain">
						<div class="popupNotificationsLoad">
							<div class="loader"></div>
							<p class="popup-text">LOADING</p>
						</div>
					</div>
				</div> : null}


			{success ?
				<div class="popup-containerMain3">
					<div class="popup-containerMain">
						<div class="popupNotifications">
							<span class="close-button" onClick={close}>&times;</span>

							<img src={correct2} alt="success" class="notifications" />
							<p class="popup-text">MINTED SUCCESSFULLY!</p>
						</div>
					</div>
				</div> : null}

			{statusError ?
				<div class="popup-containerMain3">
					<div class="popup-containerMain">
						<div class="popupNotifications">
							<span class="close-button" onClick={close}>&times;</span>

							<img src={wrong} alt="success" class="notifications" />
							<p class="popup-text" id="wrongMsg">SORRY SOMETHING WENT WRONG <br /> PLEASE TRY AGAIN LATER!</p>
						</div>
					</div>
				</div> : null}

			{statusLoading ?
				<div class="popup-containerMain3">
					<div class="popup-containerMain">
						<div class="popupNotifications">
							<div class="loader"></div>
							<p class="popup-text">LOADING, PLEASE WAIT</p>
						</div>
					</div>
				</div> : null}

			{showErrorDivPurchase ?
				<div class="popup-containerMain3">
					<div class="popup-containerMain">
						<div class="popupNotifications">
							<span class="close-button" onClick={close}>&times;</span>
							<div class="loader"></div>
							<p class="popup-text">LOADING, PLEASE WAIT</p>
						</div>
					</div>
				</div> : null}

			{showErrorDiv ?
				<div class="popup-containerMain3">
					<div class="popup-containerMain">
						<div class="popupNotifications">
							<span class="close-button" onClick={close}>&times;</span>
							<img src={wrong} alt="success" class="notifications" />
							<p class="popup-text" id="wrongMsg">INSUFFICIENT FUNDS</p>
						</div>
					</div>
				</div> : null}

		</div>

	);
}

export default Inventory;

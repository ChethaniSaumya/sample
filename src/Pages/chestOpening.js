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
import tic from "../assets/double-tick.png";
import wrong from "../assets/wrong.png";

import { Web3Button, Web3Modal, useWeb3Modal } from '@web3modal/react';
import { mainnet, useAccount, useContractRead, useContractReads, useContractWrite, useNetwork, usePublicClient, useSwitchNetwork, useWaitForTransaction } from 'wagmi';
import { createPublicClient, formatEther, http, parseEther, webSocket } from 'viem';
import { pulsechainV4 } from 'wagmi/chains'

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

let ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721IncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721InsufficientApproval",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOperator",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC721InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721NonexistentToken",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_fromTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_toTokenId",
				"type": "uint256"
			}
		],
		"name": "BatchMetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "MetadataUpdate",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "purchase",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "cost",
				"type": "uint256"
			}
		],
		"name": "setPublicSaleCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "rarity",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			}
		],
		"name": "setRarityURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "chestsPurchased",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "counter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLastRarity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getLastRarityOfTheUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "rarity",
				"type": "uint256"
			}
		],
		"name": "getRarityURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastRarity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lastRarityOfUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "publicSaleCost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let address = "0x22A45b1897139430b52F213Bff90F456381ae561";

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
	const [_chestsPurchasedAmount, setChestsPurchasedAmount] = useState(0);

	const [number, setNumber] = useState(null);


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
	const [_connected, setConnected] = useState(false);
	const [selectedValue, setSelectedValue] = useState("1 - 10");

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

		if (_connected) {
			//fetchLastRarity();
			fetchChestsPurchasedAmount();
		}

		// eslint-disable-next-line no-use-before-define
	}, [showErrorDiv, statusError, _connected, /*getBalance, getCost, getTotalSupply, nftMintingAmount*/]);

	/*	const { data, refetch, isSuccess } = useContractReads({
			contracts: [
				{ ...contract, functionName: 'totalSupply' },
				{ ...contract, functionName: 'max_per_wallet' },
				{ ...contract, functionName: 'owner' },
				{ ...contract, functionName: 'getTheMintPrice' },
				{ ...contract, functionName: 'MAX_SUPPLY' },
				{ ...contract, functionName: 'public_mint_status' },
	
			]
		},)
	
		useMemo(() => {
	
			if (isSuccess === true) {
				settotalSupply(Number(data[0].result))
				set_max_per_wallet(Number(data[1].result))
				//set_wlcost(formatEther(data[2].result))
				set_owner(data[2].result)
				//set_publicSaleCost(formatEther(data[4].result))
				set_publicSaleCost(Number(data[3].result)); // Convert WEI to ETH
				set_MAX_SUPPLY(data[4].result)
				set_public_mint_status(data[5].result)
			}
		}, [_totalSupply, data, isSuccess])
	*/
	//........................................//

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

			var res = await writeAsync({
				functionName: 'purchase',
				args: [selectedValue],
				value: selectedValue * Number(1000000000000000)
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

	const handleSelection = (value) => {
		setSelectedValue(value);
		setIsOpen(false); // Close the dropdown after selection
	};


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

								{number === 0 &&
									<>
										<span class="close-button-2" onClick={close}>&times;</span>

										<img src={vitalip2} />
									</>
								}

								{number === 1 &&
									<>
										<span class="close-button-2" onClick={close}>&times;</span>

										<img src={elom2} />
									</>
								}

								{number === 2 &&
									<>
										<span class="close-button-2" onClick={close}>&times;</span>

										<img src={gz2} />
									</>}

								{number === 3 &&
									<>
										<span class="close-button-2" onClick={close}>&times;</span>

										<img src={jesus2} />
									</>}

								{number === 4 &&
									<>
										<span class="close-button-2" onClick={close}>&times;</span>

										<img src={richard2} />
									</>}

								{number === 5 &&
									<>
										<span class="close-button-2" onClick={close}>&times;</span>

										<img src={satoshi2} />
									</>}

								{number === 6 &&
									<>
										<span class="close-button-2" onClick={close}>&times;</span>

										<img src={trunk2} />
									</>}


							</div>
							: null}
					</div>

				</div>

				<div className='btns3'>

					{_statusAnimations ?
						<button className='btn1' id="btn1PC" disabled><img src={chest} /> <div className='txt'><span>{_chestsPurchasedAmount}</span> OPEN CHEST</div></button> :
						<button className='btn1' id="btn1PC" onClick={onMintMob}><img src={chest} /> <div className='txt'><span>{_chestsPurchasedAmount}</span> OPEN CHEST</div></button>}
					{_statusAnimations ?
					<button id="btn1Mobile" className='btn1' disabled><img src={chest} /> <div className='txt'><span>{_chestsPurchasedAmount}</span> OPEN CHEST</div></button>:
					<button id="btn1Mobile" className='btn1' onClick={onMintMob} ><img src={chest} /> <div className='txt'><span>{_chestsPurchasedAmount}</span> OPEN CHEST</div></button>}

					<button className='btn2' onClick={purchase}><div>Purchase Chests</div></button>

					<div className="dropdown-container">
						<button className="btn2" onClick={toggleDropdown}>
							<div>{selectedValue}</div>
							<span id="arrow-icon" className={isOpen ? "rotate" : ""}>▼</span>
						</button>
						{isOpen && (
							<div id="dropdown">
								<button className="dropdown-item" onClick={() => handleSelection("1")}>1</button>
								<button className="dropdown-item" onClick={() => handleSelection("3")}>3</button>
								<button className="dropdown-item" onClick={() => handleSelection("5")}>5</button>
								<button className="dropdown-item" onClick={() => handleSelection("10")}>10</button>
							</div>
						)}
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

			{successPurchase ?
				<div class="popup-containerMain3">
					<div class="popup-containerMain">
						<div class="popupNotifications">
							<span class="close-button" onClick={close}>&times;</span>

							<img src={tic} alt="success" class="notifications" />
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
							<span class="close-button" onClick={close}>&times;</span>
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

							<img src={tic} alt="success" class="notifications" />
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
							<span class="close-button" onClick={close}>&times;</span>
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

export default ChestOpening;

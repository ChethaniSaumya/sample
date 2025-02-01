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
import terrain from "../assets/terrain.png";
import elon from "../assets//heroes2/elon.png";

import { Web3Button, Web3Modal, useWeb3Modal } from '@web3modal/react';
import { mainnet, useAccount, useContractRead, useContractReads, useContractWrite, useNetwork, usePublicClient, useSwitchNetwork, useWaitForTransaction } from 'wagmi';
import { createPublicClient, formatEther, http, parseEther, webSocket } from 'viem';
import { pulsechainV4 } from 'wagmi/chains'

var Scroll = require('react-scroll');
const images = [crd1, crd2, crd3, crd4, crd5];

let ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_initBaseURI",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_initNotRevealedUri",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_contractURI",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "OperatorNotAllowed",
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
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
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
				"internalType": "bool",
				"name": "_state",
				"type": "bool"
			}
		],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
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
				"internalType": "string",
				"name": "_newBaseExtension",
				"type": "string"
			}
		],
		"name": "setBaseExtension",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newBaseURI",
				"type": "string"
			}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_contractURI",
				"type": "string"
			}
		],
		"name": "setContractURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_MAX_SUPPLY",
				"type": "uint256"
			}
		],
		"name": "setMAX_SUPPLY",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_notRevealedURI",
				"type": "string"
			}
		],
		"name": "setNotRevealedURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_public_mint_status",
				"type": "bool"
			}
		],
		"name": "setPublic_mint_status",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_publicSaleCost",
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
				"name": "newLimit",
				"type": "uint256"
			}
		],
		"name": "setRarityExclusionLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_royaltyAddress",
				"type": "address"
			}
		],
		"name": "setRoyaltyAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_receiver",
				"type": "address"
			},
			{
				"internalType": "uint96",
				"name": "_royaltyFeesInBips",
				"type": "uint96"
			}
		],
		"name": "setRoyaltyInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toggleReveal",
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
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
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
		"inputs": [],
		"name": "baseExtension",
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
		"name": "baseURI",
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
				"name": "_salePrice",
				"type": "uint256"
			}
		],
		"name": "calculateRoyalty",
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
		"name": "contractURI",
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
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getMyMints",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "tokenid",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rarity",
						"type": "uint256"
					}
				],
				"internalType": "struct PulseHeroes.myMints[]",
				"name": "",
				"type": "tuple[]"
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
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "my_mints",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "tokenid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rarity",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "myIDs",
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
		"name": "myNFTCount",
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
		"name": "notRevealedUri",
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
		"name": "OPERATOR_FILTER_REGISTRY",
		"outputs": [
			{
				"internalType": "contract IOperatorFilterRegistry",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "originalURIrarity",
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
		"name": "paused",
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
		"name": "public_mint_status",
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
		"inputs": [],
		"name": "rarityExclusionLimit",
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
		"name": "revealed",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_salePrice",
				"type": "uint256"
			}
		],
		"name": "royaltyInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenID_Rarity",
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
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let address = "0x4D09880fC2ecA53c46B23A4912b6A2cEBd3Fe056";


const Vs = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [selectedMan, setSelectedMan] = useState(null); // State to track the clicked man
	const [showNftSection, setShowNftSection] = useState(false);
	const [isVisble, setIsVisble] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [_combat, setCombat] = useState(0);
	const [cardSelected, setCardSelected] = useState(0);
	const [currentMintIndex, setCurrentMintIndex] = useState(0);
	const [_MyMints, setFetchMyMints] = useState([]);
	const [_chestsPurchasedAmount, setChestsPurchasedAmount] = useState(0);
	const [_connected, setConnected] = useState(false);

	const rarityImages = {
		'0': 'https://bafybeibhsrq2nf4sr4abaud4u5ololygckdncoispfgooy3mcfjrtzaqzi.ipfs.w3s.link/vitalip.png',
		'1': 'https://bafybeibhsrq2nf4sr4abaud4u5ololygckdncoispfgooy3mcfjrtzaqzi.ipfs.w3s.link/gz.png',
		'2': 'https://bafybeibhsrq2nf4sr4abaud4u5ololygckdncoispfgooy3mcfjrtzaqzi.ipfs.w3s.link/satoshi.png',
		'3': 'https://bafybeibhsrq2nf4sr4abaud4u5ololygckdncoispfgooy3mcfjrtzaqzi.ipfs.w3s.link/jesus.png',
		'4': 'https://bafybeibhsrq2nf4sr4abaud4u5ololygckdncoispfgooy3mcfjrtzaqzi.ipfs.w3s.link/trunk.png',
		'5': 'https://bafybeibhsrq2nf4sr4abaud4u5ololygckdncoispfgooy3mcfjrtzaqzi.ipfs.w3s.link/elom.png',
		'6': 'https://bafybeibhsrq2nf4sr4abaud4u5ololygckdncoispfgooy3mcfjrtzaqzi.ipfs.w3s.link/richard.png',
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
		const interval = setInterval(() => {
			setIsVisble(true);
			setTimeout(() => {
				setIsVisble(false);
			}, 2500);
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {


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
	}, [_connected, _MyMints /*getBalance, getCost, getTotalSupply, nftMintingAmount*/]);


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


	const handleLeftClickMints = () => {
		setCurrentMintIndex((prevIndex) =>
			(prevIndex - 1 + _MyMints.length) % _MyMints.length
		);
	};

	const handleRightClickMints = () => {
		setCurrentMintIndex((prevIndex) =>
			(prevIndex + 1) % _MyMints.length
		);
	};

	const visibleMintImages = () => {
		let visible = [];
		for (let i = 0; i < 5; i++) {
			visible.push(_MyMints[(currentMintIndex + i) % _MyMints.length]);
		}
		return visible;
	};

	const visibleMintImagesMob = () => {
		let visible = [];
		for (let i = 0; i < 4; i++) {
			visible.push(_MyMints[(currentMintIndex + i) % _MyMints.length]);
		}
		return visible;
	};

	return (

		<div className='cont3'>
			<div className='cont-2'>
				<Navbar />
				
				{_combat > 0 ?
					<div class="popup-containerMain3">
						<div class="popup-containerMain">
							<div class="popup">
								<img src={jesusNoBg} alt="Man" class="character--2" />
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

						<div className='arrowsDiv' onClick={handleLeftClickMints}>
							<img className='arrows' src={left} alt="Left Arrow" />
						</div>

						<div className='nftSection3'>
							{_MyMints && _MyMints.length > 0 ? (

								<div className='mintedNFTSFMain'>
									{visibleMintImages().map((nft, index) => (
										<div key={index}>
											<div key={index}>
												<div className='mintedNFTSF'>
													<div class="cardMint">
														<div class="card-imageMint">
															<img
																src={rarityImages[nft.rarity]}
																alt="NFT Rarity"
															/>
															<div className="overlay">
																<div className="timer">
																	<div>03 : 54 : <span className='sec'>23</span></div>
																	<div>HOURS LEFT</div>
																</div>
															</div>
														</div>

													</div>

												</div>
											</div>

										</div>
									))}


								</div>
							) : (
								<p className="noNFTs"></p>
							)
							}
						</div>

						<div className='arrowsDiv' onClick={handleRightClickMints}>
							<img className='arrows' src={right} alt="Right Arrow" />
						</div>
					</div>

				) : null}

				{showNftSection ? (
					<div className='nftSection3Main-mob'>

						<div className='arrowsDiv' onClick={handleLeftClickMints}>
							<img className='arrows' src={left} alt="Left Arrow" />
						</div>

						<div className='nftSection3'>
							{_MyMints && _MyMints.length > 0 ? (

								<div className='mintedNFTSFMain'>
									{visibleMintImages().map((nft, index) => (
										<div key={index}>
											<div key={index}>
												<div className='mintedNFTSF'>
													<div class="cardMint">
														<div class="card-imageMint">
															<img
																src={rarityImages[nft.rarity]}
																alt="NFT Rarity"
															/>
															<div className="overlay">
																<div className="timer">
																	<div>03 : 54 : <span className='sec'>23</span></div>
																	<div>HOURS LEFT</div>
																</div>
															</div>
														</div>
														<div class="card-content">
															<p><strong>Win Rate:</strong> 5%</p>
														</div>
													</div>

												</div>
											</div>
										</div>
									))}

								</div>
							) : (
								<p className="noNFTs"></p>
							)
							}
						</div>

						<div className='arrowsDiv' onClick={handleRightClickMints}>
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
							<button
								onClick={combat}
								className="bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] px-[3.8em] py-[0.9em] transition-all duration-500 rounded-full hover:bg-right hover:shadow-[0_0_10px_0_#B014A5] hover:[text-shadow:_0_0_3px_white]"
							>
								COMBAT
							</button>
						</div>
					</div>
					: null}


				<div className='line'></div>
				<div className='wR'>WIN RATE</div>
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

	)

}
export default Vs;

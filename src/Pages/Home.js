import React, { useEffect, useState, useRef } from 'react';
import { Web3Button, Web3Modal, useWeb3Modal } from '@web3modal/react';
import { mainnet, useAccount, useContractRead, useContractReads, useContractWrite, useNetwork, usePublicClient, useSwitchNetwork, useWaitForTransaction } from 'wagmi';
import { createPublicClient, formatEther, http, parseEther, webSocket } from 'viem';
import { pulsechainV4 } from 'wagmi/chains'
import chestAnim from '../assets/Comp 1-vp9-chrome.webm';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "../components/Navbar";
import DownArrowHeadIcon from "../components/DownArrowHeadIcon";

import bg from "../assets/bg2.png";
import treasure from "../assets/treasure.png";
import richardHeroImage from "../assets/richard copy.png";
import cardLayout from "../assets/card-layout.png";
import vitalip from "../assets/heroes/vitalip.png";
import richard from "../assets/heroes/richard.png";
import gz from "../assets/heroes/gz.png";
import trunk from "../assets/heroes/trunk.png";
import jesus from "../assets/heroes/jesus.png";
import elom from "../assets/heroes/elom.png";
import satoshi from "../assets/heroes/satoshi.png";
import crystalBg from "../assets/hero-crystal-bg.png";
import Footer from "../components/Footer";
import "../styles/Home.css";
import Countdown from "../components/Countdown";
import chest from '../assets/chest.png';
import Carousel from "../components/carousel";
import right from "../assets/heroes2/right.png";
import vitalip2 from "../assets/heroes2/vitalip.png";
import richard2 from "../assets/heroes2/richard.png";
import gz2 from "../assets/heroes2/gz.png";
import trunk2 from "../assets/heroes2/trunk.png";
import jesus2 from "../assets/heroes2/jesus.png";
import elom2 from "../assets/heroes2/elon.png";
import satoshi2 from "../assets/heroes2/satoshi.png";
import correct2 from "../assets/correct2.png";
import wrong from "../assets/wrong.png";


const heroData = [
  {
    image: vitalip,
    name: "vitalip",
  },
  {
    image: gz,
    name: "gz",
  },
  {
    image: satoshi,
    name: "satoshi",
  },
  {
    image: jesus,
    name: "jesus",
  },
  {
    image: trunk,
    name: "trunk",
  },
  {
    image: elom,
    name: "elom",
  },
  {
    image: richard,
    name: "richard",
  },
  ,
];

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
			},
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "won",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "battleType",
				"type": "uint256"
			}
		],
		"name": "BattleResult",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "level_1_Battle",
		"outputs": [],
		"stateMutability": "payable",
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
		"name": "level_2_Battle",
		"outputs": [],
		"stateMutability": "payable",
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
		"name": "level_3_Battle",
		"outputs": [],
		"stateMutability": "payable",
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
				"name": "_coolingTimePeriod",
				"type": "uint256"
			}
		],
		"name": "setCoolingTimePeriod",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_default_rewards1",
				"type": "uint256"
			}
		],
		"name": "setDefault_rewards1",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_default_rewards2",
				"type": "uint256"
			}
		],
		"name": "setDefault_rewards2",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_default_rewards3",
				"type": "uint256"
			}
		],
		"name": "setDefault_rewards3",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_divider",
				"type": "uint256"
			}
		],
		"name": "setDivider",
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
				"internalType": "uint256",
				"name": "_preSaleCost",
				"type": "uint256"
			}
		],
		"name": "setPreSaleCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_presaleEndTime",
				"type": "uint256"
			}
		],
		"name": "setPresaleEndTime",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenContract",
				"type": "address"
			}
		],
		"name": "setTokenContractMinting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenDecimals",
				"type": "uint256"
			}
		],
		"name": "setTokenDecimals",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenContract",
				"type": "address"
			}
		],
		"name": "setTokenPULSEHEROESContractTransfering",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "togglePresale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "togglePublic_mint_status",
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
		"inputs": [],
		"name": "tokenWithdrawal",
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
		"inputs": [],
		"name": "_token_Contract",
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
		"inputs": [],
		"name": "battleCount",
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
		"name": "battlesInCoolingPeriod",
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
		"name": "coolingTimePeriod",
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
		"inputs": [],
		"name": "default_rewards1",
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
		"name": "default_rewards2",
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
		"name": "default_rewards3",
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
		"name": "divider",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getCoolingTime",
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
				"name": "player",
				"type": "address"
			}
		],
		"name": "getLastBattleResult",
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
		"name": "getMaxBattlesPerRarity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
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
					},
					{
						"internalType": "uint256",
						"name": "lastBattleTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "battlesRemainingInCoolingPeriod",
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
				"name": "player",
				"type": "address"
			}
		],
		"name": "getPlayerLevel",
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
		"name": "getTokenMultiplier",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
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
		"name": "IsPresaleOn",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lastBattleResult",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "lastBattleResultByToken",
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
		"name": "lastBattleTime",
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
		"name": "lastBattleTimestamp",
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
		"name": "level_1_Battle_Cost",
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
		"name": "level_2_Battle_Cost",
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
		"name": "level_3_Battle_Cost",
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
		"name": "losses",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "lossesOfTokenId",
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
			},
			{
				"internalType": "uint256",
				"name": "lastBattleTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "battlesRemainingInCoolingPeriod",
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
		"name": "myTokenIDLooses",
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
		"name": "myTokenIDWins",
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
		"name": "preSaleCost",
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
		"name": "presaleEndTime",
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
		"name": "projectedCoolingTime",
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
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract PULSEHEROES",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenDecimals",
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
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "tokenIDHistoryLooses",
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
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "tokenIDHistoryWins",
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
		"name": "tokenPULSEHEROES",
		"outputs": [
			{
				"internalType": "contract IERC20",
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
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "wins",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "winsOfTokenId",
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

let address = "0x437F7d0B9C711f2fc777C868AD1d860C82e596A1";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    className: "center",
    centerMode: true,
    centerPadding: "30px",
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
          slidesToShow: 4,
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

  const [loading, setLoading] = useState(true);
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

  const [_isPresaleOn, setIsPresaleOn] = useState(0);
  const [_presaleEndDate, setPreasleEndDate] = useState(0);
  const [_preSaleCost, setPreSaleCost] = useState(0);

  const [number, setNumber] = useState(null);
	const [_MyMints, setFetchMyMints] = useState([]);


  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 7) + 1;
    setNumber(randomNum);
  };

  const { open } = useWeb3Modal()
  const { chain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()

  const { address: walletAddress } = useAccount({
    async onConnect() {
      handleConnect()
    }
  })

  const transport = webSocket('wss://pulsechain-testnet-rpc.publicnode.com')
  //const transport = webSocket('wss://go.getblock.io/997658fff0bf424fb505a599611c550d')

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
	const [selectedRarity, setSelectedRarity] = useState(null); // To hold the selected rarity

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

  const { refetch: getPreasleEndDate } = useContractRead({
    ...contract,
    functionName: 'presaleEndTime',
  })

  const { refetch: getIsPresaleOn } = useContractRead({
    ...contract,
    functionName: 'IsPresaleOn',
  })

  const { refetch: getPreSaleCost } = useContractRead({
    ...contract,
    functionName: 'preSaleCost',
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
      }, 4000);

      return () => clearTimeout(timer);
    }

    if (showErrorDiv) {
      const timer = setTimeout(() => {
        setshowErrorDiv(false);  // Assuming you have a setter to change the state
      }, 4000);

      return () => clearTimeout(timer);
    }

    async function fetchChestsPurchasedAmount() {
      var data = await chestsPurchasedAmount();

      setChestsPurchasedAmount(Number(data.data))
      console.log("chestsPurchasedAmount : " + data.data)

    }

    async function fetchPreSaleCost() {
      var data = await getPreSaleCost();

      setPreSaleCost(Number(data.data))
      console.log("PreSaleCost : " + data.data)

    }

    async function fetchPresaleEndTime() {
      var data = await getPreasleEndDate();

      setPreasleEndDate(Number(data.data))
      console.log("PreasleEndDate : " + data.data)

    }

    async function fetchIsPresaleOn() {
      var data = await getIsPresaleOn();

      setIsPresaleOn(Number(data.data))
      console.log("PreasleEndDate : " + data.data)

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
      fetchIsPresaleOn();
      fetchPresaleEndTime();
      fetchPreSaleCost();
      fetchMyMints();
    }

    // eslint-disable-next-line no-use-before-define
  }, [showErrorDiv, statusError, _connected, _MyMints /*getBalance, getCost, getTotalSupply, nftMintingAmount*/]);

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

      let totalValue;

      if (_isPresaleOn && Date.now() < _presaleEndDate * 1000) {
        totalValue = 1000000000000000 * selectedValue;
      }

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

  async function presalePurchase(value) {
    try {

      setstatusLoadingPurchase(true)
      setstatusErrorPurchase(false)

      let totalValue;

      if (_isPresaleOn && Date.now() < _presaleEndDate * 1000) {
        totalValue = 1000000000000000 * value;
      }

      var res = await writeAsync({
        functionName: 'purchase',
        args: [value],
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

    setSpreadRun(1);
    set_chestOpen(0);

    await new Promise(resolve => setTimeout(resolve, 2300));

    setCarouselRun(1);
    setArrowShow(1);
    setSpreadRun(0);

    set_chestOpen(0);

    await new Promise(resolve => setTimeout(resolve, 16000));

    setCardShow(1);
    setArrowShow(0);
    await new Promise(resolve => setTimeout(resolve, 5000));
    setCarouselRun(0);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setCardShow(0);

    await new Promise(resolve => setTimeout(resolve, 500));
    window.location.reload(true);
  };


  const carouseOpenMob = async () => {
    setCarouselRunMob(1);
    setArrowShow(1);
    set_chestOpen(0);

    await new Promise(resolve => setTimeout(resolve, 16000));

    setCardShow(1);
    setArrowShow(0);
    await new Promise(resolve => setTimeout(resolve, 5000));
    setCarouselRun(0);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setCardShow(0);

    await new Promise(resolve => setTimeout(resolve, 500));
    window.location.reload(true);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const close = () => {
    window.location.reload(true);
  }

  const closeError = () => {
	setstatusErrorPurchase(false);
}

  const handleSelection = (value) => {
    setSelectedValue(value);
    setIsOpen(false);

    if (_isPresaleOn && Date.now() < Number(_presaleEndDate) * 1000) {
      presalePurchase(value);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white bg-[#41305f] flex flex-col justify-between overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Top left leaklight */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 size-[300px] sm:size-[375px] md:size-[425px] lg:size-[475px] xl:size-[515px] 2xl:size-[550px] bg-[#9F129A] rounded-full blur-[80px] sm:blur-[90px] md:blur-[100px] lg:blur-[115px] xl:blur-[130px] 2xl:blur-[140px]"></div>

      {/* Middle right leaklight */}
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 size-[300px] sm:size-[375px] md:size-[425px] lg:size-[475px] xl:size-[515px] 2xl:size-[550px] bg-[#9F129A] rounded-full blur-[80px] sm:blur-[90px] md:blur-[100px] lg:blur-[115px] xl:blur-[130px] 2xl:blur-[140px]"></div>

      {/* Hero section */}
      <section className="relative container mx-auto px-[36px] mt-[50px] z-[2]">
        <div className="grid grid-cols-12 items-end sm:items-center">
          <div className="col-span-7 lg:col-span-6">
            <div className="hidden sm:block">
              <h3 className="font-montserrat-alternates text-[16px] sm:text-[22px] md:text-[28px] lg:text-[34px] xl:text-[37px] 2xl:text-[40px]">
                Pulse Your Way to Victory!
              </h3>
              <h1 className="font-vermin-vibes-v text-[29px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px]">
                Pulse
                <span className="text-[#F241E5] font-vermin-vibes-v">r</span>oes
              </h1>
              <div className="w-[12ch] h-1 bg-[#D9D9D9] text-[29px] mt-3 sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px]"></div>
            </div>
            <div id="mainPageBTns" className="flex flex-col sm:flex-row items-start gap-[1em] text-[13px] mt-[1.5em] sm:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[26px] 2xl:text-[28px]">
              <div className="flex flex-col-reverse sm:flex-col">
                <div className="relative">
                  <button
                    className="relative flex items-center gap-x-[1.3125em] bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v ps-[0.8em] pe-[0.3em] py-[0.2em] sm:px-[0.8em] 2xl:px-[1.15625em] transition-all duration-500 hover:bg-right hover:shadow-[0_0_5px_0_#B014A5] hover:[text-shadow:_0_0_3px_white] z-[1] "
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    BUY CHEST{" "}
                    <div
                      className={`${isOpen ? "-rotate-180" : ""
                        } transition-transform duration-200 ease-in-out`}
                    >
                      <DownArrowHeadIcon />
                    </div>
                  </button>

                  <div
                    className={`absolute top-[36px] sm:top-[46px] md:top-[56px] lg:top-[66px] xl:top-[76px] 2xl:top-[80px] left-0 right-0 w-full font-vermin-vibes-v text-[12px] bg-[#D9D9D94D] 2xl:px-5 backdrop-blur-[10px] overflow-hidden border border-white/50 transition-all duration-500 sm:text-[13px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[19px] ${!isOpen ? "max-h-0" : "max-h-[500px]"
                      }`}
                  >

                    <button onClick={() => handleSelection("1")} className="w-full flex items-center justify-center gap-x-[1.3125em] py-3 border-b border-b-white/50 transition-colors duration-100 hover:text-white/80">
                      BUY CHEST
                      <span className="font-vermin-vibes-v">01</span>
                    </button>

                    <button onClick={() => handleSelection("3")} className="w-full flex items-center justify-center gap-x-[1.3125em] py-3 border-b border-b-white/50 transition-colors duration-100 hover:text-white/80">
                      BUY CHEST
                      <span className="font-vermin-vibes-v">03</span>
                    </button>

                    <button onClick={() => handleSelection("5")} className="w-full flex items-center justify-center gap-x-[1.3125em] py-3 border-b border-b-white/50 transition-colors duration-100 hover:text-white/80">
                      BUY CHEST
                      <span className="font-vermin-vibes-v">05</span>
                    </button>

                    <button onClick={() => handleSelection("10")} className="w-full flex items-center justify-center gap-x-[1.3125em] py-3 transition-colors duration-100 hover:text-white/80">
                      BUY CHEST
                      <span className="font-vermin-vibes-v">10</span>
                    </button>
                  </div>
                </div>
                <Countdown />

                <button className='btn1-2' id="btn1Mob-3" onClick={onMint}><img src={chest} /> <div className='txt'><span>{_chestsPurchasedAmount}</span> OPEN CHEST</div></button>

              </div>
              <div className="w-[113px] sm:w-[132px] md:w-[151px] lg:w-[170px] xl:w-[179px] 2xl:w-[188px]">
                <img src={treasure} alt="Pulsehero chest" />
              </div>
              <button className='btn1-2' id="btn1Mob-2" onClick={onMintMob}><img src={chest} /> <div className='txt'><span>{_chestsPurchasedAmount}</span> OPEN CHEST</div></button>

              <button className='btn1-2' id="btn1PC-2" onClick={onMint}><img src={chest} /> <div className='txt'><span>{_chestsPurchasedAmount}</span> OPEN CHEST</div></button>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-6">
            <div className="relative z-[1] flex items-center justify-center">
              <img src={richardHeroImage} alt="Richard" className="w-32 sm:w-40 md:w-48 lg:w-40 xl:w-58" />
              <div className="absolute left-0 right-0 mx-auto bottom-[3%] w-14 sm:w-18 md:w-24 lg:w-28 xl:w-30 2xl:w-32 h-[1000px] bg-gradient-to-t from-[#460844] to-[#AC14A6] -z-[1]"></div>
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <h3 className="font-montserrat-alternates text-[16px] sm:text-[22px] md:text-[28px] lg:text-[34px] xl:text-[37px] 2xl:text-[40px]">
            Pulse Your Way to Victory!
          </h3>
          <h1 className="font-vermin-vibes-v text-[29px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px]">
            Pulse
            <span className="text-[#F241E5] font-vermin-vibes-v">r</span>oes
          </h1>
          <div className="w-[12ch] h-1 bg-[#D9D9D9] text-[29px] mt-3 sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px]"></div>
        </div>
      </section>

      {/* Card section PC*/}
      <section id="carouselHomePage" className="relative mt-10">
        <div className="absolute top-0 left-0 right-0 w-fit mx-auto -translate-y-1/4">
          <img src={crystalBg} alt="Crystal" className="size-fit" />
        </div>

        <div className="relative container mx-auto pb-[100px] z-[1]">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 lg:flex-nowrap">
            {heroData.map(({ image, name }) => (
              <article id="articleImgs"
                key={name}
                className="relative w-fit max-w-fit flex items-end justify-end transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={cardLayout}
                  alt="Card layout"
                  className="w-[122px] h-[170px] sm:w-[136px] sm:h-[188px] md:w-[90px] md:h-[125px] lg:w-[100px] lg:h-[139px] xl:w-[122px] xl:h-[170px] 2xl:w-[176px] 2xl:h-[232px]"
                />
                <div
                  className="absolute inset-0 w-[90%] h-[98%] m-auto bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <p className="absolute bottom-0 left-0 right-0 w-fit mx-auto translate-y-full font-vermin-vibes-v text-[18px] z-[1]">
                  {name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Card section Mobile*/}
      <section id="carouselHomePageMob" className="relative mt-10">
        <div className="absolute top-0 left-0 right-0 w-fit mx-auto -translate-y-1/4">
          <img src={crystalBg} alt="Crystal" className="size-fit" />
        </div>

        <div className="relative container mx-auto pb-[100px] z-[1]">
          {!(carouselRun > 0 || carouselRunMob > 0) ?

            <Slider {...settings}>
              {heroData.map(({ image, name }) => (
                <article className="relative w-fit max-w-fit mx-auto my-10 flex items-end justify-end transition-transform duration-300 hover:-translate-y-1">
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
            </Slider> : null}
        </div>
      </section>

      {carouselRun > 0 ? (
        <div class="popup-container_carousel">
          <div class="popup-container_carousel2">
            <>
              <>
                <Carousel number={number} />
                {arrowShow > 0 ?
                  <div class="highlighter2"><img className='arrow' src={right} /></div> : null}
              </>

              {cardShow > 0 ?
                <div className='popUpImgMain'>

                  {number === 0 &&
                    <>
                      <span class="close-button-2" onClick={close}>&times;</span>
                      <div className='popUpImgBG'>
                        <img src={vitalip2} />
                      </div>
                    </>
                  }

                  {number === 1 &&
                    <>
                      <span class="close-button-2" onClick={close}>&times;</span>
                      <div className='popUpImgBG'>
                        <img src={gz2} />
                      </div>
                    </>
                  }

                  {number === 2 &&
                    <>
                      <span class="close-button-2" onClick={close}>&times;</span>
                      <div className='popUpImgBG'>
                        <img src={satoshi2} />
                      </div>
                    </>}

                  {number === 3 &&
                    <>
                      <span class="close-button-2" onClick={close}>&times;</span>
                      <div className='popUpImgBG'>
                        <img src={jesus2} />
                      </div>
                    </>}

                  {number === 4 &&
                    <>
                      <span class="close-button-2" onClick={close}>&times;</span>
                      <div className='popUpImgBG'>
                        <img src={trunk2} />
                      </div>
                    </>}

                  {number === 5 &&
                    <>
                      <span class="close-button-2" onClick={close}>&times;</span>
                      <div className='popUpImgBG'>
                        <img src={elom2} />
                      </div>
                    </>}

                  {number === 6 &&
                    <>
                      <span class="close-button-2" onClick={close}>&times;</span>
                      <div className='popUpImgBG'>
                        <img src={richard2} />
                      </div>
                    </>}


                </div>

                : null}
            </>
          </div>
        </div>) : null}

      {spreadRun > 0 ?

        <div class="popup-container_carousel">
          <div class="popup-container_carousel2">

            <div className="carouselImgs-2">
              <img src={vitalip2} style={{ "--target-left": "10vw" }} alt="Vitalip" />
              <img src={richard2} style={{ "--target-left": "23vw" }} alt="Richard" />
              <img src={gz2} style={{ "--target-left": "36vw" }} alt="GZ" />
              <img src={trunk2} style={{ "--target-left": "49vw" }} alt="Trunk" />
              <img src={jesus2} style={{ "--target-left": "62vw" }} alt="Jesus" />
              <img src={elom2} style={{ "--target-left": "75vw" }} alt="Elom" />
              <img src={satoshi2} style={{ "--target-left": "88vw" }} alt="Satoshi" />

            </div>
          </div>
        </div> : null}

      {carouselRunMob > 0 ?
        <div class="popup-container_carousel">
          <div class="popup-container_carousel2">
            <>
              <Carousel number={number} />
              {arrowShow > 0 ?
                <div class="highlighter2"><img className='arrow' src={right} /></div> : null}
            </>

            {cardShow > 0 ?
              <div className='popUpMain1'>
                <div className='popUpImgMain'>

                  {number === 0 &&
                    <>
                      <span class="close-button-2" onClick={close}>&times;</span>
                      <div className='popUpImgBG'>
                        <img src={vitalip2} />
                      </div>
                    </>
                  }

                  {number === 1 &&
                    <>
                      <span class="close-button-2" onClick={close}>&times;</span>
                      <div className='popUpImgBG'>
                        <img src={gz2} />
                      </div>
                    </>
                  }

                  {number === 2 &&
                    <>
                      <span class="close-button-2" onClick={close}>&times;</span>
                      <div className='popUpImgBG'>
                        <img src={satoshi2} />
                      </div>
                    </>}

                  {number === 3 &&
                    <>
                      <span class="close-button-2" onClick={close}>&times;</span>
                      <div className='popUpImgBG'>
                        <img src={jesus2} />
                      </div>
                    </>}

                  {number === 4 &&
                    <>
                      <span class="close-button-2" onClick={close}>&times;</span>
                      <div className='popUpImgBG'>
                        <img src={trunk2} />
                      </div>
                    </>}

                  {number === 5 &&
                    <>
                      <span class="close-button-2" onClick={close}>&times;</span>
                      <div className='popUpImgBG'>
                        <img src={elom2} />
                      </div>
                    </>}

                  {number === 6 &&
                    <>
                      <span class="close-button-2" onClick={close}>&times;</span>
                      <div className='popUpImgBG'>
                        <img src={richard2} />
                      </div>
                    </>}


                </div>
              </div>
              : null}
          </div>
        </div> : null}

      {_chestOpen > 0 ?
        < div class="popup-container_chest">
          <div class="popup-container_chest2">
            <div className='treasureIMG2DivNew'>
              <video id="treasureIMG2-home" className={`${cardShow > 0 ? "fade-out" : ""
                } ${carouselRun > 0 ? "hidden" : ""}`} autoPlay loop muted playsInline>
                <source src={chestAnim} type="video/webm" />
              </video>
            </div>
          </div></div> : null
      }

      {
        successPurchase ?
          <div class="popup-containerMain3">
            <div class="popup-containerMain">
              <div class="popupNotifications">
                <span class="close-button" onClick={close}>&times;</span>

                <img src={correct2} alt="success" class="notifications" />
                <p class="popup-text">CHEST PURCHASED SUCCESSFULLY!</p>
              </div>
            </div>
          </div> : null
      }

      {
        statusErrorPurchase ?
          <div class="popup-containerMain3">
            <div class="popup-containerMain">
              <div class="popupNotifications">
                <span class="close-button" onClick={closeError}>&times;</span>

                <img src={wrong} alt="success" class="notifications" />
                <p class="popup-text" id="wrongMsg">SORRY SOMETHING WENT WRONG <br /> PLEASE TRY AGAIN LATER!</p>
              </div>
            </div>
          </div> : null
      }

      {
        statusLoadingPurchase ?
          <div class="popup-containerMain3">
            <div class="popup-containerMain">
              <div class="popupNotificationsLoad">
                <div class="loader"></div>
                <p class="popup-text">LOADING</p>
              </div>
            </div>
          </div> : null
      }


      {/*success ?
				<div class="popup-containerMain3">
					<div class="popup-containerMain">
						<div class="popupNotifications">
							<span class="close-button" onClick={close}>&times;</span>

							<img src={correct2} alt="success" class="notifications" />
							<p class="popup-text">MINTED SUCCESSFULLY!</p>
						</div>
					</div>
				</div> : null*/}

      {
        statusError ?
          <div class="popup-containerMain3">
            <div class="popup-containerMain">
              <div class="popupNotifications">
                <span class="close-button" onClick={closeError}>&times;</span>

                <img src={wrong} alt="success" class="notifications" />
                <p class="popup-text" id="wrongMsg">SORRY SOMETHING WENT WRONG <br /> PLEASE TRY AGAIN LATER!</p>
              </div>
            </div>
          </div> : null
      }

      {
        statusLoading ?
          <div class="popup-containerMain3">
            <div class="popup-containerMain">
              <div class="popupNotifications">
                <div class="loader"></div>
                <p class="popup-text">LOADING, PLEASE WAIT</p>
              </div>
            </div>
          </div> : null
      }

      {
        showErrorDivPurchase ?
          <div class="popup-containerMain3">
            <div class="popup-containerMain">
              <div class="popupNotifications">
                <div class="loader"></div>
                <p class="popup-text">LOADING, PLEASE WAIT</p>
              </div>
            </div>
          </div> : null
      }

      {
        showErrorDiv ?
          <div class="popup-containerMain3">
            <div class="popup-containerMain">
              <div class="popupNotifications">
                <span class="close-button" onClick={close}>&times;</span>
                <img src={wrong} alt="success" class="notifications" />
                <p class="popup-text" id="wrongMsg">INSUFFICIENT FUNDS</p>
              </div>
            </div>
          </div> : null
      }

      <Footer />
    </div >
  );
};

export default Home;

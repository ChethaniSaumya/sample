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
import correct2 from "../assets/correct2.png";
import wrong from "../assets/wrong.png";
import bidel from "../assets/onRocks/biden.png";
import jelome from "../assets/onRocks/jerome.png";
import interpool from "../assets/onRocks/interpool.png";
import img0 from "../assets/onRocks/0.png";
import img1 from "../assets/onRocks/1.png";
import img2 from "../assets/onRocks/2.png";
import img3 from "../assets/onRocks/3.png";
import img4 from "../assets/onRocks/4.png";
import img5 from "../assets/onRocks/5.png";
import img6 from "../assets/onRocks/6.png";

import img0_ from "../assets/qPics/0.png";
import img1_ from "../assets/qPics/1.png";
import img2_ from "../assets/qPics/2.png";
import img3_ from "../assets/qPics/3.png";
import img4_ from "../assets/qPics/4.png";
import img5_ from "../assets/qPics/5.png";
import img6_ from "../assets/qPics/6.png";

import { Web3Button, Web3Modal, useWeb3Modal } from '@web3modal/react';
import { mainnet, useAccount, useContractRead, useContractReads, useContractWrite, useNetwork, usePublicClient, useSwitchNetwork, useWaitForTransaction } from 'wagmi';
import { createPublicClient, formatEther, http, parseEther, webSocket } from 'viem';
import { pulsechainV4 } from 'wagmi/chains'

var Scroll = require('react-scroll');
const images = [crd1, crd2, crd3, crd4, crd5];

//Token Contract
//0x97C78C0Aff3dC73bc377C84CAC2AA36F32553415

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

const Vs = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showNftSection, setShowNftSection] = useState(false);
	const [isVisble, setIsVisble] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [_combat, setCombat] = useState(0);
	const [currentMintIndex, setCurrentMintIndex] = useState(0);
	const [_MyMints, setFetchMyMints] = useState([]);
	const [_chestsPurchasedAmount, setChestsPurchasedAmount] = useState(0);
	const [_connected, setConnected] = useState(false);
	const [selectedCardImage, setSelectedCardImage] = useState(null);
	const [statusErrorPurchase, setstatusErrorPurchase] = useState("");
	const [showErrorDivPurchase, setshowErrorDivPurchase] = useState("");
	const [statusLoadingPurchase, setstatusLoadingPurchase] = useState("");
	const [successPurchase, setsuccessPurchase] = useState("");
	const [showErrorDiv, setshowErrorDiv] = useState("");
	const [cardSelected, setCardSelected] = useState(0);
	const [selectedMan, setSelectedMan] = useState(null);
	const [selectedManImage, setSelectedManImage] = useState(null);
	const [selectedMintedNft, setSelectedMintedNft] = useState(null);
	const [selectedMintedNft2, setSelectedMintedNft2] = useState(null);
	const [selectedMintedNft_winner, setSelectedMintedNft_winner] = useState(null);
	const [_belowHeroes, set_belowHeroes] = useState(true);
	const [_lastBattleResultByToken, setLastBattleResultByToken] = useState(null);
	const [battleResultCame, setBattleResultCame] = useState(false);
	const [battling, setBattling] = useState(false);
	const [tokenIDinAction, setTokenIDinAction] = useState();
	const [_selectedDifficulty, setSelectedDifficulty] = useState('');

	const close = () => {
		window.location.reload(true);
	}

	const closeError = () => {
		setstatusErrorPurchase(false);
	}
	
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
		args: [walletAddress],
	})

	// Function to handle selecting a character (Man 1, Man 2, Man 3)
	const handleSelectMan = (manKey, manImage, difficulty) => {
		setShowNftSection(true);
		setSelectedMan(manKey);
		setSelectedManImage(manImage);
		setSelectedDifficulty(difficulty);
	};

	// Map selectedMan to the correct image
	const getBattleManImage = () => {
		if (selectedMan === 'man1') return bidel;
		if (selectedMan === 'man2') return jelome;
		if (selectedMan === 'man3') return interpool;
		return null;
	};

	const battleImages = {
		'0': img0,
		'1': img1,
		'2': img2,
		'3': img3,
		'4': img4,
		'5': img5,
		'6': img6,
	};

	const battleImages2 = {
		'0': img0_,
		'1': img1_,
		'2': img2_,
		'3': img3_,
		'4': img4_,
		'5': img5_,
		'6': img6_,
	};

	const handleSelectMintedNft = (nft) => {
		setSelectedMintedNft(battleImages[nft.rarity]);
		setSelectedMintedNft2([nft.tokenid]);
		setSelectedMintedNft_winner(battleImages2[nft.rarity]);

		console.log("nft.tokenId : " + nft.tokenid);
		console.log("nft.rarity : " + nft.rarity);
		console.log("nft.battleImages : " + battleImages[nft.rarity]);
	};


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
				console.log("fetchMyMints data[0]: " + data.data[1].tokenid);
				console.log("lastBattleTime: " + data.data[1].lastBattleTime);
				console.log("battlesRemainingInCoolingPeriod_trump: " + data.data[1].battlesRemainingInCoolingPeriod);
				console.log("battlesRemainingInCoolingPeriod_vitalip: " + data.data[0].battlesRemainingInCoolingPeriod);

			} catch (error) {
				console.error("Error fetching mints:", error);
			}
		}

		/*if (battleResultCame) {

			console.log("battleResultCameUSEEFFECT" + battleResultCame);
			fetchLastBattleResultByToken();

		} else {

			console.log("battleResultCameUSEEFFECT- false" + battleResultCame);

		}*/



		if (_connected) {
			//fetchLastRarity();
			fetchChestsPurchasedAmount();
			fetchMyMints();

		}

		// eslint-disable-next-line no-use-before-define
	}, [_connected, _MyMints, battleResultCame /*getBalance, getCost, getTotalSupply, nftMintingAmount*/]);


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
			setShowNftSection(true);
			setCardSelected(1);
		} else {
			setShowNftSection(true);
			setCardSelected(0);
		}

		setSelectedMan((prevMan) => (prevMan === man ? null : man));

		// Store the selected card image
		setSelectedCardImage(image);
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
		let custom;

		if (_MyMints.length >= 5) {
			custom = 5;
		} else {
			custom = _MyMints.length;
		}

		for (let i = 0; i < custom; i++) {
			visible.push(_MyMints[(currentMintIndex + i) % _MyMints.length]);
		}
		return visible;
	};

	const visibleMintImagesMob = () => {
		let visible = [];
		let custom;

		if (_MyMints.length >= 4) {
			custom = 4;
		} else {
			custom = _MyMints.length;
		}

		for (let i = 0; i < custom; i++) {
			visible.push(_MyMints[(currentMintIndex + i) % _MyMints.length]);
		}
		return visible;
	};


	const { writeAsync } = useContractWrite({
		...contract,
		onError(error) {
			if (error.message.includes('balance')) {
				setstatusError(true)
				setstatusLoading(false)
			}
		}
	})

	const { refetch: getLastBattleResultByToken } = useContractRead({
		...contract,
		functionName: 'lastBattleResultByToken',
		args: tokenIDinAction ? [tokenIDinAction] : undefined, // Prevents invalid args
		enabled: !!tokenIDinAction // Prevents automatic execution if tokenIDinAction is null
	});

	async function fetchLastBattleResultByToken(tokenId) {
		setTokenIDinAction(tokenId);

		setBattling(true);

		await new Promise(resolve => setTimeout(resolve, 5000));
		console.log("tokenIDinAction : " + tokenIDinAction);

		var data = await getLastBattleResultByToken();

		setBattling(false);
		setLastBattleResultByToken(Number(data.data))

		console.log("tokenId : " + tokenId);
		console.log("setLastBattleResultByToken : " + data.data);
		console.log("tokenIDinAction : " + tokenIDinAction);

	}

	async function level_1_Battle(tokenId) {
		try {
			setstatusLoadingPurchase(true)
			setstatusErrorPurchase(false)

			const battleCost = BigInt(0.01 * 10 ** 18);

			var res = await writeAsync({
				functionName: 'level_1_Battle',
				args: [tokenId],
				value: battleCost.toString() // Send 0.01 Ether in Wei
			});


			var result = await publicClient.waitForTransactionReceipt(res)
			if (result.status === 'success') {
				//setstatusErrorPurchase(false)
				//setsuccessPurchase(true)
				setstatusLoadingPurchase(false)
				//setshowErrorDivPurchase(false);
				//setBattleResultCame(true);

				console.log("txn successful");


				await new Promise(resolve => setTimeout(resolve, 2000));

				console.log("tokenIDinAction - tokenId:" + tokenId);

				//await fetchLastBattleResultByToken(tokenId); // Pass tokenId here		

				//await new Promise(resolve => setTimeout(resolve, 5000));
				//window.location.reload(true);

				fetchLastBattleResultByToken(tokenId);

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

				//await new Promise(resolve => setTimeout(resolve, 5000));
				//window.location.reload(true);
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

	async function level_2_Battle(tokenId) {
		try {
			setstatusLoadingPurchase(true)
			setstatusErrorPurchase(false)

			const battleCost = BigInt(0.02 * 10 ** 18);

			var res = await writeAsync({
				functionName: 'level_2_Battle',
				args: [tokenId],
				value: battleCost.toString() // Send 0.01 Ether in Wei
			});


			var result = await publicClient.waitForTransactionReceipt(res)
			if (result.status === 'success') {
				//setstatusErrorPurchase(false)
				//setsuccessPurchase(true)
				setstatusLoadingPurchase(false)
				//setshowErrorDivPurchase(false);
				//setBattleResultCame(true);

				console.log("txn successful");


				await new Promise(resolve => setTimeout(resolve, 2000));

				console.log("tokenIDinAction - tokenId:" + tokenId);

				//await fetchLastBattleResultByToken(tokenId); // Pass tokenId here		

				//await new Promise(resolve => setTimeout(resolve, 5000));
				//window.location.reload(true);

				fetchLastBattleResultByToken(tokenId);

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

				//await new Promise(resolve => setTimeout(resolve, 5000));
				//window.location.reload(true);
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

	async function level_3_Battle(tokenId) {
		try {
			setstatusLoadingPurchase(true)
			setstatusErrorPurchase(false)

			const battleCost = BigInt(0.03 * 10 ** 18);

			var res = await writeAsync({
				functionName: 'level_3_Battle',
				args: [tokenId],
				value: battleCost.toString() // Send 0.01 Ether in Wei
			});


			var result = await publicClient.waitForTransactionReceipt(res)
			if (result.status === 'success') {
				//setstatusErrorPurchase(false)
				//setsuccessPurchase(true)
				setstatusLoadingPurchase(false)
				//setshowErrorDivPurchase(false);
				//setBattleResultCame(true);

				console.log("txn successful");


				await new Promise(resolve => setTimeout(resolve, 2000));

				console.log("tokenIDinAction - tokenId:" + tokenId);

				//await fetchLastBattleResultByToken(tokenId); // Pass tokenId here		

				//await new Promise(resolve => setTimeout(resolve, 5000));
				//window.location.reload(true);

				fetchLastBattleResultByToken(tokenId);

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

				//await new Promise(resolve => setTimeout(resolve, 5000));
				//window.location.reload(true);
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

	return (

		<div id="cont3Main" className='cont3'>
			<div className='cont-2'>
				<Navbar />

				{_lastBattleResultByToken ?
					<div class="popup-containerMain3">
						<div class="popup-containerMain">
							<div class="popup">
								<img src={selectedMintedNft_winner} alt="Man" class="character--2" />
								<span class="close-button" onClick={close}>&times;</span>
								<p class="popup-text">YOU WIN!</p>
							</div>
						</div>
					</div> : null}

				{_lastBattleResultByToken == false ?
					<div className="popup-containerMain3">
						<div className="popup-containerMain">
							<div className="popup">
								<img src={selectedMintedNft_winner} alt="Man" className="character--2" />
								<span className="close-button" onClick={close}>&times;</span>
								<p className="popup-text">YOU LOSE!</p>
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


				{!(selectedManImage && selectedMintedNft) && showNftSection ? (
					<div className='nftSection3Main'>

						<div className='arrowsDiv' onClick={handleLeftClickMints}>
							<img className='arrows' src={left} alt="Left Arrow" />
						</div>

						<div className='nftSection3'>
							{_MyMints && _MyMints.length > 0 ? (

								<div className='mintedNFTSFMain'>
									{visibleMintImages().map((nft, index) => {

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
												<div className='mintedNFTSF'>
													<div className="cardMint">
														<div className="card-imageMint">
															<img
																src={rarityImages[nft.rarity]}
																alt="NFT Rarity"
																onClick={/*timeDiff < 0 &&*/ Number(nft.battlesRemainingInCoolingPeriod) > 0 ? () => handleSelectMintedNft(nft) : undefined}
																style={{ cursor: /*timeDiff < 0 && */Number(nft.battlesRemainingInCoolingPeriod) > 0 ? "pointer" : "not-allowed", opacity:/* timeDiff < 0 &&*/ Number(nft.battlesRemainingInCoolingPeriod) > 0 ? 1 : 0.5 }}
															/>

															<div className="overlay">
																{timeDiff > 0 && Number(nft.battlesRemainingInCoolingPeriod) < 1 ? (
																	<div className="timer">
																		<div>{hours} : {minutes} : <span className='sec'>{seconds}</span></div>
																		<div>TIME LEFT</div>
																	</div>
																) : (<div></div>)}
															</div>
														</div>

														<div className="card-content">
															<p><strong>Fights Left:</strong> {Number(nft.battlesRemainingInCoolingPeriod)}</p>
														</div>
													</div>
												</div>
											</div>
										);
									})}
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

				{!(selectedManImage && selectedMintedNft) && showNftSection ? (
					<div className='nftSection3Main-mob'>

						<div className='arrowsDiv' onClick={handleLeftClickMints}>
							<img className='arrows' src={left} alt="Left Arrow" />
						</div>

						<div className='nftSection3'>
							{_MyMints && _MyMints.length > 0 ? (

								<div className='mintedNFTSFMain'>
									{visibleMintImagesMob().map((nft, index) => {

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
												<div className='mintedNFTSF'>
													<div className="cardMint">
														<div className="card-imageMint">
															<img
																src={rarityImages[nft.rarity]}
																alt="NFT Rarity"
																onClick={/*timeDiff < 0 &&*/ Number(nft.battlesRemainingInCoolingPeriod) > 0 ? () => handleSelectMintedNft(nft) : undefined}
																style={{ cursor: /*timeDiff < 0 && */Number(nft.battlesRemainingInCoolingPeriod) > 0 ? "pointer" : "not-allowed", opacity:/* timeDiff < 0 &&*/ Number(nft.battlesRemainingInCoolingPeriod) > 0 ? 1 : 0.5 }}
															/>

															<div className="overlay">
																{timeDiff > 0 && Number(nft.battlesRemainingInCoolingPeriod) < 1 ? (
																	<div className="timer">
																		<div>{hours} : {minutes} : <span className='sec'>{seconds}</span></div>
																		<div>TIME LEFT</div>
																	</div>
																) : (<div></div>)}
															</div>
														</div>

														<div className="card-content">
															<p><strong>Fights Left:</strong> {Number(nft.battlesRemainingInCoolingPeriod)}</p>
														</div>
													</div>
												</div>
											</div>
										);
									})}
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

				{selectedManImage && selectedMintedNft ? (
					<div className='battleSectionMain'>
						<div className='battleSection'>
							<div className='battleSection2'>
								<div>
									<img id="bar1" src={bar1} />
									<img id="battleImgs" src={selectedMintedNft} alt="Selected Minted NFT" />
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
									<img id="battleImgs" src={getBattleManImage()} alt="Selected Man" />
								</div>
							</div>
						</div>

						<div className='combat'>
							{_selectedDifficulty == '80' ?

								<button
									onClick={() => level_1_Battle(selectedMintedNft2)}
									className="bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] px-[3.8em] py-[0.9em] transition-all duration-500 rounded-full hover:bg-right hover:shadow-[0_0_10px_0_#B014A5] hover:[text-shadow:_0_0_3px_white]"
								>
									COMBAT
								</button> : null}

							{_selectedDifficulty == '60' ?

								<button
									onClick={() => level_2_Battle(selectedMintedNft2)}
									className="bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] px-[3.8em] py-[0.9em] transition-all duration-500 rounded-full hover:bg-right hover:shadow-[0_0_10px_0_#B014A5] hover:[text-shadow:_0_0_3px_white]"
								>
									COMBAT
								</button> : null}

							{_selectedDifficulty == '25' ?

								<button
									onClick={() => level_3_Battle(selectedMintedNft2)}
									className="bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] px-[3.8em] py-[0.9em] transition-all duration-500 rounded-full hover:bg-right hover:shadow-[0_0_10px_0_#B014A5] hover:[text-shadow:_0_0_3px_white]"
								>
									COMBAT
								</button> : null}
						</div>
					</div>
				) : null}

				{/*!(selectedManImage && selectedMintedNft) && ()*/}
				<>
					<div className='line'></div>

					<div className='wR'>WIN RATE</div>
					<div className='nftSection2'>
						<img
							src={man1}
							alt="Man 1"
							className={selectedMan === 'man1' ? 'selected' : ''}
							onClick={() => handleSelectMan('man1', man1, '80')}
						/>
						<img
							src={man2}
							alt="Man 2"
							className={selectedMan === 'man2' ? 'selected' : ''}
							onClick={() => handleSelectMan('man2', man2, '60')}
						/>
						<img
							src={man3}
							alt="Man 3"
							className={selectedMan === 'man3' ? 'selected' : ''}
							onClick={() => handleSelectMan('man3', man3, '25')}
						/>
					</div>
				</>


				{
					successPurchase ?
						<div class="popup-containerMain3">
							<div class="popup-containerMain">
								<div class="popupNotifications">
									<span class="close-button" onClick={close}>&times;</span>

									<img src={correct2} alt="success" class="notifications" />
									<p class="popup-text">TRANSACTION SUCCESSFULLY!</p>
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

				{
					battling ?

						<div class="popup-containerMain3">
							<div class="popup-containerMain">
								<div class="popupNotificationsLoad">
									<div class="loader"></div>
									<p class="popup-text">BATTLING</p>
								</div>
							</div>
						</div>
						: null
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

				<div>

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

		</div>

	)

}
export default Vs;

import React, { useEffect, useState } from 'react';
import "../styles/ChestOpening.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useAccount, useContractRead, useContractReads } from 'wagmi';
import { pulsechainV4 } from 'wagmi/chains'
import contractSecBattle from '../Contracts/contractSecBattle.json';
import bg from "../assets/bg4.png";
import logo from "../assets/logo.png";

const address = contractSecBattle.address;
const ABI = contractSecBattle.abi;

const battleImages = {
	'1': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/1.png',
	'2': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/2.png',
	'3': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/3.png',
	'4': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/4.png',
	'5': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/5.png',
	'6': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/6.png',
	'7': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/7.png',
	'8': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/8.png',
	'9': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/9.png',
	'10': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/10.png',
	'11': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/11.png',
	'12': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/12.png',
	'13': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/13.png',
	'14': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/14.png',
	'15': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/15.png',
	'16': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/16.png',
	'17': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/17.png',
	'18': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/18.png',
	'19': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/19.png',
	'20': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/20.png',
	'21': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/21.png',
	'22': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/22.png',
	'23': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/23.png',
	'24': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/24.png',
	'25': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/25.png',
	'26': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/26.png',
	'27': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/27.png',
	'28': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/28.png',
	'29': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/29.png',
	'30': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/30.png',
	'31': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/31.png',
	'32': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/32.png',
	'33': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/33.png',
	'34': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/34.png',
	'35': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/35.png',
	'36': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/36.png',
	'37': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/37.png',
	'38': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/38.png',
	'39': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/39.png',
	'40': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/40.png',
	'41': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/41.png',
	'42': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/42.png',
	'43': 'https://bafybeicmpyniqozqe7fdbjipw4ltv2ecl6ilpwkqh4ph2z7yx6s32py4em.ipfs.w3s.link/43.png'
};

const battleImgNames = {
	'1': 'Fragments',
	'2': 'Fragments',
	'3': 'Fragments',
	'4': 'Fragments',
	'5': 'Fragments',
	'6': 'Fragments',
	'7': 'Hex Necklace',
	'8': 'Louis Vuitton Bag',
	'9': 'Rolex',
	'10': 'Suit',
	'11': 'Armchair',
	'12': 'Hex Car',
	'13': 'Jet',
	'14': 'Diamond',
	'15': 'Tokens',
	'16': 'Tokens',
	'17': 'Tokens',
	'18': 'Tokens',
	'19': 'Tokens',
	'20': 'Tokens',
	'21': 'Chests',
	'22': 'Chests',
	'23': 'Chests',
	'24': 'Chests',
	'25': 'Chests',
	'26': 'Broken Handcuffs',
	'27': 'Broken Handcuffs',
	'28': 'Broken Handcuffs',
	'29': 'Broken Handcuffs',
	'30': 'Broken Handcuffs',
	'31': 'Trump',
	'32': 'Elon',
	'33': 'Richard',
	'34': 'Necklace shop',
	'35': 'Bag shop',
	'36': 'Suit shop',
	'37': 'Rolex shop',
	'38': 'Armchair shop',
	'39': 'Hex Car shop',
	'40': 'Jet shop',
	'41': 'Diamond shop',
	'42': 'Fragments Factory',
	'43': 'Congress'
};

const InventoryBattle = () => {
	const navigate = useNavigate();
	const { address: walletAddress } = useAccount();
	const [myNFTs, setMyNFTs] = useState([]);
	const [_sell, setSell] = useState(false);

	const contract = {
		address: address,
		abi: ABI
	}

	// Get all minted items for the user
	const { data: mintedItems } = useContractRead({
		...contract,
		functionName: 'getMyMintedItems',
		args: [walletAddress],
		enabled: !!walletAddress,
		watch: true
	});

	// Check balance for each token ID (1-43)
	const tokenIds = Array.from({ length: 43 }, (_, i) => i + 1);
	const { data: balances } = useContractReads({
		contracts: tokenIds.map(tokenId => ({
			...contract,
			functionName: 'balanceOf',
			args: [walletAddress, tokenId]
		})),
		enabled: !!walletAddress,
		watch: true
	});

	useEffect(() => {
		if (balances && mintedItems) {
			// Use a Map to avoid duplicates, keyed by tokenId
			const nftMap = new Map();

			// First add items from balances (current holdings)
			balances.forEach((balance, index) => {
				const tokenId = index + 1;
				if (balance.result > 0) {
					nftMap.set(tokenId, {
						tokenId,
						amount: balance.result.toString(),
						timestamp: Math.floor(Date.now() / 1000)
					});
				}
			});

			// Then update with items from mintedItems (historical mints) if they have more recent data
			if (mintedItems && mintedItems.length > 0) {
				mintedItems.forEach(item => {
					// Only update if the item exists in balances (meaning user still owns it)
					if (nftMap.has(item.tokenId)) {
						nftMap.set(item.tokenId, {
							tokenId: item.tokenId,
							amount: nftMap.get(item.tokenId).amount, // Keep the current balance amount
							timestamp: item.timestamp
						});
					}
				});
			}

			// Convert Map values to array
			setMyNFTs(Array.from(nftMap.values()));
		}
	}, [balances, mintedItems]);

	const sellPopUp = () => setSell(true);
	const sellClose = () => setSell(false);

	const [selectedCategory, setSelectedCategory] = useState('all');

	// Define categories and their corresponding token IDs
	const categories = {
		all: { name: 'All Items', ids: Array.from({ length: 43 }, (_, i) => i + 1) },
		fragments: {
			name: 'Fragments',
			ids: [1, 2, 3, 4, 5, 6] // Token IDs for fragments
		},
		accessories: {
			name: 'Accessories',
			ids: [7, 8, 9, 10, 11, 12, 13, 14] // Token IDs for accessories
		},
		battleToken: {
			name: 'Battle Token',
			ids: [15, 16, 17, 18, 19, 20] // Token IDs for battle tokens
		},
		chest: {
			name: 'Chest',
			ids: [21, 22, 23, 24, 25] // Token IDs for chests
		},
		vip: {
			name: 'VIP',
			ids: [26, 27, 28, 29, 30] // Token IDs for VIP items
		},
		topTier: {
			name: 'Top‑Tier NFTs',
			ids: [31, 32, 33] // Token IDs for top-tier NFTs
		},
		shops: {
			name: 'Richard\'s Shops',
			ids: [34, 35, 36, 37, 38, 39, 40, 41, 42, 43] // Token IDs for shops
		}
	};

	// Filter NFTs based on selected category
	const filteredNFTs = selectedCategory === 'all'
		? myNFTs
		: myNFTs.filter(nft => categories[selectedCategory].ids.includes(nft.tokenId));

	return (
		<div className="relative min-h-screen bg-cover bg-center text-white bg-[#41305f] flex flex-col justify-between overflow-hidden"
			style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed' }}>

			<div className='cont-2'>
				<div id="titles" className='titleMain'>My Sec Battle NFTs</div>


				<div id="borderStyles2" className="w-full max-w-4xl bg-white/30 mx-auto px-[1em] pt-[1em] pb-[1.3em] *:font-american-captain text-[15px] rounded-[0.5em] text-center backdrop-blur-md sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px] mb-8">
					<h6 className="mb-[0.3em] tracking-wider">Categories</h6>
					<div className="flex flex-wrap items-center justify-center gap-[0.5em] *:font-american-captain">
						{Object.entries(categories).map(([key, category]) => {
							const isSelected = selectedCategory === key;
							return (
								<button
									key={key}
									className={`${isSelected ? "bg-[#6514DB] text-white" : "bg-white/30 text-[#6514DB]"} px-[1em] py-[0.3em] leading-none rounded-[0.2em] backdrop-blur-md whitespace-nowrap`}
									style={{ border: "1px solid #6514DB" }}
									onClick={() => setSelectedCategory(key)}
								>
									{category.name}
								</button>
							);
						})}
					</div>
				</div>

				{filteredNFTs.length > 0 ? (
					<div id="showMyNFTs" className="relative text-[12px] my-[2em] px-[30px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{filteredNFTs.map((nft, index) => (
							<div key={index} className="flex items-center justify-center">
								<article className="w-[17em] max-w-[17em] mx-auto text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[15.5px] 2xl:text-[16px]">
									<div className="relative h-[14em] bg-contain bg-bottom bg-no-repeat z-[1] animate-hover"
										style={{ backgroundImage: `url(${battleImages[nft.tokenId]})` }}>
									</div>
									<div className="relative bg-gradient-to-br from-[#DF00824D] to-[#FFFFFF4D] -mt-[4.8em] pt-[5em] pb-[1em] rounded-[0.5em] backdrop-blur-md">
										<div className="w-[15em] mx-auto bg-white/30 px-[0.5em] py-[1em] rounded-[0.5em]">
											<h3 className="relative font-vermin-vibes-v text-[1.8em] text-center z-[1]">
												{battleImgNames[nft.tokenId] || `Item #${nft.tokenId}`}
											</h3>
											<hr className="my-[1em]" />
											<p className="uppercase font-bold">
												Token ID: <span className="text-[#6E0B35]">{nft.tokenId.toString()}</span>
											</p>
											<p className="uppercase font-bold">
												Amount: <span className="text-[#6E0B35]">{nft.amount.toString()}</span>
											</p>
											<hr className="my-[1em]" />
											<div className="inBtnsMain">
												{battleImgNames[nft.tokenId] === 'Tokens' ? (
													<button
														className="inBtns1"
														onClick={() => navigate('/sec-battle')}
													>
														Use
													</button>
												) : battleImgNames[nft.tokenId] === 'Chests' ? (
													<button
														className="inBtns1"
														onClick={() => navigate('/')}
													>
														Use
													</button>
												) : null}
												<button className="inBtns2" onClick={sellPopUp}>
													Sell
												</button>
											</div>
										</div>
									</div>
								</article>
							</div>
						))}
					</div>
				) : (
					<p className="noNFTs">No NFTs found in this category</p>
				)}

				{_sell && (
					<div className="popup-containerIn">
						<div className="popupIn">
							<div className="popup-closeIn" onClick={sellClose}>×</div>
							<h2>Set Selling Price</h2>
							<input type="number" id="price" placeholder="Enter amount" />
							<button className='listBtn'><a href="marketplace">List in the Marketplace</a></button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default InventoryBattle;

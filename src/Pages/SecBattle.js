  import React, { useEffect, useState } from "react";
  import { Web3Button, Web3Modal, useWeb3Modal } from '@web3modal/react';
  import { mainnet, useAccount, useContractRead, useContractReads, useContractWrite, useNetwork, usePublicClient, useSwitchNetwork, useWaitForTransaction } from 'wagmi';
  import { createPublicClient, formatEther, http, parseEther, webSocket } from 'viem';
  import { pulsechainV4 } from 'wagmi/chains'
  import Lottie from "react-lottie";
  import richardAnim from '../assets/Final.mp4';
  import garyAnim from '../assets/GARY 1.mp4';
  import { rumbleDrops } from "../lib/constants";

  import Navbar from "../components/Navbar";
  import HorizontalCarousel from "../components/HorizontalCarousel";

  import bg from "../assets/bg1.png";
  import battleStage from "../assets/battle-stage.png";
  import playerHP from "../assets/player-health-bar.png";
  import enemyHP from "../assets/enemy-health-bar.png";
  import richard from "../assets/RICHARD-removebg.png";
  import letterV from "../assets/versus-letter-v.png";
  import lightning from "../assets/animations/lightning.json";
  import letterS from "../assets/versus-letter-s.png";
  import gary from "../assets/GARY-removebg.png";
  import logo from "../assets/logo.png";
  import garyNoBg from "../assets/GARY-2.png";
  import "../styles/SecBattle.css";
  import contractPulse from '../Contracts/contractPulse.json';
  import contractSecBattle from '../Contracts/contractSecBattle.json';
  import correct2 from "../assets/correct2.png";
  import wrong from "../assets/wrong.png";
  import token from "../assets/rumble/horizontal-carousel/sec_battle_token.png";

  const address = contractPulse.address;
  const ABI = contractPulse.abi;

  const address_contractSecBattle = contractSecBattle.address;
  const ABI_contractSecBattle = contractSecBattle.abi;

  const SecBattle = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [_combat, setCombat] = useState(0);
    const [_connected, setConnected] = useState(false);
    const [animateExit, setAnimateExit] = useState(false); // New state for exit animation
    const [showCombatPopup, setShowCombatPopup] = useState(false);

    const [showTokenPurchasePopup, setShowTokenPurchasePopup] = useState(false);

    const [statusError, setstatusError] = useState("");
    const [showErrorDiv, setshowErrorDiv] = useState("");
    const [statusLoading, setstatusLoading] = useState("");
    const [success, setsuccess] = useState("");
    const [showCarousel, setShowCarousel] = useState(false);
    const [_groupItems, setGroupItems] = useState(0);
    const [_groupId, setGroupId] = useState(0);
    const [_tokenMintPrice, setTokenMintPrice] = useState(0);

    const [_successBurn, setsuccessBurn] = useState("");
    const [statusErrorPurchase, setstatusErrorPurchase] = useState("");
    const [showErrorDivPurchase, setshowErrorDivPurchase] = useState("");
    const [statusLoadingPurchase, setstatusLoadingPurchase] = useState("");
    const [successPurchase, setsuccessPurchase] = useState("");
    const [hasToken15, setHasToken15] = useState(false);

    const { open } = useWeb3Modal()
    const { chain } = useNetwork()
    const { switchNetwork } = useSwitchNetwork()
    const [showQuantityPopup, setShowQuantityPopup] = useState(false);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [_balance, setBalance] = useState(0);
    const [plsPrice, setPlsPrice] = useState(0);
    const [_totalCost, setTotalCost] = useState(0);
    const [isLoadingPrice, setIsLoadingPrice] = useState(false);

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

    const contract = {
      address: address,
      abi: ABI
    }

    const contractSecBattle = {
      address: address_contractSecBattle,
      abi: ABI_contractSecBattle
    }

    async function handleConnect() {
      if (chain.id !== 943) {
        switchNetwork(943)
      }

      setConnected(true);
    }

    const close = () => {
      window.location.reload(true);
    };

    const closeCarousel = () => {
      window.location.reload(true);
    };

    const closeError = () => {
      setstatusErrorPurchase(false);
      setshowErrorDivPurchase(false);
      setstatusLoadingPurchase(false);
      setsuccessPurchase(false);
    }

    const combat = () => {
      setAnimateExit(true); // Trigger exit animation
      /* setTimeout(() => {
        setCombat(1); // Show victory popup after animation completes
      }, 1000); // Match this duration with your CSS transition duration
  */

    };

    const defaultOptions = {
      loop: false,
      autoplay: isVisible,
      animationData: lightning,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1400);

      return () => clearTimeout(timer);
    }, []);

    const { writeAsync } = useContractWrite({
      ...contract,
      onError(error) {
        if (error.message.includes('balance')) {
          setstatusError(true)
          setstatusLoading(false)
        }
      }
    })

    const { writeAsync: writeAsyncSecBattle } = useContractWrite({
      ...contractSecBattle,
      onError(error) {
        if (error.message.includes('balance')) {
          setstatusErrorPurchase(true)
          setstatusLoadingPurchase(false)
        }
      }
    })

    const { refetch: getGroupItems } = useContractRead({
      ...contractSecBattle,
      functionName: 'lastItemIDSelected',
      args: [address]
    })

    const { refetch: getGroupId } = useContractRead({
      ...contract,
      functionName: 'lastGroupIDSelected',
      args: [walletAddress]
    })

    const { refetch: getTokenMintPrice } = useContractRead({
      ...contractSecBattle,
      functionName: 'MINT_PRICE'
    })

    useEffect(() => {
      async function fetchGroupItems() {
        var data = await getGroupItems();

        setGroupItems(Number(data.data))
        console.log("groupItemId Coming from 2nd contract: " + data.data)

      }

      async function fetchGroupId() {
        var data = await getGroupId();

        setGroupId(Number(data.data))
        console.log("groupId : " + data.data)

      }

      async function fetchTokenMintPrice() {
        var data = await getTokenMintPrice();

        setTokenMintPrice(Number(data.data))
        console.log("groupId : " + data.data)

      }

      if (_connected) {
        fetchGroupId();
        fetchGroupItems();
        fetchTokenMintPrice();
        checkToken15Balance(); // Add this line
      }

    }, [showErrorDiv, statusError, _connected]);

    async function onMint() {
      try {
        setstatusLoading(true);
        setstatusError(false);
        setShowCombatPopup(true);

        const battleCost = await publicClient.readContract({
          address: address,
          abi: ABI,
          functionName: 'battleCost'
        });

        var res = await writeAsync({
          functionName: 'startSecBattle',
          value: battleCost,
          gas: '685000', // Example gas limit - adjust based on your contract's needs
          gasPrice: '10000000000'
        });

        var result = await publicClient.waitForTransactionReceipt(res);
        if (result.status === 'success') {
          // First fade out the combat popup
          setShowCombatPopup(false);

          // After fade out completes, show the carousel
          setTimeout(() => {
            setShowCarousel(true);
            setstatusLoading(false);
            setstatusError(false);
          }, 500); // Match this with your CSS transition duration
        } else {
          setsuccess(false);
          setstatusError(true);
          setstatusLoading(false);
          setshowErrorDiv(false);
          setShowCombatPopup(false);
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
          setShowCombatPopup(false);
        } else if (e.message.includes("User rejected the request")) {
          //setErrorMsg1("User Rejected");
          setshowErrorDiv(false);
          setstatusError(false);
          setstatusLoading(false);
          setShowCombatPopup(false);
        } else {
          //setErrorMsg1("Sorry, something went wrong");
          setshowErrorDiv(false);
          setstatusError(true);
          setstatusLoading(false);
          setShowCombatPopup(false);
        }

      }
    }

    async function onBurn() {
      try {
        setstatusLoadingPurchase(true);
        setstatusErrorPurchase(false);

        var res = await writeAsyncSecBattle({
          functionName: 'burnBattleToken',
          gas: '685000',
          gasPrice: '10000000000'
        });

        var result = await publicClient.waitForTransactionReceipt(res);
        if (result.status === 'success') {
          setsuccessBurn(true);
          setstatusLoadingPurchase(false);
          setstatusErrorPurchase(false);
        } else {
          setsuccessBurn(false);
          setstatusErrorPurchase(true);
          setstatusLoadingPurchase(false);
          setshowErrorDivPurchase(false);
        }
      } catch (e) {
        console.error("Transaction failed:", e);
        if (e.message.includes("Transaction with hash")) {
          setsuccessBurn(true);
          await new Promise(resolve => setTimeout(resolve, 5000));
          window.location.reload(true);
        }
        if (e.message.includes("err: insufficient funds for gas")) {
          setshowErrorDivPurchase(true);
          setstatusErrorPurchase(false);
          setstatusLoadingPurchase(false);
        } else if (e.message.includes("User rejected the request")) {
          setshowErrorDivPurchase(false);
          setstatusErrorPurchase(false);
          setstatusLoadingPurchase(false);
        } else {
          setshowErrorDivPurchase(false);
          setstatusErrorPurchase(true);
          setstatusLoadingPurchase(false);
        }
      }
    }

    // Function to get latest PLS price from DEX or price API
    async function getPLSPrice() {
      try {
        // Option 1: Using CoinGecko API (if PLS is listed)
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=pulsechain&vs_currencies=usd');
        const data = await response.json();

        if (data.pulsechain && data.pulsechain.usd) {
          console.log("data.pulsechain.usd : " + data.pulsechain.usd);
          return data.pulsechain.usd;
        }

        // Option 2: Fallback to DEX price (PulseX or other DEX)
        // This would require calling a DEX contract to get the price
        //const dexPrice = await getPLSPriceFromDEX();
        //return dexPrice;

      } catch (error) {
        console.error("Error fetching PLS price:", error);
        // Return a fallback price or throw error based on your needs
        return 0.0001; // Fallback price in USD
      }
    }
  
  async function mintBattleToken() {
    try {
      setstatusLoadingPurchase(true);
      setstatusErrorPurchase(false);
      setShowTokenPurchasePopup(false);

      // Get current PLS price
      const plsPrice = await getPLSPrice();
      console.log("Current PLS Price (USD):", plsPrice);

      // Represent large numbers as strings and convert to hexadecimal for the transaction
      const plsAmount = '1000000000000000000'; // 1 PLS in wei (as string)
      
      // Get mint price from contract
      const mintPrice = await publicClient.readContract({
        address: address_contractSecBattle,
        abi: ABI_contractSecBattle,
        functionName: 'MINT_PRICE'
      });

      // Calculate total cost - multiply as strings then convert to hex
      const totalCost = (Number(plsAmount) * selectedQuantity).toString();
      
      console.log("Selected Quantity:", selectedQuantity);
      console.log("Mint Price (wei):", mintPrice);
      console.log("Total Cost (PLS):", Number(totalCost) / 1e18);

      // Execute the transaction - viem will handle string-to-hex conversion
      var res = await writeAsyncSecBattle({
        functionName: 'mintBattleToken',
        args: [selectedQuantity],
        value: totalCost, // Pass as string
        gas: '685000',    // Pass as string
        gasPrice: '10000000000' // Pass as string
      });

      var result = await publicClient.waitForTransactionReceipt(res);

      if (result.status === 'success') {
        setsuccessPurchase(true);
        await checkToken15Balance();
        setstatusLoadingPurchase(false);
        setstatusErrorPurchase(false);
      } else {
        setsuccessPurchase(false);
        setstatusErrorPurchase(true);
        setstatusLoadingPurchase(false);
        setshowErrorDivPurchase(false);
      }

    } catch (e) {
      console.error("Transaction failed:", e);

      if (e.message.includes("Transaction with hash")) {
        setsuccessPurchase(true);
        await checkToken15Balance();
        await new Promise(resolve => setTimeout(resolve, 5000));
        window.location.reload(true);
      } else if (e.message.includes("err: insufficient funds for gas")) {
        setshowErrorDivPurchase(true);
        setstatusErrorPurchase(false);
        setstatusLoadingPurchase(false);
      } else if (e.message.includes("User rejected the request")) {
        setshowErrorDivPurchase(false);
        setstatusErrorPurchase(false);
        setstatusLoadingPurchase(false);
      } else {
        setshowErrorDivPurchase(false);
        setstatusErrorPurchase(true);
        setstatusLoadingPurchase(false);
      }
    }
  }


    const fetchPLSPrice = async () => {
      setIsLoadingPrice(true);
      try {
        const price = await getPLSPrice();
        setPlsPrice(price);
      } catch (error) {
        console.error("Failed to fetch PLS price:", error);
        setPlsPrice(0);
      } finally {
        setIsLoadingPrice(false);
      }
    };

    useEffect(() => {
      fetchPLSPrice();
      // Optional: Set up interval to refresh price every 30 seconds
      const priceInterval = setInterval(fetchPLSPrice, 30000);
      return () => clearInterval(priceInterval);
    }, []);


    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1400);

      return () => clearTimeout(timer);
    }, []);

    async function checkToken15Balance() {
      if (!walletAddress) return;

      try {
        const balance = await publicClient.readContract({
          address: address_contractSecBattle,
          abi: ABI_contractSecBattle,
          functionName: 'balanceOf',
          args: [walletAddress, 15] // Assuming 15 is the token ID
        });

        console.log("balance : " + balance);
        setHasToken15(Number(balance) > 0);
        console.log("hasToken15 : " + Number(hasToken15));
        setBalance(balance);

      } catch (error) {
        console.error("Error checking token balance:", error);
      }
    }

    // NEW FUNCTION TO HANDLE QUANTITY SELECTION
    const handleQuantitySelection = (quantity) => {
      setSelectedQuantity(parseInt(quantity));
    };

    // NEW FUNCTION TO OPEN TOKEN PURCHASE POPUP
    const openTokenPurchasePopup = () => {
      setShowTokenPurchasePopup(true);
    };

    // NEW FUNCTION TO CLOSE TOKEN PURCHASE POPUP
    const closeTokenPurchasePopup = () => {
      setShowTokenPurchasePopup(false);
      setSelectedQuantity(1); // Reset to default
    };

    return (
      <div
        className="relative bg-[#41305f] overflow-x-hidden bg-cover text-white bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-[1]"></div>

        <div className="relative min-h-dvh flex flex-col justify-between">
          <Navbar />

          <div
            className="relative flex-grow flex items-center justify-center bg-cover bg-center -mt-[60px]"
            style={{ backgroundImage: `url(${battleStage})` }}
          >
            <div className="container w-full grid grid-cols-12 items-center">
              {/* Player */}
              <div className="relative col-span-4 z-[1]">
                <div className="flex items-center justify-start">
                  <img
                    src={playerHP}
                    alt="Player HP"
                    className="object-contain"
                  />
                </div>
                <div
                  className="h-[135px] sm:h-[180px] md:h-[225px] lg:h-[270px] xl:h-[325px] 2xl:h-[389px] bg-contain bg-no-repeat mt-12"
                  style={{ backgroundImage: `url(${richard})` }}
                ></div>
              </div>

              {_combat > 0 ? (
                <div class="popup-containerMain3">
                  <div class="popup-containerMain">
                    <div class="popup">
                      <img src={garyNoBg} alt="Man" class="character" />
                      <span class="close-button" onClick={close}>
                        &times;
                      </span>
                      <p class="popup-text">SEC BRIBED VICTORY!</p>
                    </div>
                  </div>
                </div>
              ) : null}

              {/* VS */}
              <div className="relative col-span-4 flex flex-col items-center justify-center gap-y-8 sm:gap-y-9 md:gap-y-10 lg:gap-y-12 xl:gap-y-13 2xl:gap-y-14 tests z-[1]">
                <div className="relative w-[100px] sm:w-[150px] md:w-[150px] lg:w-[210px] xl:w-[245px] 2xl:w-[200px] flex justify-center z-[2] vs-bounce-animation">
                  <div
                    className={`absolute inset-0 z-[1] ${isVisible ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <Lottie options={defaultOptions} />
                  </div>
                  <div className="letter-v-slide-in">
                    <img
                      src={letterV}
                      alt="Letter V"
                      className="object-contain"
                    />
                  </div>
                  <div className="letter-s-slide-in z-[2]">
                    <img
                      src={letterS}
                      alt="Letter S"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[1em] text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">

                  {hasToken15 ?
                    <button
                      onClick={onMint}
                      className="bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v px-[3.8em] py-[0.9em] transition-all duration-500 rounded-full hover:bg-right hover:shadow-[0_0_10px_0_#B014A5] hover:[text-shadow:_0_0_3px_white]"
                    >
                      COMBAT
                    </button> :
                    <button
                      onClick={openTokenPurchasePopup}
                      className="bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v px-[3.8em] py-[0.9em] transition-all duration-500 rounded-full hover:bg-right hover:shadow-[0_0_10px_0_#B014A5] hover:[text-shadow:_0_0_3px_white]"
                    >
                      BUY TOKENS
                    </button>
                  }

                  <div className="flex items-center justify-center gap-2">
                    {/* Token icon */}
                    <img
                      src={token}
                      alt="Token"
                      className="w-11 h-11 object-contain"
                    />
                    {/* Token amount with gradient text */}
                    <span className="text-[25px] font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      {Number(_balance)}
                    </span>
                  </div>
                </div>
              </div>

              {/* TOKEN PURCHASE POPUP */}
              {showTokenPurchasePopup && (
                <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 transition-opacity duration-500">
                  <div className="relative bg-[#D9D9D94D] backdrop-blur-[20px] border border-white/50 rounded-lg p-8 max-w-md w-full font-vermin-vibes-v">
                    {/* Close Button */}
                    <button
                      onClick={closeTokenPurchasePopup}
                      className="absolute top-4 right-4 text-white text-2xl hover:text-red-500 transition-colors"
                    >
                      &times;
                    </button>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-center mb-6 text-white">
                      SELECT QUANTITY
                    </h2>

                    {/* Quantity Options */}
                    <div className="space-y-2 mb-6">
                      {[1, 3, 5, 10].map((quantity) => (
                        <button
                          key={quantity}
                          onClick={() => handleQuantitySelection(quantity)}
                          className={`w-full flex items-center justify-center px-6 py-3 border-b border-b-white/50 transition-all duration-100 hover:text-white/80 hover:bg-white/10 ${selectedQuantity === quantity ? 'bg-white/20 text-white' : 'text-white/70'
                            }`}
                        >
                          <span className="font-vermin-vibes-v">
                            {quantity.toString().padStart(2, '0')}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Price Display */}
                    <div className="text-center mb-6">
                      <p className="text-white/70 text-sm">Total Cost:</p>
                      <p className="text-white font-bold text-lg">
                        {(Number(1) * selectedQuantity).toFixed(0)} PLS
                      </p>
                    </div>

                    {/* Buy Button */}
                    <button
                      onClick={mintBattleToken}
                      className="w-full bg-gradient-to-r from-[#B014A5] via-[#6514DB] to-[#B014A5] bg-[length:200%_200%] font-vermin-vibes-v px-6 py-3 transition-all duration-500 rounded-full hover:bg-right hover:shadow-[0_0_10px_0_#B014A5] hover:[text-shadow:_0_0_3px_white] text-white font-bold"
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
              )}

              {/* Enemy */}
              <div className="relative col-span-4 z-[1]">
                <div className="flex items-center justify-end">
                  <img src={enemyHP} alt="Sec HP" className="object-contain" />
                </div>
                <div
                  className="h-[135px] sm:h-[180px] md:h-[225px] lg:h-[270px] xl:h-[325px] 2xl:h-[389px] bg-contain bg-no-repeat mt-12 -scale-x-100"
                  style={{ backgroundImage: `url(${gary})` }}
                ></div>
              </div>
            </div>

            {/* Combat Popup */}
            {showCombatPopup && (
              <div className={`fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 transition-opacity duration-500 ${showCombatPopup ? 'opacity-100' : 'opacity-0'}`}>
                <div className="relative w-full max-w-[1200px] h-[80vh] flex justify-between items-center space-x-4">
                  {/* Richard Animation */}
                  <div className="animate-slide-in-left flex-1 flex items-center justify-center aspect-square">
                    <video
                      src={richardAnim}
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover rounded-lg shadow-2xl"
                    />
                  </div>

                  {/* Gary Animation */}
                  <div className="animate-slide-in-right flex-1 flex items-center justify-center aspect-square">
                    <video
                      src={garyAnim}
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover rounded-lg shadow-2xl -scale-x-100"
                    />
                  </div>

                  {/* Fighting Text */}
                  <div className="absolute bottom-8 left-0 right-0 text-center">
                    <p className="text-4xl font-bold text-white animate-pulse mt-15px">Fighting...</p>
                  </div>

                  {/* Close Button 
                  <button
                    onClick={() => setShowCombatPopup(false)}
                    className="absolute top-4 right-4 text-white text-4xl hover:text-red-500 transition-colors z-50"
                  >
                    &times;
                  </button>*/}
                </div>
              </div>
            )}


            {/* Bottom gradient */}
            <div className="absolute left-0 bottom-0 w-full h-52 bg-gradient-to-t from-black to-transparent"></div>
          </div>

        </div>

        <div className="relative z-[1] bg-gradient-to-b from-black py-[3em] to-transparent text-[12px] sm:text-[12.75px] md:text-[13.5px] lg:text-[14.25px] xl:text-[15px] 2xl:text-[16px]">
          <div className=" container mx-auto grid grid-cols-2 gap-[1em] font-vermin-vibes-v sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7">
            {rumbleDrops.map(({ id, png, webp, type, subTypes }, i) => (
              <div
                key={id}
                className="py-[1.5em] relative backdrop-blur-sm overflow-hidden"
                style={{ border: "1px solid rgb(255 255 255 / 0.3)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/60"></div>

                {png !== "" && (
                  <picture>
                    {webp !== "" && <source srcSet={webp} />}
                    <img
                      src={png}
                      alt={type}
                      className={`size-[5em] mx-auto relative ${i === 1 || i === 2 || i === 4 ? "rounded-full" : ""
                        }`}
                    />
                  </picture>
                )}

                <p className="relative px-[0.5em] mt-[0.5em] text-center font-semibold mb-[0.4em] font-vermin-vibes-v">
                  {type}
                </p>
                <ul className="relative px-[1.5em]">
                  {subTypes.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <section className="relative h-[85px] sm:h-[100px] md:h-[115px] lg:h-[130px] xl:h-[145px] 2xl:h-[160px] bg-black/10 backdrop-blur-md z-50">
          <div className="container h-full mx-auto flex items-center justify-between">
            <div className="w-[100px] sm:w-[145px] md:w-[190px] lg:w-[235px] xl:w-[290px] 2xl:w-[337px] h-px bg-white/50"></div>
            <a
              href="/"
              className="flex items-center gap-[0.5em] hover:text-white hover:scale-105 transition-transform duration-150 will-change-transform text-[12px] sm:text-[15px] md:text-[18px] lg:text-[21px] xl:text-[23px] 2xl:text-[25px]"
            >
              <div className="size-[2em] rounded-full bg-white">
                <img src={logo} alt="Pulseheroes" className="rounded-full" />
              </div>
              <h2 className="font-bold">PULSEHEROES</h2>
            </a>
            <div className="w-[100px] sm:w-[145px] md:w-[190px] lg:w-[235px] xl:w-[290px] 2xl:w-[337px] h-px bg-white/50"></div>
          </div>
        </section>

        {showCarousel && (
          <div className="fixed inset-0 bg-black/90 z-[100]">
            <HorizontalCarousel />
            <button
              onClick={closeCarousel}
              className="absolute top-4 right-4 text-white text-4xl hover:text-red-500 transition-colors z-50"
            >
              &times;
            </button>
          </div>
        )}

        {
          successPurchase ?
            <div class="popup-containerMain3">
              <div class="popup-containerMain">
                <div class="popupNotifications">
                  <span class="close-button" onClick={closeError}>&times;</span>

                  <img src={correct2} alt="success" class="notifications" />
                  <p class="popup-text">TOKEN HAS BEEN MINTED <br /> SUCCESSFULLY</p>
                </div>
              </div>
            </div> : null
        }

        {
          _successBurn ?
            <div class="popup-containerMain3">
              <div class="popup-containerMain">
                <div class="popupNotifications">
                  <span class="close-button" onClick={closeError}>&times;</span>

                  <img src={correct2} alt="success" class="notifications" />
                  <p class="popup-text">TOKEN BURNT SUCCESSFULLY</p>
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
          showErrorDiv ?
            <div class="popup-containerMain3">
              <div class="popup-containerMain">
                <div class="popupNotifications">
                  <span class="close-button" onClick={closeError}>&times;</span>
                  <img src={wrong} alt="success" class="notifications" />
                  <p class="popup-text" id="wrongMsg">INSUFFICIENT FUNDS</p>
                </div>
              </div>
            </div> : null
        }
      </div>
    );
  };

  export default SecBattle;

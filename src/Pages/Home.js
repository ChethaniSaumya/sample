import React, { useEffect, useState } from 'react';
import '../App.css';
import richard from '../assets/RICHARD.png';
import gary from '../assets/GARY.png';
import jesus from '../assets/Jesus.png';
import satoshi from '../assets/SATOSHI.png';
import trump from '../assets/TRUMP.png';
import vitalik from '../assets/VITALIK.png';
import cz from '../assets/cz.png';
import elon from '../assets/elon-musk-rocket-launch.png';
import richard2 from '../assets/RICHARD-removebg.png';
import gary2 from '../assets/GARY-removebg.png';
import vs from '../assets/versus.png';

import treasure from '../assets/treasure.png';
import chest from '../assets/treasure-chest.png';
import Navigation from '../components/Navigation';

const Home = () => {
    const [_navbarOpen, setNavbarOpen] = useState(0);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Hide loader after 1.5 seconds
        }, 1500);

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    return (
        <div className="allWrap">
            <div className="light">
                {loading && (
                    <div className="page-loader">
                        <div className="parent-container">
                            <div className="loader"></div>
                            <div className="glitch-wrapper">
                                <div className="glitch" data-text="CONNECTING">CONNECTING</div>
                            </div>
                        </div>
                    </div>
                )}

                <Navigation />

                <div className='cont'>
                    <div className='selectSectionMain'>
                        <img className='selectedMan' src={richard2} />
                        <div className='treasureDiv'>
                            <div className='treasureT'>PRE-SALE</div>
                            <img className='treasure' src={treasure} />
                            <div className='treasureT2'>BUY</div>
                            <div className='chestBtnDiv'>
                                <button><img src={chest} />1 Chest</button>
                                <button><img src={chest} />5 Chests</button>
                                <button><img src={chest} />10 Chests</button>
                            </div>
                            <div className='timeSectionMain'>
                                <div className='timeSection'>
                                    00:00 / 72:00
                                </div>
                            </div>
                        </div>
                        <img className='selectedMan' src={gary2} />
                    </div>

                    <div className='selectSectionMainMob'>
                        <div className='treasureDiv'>
                            <div className='treasureT'>PRE-SALE</div>
                            <img className='treasure' src={treasure} />
                            <div className='treasureT2'>BUY</div>
                            <div className='chestBtnDiv'>
                                <button><img src={chest} />1 Chest</button>
                                <button><img src={chest} />5 Chests</button>
                                <button><img src={chest} />10 Chests</button>
                            </div>
                            <div className='timeSectionMain'>
                                <div className='timeSection'>
                                    00:00 / 72:00
                                </div>
                            </div>
                        </div>

                        <div className='mobMans'>
                            <img id="selectedMan1" className='selectedMan' src={richard2} />
                            <img id="vsSelectedMan" src={vs}/>
                            <img id="selectedMan2" className='selectedMan' src={gary2} />
                        </div>
                    </div>

                    <div className='cards'>
                        <img src={jesus} />
                        <img src={satoshi} />
                        <img src={trump} />
                        <img src={vitalik} />
                        <img src={gary} />
                        <img src={cz} />
                        <img src={elon} />
                        <img src={richard} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
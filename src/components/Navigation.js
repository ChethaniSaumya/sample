import React, { useEffect, useMemo, useState } from 'react';
import '../App.css';
import "aos/dist/aos.css";
import Aos from 'aos';
import logoPic from '../assets/logo.png';
import navbar from '../assets/hamburger.png';
import wrong from '../assets/close.png';
import connect from '../assets/connect.png';
import nav from '../assets/nav.png';
import { useNavigate, useLocation } from 'react-router-dom';

const Stry = () => {
    useEffect(() => {
        Aos.init({ duration: 4000 });
    }, [])
}

const Navigation = () => {

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [_navbarOpen, set_navbarOpen] = useState(0);

    async function closeNav() {
        set_navbarOpen(0);
    }

    async function navbarOpen() {
        set_navbarOpen(1);
    }

    return (

        <div>

            {_navbarOpen < 1 ?
                (<div class="miniBarMain">
                    <img className='logo' src={logoPic} onClick={() => window.location.href = '/'} />

                    <div class="navbarMain"><img class="navbar" onClick={navbarOpen} src={navbar} /></div>
                </div>) :
                (<div class="miniBarMain">
                    <img className='logo' src={logoPic} onClick={() => window.location.href = '/'} />

                    <div class="navbarMain"><img class="navbar" onClick={closeNav} src={wrong} /></div>
                </div>)}

            {_navbarOpen > 0 ?
                (<div class="littleNav">
                    <div class="navDiv" onClick={() => window.location.href = '/'}>BUY CHESTS</div>
                    <div class="navDiv">MARKETPLACE</div>
                    <div class="navDiv" onClick={() => window.location.href = 'batttle'}>BATTLE</div>
                    <div class="navDiv" onClick={() => window.location.href = 'sec-batttle'}>SEC BATTLE</div>
                    <div
                            className="more-span"
                            onMouseEnter={() => setDropdownVisible(true)}
                            onMouseLeave={() => setDropdownVisible(false)}
                        >
                            MORE
                            {isDropdownVisible && (
                                <div className="dropdown">
                                    <div className="dropdown-item">BUY</div>
                                    <div className="dropdown-item">WHITEPAPER</div>
                                    <div className="dropdown-item">LEADERBOARD</div>
                                    <div className="dropdown-item">FARMING</div>
                                    <div className="dropdown-item">STAKING</div>
                                </div>
                            )}
                        </div>
 
                </div>) : null}

            <div class="headers">

                <div class="h1">
                    <div className='headerS1'>
                        <span id='logoH'><img className='logo' src={logoPic} />PULSEHEROES</span>
                    </div>

                    <div className="headerS2">
                    <div className="headerS2-2">
                        <div
                            onClick={() => navigate('/')}
                            style={{ color: isActive('/') ? '#f118f1' : 'inherit' }}>
                            <span id="hD">BUY CHESTS</span>
                        </div>
                        <span>MARKETPLACE</span>

                        <div
                            onClick={() => navigate('/batttle')}
                            style={{ color: isActive('/batttle') ? '#f118f1' : 'inherit' }}>
                            <span id="hD">BATTLE</span>
                        </div>

                        <div
                            onClick={() => navigate('/sec-batttle')}
                            style={{ color: isActive('/sec-batttle') ? '#f118f1' : 'inherit' }}>
                            <span id="hD">SEC BATTLE</span>

                        </div>
                        <span
                            className="more-span"
                            onMouseEnter={() => setDropdownVisible(true)}
                            onMouseLeave={() => setDropdownVisible(false)}
                        >
                            MORE
                            {isDropdownVisible && (
                                <div className="dropdown">
                                    <div className="dropdown-item">BUY</div>
                                    <div className="dropdown-item">WHITEPAPER</div>
                                    <div className="dropdown-item">LEADERBOARD</div>
                                    <div className="dropdown-item">FARMING</div>
                                    <div className="dropdown-item">STAKING</div>
                                </div>
                            )}
                        </span>
                        </div>

                        <img class="connectBTN" src={connect}/>

                    </div>

                   
                </div>

            </div>
        </div>

    )

}

export default Navigation;


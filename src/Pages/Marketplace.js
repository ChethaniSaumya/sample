/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React, { useEffect, useMemo, useState } from 'react';
import "../styles/Marketplace.css";
import board from '../assets/marketplace/board.png';
import land1 from '../assets/marketplace/land1.png';
import land2 from '../assets/marketplace/land2.png';
import land3 from '../assets/marketplace/land3.png';
import man1 from '../assets/marketplace/jesus.png';
import man2 from '../assets/marketplace/trunk.png';
import man3 from '../assets/marketplace/vitalip.png';
import check from '../assets/marketplace/check.png';
import coin from '../assets/marketplace/coin.png';
import sort from '../assets/marketplace/sort.png';
import filter from '../assets/marketplace/adjustments.png';
import close from '../assets/marketplace/close.png';

import { base } from 'wagmi/chains';
import Navbar from '../components/Navbar';

var Scroll = require('react-scroll');

let signer;
var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

const tweet = () => {
    window.open("https://x.com/basemewcoin/");
}

const tg = () => {
    window.open("https://t.me/basemewcoinchat");
}

const Marketplace = () => {

    const [_navbarOpen, set_navbarOpen] = useState(0)
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);
    const [isChecked6, setIsChecked6] = useState(false);
    const [isChecked7, setIsChecked7] = useState(false);
    const [isChecked8, setIsChecked8] = useState(false);
    const [isChecked9, setIsChecked9] = useState(false);
    const [isChecked10, setIsChecked10] = useState(false);
    const [isChecked11, setIsChecked11] = useState(false);
    const [isChecked12, setIsChecked12] = useState(false);
    const [isChecked13, setIsChecked13] = useState(false);
    const [isChecked14, setIsChecked14] = useState(false);
    const [isChecked15, setIsChecked15] = useState(false);
    const [isChecked16, setIsChecked16] = useState(false);
    const [isChecked17, setIsChecked17] = useState(false);
    const [_filterOpen, set_filterOpen] = useState(0);

    const handleImageClick1 = () => {
        setIsChecked1(!isChecked1);
    };

    const handleImageClick2 = () => {
        setIsChecked2(!isChecked2);
    };

    const handleImageClick3 = () => {
        setIsChecked3(!isChecked3);
    };

    const handleImageClick4 = () => {
        setIsChecked4(!isChecked4);
    };

    const handleImageClick5 = () => {
        setIsChecked5(!isChecked5);
    };

    const handleImageClick6 = () => {
        setIsChecked6(!isChecked6);
    };

    const handleImageClick7 = () => {
        setIsChecked7(!isChecked7);
    };

    const handleImageClick8 = () => {
        setIsChecked8(!isChecked8);
    };

    const handleImageClick9 = () => {
        setIsChecked9(!isChecked9);
    };

    const handleImageClick10 = () => {
        setIsChecked10(!isChecked10);
    };

    const handleImageClick11 = () => {
        setIsChecked11(!isChecked11);
    };

    const handleImageClick12 = () => {
        setIsChecked12(!isChecked12);
    };

    const handleImageClick13 = () => {
        setIsChecked13(!isChecked13);
    };

    const handleImageClick14 = () => {
        setIsChecked14(!isChecked14);
    };

    const handleImageClick15 = () => {
        setIsChecked15(!isChecked15);
    };

    const handleImageClick16 = () => {
        setIsChecked16(!isChecked16);
    };

    const handleImageClick17 = () => {
        setIsChecked17(!isChecked17);
    };

    async function filterOpen() {
        set_filterOpen(1);
    }

    async function filterClose() {
        set_filterOpen(0);
    }

    return (
        <div className='light'>

            <Navbar />

            <main class="content">

                <div id='mobFil'>

                    {_filterOpen > 0 ?
                        <div className='filterBox'>
                            <img className='filterClose' onClick={filterClose} src={close} />

                            <div>
                                <div className='filterBoxSub'>
                                    <div className='filterBoxH'>Rare</div>
                                    <div className='flexCheckMain'>
                                        <div className='flexCheck'>

                                            <div
                                                className="checkMain"
                                                onClick={handleImageClick1}
                                            >
                                                <img
                                                    src={check}
                                                    alt="check"
                                                />
                                                {isChecked1 && (
                                                    <span className='isChecked'	>
                                                        ✔
                                                    </span>
                                                )}
                                                1
                                            </div>

                                            <div
                                                className="checkMain"
                                                onClick={handleImageClick2}
                                            >
                                                <img
                                                    src={check}
                                                    alt="check"
                                                />
                                                {isChecked2 && (
                                                    <span className='isChecked'	>
                                                        ✔
                                                    </span>
                                                )}
                                                2
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flexCheckMain'>
                                        <div className='flexCheck'>
                                            <div
                                                className="checkMain"
                                                onClick={handleImageClick3}
                                            >
                                                <img
                                                    src={check}
                                                    alt="check"
                                                />
                                                {isChecked3 && (
                                                    <span className='isChecked'	>
                                                        ✔
                                                    </span>
                                                )}
                                                3
                                            </div>

                                            <div
                                                className="checkMain"
                                                onClick={handleImageClick4}
                                            >
                                                <img
                                                    src={check}
                                                    alt="check"
                                                />
                                                {isChecked4 && (
                                                    <span className='isChecked'	>
                                                        ✔
                                                    </span>
                                                )}
                                                4
                                            </div>


                                        </div>
                                    </div>

                                    <div className='flexCheckMain'>
                                        <div className='flexCheck'>

                                            <div
                                                className="checkMain"
                                                onClick={handleImageClick5}
                                            >
                                                <img
                                                    src={check}
                                                    alt="check"
                                                />
                                                {isChecked5 && (
                                                    <span className='isChecked'	>
                                                        ✔
                                                    </span>
                                                )}
                                                5
                                            </div>

                                            <div
                                                className="checkMain"
                                                onClick={handleImageClick6}
                                            >
                                                <img
                                                    src={check}
                                                    alt="check"
                                                />
                                                {isChecked6 && (
                                                    <span className='isChecked'	>
                                                        ✔
                                                    </span>
                                                )}
                                                6
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flexCheckMain'>
                                        <div className='flexCheck'>
                                            <div
                                                className="checkMain"
                                                onClick={handleImageClick7}
                                            >
                                                <img
                                                    src={check}
                                                    alt="check"
                                                />
                                                {isChecked7 && (
                                                    <span className='isChecked'	>
                                                        ✔
                                                    </span>
                                                )}
                                                7
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='filterBoxSub'>
                                    <div className='filterBoxH'>Price Range</div>
                                    <div className='flexCheckMain'>
                                        <div className='flexCheck'>
                                            <div>
                                                <div className='flexCheck2'>
                                                    <input placeholder='Min' type='number'></input>
                                                    <div className='to'>to</div>
                                                    <input placeholder='Max' type='number'></input>
                                                </div>
                                                <button className='apply'>Apply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='prBtns'>
                                <button className='priceBtn'><span className='priceBtnSpan'>Price Sort<img id='priceBtnImg' src={sort} /></span></button>
                                <button className='resetBtn'>Reset</button>
                            </div>
                        </div>:
                    <img className='filterImg' onClick={filterOpen} src={filter} />}

                </div>

                <div id='pcFil'>

                         <div className='filterBox'>
 
                            <div>
                                <div className='filterBoxSub'>
                                    <div className='filterBoxH'>Rare</div>
                                    <div className='flexCheckMain'>
                                        <div className='flexCheck'>

                                            <div
                                                className="checkMain"
                                                onClick={handleImageClick1}
                                            >
                                                <img
                                                    src={check}
                                                    alt="check"
                                                />
                                                {isChecked1 && (
                                                    <span className='isChecked'	>
                                                        ✔
                                                    </span>
                                                )}
                                                1
                                            </div>

                                            <div
                                                className="checkMain"
                                                onClick={handleImageClick2}
                                            >
                                                <img
                                                    src={check}
                                                    alt="check"
                                                />
                                                {isChecked2 && (
                                                    <span className='isChecked'	>
                                                        ✔
                                                    </span>
                                                )}
                                                2
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flexCheckMain'>
                                        <div className='flexCheck'>
                                            <div
                                                className="checkMain"
                                                onClick={handleImageClick3}
                                            >
                                                <img
                                                    src={check}
                                                    alt="check"
                                                />
                                                {isChecked3 && (
                                                    <span className='isChecked'	>
                                                        ✔
                                                    </span>
                                                )}
                                                3
                                            </div>

                                            <div
                                                className="checkMain"
                                                onClick={handleImageClick4}
                                            >
                                                <img
                                                    src={check}
                                                    alt="check"
                                                />
                                                {isChecked4 && (
                                                    <span className='isChecked'	>
                                                        ✔
                                                    </span>
                                                )}
                                                4
                                            </div>


                                        </div>
                                    </div>

                                    <div className='flexCheckMain'>
                                        <div className='flexCheck'>

                                            <div
                                                className="checkMain"
                                                onClick={handleImageClick5}
                                            >
                                                <img
                                                    src={check}
                                                    alt="check"
                                                />
                                                {isChecked5 && (
                                                    <span className='isChecked'	>
                                                        ✔
                                                    </span>
                                                )}
                                                5
                                            </div>

                                            <div
                                                className="checkMain"
                                                onClick={handleImageClick6}
                                            >
                                                <img
                                                    src={check}
                                                    alt="check"
                                                />
                                                {isChecked6 && (
                                                    <span className='isChecked'	>
                                                        ✔
                                                    </span>
                                                )}
                                                6
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flexCheckMain'>
                                        <div className='flexCheck'>
                                            <div
                                                className="checkMain"
                                                onClick={handleImageClick7}
                                            >
                                                <img
                                                    src={check}
                                                    alt="check"
                                                />
                                                {isChecked7 && (
                                                    <span className='isChecked'	>
                                                        ✔
                                                    </span>
                                                )}
                                                7
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='filterBoxSub'>
                                    <div className='filterBoxH'>Price Range</div>
                                    <div className='flexCheckMain'>
                                        <div className='flexCheck'>
                                            <div>
                                                <div className='flexCheck2'>
                                                    <input placeholder='Min' type='number'></input>
                                                    <div className='to'>to</div>
                                                    <input placeholder='Max' type='number'></input>
                                                </div>
                                                <button className='apply'>Apply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='prBtns'>
                                <button className='priceBtn'><span className='priceBtnSpan'>Price Sort<img id='priceBtnImg' src={sort} /></span></button>
                                <button className='resetBtn'>Reset</button>
                            </div>
                        </div> 
 
                </div>

                <div className='pagesMain1'>
                    <div className='pages'>
                        <div className='pagesSub'>
                            <button className='page1'>Marketplace</button>
                            <button className='page2'>Direct Sales</button>
                        </div>
                    </div>

                    <div class="cards-container">

                        <div class="cards-container2">
                            <div className='hashNumMain'><div className='hashNum'>#5</div></div>

                            <div className='cardMain'>
                                <div className='landAndCharacter'>

                                    <div class="text-overlay"><img className='character' src={man1} /></div>
                                    <img className='land' src={land1} />
                                </div>
                                <div class="card">
                                    <div class="image-container">
                                        <img src={board} alt="Ox" class="card-image" />
                                        <div class="text-overlay">
                                            <div id='headerTxt'>JESUS</div>
                                            <div class="flexDetails">
                                                <div>
                                                    <div>Rare: <span class="txtHL">1</span></div>
                                                    {/*<div>Tribe: <span class="txtHL">Stonic</span></div>*/}
                                                </div>
                                                <div>
                                                    <div>Wins: <span class="txtHL">4</span></div>
                                                    {/*<div>Class: <span class="txtHL">Ox</span></div>*/}
                                                </div>
                                            </div>
                                            <div class="centerTxt">Last Fighting Ago: <span class="txtHL">5h:7m:37s</span></div>
                                            <div class="centerTxt">Owner: <span class="txtHL">0xQd9F...D0c2c</span></div>
                                            <span class="price">
                                                <img className='coin' src={coin} />
                                                24,900
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button class="connect-button-2">Connect</button>

                            </div>
                        </div>

                        <div class="cards-container2">
                            <div className='hashNumMain'><div className='hashNum'>#7</div></div>

                            <div className='cardMain'>

                                <div className='landAndCharacter'>
                                    <div class="text-overlay"><img className='character' src={man2} /></div>
                                    <img className='land' src={land2} />
                                </div>
                                <div class="card">
                                    <div class="image-container">
                                        <img src={board} alt="Ox" class="card-image" />
                                        <div class="text-overlay">
                                            <div id='headerTxt'>TRUNK</div>
                                            <div class="flexDetails">
                                                <div>
                                                    <div>Rare: <span class="txtHL">3</span></div>
                                                    {/*<div>Tribe: <span class="txtHL">Stonic</span></div>*/}
                                                </div>
                                                <div>
                                                    <div>Wins: <span class="txtHL">6</span></div>
                                                    {/*<div>Class: <span class="txtHL">Ox</span></div>*/}
                                                </div>
                                            </div>
                                            <div class="centerTxt">Last Fighting Ago: <span class="txtHL">7:21m:03s</span></div>
                                            <div class="centerTxt">Owner: <span class="txtHL">0xvd9F...D0cB2</span></div>
                                            <span class="price"><img className='coin' src={coin} />28,700</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="connect-button-2">Connect</button>

                        </div>

                        <div class="cards-container2">
                            <div className='hashNumMain'><div className='hashNum'>#12</div></div>

                            <div className='cardMain'>

                                <div className='landAndCharacter'>
                                    <div class="text-overlay"><img className='character' src={man3} /></div>
                                    <img className='land' src={land3} />
                                </div>
                                <div class="card">
                                    <div class="image-container">
                                        <img src={board} alt="Ox" class="card-image" />
                                        <div class="text-overlay">
                                            <div id='headerTxt'>VITALIP</div>
                                            <div class="flexDetails">
                                                <div>
                                                    <div>Rare: <span class="txtHL">4</span></div>
                                                    {/*<div>Tribe: <span class="txtHL">Stonic</span></div>*/}
                                                </div>
                                                <div>
                                                    <div>Wins: <span class="txtHL">3</span></div>
                                                    {/*<div>Class: <span class="txtHL">Ox</span></div>*/}
                                                </div>
                                            </div>
                                            <div class="centerTxt">Last Fighting Ago: <span class="txtHL">2h:02m:14s</span></div>
                                            <div class="centerTxt">Owner: <span class="txtHL">0xs9F...D0cBs</span></div>
                                            <span class="price"><img className='coin' src={coin} />18,500</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="connect-button-2">Connect</button>

                        </div>

                    </div>
                </div>
            </main >
        </div >
    )

}
export default Marketplace;

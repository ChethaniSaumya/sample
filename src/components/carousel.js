import React, { useEffect } from 'react';
import '../styles/carousel.css';

import vitalip2 from "../assets/heroes2/vitalip.png";
import richard2 from "../assets/heroes2/richard.png";
import gz2 from "../assets/heroes2/gz.png";
import trunk2 from "../assets/heroes2/trunk.png";
import jesus2 from "../assets/heroes2/jesus.png";
import elom2 from "../assets/heroes2/elon.png";
import satoshi2 from "../assets/heroes2/satoshi.png";
import right from "../assets/heroes2/right.png";

const Carousel = ({ number }) => {
    useEffect(() => {
        const highlighter = document.querySelector(".highlighter");
        const carouselImages = document.querySelectorAll(".carouselIMG");

        const highlightImage = () => {
            const highlighterRect = highlighter.getBoundingClientRect();

            carouselImages.forEach((img) => {
                const imgRect = img.getBoundingClientRect();

                if (
                    imgRect.left >= highlighterRect.left &&
                    imgRect.right <= highlighterRect.right
                ) {
                    img.classList.add("highlight");
                } else {
                    img.classList.remove("highlight");
                }
            });
        };

        const observer = new MutationObserver(highlightImage);
        observer.observe(document.querySelector(".slider"), {
            childList: true,
            subtree: true,
        });

        const intervalId = setInterval(highlightImage, 50);

        return () => {
            clearInterval(intervalId);
            observer.disconnect();
        };
    }, []);


    return (
        <>

            {number === 1 &&
                <div class="boxWrapC">
                    <div class="slider">
                        <div class="slide-track2">
                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                        </div>
                    </div>

                    <div class="highlighter"></div>


                </div>
            }

            {number === 2 &&
                <div class="boxWrapC">
                    <div class="slider">
                        <div class="slide-track2">
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                        </div>
                    </div>

                    <div class="highlighter"></div>


                </div>
            }

            {number === 3 &&
                <div class="boxWrapC">
                    <div class="slider">
                        <div class="slide-track2">
                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                        </div>
                    </div>

                    <div class="highlighter"></div>


                </div>
            }

            {number === 4 &&
                <div class="boxWrapC">
                    <div class="slider">
                        <div class="slide-track2">
                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                        </div>
                    </div>

                    <div class="highlighter"></div>


                </div>
            }

            {number === 5 &&
                <div class="boxWrapC">
                    <div class="slider">
                        <div class="slide-track2">
                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                        </div>
                    </div>

                    <div class="highlighter"></div>


                </div>
            }

            {number === 6 &&
                <div class="boxWrapC">
                    <div class="slider">
                        <div class="slide-track2">
                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>

                        </div>
                    </div>

                    <div class="highlighter"></div>


                </div>
            }

            {number === 7 &&
                <div class="boxWrapC">
                    <div class="slider">
                        <div class="slide-track2">
                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={vitalip2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={richard2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={gz2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={satoshi2} alt="d5" />
                            </div>
                            <div class="slide">
                                <img class="carouselIMG" src={jesus2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={elom2} alt="d5" />
                            </div>

                            <div class="slide">
                                <img class="carouselIMG" src={trunk2} alt="d5" />
                            </div>

                        </div>
                    </div>

                    <div class="highlighter"></div>


                </div>
            }

        </>
    );

}

export default Carousel;        
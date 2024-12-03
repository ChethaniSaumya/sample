/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React, { useEffect, useMemo, useState } from 'react';
import '../App.css';
import logoPic from '../assets/logo.png';
import biden from '../assets/BIDEN.png';
import warren from '../assets/WARREN.png';
import jerome from '../assets/JEROME.png';
import Navigation from '../components/Navigation';
import $ from 'jquery';

var Scroll = require('react-scroll');

let signer;
var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

const Fight = () => {

	return (
		<div class="allWrap">
			<div class="light">

				<div className='cont2'>

					<Navigation />

					<div className="glitch-wrapper2">
						<div className="glitch2" data-text="FIGHT">FIGHT</div>
					</div>

					<div className='selectSectionMain2'>

						<div id="mD1" className='manDiv'>
							<div className='level'>Level 1</div>
							<div className='percentage'>80% WIN</div>
							<img src={biden} />
						</div>

						<div id="mD2" className='manDiv'>
							<div className='level'>Level 3</div>
							<div className='percentage'>25% WIN</div>
							<img src={warren} />
						</div>

						<div id="mD3" className='manDiv'>
							<div className='level'>Level 2</div>
							<div className='percentage'>60% WIN</div>
							<img src={jerome} />
						</div>

					</div>

				</div>

				<div>

				</div>

			</div>


		</div >
	)

}
export default Fight;

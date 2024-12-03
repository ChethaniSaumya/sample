/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React, { useEffect, useMemo, useState } from 'react';
import '../App.css';
import RICHARD from '../assets/RICHARD-removebg.png';
import GARY from '../assets/GARY-removebg.png';
import gloves from '../assets/boxing-gloves.png';
import Navigation from '../components/Navigation';
import $ from 'jquery';

var Scroll = require('react-scroll');

const Vs = () => {


	return (
		<div class="allWrap">
			<div class="light">

				<div className='cont3'>

					<Navigation />

					<div className='selectSectionMain3'>

						<img id="selectSectionMain3Img1" src={RICHARD} />
						<img id="selectSectionMain3Img2" src={GARY} />

					</div>

					<div className='combat'>
						<button class="button">
							<p class="title">COMBAT</p>
							<img className='combatImg'
								src={gloves}
								alt="gloves"
							/>
							<p class="description">Victory favors the <br />fearless</p>
						</button>

					</div>
				</div>

				<div>

				</div>

			</div>


		</div >
	)

}
export default Vs;

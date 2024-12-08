import React, { Component } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./Pages/Home";
import Fight from "./Pages/Fight";
import ChestOpening from "./Pages/chestOpening";
import SecBattle from './Pages/SecBattle';
 
function App() {

	return (
		<div>
			<BrowserRouter>
				<Routes>

					<Route path='/' element={<Home />} />
					<Route path='battle' element={<Fight />} />
					<Route path='sec-batttle' element={<SecBattle />} />
					<Route path='buy-chests' element={<ChestOpening />} />
  
				</Routes> 
			</BrowserRouter>
			<div>
		

			</div>
		</div>




	)
}


export default App;

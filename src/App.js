import React, { Component } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./Pages/Home";
import Fight from "./Pages/Fight";
import Vs from "./Pages/Vs";
 
function App() {

	return (
		<div>
			<BrowserRouter>
				<Routes>

					<Route path='/' element={<Home />} />
					<Route path='sec-batttle' element={<Fight />} />
					<Route path='batttle' element={<Vs />} />
  
				</Routes>
			</BrowserRouter>
			<div>
		

			</div>
		</div>




	)
}


export default App;

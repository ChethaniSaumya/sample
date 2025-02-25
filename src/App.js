import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Vs from "./Pages/Fight";
import ChestOpening from "./Pages/chestOpening";
import SecBattle from "./Pages/SecBattle";
// import Marketplace from "./Pages/Marketplace";
import MarketplaceV2 from "./Pages/MarketplaceV2";
import Inventory from './Pages/Inventory';
import Vs2 from "./Pages/Fight2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="battle" element={<Vs />} />
          <Route path="sec-batttle" element={<SecBattle />} />
          {/*<Route path="chest-presale" element={<ChestOpening />} />*/}
          <Route path="marketplace" element={<MarketplaceV2 />} />
 					<Route path='mynft' element={<Inventory />} />
 					<Route path="/battle2/:token_id/:rarity" element={<Vs2 />} />

        </Routes>
      </BrowserRouter>
      <div></div>
    </div>
  );
}

export default App;

import React from "react";
// this will handle different routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

// We import all the components we need in our app
import Description from "./components/description";
import Navbar from "./components/navbar";
import NetflixSearch from "./components/netflixSearch";
import DisneySearch from "./components/disneySearch";
import HuluSearch from "./components/huluSearch";
import PrimeSearch from "./components/primeVideoSearch";

const App = () => {
  return (
    <div className="bg-cultured">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Description />} />
          <Route path="/netflix" element={<NetflixSearch />} />
          <Route path="/hulu" element={<HuluSearch />} />
          <Route path="/disney" element={<DisneySearch />} />
          <Route path="/prime" element={<PrimeSearch />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

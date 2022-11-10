import React from "react";
// this will handle different routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

// We import all the components we need in our app
import Description from "./components/description";
import Navbar from "./components/navbar";
import NetflixSearch from "./components/netflixSearch";
import DisneySearch from "./components/Disney/disneySearch";
import HuluSearch from "./components/Hulu/huluSearch";
import PrimeSearch from "./components/Prime/primeSearch";
import HuluTV from "./components/Hulu/huluTV";
import HuluMovie from "./components/Hulu/huluMovie";
import HuluBoth from "./components/Hulu/huluBoth";
import PrimeTV from "./components/Prime/primeTV";
import PrimeMovie from "./components/Prime/primeMovie";
import PrimeBoth from "./components/Prime/primeBoth";
import DisneyTV from "./components/Disney/disneyTV";
import DisneyMovie from "./components/Disney/disneyMovie";
import DisneyBoth from "./components/Disney/disneyBoth";

const App = () => {
  return (
    <div className="bg-cultured">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Description />} />
          <Route path="/netflix" element={<NetflixSearch />} />
          <Route path="/hulu" element={<HuluSearch />}>
            <Route path="/hulu/tv" element={<HuluTV />} />
            <Route path="/hulu/movie" element={<HuluMovie />} />
            <Route path="/hulu/both" element={<HuluBoth />} />
          </Route>
          <Route path="/disney" element={<DisneySearch />}>
            <Route path="/disney/tv" element={<DisneyTV />} />
            <Route path="/disney/movie" element={<DisneyMovie />} />
            <Route path="/disney/both" element={<DisneyBoth />} />
          </Route>
          <Route path="/prime" element={<PrimeSearch />}>
            <Route path="/prime/tv" element={<PrimeTV />} />
            <Route path="/prime/movie" element={<PrimeMovie />} />
            <Route path="/prime/both" element={<PrimeBoth />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

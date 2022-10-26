import React from "react";
import "./index.css";

// We import all the components we need in our app
import Description from "./components/description";
import Navbar from "./components/navbar";
import ButtonSearch from "./components/buttonSearch";

const App = () => {
  return (
    <div className="bg-cultured">
      <Navbar />
      <Description />
      <ButtonSearch />
    </div>
  );
};

export default App;

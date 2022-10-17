import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// We import all the components we need in our app
import Search from "./components/search/search";
import Nav from "./components/navbar/navbar";
import ButtonSearch from "./components/button";

const App = () => {
  return (
    <div>
      <Nav />
      <Search />
      <ButtonSearch />
    </div>
  );
};

export default App;

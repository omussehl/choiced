import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// We import all the components we need in our app
import Description from "./components/description";
import Nav from "./components/navbar";
import ButtonSearch from "./components/buttonSearch";

const App = () => {
  return (
    <div>
      <Nav />
      <Description />
      <ButtonSearch />
    </div>
  );
};

export default App;

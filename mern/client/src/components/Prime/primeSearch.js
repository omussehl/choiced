// useState is a hook, and we use curly braces to destructure it
import React from "react";
import { Outlet } from "react-router-dom";

const PrimeSearch = () => {
  return (
    <div className="p-3">
      <h2 className="text-umber">Prime Video</h2>
      <p>The page searches Prime TV Shows and Movies!</p>
      <h3 className="text-umber">Type</h3>
      <i>Please select from the following:</i>
      <div>
        <li className="text-umber hover:text-sage ">
          <a href="/prime/movie">Movie</a>
        </li>
        <li className="text-umber hover:text-sage ">
          <a href="/prime/tv">TV Show</a>
        </li>
        <li className="text-umber hover:text-sage ">
          <a href="/prime/both">Both</a>
        </li>
      </div>

      <Outlet />
    </div>
  );
};

export default PrimeSearch;

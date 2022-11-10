// useState is a hook, and we use curly braces to destructure it
import React from "react";
import { Outlet } from "react-router-dom";

const HuluSearch = () => {
  return (
    <div className="p-3">
      <h2 className="text-umber">Hulu</h2>
      <p>The page searches Hulu TV Shows and Movies!</p>
      <h3 className="text-umber">Type</h3>
      <i>Please select from the following:</i>
      <div>
        <li className="text-umber hover:text-sage ">
          <a href="/hulu/movie">Movie</a>
        </li>
        <li className="text-umber hover:text-sage ">
          <a href="/hulu/tv">TV Show</a>
        </li>
        <li className="text-umber hover:text-sage ">
          <a href="/hulu/both">Both</a>
        </li>
      </div>

      <Outlet />
    </div>
  );
};

export default HuluSearch;

// useState is a hook, and we use curly braces to destructure it
import React from "react";
import { Outlet } from "react-router-dom";

const DisneySearch = () => {
  return (
    <div className="p-3">
      <h2 className="text-umber">Disney+</h2>
      <p>The page searches Disney+ TV Shows and Movies!</p>
      <h3 className="text-umber">Type</h3>
      <i>Please select from the following:</i>
      <div>
        <li className="text-umber hover:text-sage ">
          <a href="/disney/movie">Movie</a>
        </li>
        <li className="text-umber hover:text-sage ">
          <a href="/disney/tv">TV Show</a>
        </li>
        <li className="text-umber hover:text-sage ">
          <a href="/disney/both">Both</a>
        </li>
      </div>

      <Outlet />
    </div>
  );
};

export default DisneySearch;

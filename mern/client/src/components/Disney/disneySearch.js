// useState is a hook, and we use curly braces to destructure it
import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const DisneySearch = () => {
  return (
    <div className="p-3">
      <h2 className="text-umber">Disney+</h2>
      <p>The page searches Disney+ TV Shows and Movies!</p>
      <h3 className="text-umber">Type</h3>
      <i>Please select from the following:</i>
      <div>
        <NavLink
          to="/disney/tv"
          className={({ isActive }) =>
            isActive
              ? "link-active bg-sage text-cultured hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
              : "link bg-white text-umber hover:bg-sage hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
          }
        >
          TV Shows
        </NavLink>
        <NavLink
          to="/disney/movie"
          className={({ isActive }) =>
            isActive
              ? "link-active bg-sage text-cultured hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
              : "link  bg-white text-umber border-cyan-700 hover:bg-sage hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
          }
        >
          Movie
        </NavLink>
        <NavLink
          to="/disney/both"
          className={({ isActive }) =>
            isActive
              ? "link-active bg-sage text-cultured hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
              : "link  bg-white text-umber hover:bg-sage hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
          }
        >
          Both
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default DisneySearch;

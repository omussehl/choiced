// useState is a hook, and we use curly braces to destructure it
import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const NetflixSearch = () => {
  return (
    <div className="mt-5 shadow-md rounded-md p-3 bg-white">
      <h1 className="text-netflix  ">Netflix</h1>
      <p>The page searches Netflix TV Shows and Movies!</p>
      <h3 className="text-umber">Type</h3>
      <i>Please select from the following:</i>
      <div className="mt-2 mb-2">
        <NavLink
          to="/netflix/tv"
          className={({ isActive }) =>
            isActive
              ? "link-active bg-netflix text-cultured hover:text-cultured px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
              : "link shadow-md bg-white text-umber hover:bg-netflix hover:text-cultured px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
          }
        >
          TV Shows
        </NavLink>
        <NavLink
          to="/netflix/movie"
          className={({ isActive }) =>
            isActive
              ? "link-active bg-netflix text-cultured hover:text-cultured px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
              : "link shadow-md bg-white text-umber hover:bg-netflix hover:text-cultured px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
          }
        >
          Movie
        </NavLink>
        <NavLink
          to="/netflix/both"
          className={({ isActive }) =>
            isActive
              ? "link-active bg-netflix text-cultured hover:text-cultured px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
              : "link shadow-md bg-white text-umber hover:bg-netflix hover:text-cultured px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
          }
        >
          Both
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default NetflixSearch;

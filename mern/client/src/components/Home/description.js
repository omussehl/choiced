import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const description = (
  <p className="">
    Choiced is a site that helps with some of the most difficult decisions one
    can have, such as deciding what to watch. There are so many options on
    eaching streaming service, and we want to make this as frictionless as
    possible.
  </p>
);

// this is a function component - and importantly returns JSX
const Description = () => {
  return (
    <div className="text-centered p-3">
      <h1 className="text-umber">Welcome to Choiced</h1>
      {description}
      <h3 className="text-umber">Streaming Service</h3>
      <div>
        <i className="">
          Please select your streaming services you would like to search from
        </i>
        <div className="mt-3">
          <NavLink
            to="/netflix"
            className={({ isActive }) =>
              isActive
                ? "link-active bg-sage text-cultured hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
                : "link bg-white text-umber hover:bg-sage hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
            }
          >
            Netflix
          </NavLink>
          <NavLink
            to="/hulu"
            className={({ isActive }) =>
              isActive
                ? "link-active bg-sage text-cultured hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
                : "link  bg-white text-umber border-cyan-700 hover:bg-sage hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
            }
          >
            Hulu
          </NavLink>
          <NavLink
            to="/disney"
            className={({ isActive }) =>
              isActive
                ? "link-active bg-sage text-cultured hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
                : "link bg-white text-umber hover:bg-sage hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
            }
          >
            Disney+
          </NavLink>
          <NavLink
            to="/prime"
            className={({ isActive }) =>
              isActive
                ? "link-active bg-sage text-cultured hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
                : "link  bg-white text-umber border-cyan-700 hover:bg-sage hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
            }
          >
            Prime Video
          </NavLink>
          <NavLink
            to="/test"
            className={({ isActive }) =>
              isActive
                ? "link-active bg-sage text-cultured hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
                : "link bg-white text-umber hover:bg-sage hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
            }
          >
            All services
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Description;

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
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "link-active bg-umber text-cultured hover:text-cultured px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
                : "link bg-white text-umber hover:bg-umber hover:text-cultured px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
            }
          >
            All Services
          </NavLink>
          <NavLink
            to="/netflix"
            className={({ isActive }) =>
              isActive
                ? "link-active bg-netflix text-cultured hover:text-cultured px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
                : "link bg-white text-umber hover:bg-netflix hover:text-cultured px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
            }
          >
            Netflix
          </NavLink>
          <NavLink
            to="/hulu"
            className={({ isActive }) =>
              isActive
                ? "link-active bg-hulu text-cultured hover:text-cultured px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
                : "link bg-white text-umber hover:bg-hulu hover:text-cultured px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
            }
          >
            Hulu
          </NavLink>
          <NavLink
            to="/disney"
            className={({ isActive }) =>
              isActive
                ? "link-active bg-disney text-cultured hover:text-cultured px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
                : "link bg-white text-umber hover:bg-disney hover:text-cultured px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
            }
          >
            Disney+
          </NavLink>
          <NavLink
            to="/prime"
            className={({ isActive }) =>
              isActive
                ? "link-active bg-prime text-cultured hover:text-cultured px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
                : "link bg-white text-umber hover:bg-prime hover:text-cultured px-3 py-2 rounded-md text-sm font-medium no-underline m-1"
            }
          >
            Prime Video
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

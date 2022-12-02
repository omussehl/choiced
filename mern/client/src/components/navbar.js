import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-rmetalic">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="hidden lg:block h-8 w-auto rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICbR290plEzTokWZk63BOhy7lNhyYbAnhgJ1z_c-9T7v3l8n1fKal0MwWNd_tKtMZhcM&usqp=CAU"
                    alt="Workflow"
                    href="/"
                  />
                </div>
                <div className="flex space-x-4 text-cultured text-xl mt-1 ml-2">
                  <a
                    href="/"
                    className=" text-cultured hover:text-cultured no-underline font-semibold"
                  >
                    Choiced
                  </a>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <NavLink
                      to="/netflix"
                      className={({ isActive }) =>
                        isActive
                          ? "link-active bg-umber text-cultured hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline"
                          : "link text-cultured hover:bg-umber hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline"
                      }
                    >
                      Netflix
                    </NavLink>
                    <NavLink
                      to="/hulu"
                      className={({ isActive }) =>
                        isActive
                          ? "link-active bg-umber text-cultured hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline "
                          : "link text-cultured hover:bg-umber hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline"
                      }
                    >
                      Hulu
                    </NavLink>
                    <NavLink
                      to="/disney"
                      className={({ isActive }) =>
                        isActive
                          ? "link-active bg-umber text-cultured hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline "
                          : "link text-cultured hover:bg-umber hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline"
                      }
                    >
                      Disney+
                    </NavLink>
                    <NavLink
                      to="/prime"
                      className={({ isActive }) =>
                        isActive
                          ? "link-active bg-umber text-cultured hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline"
                          : "link text-cultured hover:bg-umber hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline"
                      }
                    >
                      Prime Video
                    </NavLink>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        isActive
                          ? "link-active bg-umber text-cultured hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline"
                          : "link text-cultured hover:bg-umber hover:text-bone px-3 py-2 rounded-md text-sm font-medium no-underline"
                      }
                    >
                      All Services
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

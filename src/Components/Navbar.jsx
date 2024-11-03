import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import Hero from "./Hero";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#f6f6f6] pt-4">
        <div className="w-[97%] mx-auto bg-[#9538E2] pt-4 rounded-2xl">
          <div className="navbar w-[85%] mx-auto">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Parent</a>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Item 3</a>
                  </li>
                </ul>
              </div>
              <a className="text-md font-semibold text-white">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className=" menu-horizontal px-1 text-xs gap-10 translate-y-0.5 text-white">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? "underline font-semibold" : "font-light"}`
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? "underline font-semibold" : "font-light"}`
                    }
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar-end gap-3">
              <div className="bg-white text-black p-2 text-xs rounded-full">
                <BsCart3></BsCart3>
              </div>
              <div className="bg-white text-black p-2 text-xs rounded-full">
                <FiHeart></FiHeart>
              </div>
            </div>
          </div>
  
          <Hero></Hero>
        </div>
      </div>
    </>
  );
}

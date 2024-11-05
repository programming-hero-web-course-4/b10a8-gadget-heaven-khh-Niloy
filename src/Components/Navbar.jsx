import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import Hero from "./Hero";
import UserContext from "./context/UserContext";

export default function Navbar() {
  const { pathname } = useLocation();
  const { addToWishlist, setaddToWishlist, addToCart, setaddToCart } =
    useContext(UserContext);

  return (
    <>
      <div
        className={`${
          pathname === "/" ||
          pathname === "/home/all-product" ||
          pathname === "/home/laptops" ||
          pathname === "/home/phones" ||
          pathname === "/home/accessories" ||
          pathname === "/home/smart-watches" ||
          pathname === "/home/macbook" ||
          pathname === "/home/iphone"
            ? "bg-[#f6f6f6] pt-4"
            : "bg-white"
        }`}
      >
        <div
          className={`w-[97%] mx-auto ${
            pathname === "/" ||
            pathname === "/home/all-product" ||
            pathname === "/home/laptops" ||
            pathname === "/home/phones" ||
            pathname === "/home/accessories" ||
            pathname === "/home/smart-watches" ||
            pathname === "/home/macbook" ||
            pathname === "/home/iphone"
              ? "bg-[#9538E2] pt-4 rounded-t-2xl"
              : "bg-white"
          }`}
        >
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
              <a
                className={`text-md font-semibold ${
                  pathname === "/" ||
                  pathname === "/home/all-product" ||
                  pathname === "/home/laptops" ||
                  pathname === "/home/phones" ||
                  pathname === "/home/accessories" ||
                  pathname === "/home/smart-watches" ||
                  pathname === "/home/macbook" ||
                  pathname === "/home/iphone"
                    ? "text-white"
                    : "text-black"
                }`}
              >
                Gadget Heaven
              </a>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul
                className={` menu-horizontal px-1 text-xs gap-10 translate-y-0.5 text-white`}
              >
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? "underline font-semibold" : "font-light"} ${
                        pathname === "/" ||
                        pathname === "/home/all-product" ||
                        pathname === "/home/laptops" ||
                        pathname === "/home/phones" ||
                        pathname === "/home/accessories" ||
                        pathname === "/home/smart-watches" ||
                        pathname === "/home/macbook" ||
                        pathname === "/home/iphone"
                          ? "text-white"
                          : "text-black"
                      }`
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? "underline font-semibold" : "font-light"} ${
                        pathname === "/" ||
                        pathname === "/home/all-product" ||
                        pathname === "/home/laptops" ||
                        pathname === "/home/phones" ||
                        pathname === "/home/accessories" ||
                        pathname === "/home/smart-watches" ||
                        pathname === "/home/macbook" ||
                        pathname === "/home/iphone"
                          ? "text-white"
                          : "text-black"
                      }`
                    }
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? "underline font-semibold" : "font-light"} ${
                        pathname === "/" ||
                        pathname === "/home/all-product" ||
                        pathname === "/home/laptops" ||
                        pathname === "/home/phones" ||
                        pathname === "/home/accessories" ||
                        pathname === "/home/smart-watches" ||
                        pathname === "/home/macbook" ||
                        pathname === "/home/iphone"
                          ? "text-white"
                          : "text-black"
                      }`
                    }
                    to="/stats"
                  >
                    Stats
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? "underline font-semibold" : "font-light"} ${
                        pathname === "/" ||
                        pathname === "/home/all-product" ||
                        pathname === "/home/laptops" ||
                        pathname === "/home/phones" ||
                        pathname === "/home/accessories" ||
                        pathname === "/home/smart-watches" ||
                        pathname === "/home/macbook" ||
                        pathname === "/home/iphone"
                          ? "text-white"
                          : "text-black"
                      }`
                    }
                    to="/feedback"
                  >
                    FeedBack
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar-end gap-3">
              <div
                className={`${
                  pathname === "/" ||
                  pathname === "/home/all-product" ||
                  pathname === "/home/laptops" ||
                  pathname === "/home/phones" ||
                  pathname === "/home/accessories" ||
                  pathname === "/home/smart-watches" ||
                  pathname === "/home/macbook" ||
                  pathname === "/home/iphone"
                    ? "bg-white text-black p-2 text-xs rounded-full"
                    : "text-black bg-white border border-black/15 p-2 text-xs rounded-full"
                } relative`}
              >
                <BsCart3 className=""></BsCart3>
                <h1
                  className={`${
                    pathname === "/" ||
                    pathname === "/home/all-product" ||
                    pathname === "/home/laptops" ||
                    pathname === "/home/phones" ||
                    pathname === "/home/accessories" ||
                    pathname === "/home/smart-watches" ||
                    pathname === "/home/macbook" ||
                    pathname === "/home/iphone"
                      ? "absolute -top-[7px] -right-1 bg-[#9538E2] border border-white rounded-full px-1 text-[8px] text-white font-medium"
                      : "absolute -top-[7px] -right-1 bg-[#9538E2] rounded-full px-1 text-[8px] text-white font-medium"
                  }`}
                >
                  {pathname === "/" ||
                  pathname === "/home/all-product" ||
                  pathname === "/home/laptops" ||
                  pathname === "/home/phones" ||
                  pathname === "/home/accessories" ||
                  pathname === "/home/smart-watches" ||
                  pathname === "/home/macbook" ||
                  pathname === "/home/iphone"
                    ? `${addToCart.length}`
                    : `${addToCart.length}`}
                </h1>
              </div>
              <div
                className={`${
                  pathname === "/" ||
                  pathname === "/home/all-product" ||
                  pathname === "/home/laptops" ||
                  pathname === "/home/phones" ||
                  pathname === "/home/accessories" ||
                  pathname === "/home/smart-watches" ||
                  pathname === "/home/macbook" ||
                  pathname === "/home/iphone"
                    ? "bg-white text-black p-2 text-xs rounded-full"
                    : "text-black bg-white border border-black/15 p-2 text-xs rounded-full"
                } relative`}
              >
                <FiHeart></FiHeart>
                <h1
                  className={`${
                    pathname === "/" ||
                    pathname === "/home/all-product" ||
                    pathname === "/home/laptops" ||
                    pathname === "/home/phones" ||
                    pathname === "/home/accessories" ||
                    pathname === "/home/smart-watches" ||
                    pathname === "/home/macbook" ||
                    pathname === "/home/iphone"
                      ? "absolute -top-[7px] -right-1 bg-[#9538E2] border border-white rounded-full px-1 text-[8px] text-white font-medium"
                      : "absolute -top-[7px] -right-1 bg-[#9538E2] rounded-full px-1 text-[8px] text-white font-medium"
                  }`}
                >
                  {pathname === "/" ||
                  pathname === "/ahome/ll-product" ||
                  pathname === "/home/laptops" ||
                  pathname === "/home/phones" ||
                  pathname === "/home/accessories" ||
                  pathname === "/home/smart-watches" ||
                  pathname === "/home/macbook" ||
                  pathname === "/home/iphone"
                    ? `${addToWishlist.length}`
                    : `${addToWishlist.length}`}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

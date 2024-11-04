// In your Dashboard component
import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function Dashboard() {
  const { pathname } = useLocation();

  return (
    <>
      <div className="text-center bg-[#9538E2] pt-8 pb-6">
        <h1 className="text-white font-semibold text-2xl">Dashboard</h1>
        <p className="text-white text-xs font-light leading-[1.5] my-3">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to 
        <br /> the coolest accessories, we have it all!
        </p>

        <div className="flex items-center justify-center gap-4 mt-6">
          <NavLink
            to="/dashboard/cart"
            className={({ isActive }) =>
              isActive ||
              pathname === "/dashboard" ||
              pathname === "/dashboard/cart"
                ? "bg-white text-[#9538E2] font-semibold rounded-full"
                : "bg-[#9538E2] border border-white text-white rounded-full"
            }
          >
            <button className="px-10 py-2">Cart</button>
          </NavLink>
          <NavLink
            to="/dashboard/wishlist"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-[#9538E2] font-semibold rounded-full"
                : "bg-[#9538E2] border border-white text-white rounded-full"
            }
          >
            <button className="px-10 py-2">Wishlist</button>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}

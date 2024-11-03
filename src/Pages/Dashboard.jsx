// In your Dashboard component
import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function Dashboard() {
  const { pathname } = useLocation();

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex items-center justify-center gap-10 bg-[#9538E2] py-10">
        <NavLink
          to="/dashboard/cart"
          className={({ isActive }) =>
            isActive ||
            pathname === "/dashboard" ||
            pathname === "/dashboard/cart"
              ? "bg-white text-[#9538E2] font-semibold"
              : "bg-[#9538E2] border border-white"
          }
        >
          <button className="px-10 py-2">Cart</button>
        </NavLink>
        <NavLink
          to="/dashboard/wishlist"
          className={({ isActive }) =>
            isActive
              ? "bg-white text-[#9538E2] font-semibold"
              : "bg-[#9538E2] border border-white"
          }
        >
          <button className="px-10 py-2">Wishlist</button>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

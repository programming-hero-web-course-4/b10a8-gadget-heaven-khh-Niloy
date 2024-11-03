import React from "react";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import Hero from "../Components/Hero";

export default function Home() {
  const CategoryData = useLoaderData();
  return (
    <div className=" bg-[#f6f6f6]">
      <div className="mx-auto">
      <Hero></Hero>
        <div className="flex gap-10 pt-32 w-[80%] mx-auto">
          {CategoryData.map((e, index) => (
            <NavLink
            key={index}
              to={`/${e.slug}`}
              className={({ isActive }) => `${isActive ? "bg-red-300" : ""}`}
            >
              {e.name}
            </NavLink>
          ))}
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  useParams,
} from "react-router-dom";
import Hero from "../Components/Hero";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const CategoryData = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Home - Gadget Heaven</title>
      </Helmet>
      <div className=" bg-[#f6f6f6]">
        <div className="mx-auto">
          <Hero></Hero>

          <div className="w-[80%] mx-auto pt-20 pb-32">
            <h1 className="text-3xl font-semibold text-center pb-14">
              Explore Cutting-Edge Gadgets
            </h1>

            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-3">
                <div className="flex flex-col bg-white p-5 gap-5 rounded-xl border border-black/10">
                  {CategoryData.map((e, index) => (
                    <NavLink
                      to={`/home/${e.slug}`}
                      key={index}
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "bg-[#9538E2] text-white font-semibold"
                            : "bg-[#09080F]/5 text-[#09080F]/65 "
                        } p-3 text-xs rounded-full`
                      }
                    >
                      <h1 className="ml-1">{e.name}</h1>
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="col-span-9">
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

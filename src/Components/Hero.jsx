import React from "react";
import banner from "../assets/banner.jpg";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center pt-5 mb-52 pb-36 rounded-b-2xl relative bg-[#9538E2] w-[97%] mx-auto">
        <h1 className="text-4xl text-center text-white font-semibold leading-[1.2]">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="text-center text-xs mt-5 text-white font-light leading-[1.5]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>

        <NavLink to="/dashboard">
          <button className="my-5 px-5 py-2 bg-white text-[#9538E2] rounded-full text-sm font-bold">
            Shop Now
          </button>
        </NavLink>
        <div className="mx-auto w-[54%] absolute top-56 bg-white/30 p-3 rounded-2xl border-2 border-white mt-7">
          <img
            className="w-full h-[19rem] object-cover rounded-xl"
            src={banner}
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

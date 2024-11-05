import React, { useContext } from "react";
import UserContext from "./context/UserContext";
import { RxCross2 } from "react-icons/rx";
import { PiSortDescending } from "react-icons/pi";

export default function Cart() {
  const { addToCart, setaddToCart, money, setmoney } = useContext(UserContext);

  return (
    <div className="bg-[#f6f6f6] border">
      <div className="w-[80%] mx-auto mt-10 ">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-xl">Cart</h1>
          <div className="flex items-center gap-3">
            <h1 className="font-semibold mr-2 translate-y-0.5">Total cost: $ {money}</h1>
            <button
              onClick={()=>{
                const sorted = [...addToCart].sort(function(a, b){return b.price - a.price});
                setaddToCart(sorted)
              }}
              className="bg-transparent border-[1.4px] border-[#9538E2] font-semibold px-3 py-1.5 
            rounded-full text-xs text-[#9538E2] flex items-center gap-2"
            >
              Sort by Price{" "}
              <PiSortDescending className="text-lg font-semibold"></PiSortDescending>{" "}
            </button>
            <button
              className="bg-gradient-to-b from-[#862eda] via-[#a33de4] to-[#e464e4] border-[1.4px] text-white font-normal px-5 py-2
            rounded-full text-xs"
            >
              Purchase
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 mt-8 pb-32">
          {addToCart.map((e) => (
            <div className="flex items-center justify-start gap-12 py-2 rounded-2xl bg-white">
              <div className="w-[15%]">
                <img
                  src={e.product_image}
                  className="w-full rounded-2xl ml-5"
                  alt=""
                />
              </div>

              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-1.5">
                  <h1 className="text-md font-semibold">{e.product_title}</h1>
                  <p className="text-[#09080F]/60 text-sm">{e.description}</p>
                  <h1 className="text-sm font-semibold">Price: ${e.price}</h1>
                </div>
                <div
                  onClick={() => {
                    const remaining = addToCart.filter(
                      (list) => list.product_id !== e.product_id
                    );
                    setaddToCart(remaining);
                  }}
                >
                  <RxCross2
                    className="mr-10 border border-[red] text-[red] text-2xl p-1 rounded-full
                   hover:bg-red-600 hover:text-white hover:border-none cursor-pointer"
                  ></RxCross2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

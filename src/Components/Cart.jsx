import React, { useContext } from "react";
import UserContext from "./context/UserContext";
import { RxCross2 } from "react-icons/rx";


export default function Cart() {
  const { addToCart, setaddToCart } = useContext(UserContext);

  return (
    <div className="bg-[#f6f6f6] border">
      <div className="w-[80%] mx-auto mt-10 ">
        <h1 className="font-bold text-xl">Cart</h1>
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
                  <p className="text-[#09080F]/60 text-sm">
                    {e.description}
                  </p>
                  <h1 className="text-sm font-semibold">Price: ${e.price}</h1>
                </div>
                <div>
                  <RxCross2 className="mr-10 border border-[red] text-[red] text-2xl p-1 rounded-full
                   hover:bg-red-600 hover:text-white hover:border-none"></RxCross2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

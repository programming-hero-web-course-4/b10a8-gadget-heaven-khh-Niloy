import React, { useContext } from "react";
import UserContext from "./context/UserContext";
import { RxCross2 } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";


export default function Wishlist() {
  const { addToWishlist, setaddToWishlist, addToCart, setaddToCart } = useContext(UserContext);

  return (
    <div className="bg-[#f6f6f6] border">
      <div className="w-[80%] mx-auto mt-10 ">
        <h1 className="font-bold text-xl">WishList</h1>
        <div className="grid grid-cols-1 gap-5 mt-8 pb-32">
          {addToWishlist.map((e) => (
            <div className="flex items-center justify-start gap-12 py-2 rounded-2xl bg-white">
              <div className="w-[17%]">
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
                    <span className="font-semibold text-black text-sm">
                      Description:
                    </span>{" "}
                    {e.description}
                  </p>
                  <h1 className="text-sm font-semibold">Price: ${e.price}</h1>
                  <div>
                    <button
                      onClick={() =>
                        setaddToCart([...addToCart, e])
                      }
                      className="bg-[#9538E2] text-white text-xs font-medium px-4 py-2 rounded-full"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
                <div>
                  <RxCross2
                    className="mr-10 border border-[red] text-[red] text-2xl p-1 rounded-full
                   hover:bg-red-600 hover:text-white hover:border-none"
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

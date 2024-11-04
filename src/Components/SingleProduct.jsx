import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import UserContext from "./context/UserContext";

export default function SingleProduct() {
  const { productId } = useParams();
  const data = useLoaderData();

  const SingleProductData = data.find((e) => e.product_id === productId);

  const { addToCart, setaddToCart, addToWishlist, setaddToWishlist } =
    useContext(UserContext);

  return (
    <>
      <div className="text-center bg-[#9538E2] pt-8 pb-32">
        <h1 className="text-white font-semibold text-xl">Product Details</h1>
        <p className="text-white text-xs font-light leading-[1.5] my-3">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>

      <div className="flex flex-col items-center justify-center py-32 bg-[#f6f6f6] relative">
        <div className="absolute bg-white p-5 rounded-xl flex -top-32 w-[80%] gap-5">
          <div className="w-[30%]">
            <img
              src={SingleProductData.product_image}
              className="border border-black/10 rounded-xl object-cover w-full hover:scale-105 hover:transition"
              alt=""
            />
          </div>

          <div className="w-[60%]">
            <h1>{SingleProductData.product_title}</h1>
            <p className="text-[#09080F]/60">
              Price: {SingleProductData.price}$
            </p>
            <p className="text-[#09080F]/60">
              {SingleProductData.availability ? "in Stock" : "Out of Stock"}
            </p>
            <p className="text-[#09080F]/60">{SingleProductData.description}</p>
            <p className="text-[#09080F]/60">Specification:</p>

            {SingleProductData.specification.map((e) => (
              <li>{e}</li>
            ))}

            <button
              onClick={() => setaddToCart([...addToCart, SingleProductData])}
              className="btn btn-primary"
            >
              Add to cart
            </button>

            <button
              onClick={() =>
                setaddToWishlist([...addToWishlist, SingleProductData])
              }
              className="btn btn-primary"
            >
              wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

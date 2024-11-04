import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import UserContext from "./context/UserContext";

export default function SingleProduct() {
  const { productId } = useParams();
  const data = useLoaderData();

  const SingleProductData = data.find((e) => e.product_id === productId);

  const {addToCart, setaddToCart, addToWishlist, setaddToWishlist} = useContext(UserContext)

  return (
    <>
      <div className="text-center">
        <h1>{SingleProductData.product_title}</h1>
        <button 
          onClick={()=> setaddToCart([...addToCart, SingleProductData])}
        className="btn btn-primary">Add to cart</button>


        <button 
          onClick={()=> setaddToWishlist([...addToWishlist, SingleProductData])}
          className="btn btn-primary">wishlist</button>
      </div>
    </>
  );
}

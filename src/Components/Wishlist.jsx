import React, { useContext } from "react";
import UserContext from "./context/UserContext";

export default function Wishlist() {
  const { addToWishlist, setaddToWishlist } = useContext(UserContext);
  console.log(addToWishlist);

  return (
    <div>
      Wishlist
      <h1>{addToWishlist.length}</h1>
    </div>
  );
}

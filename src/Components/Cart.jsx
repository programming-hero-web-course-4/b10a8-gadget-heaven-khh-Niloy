import React, { useContext } from "react";
import UserContext from "./context/UserContext";

export default function Cart() {
  const { addToCart, setaddToCart } = useContext(UserContext);

  return (
    <div>
      Cart
      <h1>{addToCart.length}</h1>
    </div>
  );
}

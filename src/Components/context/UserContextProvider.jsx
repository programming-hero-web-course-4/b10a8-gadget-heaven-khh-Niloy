import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [addToCart, setaddToCart] = useState([]);
  const [addToWishlist, setaddToWishlist] = useState([]);
  return (
    <UserContext.Provider
      value={{ addToCart, setaddToCart, addToWishlist, setaddToWishlist }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

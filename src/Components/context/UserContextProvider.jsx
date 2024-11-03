import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [addToCart, setaddToCart] = useState([]);
  return (
    <UserContext.Provider value={{addToCart, setaddToCart}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
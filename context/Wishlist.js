import { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";

const isClient = typeof window !== "undefined";
const initialState = {
  wishlist: (isClient && JSON.parse(localStorage.getItem("wishlist"))) || [],
};

// create context
export const WishlistContext = createContext(initialState);

// provider components
export const WishlistProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state]);

  // actions
  const addProductToWishlist = (product) => {
    dispatch({ type: "ADD_PRODUCT_TO_WISHLIST", payload: product });
  };

  const removeProductFromWishlist = (id) => {
    dispatch({ type: "REMOVE_PRODUCT_FROM_WISHLIST", payload: id });
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist: state.wishlist,
        addProductToWishlist,
        removeProductFromWishlist,
      }}
    >
      {props.children}
    </WishlistContext.Provider>
  );
};

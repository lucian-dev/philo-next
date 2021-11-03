import styles from "./FavoriteButton.module.scss";
import { useContext } from "react";
import { WishlistContext } from "context/Wishlist";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const FavoriteButton = ({ product }) => {
  const { addProductToWishlist, removeProductFromWishlist, wishlist } =
    useContext(WishlistContext);
  let storedProduct = wishlist.find((o) => o.id === product.id);
  const wishlistDisabled = storedProduct ? true : false;
  return (
    <>
      {wishlistDisabled ? (
        <button
          className={styles.favorite}
          onClick={() => removeProductFromWishlist(product.id)}
        >
          {storedProduct ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      ) : (
        <button
          className={styles.favorite}
          disabled={wishlistDisabled}
          onClick={() => addProductToWishlist(product)}
        >
          {storedProduct ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      )}
    </>
  );
};

export default FavoriteButton;

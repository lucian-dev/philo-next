import styles from "./ProductCard.module.scss";
import Link from "next/link";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useContext } from "react";
import { WishlistContext } from "context/Wishlist";

const ProductCard = ({ product }) => {
  const { addProductToWishlist, removeProductFromWishlist, wishlist } =
    useContext(WishlistContext);
  let storedProduct = wishlist.find((o) => o.id === product.id);

  const wishlistDisabled = storedProduct ? true : false;

  return (
    <div className={styles.productCard}>
      <Link href={`/${product.slug}`}>
        <a className={styles.productCard__link}>
          {product.colors.map((color) => {
            return (
              <div key={color.id} className={styles.productCard__image}>
                {color.gallery.slice(0, 1).map((image) => {
                  return (
                    <img
                      key={image.id}
                      src={`http://localhost:1337${image.url}`}
                    />
                  );
                })}
              </div>
            );
          })}
          <div className={styles.productCard__info}>
            <h3>{product.name}</h3>
            <span>
              {product.price}
              <i>$</i>
            </span>
          </div>
        </a>
      </Link>
      {wishlistDisabled ? (
        <button
          className={styles.productCard__favorite}
          onClick={() => removeProductFromWishlist(product.id)}
        >
          {storedProduct ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      ) : (
        <button
          className={styles.productCard__favorite}
          disabled={wishlistDisabled}
          onClick={() => addProductToWishlist(product)}
        >
          {storedProduct ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      )}
    </div>
  );
};

export default ProductCard;

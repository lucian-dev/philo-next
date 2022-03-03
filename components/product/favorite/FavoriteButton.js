import { useContext } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { WishlistContext } from 'context/Wishlist';
import styles from './FavoriteButton.module.scss';

const FavoriteButton = ({ product }) => {
  const { addToFavorite, removeFromFavorite, favorites } = useContext(WishlistContext);
  let storedProduct = favorites.find((o) => o.id === product.id);
  const wishlistDisabled = storedProduct ? true : false;
  return (
    <>
      {wishlistDisabled ? (
        <button className={styles.favorite} onClick={() => removeFromFavorite(product.id)}>
          {storedProduct ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      ) : (
        <button
          className={styles.favorite}
          disabled={wishlistDisabled}
          onClick={() => addToFavorite(product)}
        >
          {storedProduct ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      )}
    </>
  );
};

export default FavoriteButton;

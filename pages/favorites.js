import { useContext } from 'react';
import { WishlistContext } from 'context/Wishlist';
import ProductCard from '@components/product/card/ProductCard';
import styles from '@components/favorites/Favorites.module.scss';

export default function Favorites() {
  const { favorites } = useContext(WishlistContext);
  return (
    <div className={styles.favorites}>
      <div className={styles.favorites__head}>
        <h3>Your favorites products</h3>
      </div>
      <div className="productsGrid">
        {favorites.length > 0
          ? favorites.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })
          : 'No products in your list!'}
      </div>
    </div>
  );
}

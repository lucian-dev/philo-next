import styles from "@components/favorites/Favorites.module.scss";
import { useContext } from "react";
import { WishlistContext } from "context/Wishlist";
import ProductCard from "@components/product/card/ProductCard";

export default function Favorites() {
  const { wishlist } = useContext(WishlistContext);
  return (
    <div className={styles.favorites}>
      <div className={styles.favorites__head}>
        <h3>Your favorites products</h3>
      </div>
      <div className="productsGrid">
        {wishlist.length > 0
          ? wishlist.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })
          : "No products in your list!"}
      </div>
    </div>
  );
}

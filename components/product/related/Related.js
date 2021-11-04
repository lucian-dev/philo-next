import styles from "./Related.module.scss";
import { AiOutlineRollback } from "react-icons/ai";
import Link from "next/link";
import ProductCard from "../card/ProductCard";

const Related = ({ categories, product }) => {
  const currentCategory = product.categories[0].name;
  const currentProduct = product.name;
  return (
    <div className={styles.related}>
      <h2>Other Products</h2>
      {categories
        .filter((category) => category.name === currentCategory)
        .map((category) => {
          return (
            <div key={category.id} className="productsGrid">
              {category.tshirts
                .filter((tshirt) => tshirt.name !== currentProduct)
                .slice(0, 4)
                .map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
            </div>
          );
        })}
      <Link href="/">
        <a className={styles.related_link}>
          <AiOutlineRollback />
          back to shop
        </a>
      </Link>
    </div>
  );
};

export default Related;

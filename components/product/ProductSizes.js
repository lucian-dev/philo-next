import styles from "./ProductSizes.module.scss";

const ProductSizes = ({ product, productSize, sizeChange }) => {
  return (
    <div className={styles.sizes}>
      <span>Choose Size</span>
      <div className={styles.sizes__actions}>
        {product.sizes.map((size, id) => {
          const sizeActive = size.name === productSize;
          return (
            <button
              key={id}
              value={size.name}
              className={`btn btn--sizes ${sizeActive ? "sizeSelected" : ""}`}
              onClick={sizeChange}
            >
              {size.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSizes;

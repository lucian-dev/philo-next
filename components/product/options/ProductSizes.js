import styles from './ProductOptions.module.scss';

const ProductSizes = ({ product, productSize, sizeChange }) => {
  return (
    <div className={styles.productOptions__sizes}>
      <span>Choose Size</span>
      <div className={styles.productOptions__sizes_actions}>
        {product.sizes.map((size, id) => {
          const sizeActive = size.name === productSize;
          return (
            <button
              key={id}
              value={size.name}
              className={sizeActive ? 'btn btn--sizes sizeSelected' : 'btn btn--sizes'}
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

import styles from "./ProductActions.module.scss";

const ProductActions = ({
  product,
  thumbnailImage,
  productSize,
  productColor,
}) => {
  return (
    <div className={styles.actions}>
      <div className={styles.actions__price}>
        {product.price}
        <i>$</i>
        <span>Tax included</span>
      </div>
      <button
        className="snipcart-add-item btn btn--add-to-cart"
        data-item-id={product.slug}
        data-item-price={product.price}
        data-item-url="/"
        data-item-description=""
        data-item-image={thumbnailImage}
        data-item-name={product.name}
        data-item-custom1-name={productSize ? "Size" : "Choose Size*"}
        data-item-custom1-type="readonly"
        data-item-custom1-value={productSize}
        data-item-custom2-name={productColor ? "Color" : "Choose Color*"}
        data-item-custom2-type="readonly"
        data-item-custom2-value={productColor}
        disabled={!productSize ? true : false}
      >
        {productSize ? "Add to cart" : "Select size"}
      </button>
    </div>
  );
};

export default ProductActions;

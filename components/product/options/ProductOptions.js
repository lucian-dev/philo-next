import styles from "./ProductOptions.module.scss";
import ProductSizes from "./ProductSizes";
import ProductColors from "./ProductColors";

const ProductOptions = ({
  product,
  productSize,
  productColor,
  sizeChange,
  colorChange,
}) => {
  return (
    <div className={styles.productOptions}>
      <ProductSizes
        product={product}
        productSize={productSize}
        sizeChange={sizeChange}
      />
      <ProductColors
        product={product}
        productColor={productColor}
        colorChange={colorChange}
      />
    </div>
  );
};

export default ProductOptions;

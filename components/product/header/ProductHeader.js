import styles from "./ProductHeader.module.scss";

const ProductHeader = ({ productName }) => {
  return (
    <div className={styles.productHeader}>
      <h1>{productName}</h1>
    </div>
  );
};

export default ProductHeader;

import styles from "./ProductMeta.module.scss";
import PopupSize from "./PopupSize";

const ProductMeta = () => {
  return (
    <div className={styles.meta}>
      <div className={styles.meta__material}>Regular fit / Organic Cotton</div>
      <div className={styles.meta__guides}>
        <PopupSize />
      </div>
    </div>
  );
};

export default ProductMeta;

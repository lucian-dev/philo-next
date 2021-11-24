import styles from "./ProductMeta.module.scss";
import Modal from "./Modal";

const ProductMeta = () => {
  return (
    <div className={styles.meta}>
      <div className={styles.meta__material}>Regular fit / Organic Cotton</div>
      <div className={styles.meta__guides}>
        <Modal />
      </div>
    </div>
  );
};

export default ProductMeta;

import styles from "./ProductQuote.module.scss";

const ProductQuote = ({ quote, description }) => {
  return (
    <div className={styles.quote}>
      <q>{quote}</q>
      <p>{description}</p>
    </div>
  );
};

export default ProductQuote;

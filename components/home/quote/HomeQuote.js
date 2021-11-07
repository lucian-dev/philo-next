import styles from "./HomeQuote.module.scss";

const HomeQuote = ({ quote }) => {
  return (
    <div className={styles.quote}>
      <q>{quote.body}</q>
      <span>{quote.author}</span>
    </div>
  );
};

export default HomeQuote;

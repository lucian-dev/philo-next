import styles from "./SearchInput.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <AiOutlineSearch />
      <input className={styles.input} {...rest} />
    </div>
  );
};

export default SearchInput;

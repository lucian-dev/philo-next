import { AiOutlineSearch } from 'react-icons/ai';
import styles from './SearchInput.module.scss';

const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <AiOutlineSearch />
      <input className={styles.input} {...rest} />
    </div>
  );
};

export default SearchInput;

import { useContext, useState, useEffect } from 'react';
import { MdOutlineAccountBalance, MdOutlineAddShoppingCart } from 'react-icons/md';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Link from './Link';
import { useSnipcart } from 'hooks/use-snipcart';
import { WishlistContext } from 'context/Wishlist';
import styles from './Header.module.scss';

const Header = () => {
  const { cart = {} } = useSnipcart();
  const { subtotal = '0.00' } = cart;
  const { favorites } = useContext(WishlistContext);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <header className={scroll ? `${styles.header} ${styles.header__sticky}` : `${styles.header}`}>
      <div
        className={
          scroll
            ? `${styles.header__wrapper} ${styles.header__wrapper__sticky}`
            : `${styles.header__wrapper}`
        }
      >
        <div className={styles.header__logo}>
          <Link href="/">
            <a>
              <h1>
                Philo-<span>Sophia</span>
              </h1>
            </a>
          </Link>
        </div>
        <nav className={styles.header__nav}>
          <ul>
            <li>
              <Link href="/">
                <a>Shop</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.header__actions}>
          <div>
            <Link href="/favorites">
              <a>{favorites.length > 0 ? <AiFillHeart /> : <AiOutlineHeart />}</a>
            </Link>
          </div>
          <button className="snipcart-customer-signin btn">
            <MdOutlineAccountBalance />
          </button>
          <button className="snipcart-checkout btn">
            <MdOutlineAddShoppingCart />
            {subtotal === 0 ? '' : <span>${subtotal}</span>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

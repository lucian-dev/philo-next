import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Link href="/">
            <a>Facebook</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Facebook</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Facebook</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Facebook</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Facebook</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Facebook</a>
          </Link>
        </li>
      </ul>
      <div className={styles.footer__copy}>&copy; 2021</div>
    </footer>
  );
};

export default Footer;

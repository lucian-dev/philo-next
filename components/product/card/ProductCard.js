import styles from './ProductCard.module.scss';
import Link from 'next/link';
import FavoriteButton from '../favorite/FavoriteButton';

const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <Link href={`/${product.slug}`}>
        <a className={styles.productCard__link}>
          {product.colors.map((color) => {
            return (
              <div key={color.id} className={styles.productCard__image}>
                {color.gallery.slice(0, 1).map((image) => {
                  return <img key={image.id} src={`${baseUrl}${image.url}`} />;
                })}
              </div>
            );
          })}
          <div className={styles.productCard__info}>
            <h3>{product.name}</h3>
            <span>
              {product.price}
              <i>$</i>
            </span>
          </div>
        </a>
      </Link>
      <FavoriteButton product={product} />
    </div>
  );
};

export default ProductCard;

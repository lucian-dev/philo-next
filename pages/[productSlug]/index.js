import styles from "./Product.module.scss";
import { fetchQuery } from "@utils/fetcher";
import { useState, useEffect } from "react";
import FavoriteButton from "@components/product/FavoriteButton";
import ProductGallery from "@components/product/ProductGallery";
import ProductMeta from "@components/product/ProductMeta";
import ProductSizes from "@components/product/ProductSizes";
import ProductColors from "@components/product/ProductColors";
import ProductActions from "@components/product/ProductActions";
import ProductSocial from "@components/product/ProductSocial";
import Accordion from "@components/product/Accordion";
import ProductQuote from "@components/product/ProductQuote";
import Related from "@components/product/Related";

export default function Product({ product, categories }) {
  const [images, setImages] = useState([]);
  const [productSize, setProductSize] = useState();
  const [productColor, setProductColor] = useState("Black");

  let thumbnailImage = images.slice(0, 1).map(({ original }) => original);
  let shareUrl = `http://localhost:3000/${product.slug}`;

  useEffect(() => {
    let imagesBlack = [];
    let imagesWhite = [];
    if (productColor === "Black") {
      product.colors.slice(0, 1).map((item, id) => (
        <div key={id}>
          {item.gallery.map((image) => {
            imagesBlack.push({
              original: `http://localhost:1337${image.url}`,
              originalAlt: `${image.alternativeText}`,
              originalHeight: `${image.height}`,
              originalWidth: `${image.width}`,
            });
          })}
        </div>
      ));
      setImages(imagesBlack);
    } else if (productColor === "White") {
      product.colors.slice(1, 2).map((item, id) => (
        <div key={id}>
          {item.gallery.map((image) => {
            imagesWhite.push({
              original: `http://localhost:1337${image.url}`,
              originalAlt: `${image.alternativeText}`,
              originalHeight: `${image.height}`,
              originalWidth: `${image.width}`,
            });
          })}
        </div>
      ));
      setImages(imagesWhite);
    }
  }, [productColor]);

  function handleSizeChange(e) {
    e.preventDefault();
    const sizeValue = e.currentTarget.value;
    setProductSize(sizeValue);
  }

  function handleColorChange(e) {
    e.preventDefault();
    const colorValue = e.currentTarget.value;
    setProductColor(colorValue);
  }

  return (
    <div className={styles.product}>
      <div className={styles.product__header}>
        <h1>{product.name}</h1>
      </div>
      <div className={styles.product__details}>
        <FavoriteButton product={product} />
        <ProductGallery images={images} />
        <div className={styles.product__info}>
          <ProductMeta />
          <div className={styles.product__options}>
            <ProductSizes
              product={product}
              productSize={productSize}
              sizeChange={handleSizeChange}
            />
            <ProductColors
              product={product}
              productColor={productColor}
              colorChange={handleColorChange}
            />
          </div>
          <ProductActions
            product={product}
            thumbnailImage={thumbnailImage}
            productSize={productSize}
            productColor={productColor}
          />
          <ProductSocial
            shareUrl={shareUrl}
            thumbnailImage={thumbnailImage}
            productTitle={product.name}
          />
        </div>
        <ProductQuote
          quote={product.headline}
          description={product.description}
        />
        <div className={styles.product__accordion_wrapper}>
          {product.tabs.map((tab) => {
            return (
              <Accordion
                key={tab.id}
                title={tab.name}
                content={tab.description}
              />
            );
          })}
        </div>
      </div>
      <Related categories={categories} product={product} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const tshirts = await fetchQuery("tshirts");

  const paths = tshirts.map((tshirt) => ({
    params: {
      productSlug: tshirt.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const product = await fetchQuery(`tshirts/${params.productSlug}`);
  const categories = await fetchQuery("categories");

  if (!product && !categories) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
      categories,
    },
  };
};

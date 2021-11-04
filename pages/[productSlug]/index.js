import styles from "./Product.module.scss";
import { fetchQuery } from "@utils/fetcher";
import { useState, useEffect } from "react";
import ProductHeader from "@components/product/header/ProductHeader";
import FavoriteButton from "@components/product/favorite/FavoriteButton";
import ProductGallery from "@components/product/gallery/ProductGallery";
import ProductMeta from "@components/product/meta/ProductMeta";
import ProductOptions from "@components/product/options/ProductOptions";
import ProductActions from "@components/product/actions/ProductActions";
import ProductSocial from "@components/product/social/ProductSocial";
import Accordion from "@components/product/accordion/Accordion";
import ProductQuote from "@components/product/quote/ProductQuote";
import Related from "@components/product/related/Related";

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
      <ProductHeader productName={product.name} />
      <div className={styles.product__details}>
        <FavoriteButton product={product} />
        <ProductGallery images={images} />
        <div className={styles.product__info}>
          <ProductMeta />
          <ProductOptions
            product={product}
            productSize={productSize}
            productColor={productColor}
            sizeChange={handleSizeChange}
            colorChange={handleColorChange}
          />
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
        <Accordion tabs={product.tabs} />
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

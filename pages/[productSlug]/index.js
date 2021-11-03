import styles from "./Product.module.scss";
import { fetchQuery } from "@utils/fetcher";
import { useState, useEffect } from "react";
import {
  TiSocialFacebook,
  TiSocialPinterest,
  TiSocialTwitter,
} from "react-icons/ti";
import ImageGallery from "react-image-gallery";
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";
import FavoriteButton from "@components/product/FavoriteButton";
import PopupSize from "@components/product/PopupSize";
import Accordion from "@components/product/Accordion";
import Related from "@components/product/Related";

export default function Product({ product, categories }) {
  const [images, setImages] = useState([]);
  const [sizes, setSizes] = useState();
  const [colors, setColors] = useState("Black");

  let thumbnailImage = images.slice(0, 1).map(({ original }) => original);
  let shareUrl = `http://localhost:3000/${product.slug}`;

  useEffect(() => {
    let imagesBlack = [];
    let imagesWhite = [];
    if (colors === "Black") {
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
    } else if (colors === "White") {
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
  }, [colors]);

  function handleSizeChange(e) {
    e.preventDefault();
    const sizeValue = e.currentTarget.value;
    setSizes(sizeValue);
  }

  function handleColorChange(e) {
    e.preventDefault();
    const colorValue = e.currentTarget.value;
    setColors(colorValue);
  }

  return (
    <div className={styles.product}>
      <div className={styles.product__header}>
        <h1>{product.name}</h1>
      </div>
      <div className={styles.product__details}>
        <FavoriteButton product={product} />
        <ImageGallery
          items={images}
          showThumbnails={false}
          showNav={true}
          showPlayButton={false}
          lazyLoad={true}
          useBrowserFullscreen={false}
          disableSwipe={false}
          additionalClass={styles.product__gallery}
        />
        <div className={styles.product__info}>
          <div className={styles.product__meta}>
            <div className={styles.product__material}>
              Regular fit / Organic Cotton
            </div>
            <div className={styles.product__guides}>
              <PopupSize />
            </div>
          </div>
          <div className={styles.product__options}>
            <div className={styles.product__sizes}>
              <span>Choose Size</span>
              <div className={styles.product__sizes_actions}>
                {product.sizes.map((size, id) => {
                  const sizeActive = size.name === sizes;
                  return (
                    <button
                      key={id}
                      value={size.name}
                      className={`btn btn--sizes ${
                        sizeActive ? "sizeSelected" : ""
                      }`}
                      onClick={handleSizeChange}
                    >
                      {size.name}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className={styles.product__colors}>
              <span>Choose Color</span>
              <div className={styles.product__colors_actions}>
                {product.colors.map((color, id) => {
                  const colorActive = color.name === colors;
                  return (
                    <button
                      key={id}
                      value={color.name}
                      className={`btn btn--colors btn--colors_${color.name.toLowerCase()} ${
                        colorActive ? "colorSelected" : ""
                      }`}
                      onClick={handleColorChange}
                    ></button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.product__actions}>
            <div className={styles.product__price}>
              {product.price}
              <i>$</i>
              <span>Tax included</span>
            </div>
            <button
              className="snipcart-add-item btn btn--add-to-cart"
              data-item-id={product.slug}
              data-item-price={product.price}
              data-item-url="/"
              data-item-description=""
              data-item-image={thumbnailImage}
              data-item-name={product.name}
              data-item-custom1-name={sizes ? "Size" : "Choose Size*"}
              data-item-custom1-type="readonly"
              data-item-custom1-value={sizes}
              data-item-custom2-name={colors ? "Color" : "Choose Color*"}
              data-item-custom2-type="readonly"
              data-item-custom2-value={colors}
              disabled={!sizes ? true : false}
            >
              {sizes ? "Add to cart" : "Select size"}
            </button>
          </div>
          <div className={styles.product__social}>
            <span>Share:</span>
            <FacebookShareButton url={shareUrl} hashtag={"philo-sophia"}>
              <TiSocialFacebook />
            </FacebookShareButton>
            <PinterestShareButton url={shareUrl} media={thumbnailImage}>
              <TiSocialPinterest />
            </PinterestShareButton>
            <TwitterShareButton
              url={shareUrl}
              title={product.name}
              hashtags={["philo-sophia", `${product.name}`]}
            >
              <TiSocialTwitter />
            </TwitterShareButton>
          </div>
        </div>
        <div className={styles.product__quote}>
          <q>{product.headline}</q>
          <p>{product.description}</p>
        </div>
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

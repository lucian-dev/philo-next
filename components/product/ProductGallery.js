import styles from "./ProductGallery.module.scss";
import ImageGallery from "react-image-gallery";

const ProductGallery = ({ images }) => {
  return (
    <ImageGallery
      items={images}
      showThumbnails={false}
      showNav={true}
      showPlayButton={false}
      lazyLoad={true}
      useBrowserFullscreen={false}
      disableSwipe={false}
      additionalClass={styles.gallery}
    />
  );
};

export default ProductGallery;

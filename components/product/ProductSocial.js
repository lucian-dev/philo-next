import styles from "./ProductSocial.module.scss";
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";
import {
  TiSocialFacebook,
  TiSocialPinterest,
  TiSocialTwitter,
} from "react-icons/ti";

const ProductSocial = ({ shareUrl, thumbnailImage, productTitle }) => {
  return (
    <div className={styles.social}>
      <span>Share:</span>
      <FacebookShareButton url={shareUrl} hashtag={"philo-sophia"}>
        <TiSocialFacebook />
      </FacebookShareButton>
      <PinterestShareButton url={shareUrl} media={thumbnailImage}>
        <TiSocialPinterest />
      </PinterestShareButton>
      <TwitterShareButton
        url={shareUrl}
        title={productTitle}
        hashtags={["philo-sophia", `${productTitle}`]}
      >
        <TiSocialTwitter />
      </TwitterShareButton>
    </div>
  );
};

export default ProductSocial;

import styles from "./ProductRating.module.scss";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";

const ProductRating = ({ product }) => {
  const [rating, setNewRating] = useState(0);
  // const ratingChanged = (newRating) => {
  //   setNewRating(newRating);
  // };

  function addRatingHandler(newRating) {
    let ratingData = {
      rating: newRating,
      tshirt: product,
    };
    fetch(`http://localhost:1337/tshirts/${product.slug}/ratings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ratingData),
    });
    setNewRating(ratingData.rating);
  }

  return (
    <div>
      <ReactStars
        count={5}
        value={rating}
        size={20}
        color="#f6f6f6"
        activeColor="#1e2524"
        onChange={addRatingHandler}
        // edit={addRatingHandler && false}
        required
      />
    </div>
  );
};

export default ProductRating;

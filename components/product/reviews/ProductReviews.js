import styles from "./ProductReviews.module.scss";
import { useState, useEffect } from "react";
import NewReviewForm from "./NewReviewForm";

const ProductReviews = ({ product }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState([]);
  const [loadedComments, setLoadedComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:1337/tshirts/${product.slug}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const comments = data.comments.map((comment) => comment);
        setIsLoading(false);
        setLoadedComments(comments);
      });
  }, [newComment]);

  function addReviewHandler(reviewData) {
    fetch(`http://localhost:1337/tshirts/${product.slug}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    });
    setNewComment(reviewData);
  }

  return (
    <div className={styles.reviews}>
      {isLoading ? (
        <div className={styles.reviews__loading}>Loading</div>
      ) : (
        <div className={styles.reviews__wrapper}>
          {loadedComments &&
            loadedComments.map((comment) => {
              return (
                <div key={comment.id} className={styles.reviews__item}>
                  <div className={styles.reviews__comment}>
                    {comment.reviews}
                  </div>
                  <h5>{comment.name}</h5>
                </div>
              );
            })}
        </div>
      )}
      <NewReviewForm onAddReview={addReviewHandler} product={product} />
    </div>
  );
};

export default ProductReviews;

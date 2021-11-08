import { useRef, useState } from "react";

const NewReviewForm = (props) => {
  const authorInputRef = useRef();
  const reviewInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAuthor = authorInputRef.current.value;
    const enteredReview = reviewInputRef.current.value;
    const reviewData = {
      name: enteredAuthor,
      reviews: enteredReview,
      tshirt: props.product,
    };
    props.onAddReview(reviewData);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <textarea
            id="review"
            rows="10"
            required
            ref={reviewInputRef}
          ></textarea>
        </div>
        <div>
          <input type="text" required id="author" ref={authorInputRef} />
        </div>
        <div>
          <button className="btn btn--submit-comment">Add Review</button>
        </div>
      </form>
    </div>
  );
};

export default NewReviewForm;

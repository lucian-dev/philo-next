import { useState, useEffect } from "react";

const Reviews = ({ product }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedComments, setLoadedComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:1337/tshirts/${product.slug}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedComments(data);
      });
  }, []);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <div>
        {product.comments.map((comment) => {
          return <div key={comment.id}>{comment.reviews}</div>;
        })}
      </div>
    </div>
  );
};

export default Reviews;

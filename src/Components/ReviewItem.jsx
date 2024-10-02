import React from 'react';
import '../Reviews.css';  // Add this line

const ReviewItem = ({ review }) => {
  return (
    <li className="review-item">
      <h3>{review.title}</h3>
      <p className="review-author">By: {review.name}</p>
      <p className="review-content">{review.content}</p>
    </li>
  );
};

export default ReviewItem;

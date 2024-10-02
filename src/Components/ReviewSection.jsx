import React from 'react';
import ReviewItem from './ReviewItem';
import '../Reviews.css';  // Add this line

const ReviewSection = ({ reviews }) => {
  return (
    <section className="review-section">
      <h2>Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to leave a review!</p>
      ) : (
        <ul className="review-list">
          {reviews.map(review => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default ReviewSection;

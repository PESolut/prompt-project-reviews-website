import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewSection = ({ reviews }) => {
  return (
    <section className="review-section">
      <h2 className="section-title">Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p className="no-reviews">No reviews yet. Be the first to leave a review!</p>
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

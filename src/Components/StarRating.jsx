import React from 'react';

const StarRating = ({ rating, onRatingChange, readOnly = false }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => !readOnly && onRatingChange(ratingValue)}
            style={{
              cursor: readOnly ? 'default' : 'pointer',
              color: ratingValue <= rating ? '#ffc107' : '#e4e5e9',
              fontSize: '1.5rem',
              marginRight: '5px'
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
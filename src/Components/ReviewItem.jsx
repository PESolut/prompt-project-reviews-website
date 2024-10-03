import React, { useRef, useEffect, useState } from 'react';
import useMousePosition from '../useMousePosition';
import StarRating from './StarRating';

const ReviewItem = ({ review }) => {
  const ref = useRef(null);
  const mousePosition = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = ref.current;
    if (!card) return;

    const handleMouseMove = () => {
      if (!isHovered) return;

      const { x, y } = mousePosition;
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      const angleX = (y - cardCenterY) / 25;
      const angleY = (cardCenterX - x) / 25;

      card.style.transform = `
        perspective(1000px) 
        rotateX(${angleX}deg) 
        rotateY(${angleY}deg) 
        translateZ(50px) 
        scale(1.05)
      `;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'none';
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      handleMouseLeave();
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition, isHovered]);

  return (
    <li 
      ref={ref} 
      className={`review-item ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>{review.title}</h3>
      <p className="review-author">By: {review.name}</p>
      <div className="review-rating">
        <StarRating rating={review.rating} readOnly={true} />
      </div>
      <p className="review-content">{review.content}</p>
    </li>
  );
};

export default React.memo(ReviewItem);
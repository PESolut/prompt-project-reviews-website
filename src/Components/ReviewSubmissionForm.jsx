import React, { useState } from 'react';
import StarRating from './StarRating';
import './ReviewSubmissionForm.css';

function ReviewSubmissionForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, name, content, rating });
    setTitle('');
    setName('');
    setContent('');
    setRating(0);
  };

  return (
    <div className="review-submission-container">
      <form onSubmit={handleSubmit} className="review-submission-form">
        <h2>Submit a Review</h2>
        
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Rating:</label>
          <StarRating rating={rating} onRatingChange={setRating} />
        </div>

        <div className="form-group">
          <label htmlFor="content">Review:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewSubmissionForm;
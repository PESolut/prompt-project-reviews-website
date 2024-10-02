import React, { useState } from 'react';
import './ReviewSubmissionForm.css';

function ReviewSubmissionForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, name, content });
    setTitle('');
    setName('');
    setContent('');
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
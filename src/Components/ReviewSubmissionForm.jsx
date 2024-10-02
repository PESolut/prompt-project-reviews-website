import React, { useState } from 'react';
import '../Reviews.css';  // Keep the general styles
import './ReviewSubmissionForm.css';  // Add the specific styles

function ReviewSubmissionForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, name, content });
    // Clear form fields after submission
    setTitle('');
    setName('');
    setContent('');
  };

  return (
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
  );
}

export default ReviewSubmissionForm;

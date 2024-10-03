import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import ReviewSection from './Components/ReviewSection'
import ReviewSubmissionForm from './Components/ReviewSubmissionForm'
import Footer from './Components/Footer'
import './Reviews.css'
import './App.css'  // Add this line

const App = () => {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('reviews');
    return savedReviews ? JSON.parse(savedReviews) : [
      { id: 1, title: 'Great Product', name: 'John Doe', content: 'This product exceeded my expectations!', rating: 5 },
      { id: 2, title: 'Could be better', name: 'Jane Smith', content: 'It\'s okay, but there\'s room for improvement.', rating: 3 }
    ];
  });

  useEffect(() => {
    // Save reviews to local storage whenever the reviews state changes
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (newReview) => {
    setReviews(prevReviews => [
      ...prevReviews,
      { ...newReview, id: prevReviews.length + 1 }
    ]);
  };

  // Add this function to clear local storage
  const clearLocalStorage = () => {
    localStorage.removeItem('reviews');
    setReviews([]);
  };

  return (
    <div className="app-wrapper">
      <Header onClearReviews={clearLocalStorage} />
      <main className="main-content">
        <ReviewSection reviews={reviews} />
        <ReviewSubmissionForm onSubmit={addReview} />
      </main>
      <Footer />
    </div>
  )
}

export default App

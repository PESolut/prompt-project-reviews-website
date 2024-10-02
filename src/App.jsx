import React, { useState } from 'react'
import Header from './Components/Header'
import ReviewSection from './Components/ReviewSection'
import ReviewSubmissionForm from './Components/ReviewSubmissionForm'
import Footer from './Components/Footer'
import './Reviews.css'
import './App.css'  // Add this line

const App = () => {
  const [reviews, setReviews] = useState([
    { id: 1, title: 'Great Product', name: 'John Doe', content: 'This product exceeded my expectations!' },
    { id: 2, title: 'Could be better', name: 'Jane Smith', content: 'It\'s okay, but there\'s room for improvement.' }
  ]);

  const addReview = (newReview) => {
    setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
  };

  return (
    <div>
      <Header />
      <ReviewSection reviews={reviews} />
      <ReviewSubmissionForm onSubmit={addReview} />
      <Footer />
    </div>
  )
}

export default App

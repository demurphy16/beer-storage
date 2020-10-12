import React from "react";
import { Link } from "react-router-dom";
import DisplayReview from './DisplayReview'

function ReviewPage() {
  return (
    <div>
      <div className="review-page">
        <Link to="/reviews">Reviews</Link>
        <Link to="/">Home</Link>
        <Link to="/suggestions">Find Your Own</Link>
      </div>
      <h1>Reviews</h1>
      <DisplayReview />
    </div>
  );
}

export default ReviewPage;

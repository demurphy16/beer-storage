import React from "react";
import { Link } from "react-router-dom";

function ReviewPage() {
  return (
    <div>
      <h1>Reviews</h1>
      <div className="review-page">
        <Link to="/">Home</Link>
        <Link to="/suggestions">Find Your Own</Link>
      </div>
    </div>
  );
}

export default ReviewPage;

import React from "react";
import DisplayReview from "./DisplayReview";

function ReviewPage() {
  return (
    <div className="rev-container">
      <h1 className="review-h1">Reviews</h1>
      <section className="reviewpage-h3">
        <h3 className="label">Beer Name</h3>
        <h3 className="label">Review</h3>
        <h3 className="label">Rating</h3>
        <h3 className="label">Origin</h3>
      </section>
      <DisplayReview />
    </div>
  );
}

export default ReviewPage;

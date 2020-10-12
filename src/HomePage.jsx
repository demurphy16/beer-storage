import React from "react";
import { Link } from "react-router-dom";
import CreateReview from "./CreateReview";

function HomePage(props) {
  return (
    <div className="home-page">
      <h1>Beer Storage</h1>
      <div className="home-links">
        <Link to="/reviews">Reviews</Link>
        <Link to="/">Home</Link>
        <Link to="/suggestions">Find Your Own</Link>
      </div>
      <main className="main-form">
        <CreateReview
          fetchReviews={props.fetchReviews}
          setFetchReviews={props.setFetchReviews}
        />
      </main>
    </div>
  );
}

export default HomePage;

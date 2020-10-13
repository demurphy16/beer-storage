import React from "react";
import { Link } from "react-router-dom";
import CreateReview from "./CreateReview";

function HomePage(props) {
  return (
    <div className="home-page-container">
      <section className="bckg-img">
        <h1 className="h1-home">Beer Storage</h1>
        <main className="home-form-container">
          <CreateReview
            fetchReviews={props.fetchReviews}
            setFetchReviews={props.setFetchReviews}
          />
        </main>
      </section>
    </div>
  );
}

export default HomePage;

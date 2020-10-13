import React from "react";
import CreateReview from "./CreateReview";

function HomePage(props) {
  return (
    <section className="home-img home-container">
      <h1 className="h1-home">Beer Storage</h1>
        <CreateReview
          fetchReviews={props.fetchReviews}
          setFetchReviews={props.setFetchReviews}
        />
    </section>
  );
}

export default HomePage;

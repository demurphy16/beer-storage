import React from "react";
import { Link } from "react-router-dom";
import CreateSuggestion from "./CreateSuggestion";

function SuggestionPage() {
  return (
    <div>
      <section className="suggestion-links">
        <Link to="/reviews">Reviews</Link>
        <Link to="/">Home</Link>
        <Link to='/suggestions'>Find Your Own</Link>
      </section>
      <h1>Find Your Own</h1>
      <CreateSuggestion />
    </div>
  );
}

export default SuggestionPage;

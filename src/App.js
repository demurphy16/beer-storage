import React, { useState } from "react";
import HomePage from "./HomePage";
import ReviewPage from "./ReviewPage";
import "./Homepage.css";
import "./ReviewPage.css";
import "./SuggestionPage.css";
import { Route, Link } from "react-router-dom";
import SuggestionPage from "./SuggestionPage";

function App() {
  const [fetchReviews, setFetchReviews] = useState(false);

  return (
    <div className="App">
      <header className="header-nav">
        <link
          href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap"
          rel="stylesheet"
        ></link>
        <nav className="home-nav">
          <Link className="link" to="/reviews">
            Reviews
          </Link>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/suggestions">
            Find Your Own
          </Link>
        </nav>
      </header>
      <Route exact path="/">
        <HomePage
          fetchReviews={fetchReviews}
          setFetchReviews={setFetchReviews}
        />
      </Route>
      <Route exact path="/reviews">
        <ReviewPage />
      </Route>
      <Route exact path="/suggestions">
        <SuggestionPage />
      </Route>
    </div>
  );
}

export default App;

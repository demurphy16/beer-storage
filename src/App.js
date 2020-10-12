import React, { useEffect, useState } from "react";
import axios from "axios";
import HomePage from './HomePage'
import ReviewPage from "./ReviewPage";
import "./App.css";
import { Route } from "react-router-dom";
import SuggestionPage from "./SuggestionPage";

function App() {
  const [reviews, setReviews] = useState([]);
  const [fetchReviews, setFetchReviews] = useState(false);

  useEffect(() => {
    const getBeer = async () => {
      const airTableUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/beerstorage`;
      const response = await axios.get(airTableUrl, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setReviews(response.data.records);
    };
    getBeer();
  }, [fetchReviews]);

  return (
    <div className="App">
      <nav className="link-nav">
        <Route exact path="/">
          <HomePage
          fetchReviews={fetchReviews}
          setFetchReviews={setFetchReviews}
          />
        </Route>
      </nav>
      <Route exact path="/reviews">
        <ReviewPage
        />
      </Route>
      <Route exact path="/suggestions">
        <SuggestionPage />
      </Route>

    </div>
  );
}

export default App;

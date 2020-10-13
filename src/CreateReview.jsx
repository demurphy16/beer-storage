import React, { useState } from "react";
import axios from "axios";

function CreateReview(props) {
  const [Beer, setBeer] = useState("");
  const [Review, setReview] = useState("");
  const [Origin, setOrigin] = useState("");
  const [Rating, setRating] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = {
      Beer,
      Review,
      Origin,
      Rating,
    };

    const airTableUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/beerstorage`;

    await axios.post(
      airTableUrl,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    props.setFetchReviews(!props.fetchReviews);

    setBeer("");
    setOrigin("");
    setRating("");
    setReview("");
  };

  return (
    <section className="homeform-container">
      <form className="home-form" onSubmit={handleSubmit}>
        <label htmlFor="Beer"></label>
        <input
          name="Beer"
          type="text"
          placeholder="Beer Name"
          value={Beer}
          onChange={(e) => setBeer(e.target.value)}
        />
        <label htmlFor="Origin"></label>
        <input
          name="Origin"
          type="text"
          placeholder="Beer Origin"
          value={Origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <label htmlFor="Review"></label>
        <input
          name="Review"
          type="text"
          placeholder="Input Thoughts"
          value={Review}
          onChange={(e) => setReview(e.target.value)}
        />
        <label htmlFor="Rating"></label>
        <input
          name="Rating"
          type="text"
          placeholder="Beer Rating out of 5"
          value={Rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button type="submit">Submit Beer Review</button>
      </form>
    </section>
  );
}

export default CreateReview;

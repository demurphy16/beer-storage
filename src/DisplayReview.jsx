import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplayReview() {
  const [beerData, setBeerData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const airTableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/beerstorage`;
      const response = await axios.get(
        airTableURL,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        },
        []
      );
      setBeerData(response.data.records);
    };
    getData();
  }, []);

  return (
    <div>
      <h1 className="review-h1">Reviews</h1>
      <section className="rev2-container">
        {beerData.slice(-4).map((beerData) => (
          <div className="reviews-shown" key={beerData.id}>
            <p className="field name-field">
              {beerData.fields.Beer}, {beerData.fields.Origin}
            </p>
            <p className="field review-field">{beerData.fields.Review}</p>
            <p className="field">{beerData.fields.Rating}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
export default DisplayReview;

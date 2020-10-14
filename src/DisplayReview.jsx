import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplayReview(props) {
  const [beerData, setBeerData] = useState([]);
  const [fetchData, setFetchData] = useState(false);
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
  }, [fetchData]);

  return (
    <div className="review-container">
      {beerData.map((beerData) => (
        <div className="reviews-shown" key={beerData.id}>
          <p className="field">{beerData.fields.Beer}</p>
          {/* { if (parseInt.beerData.fields.Rating)} */}
          <p className="field reviewField">{beerData.fields.Review}</p>
          <p className="field">{beerData.fields.Rating}</p>
          <p className="field">{beerData.fields.Origin}</p>
        </div>
      ))}
      <div className="rating">
        <input type="radio" name="star" id="star1" />
        <label htmlFor="star1"></label>
        <input type="radio" name="star" id="star2" />
        <label htmlFor="star2"></label>
        <input type="radio" name="star" id="star3" />
        <label htmlFor="star3"></label>
        <input type="radio" name="star" id="star4" />
        <label htmlFor="star4"></label>
        <input type="radio" name="star" id="star5" />
        <label htmlFor="star5"></label>
        <span className="fa fa-star checked"></span>
      </div>
    </div>
  );
}
export default DisplayReview;

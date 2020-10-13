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
          <p className="field reviewField">{beerData.fields.Review}</p>
          <p className="field">{beerData.fields.Rating}</p>
          <p className="field">{beerData.fields.Origin}</p>
        </div>
      ))}
    </div>
  );
}
export default DisplayReview;

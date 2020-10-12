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
    <div className="container">
      {beerData.map((beerData) => (
        <div className="loggedData" key={beerData.id}>
          <p>Beer: {beerData.fields.Beer}</p>
          <p>Review: {beerData.fields.Review}</p>
          <p>Rating: {beerData.fields.Rating}</p>
          <p>Origin: {beerData.fields.Origin}</p>
        </div>
      ))}
    </div>
  );
}
export default DisplayReview;

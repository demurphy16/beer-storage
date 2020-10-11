import React, { Component } from "react";
import axios from "axios";

class CreateSuggestion extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
    };
  }

  async getBeers() {
    const beerURL = `https://api.punkapi.com/v2/beers`;
    const response = await axios.get(beerURL);
    const beerList = Object.keys(response.data.message);
    this.setState({ beers: beerList });
  }
  componentDidMount() {
    this.getBeers();
  }

  render() {
    const { beers } = this.state;
    return (
      <ul>
        {beers.map((beer, index) => (
          <li key={index}>{beer}</li>
        ))}
      </ul>
    );
  }
}

export default CreateSuggestion;

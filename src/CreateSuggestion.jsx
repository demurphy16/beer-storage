import React, { Component } from "react";
import axios from "axios";

class CreateSuggestion extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      abvInput: "",
    };
  }

  async getBeers() {
    const beerURL = `https://api.punkapi.com/v2/beers?abv_gt=${this.state.abvInput}`;
    const response = await axios.get(beerURL);
    const userBeer = response.data;
    this.setState({ beers: userBeer });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getBeers()
  }

  changeInput(event) {
    this.setState({ abvInput: parseInt(event.target.value) });
  }

  render() {
    const { beers } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="abvInput"></label>
          <input
            name="abvInput"
            type="text"
            onChange={(event) => this.changeInput(event)}
          />
          <button type="submit">Find Your Beer</button>
        </form>
        <ul>{beers.slice(0, 4).map((beer, index) => (
          <li key={index}>{beer.name}</li>
        ))}
         </ul>
      </div>

    );
  }
}

{/* <ul>{beers.map((beer, index) => (
          <li key={index}>{beer.name}</li>
         ))}</ul> */}

export default CreateSuggestion;

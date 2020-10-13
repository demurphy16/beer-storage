import React, { Component } from "react";
import axios from "axios";

class CreateSuggestion extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      abvInput: "",
      hopsInput: "",
    };
  }

  async getBeers() {
    const beerURL = `https://api.punkapi.com/v2/beers?abv_gt=${this.state.abvInput}&hops=${this.state.hopsInput}`
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
  changeHops(event) {
    this.setState({ hopsInput: parseInt(event.target.value) })
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
            placeholder="Min abv"
            onChange={(event) => this.changeInput(event)}
          />
          <label htmlFor="hopsInput"></label>
          <input
            name="hopsInput"
            type="text"
            placeholder="Preffered Hops"
            onChange={(event) => this.changeHops(event)}
            />
          <button type="submit">Find Your Beer</button>
        </form>
        <div >{beers.slice(0, 4).map((beer, index) => (
          <div className="suggestion-container"key={index}>
            <p className="suggestion-p sug-name">{beer.name}</p>
            <p className="suggestion-p sug-abv">{beer.abv}</p>
            <p className="suggestion-p sug-dec">{beer.description}</p>
          </div>
        ))}
         </div>
      </div>

    );
  }
}

{/* <ul>{beers.map((beer, index) => (
          <li key={index}>{beer.name}</li>
         ))}</ul> */}

export default CreateSuggestion;

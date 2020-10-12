import React, { Component } from "react";
import axios from "axios";

class CreateSuggestion extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      userInput: "",
    };
  }

  async getBeers() {
    const beerURL = `https://api.punkapi.com/v2/beers?abv_gt=${this.state.userInput}`;
    const response = await axios.get(beerURL);
    const userBeer = response.data;
    console.log(userBeer);
    this.setState({ beers: userBeer });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  changeInput(event) {
    this.setState({ userInput: parseInt(event.target.value) });
  }

  render() {
    const { beers } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="userInput"></label>
          <input
            name="userInput"
            type="text"
            onChange={(event) => this.changeInput(event)}
          />
          <button type="submit">Find Your Beer</button>
        </form>
        <ul>{beers.name}</ul>
      </div>

      // <ul>
      //   {beers.map((beer, index) => (
      //     <li key={index}>{beer.name}</li>
      //    ))}
      // </ul>
    );
  }
}

export default CreateSuggestion;

import React, { Component } from "react";
import axios from "axios";
import ShowResults from "./ShowResults";
class Movie extends Component {
  state = {
    name: "",
    movieData: []
  };
  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  clickHandler = e => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?s=${this.state.newName}&apikey=thewdb`)
      .then(res =>
        this.setState({
          movieData: res.data.Search
        })
      );
  };

  render() {
    const { name, movieData } = this.state;
    this.state.newName = this.state.name.split(" ").join("+");
    return (
      <div className="search-box">
        <h1>Movie Seacrhing App</h1>
        <input
          type="text"
          placeholder="Enter Movie Name"
          onChange={this.changeHandler}
          name="name"
          value={name}
        />
        <button className="btn" onClick={this.clickHandler}>
          Find Movie
        </button>
        <ShowResults data={movieData} />
      </div>
    );
  }
}

export default Movie;

//res => res.data.Search.map(el => console.log(el))

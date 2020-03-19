import React, { Component } from "react";
import axios from "axios";
class Poke extends Component {
  state = {
    id: "",
    name: "",
    img: "",
    type: [],
    height: "",
    weight: "",
    avg_spawns: "",
    spawn_time: "",
    weaknesses: [],
    next_evolution: []
  };
  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  clickHandler = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
      )
      .then(res => console.log(Object.values(res.data.pokemon[0])));
  };

  render() {
    const {
      name,
      img,
      type,
      height,
      weight,
      avg_spawns,
      spawn_time,
      weaknesses,
      next_evolution
    } = this.state;
    return (
      <div className="search-box">
        <h1 className="center">Pokemon Finder App</h1>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.changeHandler}
          placeholder="Enter Pokemon Name..."
        />
        <button className="btn" onClick={this.clickHandler}>
          Find Pokemon
        </button>
      </div>
    );
  }
}

export default Poke;

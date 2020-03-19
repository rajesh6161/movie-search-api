import React, { Component } from "react";
import { Link } from "react-router-dom";
class Details extends Component {
  state = {
    movieName: ""
  };
  clickHandler = () => {
    this.setState({
      movieName: this.props.data.Title
    });
  };
  render() {
    return (
      <div>
        <p className="title">{this.props.data.Title}</p>
        <p className="title">Year Released: {this.props.data.Year}</p>
        {/* <Link to={"/more"} info={this.state.movieName}>
          <a className="info" onClick={this.clickHandler}>
            More Info
          </a>
        </Link> */}
      </div>
    );
  }
}

export default Details;

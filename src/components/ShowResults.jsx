import React from "react";
import Details from "./Details";
import LightSpeed from "react-reveal/LightSpeed";
import Bounce from "react-reveal/Bounce";
const ShowResults = props => {
  const list = props.data.map(el => (
    <Bounce>
      <div className="imgbox">
        <div className="box-1">
          <img className="responsive-img" src={el.Poster} />
        </div>
        <div className="box-2">
          <Details data={el} />
        </div>
      </div>
    </Bounce>
  ));

  return <div className="movie-list">{list}</div>;
};
export default ShowResults;

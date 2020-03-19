import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import MoreInfo from "./MoreInfo";
class Router extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="Router">
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/more" component={MoreInfo} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;

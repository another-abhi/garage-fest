import Login from "./containers/Login";

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Dash from "./containers/Dash";

class Routes extends Component {
  state = {
    flag: false
  };
  loadDash(flag) {
    console.log("loaddasg", flag);
    this.setState({ flag: flag });
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />

        <Route
          path="/login"
          exact
          render={() => (
            <Login
              login={this.props.login}
              loadDash={this.loadDash}
              userFlag={this.props.userFlag}
            />
          )}
        />
        {console.log("hellohello")}
        {this.props.userFlag ? (
          <Route path="/dashboard" exact component={Dash} />
        ) : (
          console.log("null")
        )}
      </Switch>
    );
  }
}

export default Routes;

import Login from "./containers/Login";

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Dash from "./containers/Dash";
import { withRouter } from "react-router";

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
        <Route exact path="/" component={withRouter(Home)} />

        <Route
          path="/login"
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
          <Route path="/dashboard" exact component={withRouter(Dash)} />
        ) : (
          console.log("null")
        )}
      </Switch>
    );
  }
}

export default Routes;

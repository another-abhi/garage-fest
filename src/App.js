import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">FINAPP</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/signup">
                <NavItem>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem>Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes login={this.props.login} userFlag={this.props.userFlag} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps,", state);
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  console.log("mapDispatchToProps,", dispatch);
  return {
    login: (username, password) => {
      console.log("login map");
      const args = {
        email: username,
        password: password
      };
      const action = { type: "login", args: args };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));

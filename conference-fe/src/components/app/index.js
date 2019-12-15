import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from "../home";
import NewConf from "../new-conf";

export default function App(props) {
  return (
    <Container>
      <Router>
        <Navbar className="main-nav" bg="light" expand="lg">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/conference/new">Create conference</NavLink>
            <NavLink className="nav-link" to="/conference/reserve">Book conference</NavLink>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/conference/new">
            <NewConf />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

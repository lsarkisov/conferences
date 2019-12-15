import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from "../home";
import NewConference from "../new-conference";
import ReserveConference from "../reserve-conference";
import NoMatch from "../no-match"

export default function App(props) {
  return (
    <Container>
      <Router>
        <Navbar className="main-nav" bg="light" expand="lg">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/conference/new">Create conference</NavLink>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/conference/new">
            <NewConference />
          </Route>
          <Route path="/conference/reserve/:id">
            <ReserveConference />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';
import Conferences from "../conferences";
import NewConference from "../new-conference";
import ReserveConference from "../reserve-conference";
import NoMatch from "../no-match"

export default function App(props) {
  return (
    <Container>
      <Router>
        <Navbar className="main-nav" bg="light" expand="lg">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/conferences">conferences</NavLink>
            <NavLink className="nav-link" to="/conference/new">create conference</NavLink>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/conference/new">
            <NewConference />
          </Route>
          <Route path="/conference/reserve/:id">
            <ReserveConference />
          </Route>
          <Route path="/conferences">
            <Conferences />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

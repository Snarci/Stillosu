import React from "react";
import styled from "styled-components/macro";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import PrimaPagina from "./components/PrimaPagina";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Armadio from "./components/Armadio";
import Abbinamento from "./components/Abbinamento";
import Camera from "./components/Camera";
import Visual from "./components/VisualAbito";

const Container = styled.div`

`;

const App = () => ( 
  <Router>
    <Switch> 
      <Route path="/visual">
        <Visual />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/armadio">
        <Armadio />
      </Route>
      <Route path="/abbinamento">
        <Abbinamento />
      </Route>
      <Route path="/photo-add">
        <Camera />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <PrimaPagina />
      </Route>
    </Switch>
  </Router>
);

export default App;

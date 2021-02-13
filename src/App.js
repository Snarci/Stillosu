import React, { useState } from "react";
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
import ConfermaColore from "./components/ConfermaColore";

const Container = styled.div`

`;

const App = () => {

  const [mailC,setMail] = useState("admin");
  const [passwordC,setPassword] = useState("admin");
  return(
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
          <Register setPasswordF={setPassword} setMailF={setMail}/>
        </Route>
        <Route path="/login">
          <Login mailC={mailC} passwordC={passwordC} />
        </Route>
        <Route path="/">
          <PrimaPagina />
        </Route>
        <Route path="/conferma-colore">
        <ConfermaColore />
      </Route>
      </Switch>
    </Router>
);
} 
export default App;

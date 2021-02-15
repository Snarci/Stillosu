import React, { useState } from "react";
import styled from "styled-components/macro";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { ToastProvider, useToasts } from 'react-toast-notifications';

import PrimaPagina from "./components/PrimaPagina";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Armadio from "./components/Armadio";
import Abbinamento from "./components/Abbinamento";
import Camera from "./components/Camera";
import Visual from "./components/VisualAbito";
import Outfit from "./components/Outfit";
import ConfermaColore from "./components/ConfermaColore";
import SelezioneInfo from "./components/SelezioneInfo";
import SelezioneNome from "./components/SelezioneNome";

const Container = styled.div`

`;

const App = () => {

  const [mailC,setMail] = useState("admin");
  const [passwordC,setPassword] = useState("admin");
  return(
    <ToastProvider
      autoDismiss
      autoDismissTimeout={2000}
      placement="bottom-center">
      <Router>
        
        <Switch>
          <Route path="/conferma-colore">
            <ConfermaColore />
          </Route>
        <Route path="/selezione-info">
            <SelezioneInfo />
          </Route>
          <Route path="/selezione-nome">
            <SelezioneNome />
          </Route>
          <Route path="/outfit">
            <Outfit />
          </Route>
          <Route path="/conferma-colore">
            <ConfermaColore />
          </Route> 
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
        </Switch>
        </Router>
    </ToastProvider>
);
} 
export default App;

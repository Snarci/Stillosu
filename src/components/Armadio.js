import React, { useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

import Header from "./Header";
import Abito from "./bits/Abito";

import search from "../res/search.svg";
import cappelloIcon from "../res/ImmaginiIconeAbiti/cappello.svg";
import magliaIcon from "../res/ImmaginiIconeAbiti/maglia.svg";
import pantaloneIcon from "../res/ImmaginiIconeAbiti/pantalone.svg";
import scarpeIcon from "../res/ImmaginiIconeAbiti/scarpe.svg";


import {abiti} from "../utils/date";

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
  justify-content: flex-start;
  background-color: #ffddd2;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23e8d9ce' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23d1d4ca' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23b8cfc6' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%239fcac2' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%2383c5be' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`;
const Anta = styled.div`
  height: 76vh;
  width: 90%;
  border: 3px solid;
  border-radius: 15px;
  border-color: #e29578;
  margin: auto ;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
`;
const InputImgContainer = styled.div`
  height: 7.5vh;
  width: 70%;
  display: flex;
	flex-direction: row;
  justify-content: center;
  margin: auto;
  border-radius: 20px;
  border: 3px solid;
  border-color: #e29578;
`
const InputImg = styled.img`
 	height: 3vh;
	margin: auto;
`;
const Circle = styled.button`
	background: #e29578;
	border: 0px solid;
  width: 5vh;
	height: 5vh;
  border-radius: 50%;
	margin: auto 17px auto 17px;
	display: flex;
	align-items: center;
  justify-content: center;
	outline:none;
  box-shadow: 1px 1px 7px 1px #333333;
  margin: inherit;
  transform: ${(props) => (props.condition ? 'scale(1.3)' : 'scale(1)')};
`;
const Abitcontainer = styled.div`
  margin: auto;
  padding: 4px;
`;
const Armadio = () =>{
	const history = useHistory();
	const handleClickBack = () =>{
    history.push("/home")
	};
  const [filtro,setFiltro] = useState("");
  const [scarpeSel,setScarpeSel] = useState(false);
  const [cappelloSel,setCappelloSel] = useState(false);
  const [magliaSel,setMagliaSel] = useState(false);
  const [tuttoSel,setTuttoSel] = useState(true);
  const [pantaloneSel,setPantaloneSel] = useState(false);

  const sceltaFiltroTutto = () => {
    setFiltro("");
    setTuttoSel(true);
    setScarpeSel(false);
    setCappelloSel(false);
    setMagliaSel(false);
    setPantaloneSel(false);
  }
  const sceltaFiltroCappello = () => {
    setFiltro("capello");
    setTuttoSel(false);
    setScarpeSel(false);
    setCappelloSel(true);
    setMagliaSel(false);
    setPantaloneSel(false);
  }
  const sceltaFiltroMaglia = () => {
    setFiltro("maglietta");
    setTuttoSel(false);
    setScarpeSel(false);
    setCappelloSel(false);
    setMagliaSel(true);
    setPantaloneSel(false);
  }
  const sceltaFiltroPantalone = () => {
    setFiltro("pantalone");
    setTuttoSel(false);
    setScarpeSel(false);
    setCappelloSel(false);
    setMagliaSel(false);
    setPantaloneSel(true);
  }
  const sceltaFiltroScarpe = () => {
    setFiltro("scarpe");
    setTuttoSel(false);
    setScarpeSel(true);
    setCappelloSel(false);
    setMagliaSel(false);
    setPantaloneSel(false);
  }
	return(
  
		<Container>
			<Header leftFun={handleClickBack}/>
        <InputImgContainer>
          <Circle onClick={sceltaFiltroTutto} condition={tuttoSel}>
            <InputImg src={search}/>
          </Circle>
          <Circle onClick={sceltaFiltroCappello} condition={cappelloSel}>
            <InputImg src={cappelloIcon}/>
          </Circle>
          <Circle onClick={sceltaFiltroMaglia} condition={magliaSel}>
            <InputImg src={magliaIcon}/>
          </Circle>
          <Circle onClick={sceltaFiltroPantalone} condition={pantaloneSel}>
            <InputImg src={pantaloneIcon}/>
          </Circle>
          <Circle onClick={sceltaFiltroScarpe} condition={scarpeSel}>
            <InputImg src={scarpeIcon}/>
          </Circle>
        </InputImgContainer>
      <Anta>
        {
          abiti.filter(abito => abito.tipo.includes(filtro)).map(abitifiltrati => {
          return(
          <Abitcontainer>
            <Abito image={abitifiltrati.immagine} nome={abitifiltrati.nome} tipo={abitifiltrati.tipo} id={abitifiltrati.id} colore={abitifiltrati.colore}/>
          </Abitcontainer>
           )
          }
          )
        }
      </Anta>
		</Container>
	);
};

export default Armadio;
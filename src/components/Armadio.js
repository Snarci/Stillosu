import React, { useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

import Header from "./Header";
import Abito from "./bits/Abito";

import search from "../res/search.svg";

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
  height: 7vh;
  width: 70%;
  display: flex;
	flex-direction: row;
  justify-content: center;
  background-color: #e29578;
  margin: auto;
  border-radius: 20px;
  border: 1px transparent;
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
  console.log(abiti);
	return(
  
		<Container>
			<Header leftFun={handleClickBack}/>
        <InputImgContainer>
          <Circle>
            <InputImg src={search}/>
          </Circle>
          <Circle>
            <InputImg src={search}/>
          </Circle>
          <Circle>
            <InputImg src={search}/>
          </Circle>
          <Circle>
            <InputImg src={search}/>
          </Circle>
          <Circle>
            <InputImg src={search}/>
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
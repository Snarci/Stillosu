import React, { useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

import Header from "./Header";
import Abito from "./bits/Abito";
import H1 from "./bits/H1";

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
  border: 1px solid;
  margin: auto ;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
`;
const Filto = styled.div`
  height: 8vh;
  width: 85%;
  margin: auto ;
`;
const InputImgContainer = styled.div`
  display: flex;
  align-items: center;
	flex-direction: row;
  background-color: #e29578;
  margin: 5px;
  border-radius: 10px;
  border: 1px transparent;
`
const InputImg = styled.img`
 	height: 33px;
	margin: auto;
`;
const Input = styled.input`
	width: 75%;
  border-width:0px;
  border:none;
  outline:none;
  background-color: transparent;
	height: 5vh;
  font-size: 100%; 
  font-weight: bold;
  margin: auto;
`;
const Armadio = () =>{
	const history = useHistory();
	const handleClickBack = () =>{
    history.push("/home")
	};
  const [filtro,setFiltro] = useState("");
  console.log(abiti);
	return(
    console.log({filtro}),
		<Container>
			<Header leftFun={handleClickBack}/>
      <Filto>
        <InputImgContainer>
          <InputImg src={search}/>
          <Input value={filtro} onChange={event => setFiltro(event.target.value)} />
        </InputImgContainer>
      </Filto>
      <Anta>
        {
         abiti.filter(abito => abito.nome.includes(filtro)).map(abitifiltrati => {
          console.log(abitifiltrati.immagine);
          return(
          <Abito image={abitifiltrati.immagine} nome={abitifiltrati.nome}/>
           )
          }
          )
        }
      </Anta>
		</Container>
	);
};

export default Armadio;
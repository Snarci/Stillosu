import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

import Header from "./Header";

import T1 from "../res/ImmaginiAbiti/T-shirt/1P.png";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffddd2;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23e8d9ce' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23d1d4ca' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23b8cfc6' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%239fcac2' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%2383c5be' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`;
const PhotoContainer = styled.div`
  background-color: rgba(237, 246, 249,1);
  align-self: center;
  width: 45vh;
  height: 45vh;
  border: 0px solid;
  border-radius: 100% ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto; 
  box-shadow: 1px 1px 7px 1px #333333;
`;
const PhotoContainerVariant = styled.div`
  background-color: rgba(0, 0, 0,.95);
  align-self: center;
  width: 40vh;
  height: 40vh;
  border: 0px solid;
  border-radius: 100% ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto; 
  box-shadow: 1px 1px 7px 1px #333333;
`;
const SButton = styled.button`
	width: 45%;
	margin: auto;
  outline: none;
  border-radius: 10px;
	height: 55px;
  font-size: 130%;
  font-weight: bold;
  background-color: #e29578;
  border: 0px solid;
  box-shadow: 1px 1px 7px 1px #333333;
`;
const Info = styled.div`
  height: 5vh;
  width: 80%;
  border: 3px solid;
  border-radius: 15px;
  border-color: #e29578;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
const SubmitC = styled.div`
	display: flex;
  flex-direction: row;
  margin: 8px 16px 30px 16px;
`;

const MexH1 = styled.h1`
//background-color: rgba(237, 246, 249,0.8);
	font-size: 1.2em;
  margin: auto;
  align-self: center;
`;
const MexH1Variant = styled.h1`
//background-color: rgba(237, 246, 249,0.8);
	font-size: 1.2em;
  margin: auto;
  align-self: center;
`;


const ConfermaColore = () =>{
	const history = useHistory();
	const handleClickBack = () =>{
    history.push("/photo-add")
	};
  //poi cambia TODO nuova schermata
  const handleClickConfirm = () =>{
    console.log("Salmonella");
     history.push("/selezione-info");
  
	};
  const handleClickDelete = () =>{
    history.push("/home")
	};
	return(
		<Container>
			<Header leftFun={handleClickBack}/>
      <Info>
        <MexH1Variant>E' questo il colore del capo?</MexH1Variant>
      </Info>
			<PhotoContainer>
        <PhotoContainerVariant>
			  </PhotoContainerVariant>
			</PhotoContainer>
      <SubmitC>
      <SButton type="button" onClick= {handleClickDelete}>
					<MexH1>Elimina</MexH1>
			</SButton>
      <SButton type="button"  onClick= {handleClickConfirm}>
					<MexH1>Conferma</MexH1>
			</SButton>
    	</SubmitC>
		</Container>
	);
};

export default ConfermaColore;
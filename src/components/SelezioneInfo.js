import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

import Header from "./Header";

import MagliaImg from "../res/ImmaginiIconeAbiti/maglia.svg";
import PantaloneImg from "../res/ImmaginiIconeAbiti/pantalone.svg";
import ScarpeImg from "../res/ImmaginiIconeAbiti/scarpe.svg";
import CappelloImg from "../res/ImmaginiIconeAbiti/cappello.svg";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffddd2;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23e8d9ce' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23d1d4ca' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23b8cfc6' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%239fcac2' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%2383c5be' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  margin: auto; 
  padding: auto;
`;
const ChoiceContainer = styled.div`
  background-color: rgba(237, 246, 249,0.5);
  align-self: center;
  width: 90%;
  height: 70%;
  border: 5px solid;
  border-color: #e29578;
  border-radius: 15px ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto; 
  padding: auto;
`;
const ChoiceManager = styled.button`
  height: 15vh;
  width: 15vh;
  display: flex;
  border-radius: 15px ;
  border: 5px solid;
  border-color: #FFDDD2;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10px;
  outline: none;
  margin: auto;
  &:hover{
     border-color: #E29578;
    };

`;
const ChoiceImg = styled.img`
  height: 80px;
  width:  80px;
  align-self: center;
`;
const ChoiceText = styled.text`
  height: 20px;
  align-self: center;
  font-size: 100%;
  font-weight: bold;
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
`;

const SubmitC = styled.div`
	display: flex;
  flex-direction: row;
  margin: 8px 0px 8px 0px;
`;

const MexH1 = styled.h1`
//background-color: rgba(237, 246, 249,0.8);
	font-size: 1.2em;
  margin: 8px 0px 8px 0px;
  align-self: center;
`;
const MexH1Variant = styled.h1`
//background-color: rgba(237, 246, 249,0.8);
	font-size: 1.3em;
  margin: 8px 0px 8px 0px;
  align-self: center;
  margin-top: 60px;
`;


const SelezioneInfo = () =>{
	const history = useHistory();
	const handleClickBack = () =>{
    history.push("/conferma-colore")
	};
  //poi cambia TODO nuova schermata
  const handleClickConfirm = () =>{
     history.push("/selezione-nome");
  
	};
  const handleClickDelete = () =>{
    history.push("/home")
	};
  
	return(
		<Container>
			<Header leftFun={handleClickBack}/>
      <MexH1Variant>Seleziona categoria capo</MexH1Variant>
      <ChoiceContainer>
        <ChoiceManager onClick={() => {}}>
          <ChoiceImg src={CappelloImg}>
          </ChoiceImg>
          <ChoiceText>
            Cappello
          </ChoiceText>
        </ChoiceManager>
        <ChoiceManager>
          <ChoiceImg src={MagliaImg}>
          </ChoiceImg>
          <ChoiceText>
            Maglia
          </ChoiceText>
        </ChoiceManager>
        <ChoiceManager>
          <ChoiceImg src={PantaloneImg}>
          </ChoiceImg>
          <ChoiceText>
            Pantalone
          </ChoiceText>
        </ChoiceManager>
        <ChoiceManager>
          <ChoiceImg src={ScarpeImg}>
          </ChoiceImg>
          <ChoiceText>
            Scarpe
          </ChoiceText>
        </ChoiceManager>
        
      </ChoiceContainer>
        

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

export default SelezioneInfo;
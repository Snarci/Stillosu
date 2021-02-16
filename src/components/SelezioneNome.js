import React, { useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';

import { Shake } from '../utils/animation';

import passwordI from "../res/lock.svg";
import mailI from "../res/ImmaginiIconeAbiti/maglia.svg";
import ImgCapo from "../res/ImmaginiAbiti/T-shirt/1P.png";

import Header from "./Header";

const MexH1 = styled.h1`
//background-color: rgba(237, 246, 249,0.8);
  font-size: 1.2em;
  margin: auto;
`;
const Form = styled.form`
	height: 25vh;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  border-radius: 15px;
  padding: 6px;
`;
const InputImgContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: rgba(237, 246, 249,0.8);
  margin: 5px;
  border-radius: 10px;
  border: 0px solid;
  box-shadow: 1px 1px 7px 1px #333333;
`;
const InputImg = styled.img`
 	height: 33px;
	margin-left: 10px;
  padding-right: 15px; 
`;
const Input = styled.input`
	width: 75%;
  outline: none;
  border-width:0px;
  border:none;
  background-color: transparent;
	height: 50px;
  font-size: 100%; 
  font-weight: bold;
  ::placeholder{
    color: ${(props) => (props.condition ? 'red' : 'gray')};
  }
`;
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

const SelezioneNome = () => {
    const history = useHistory();
    const { addToast } = useToasts();
	const handleClickConfirm = () =>{
        history.push({
            pathname: "/visual",
            state:{ 
              nomer:"Maglietta Nera/Blu",
              imager:ImgCapo,
              idr:1,
              tipor:"Maglietta",
              condr:false,
              color:"#050505"
            }});
        addToast('Abito aggiunto', { appearance: 'success' });

	};
  //poi cambia TODO nuova schermata
  const handleClickBack = () =>{
     history.push("/selezione-info");
  
	};
    
  const handleClickDelete = () =>{
    history.push("/home")
	};
	return(
  	<Container>
    	<Header leftFun={handleClickBack}/>
    	<Info>
      	<MexH1>Inserisci nome del capo</MexH1>
    	</Info>
      <Form>
      	<InputImgContainer >
        	<InputImg src={mailI} />
        	<Input type="text"/>
      	</InputImgContainer>
    	</Form>
        <SubmitC>
          <SButton type="button" onClick= {handleClickDelete}>
					  <MexH1>Elimina</MexH1>
			    </SButton>
          <SButton type="button"  onClick= {handleClickConfirm}>
					  <MexH1>Conferma</MexH1>
			  </SButton>
    	  </SubmitC>
  	</Container>
)
}
export default SelezioneNome;
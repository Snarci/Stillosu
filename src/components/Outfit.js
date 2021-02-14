import React, { useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

import Header from "./Header";

import {outfitArray} from "../utils/outfitP";

import arrow from "../res/back.svg";

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
const Quadro = styled.div`
  height: 80%;
  width: 80%;
  border: 3px solid;
  border-radius: 15px;
  border-color: #e29578;
  margin: auto ;
  padding: 10px;
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  height: 100%;
  padding-bottom: 30px;
`;
const Circle = styled.button`
	background: #e29578;
	border: 0px solid;
  width: 9vh;
	height: 9vh;
  border-radius: 50%;
	margin: auto 17px auto 17px;
	display: flex;
	align-items: center;
	outline:none;
  box-shadow: 1px 1px 7px 1px #333333;
`;
const Icon = styled.img`
	height: 4vh;
	margin: auto;
  transform: ${(props) => (props.condition === 'gira' ? 'scale(-1, 1)' : 'scale(1, 1)')};
`;
const ContainerOutfit = styled.div`
  width: 100%;
  height: 60vh;
  margin: auto;
  display: flex;
  flex-direction: row;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
  width: 100%;
`;
const Info = styled.div`
  height: 7vh;
  width: 80%;
  border: 3px solid;
  border-radius: 15px;
  border-color: #e29578;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
const Text = styled.h1`
  font-size: 1em;
  text-align: center;
  margin: auto;
`;
const Outfit = () =>{
  const history = useHistory();
  const handleClickBack = () => {
    history.push("/home")
	};
  const [numeroOutfit,setNumero] = useState(1);
  const AvantiO = () => {
    if (numeroOutfit!=10){
      setNumero(numeroOutfit+1) 
    }else{
      setNumero(1)
    }
  };
  const IndietroO = () => {
    if (numeroOutfit!=1){
      setNumero(numeroOutfit-1) 
    }else{
      setNumero(10)
    }
  };
  
	return(
		<Container>
			<Header leftFun={handleClickBack}/>
      <Info>
        <Text>Premi i pulsanti per sfogliare gli Outfit scelti per te</Text>
      </Info>
      <ContainerOutfit>
        <Quadro>
            {
              outfitArray.filter(outfitArray => outfitArray.id===numeroOutfit).map(outfitArray => {
                return(
                <Img src={outfitArray.immagine} />
                );
              })
            }
        </Quadro>
      </ContainerOutfit>
      <ButtonContainer>
        <Circle onClick={AvantiO}>

        <Icon src={arrow} />
        </Circle>
        <Circle onClick={IndietroO}>
          <Icon src={arrow} condition={"gira"} />
        </Circle>
      </ButtonContainer> 
		</Container>
	);
};

export default Outfit;
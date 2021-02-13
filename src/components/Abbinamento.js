import React, { useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

import Header from "./Header";

import {abiti} from "../utils/date";

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
const ContainerQP = styled.div`
  margin: auto;
  display: flex;
`;
const Quadro = styled.div`
  height: 15vh;
  width: 15vh;
  border: 3px solid;
  border-radius: 15px;
  border-color: #e29578;
  margin: auto ;
  padding: 10px;
`;
const Img = styled.img`
  width: 100%;
  padding-bottom: 30px;
 
`;
const Info = styled.div`
  height: 3vh;
  width: 70%;
  border: 3px solid;
  border-radius: 15px;
  border-color: #e29578;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
const Text = styled.h1`
  margin:auto;
  font-size: 1em;
`;
const ContainerOutfit = styled.div`
  width: 100%;
  height: 80vh;
  margin: auto;
  display: flex;
  flex-direction: column;
`;
const Circle = styled.button`
	background: #e29578;
	border: 0px solid;
  width: 7vh;
	height: 7vh;
  border-radius: 50%;
	margin: auto 17px auto 17px;
	display: flex;
	align-items: center;
	outline:none;
`;
const Icon = styled.img`
	height: 4vh;
	margin: auto;
  transform: ${(props) => (props.condition === 'gira' ? 'scale(-1, 1)' : 'scale(1, 1)')};
`;
const Abbinamento = () =>{
	const history = useHistory();
	const handleClickBack = () =>{
    history.push("/home")
	};
  const [capelloid,setIdC] = useState(1);
  const [magliettaid,setIdM] = useState(1);
  const [pantaloneid,setIdP] = useState(1);
  const [scarpeid,setIdS] = useState(1);

  const AvantiC = () => {
    if (capelloid<4){
      setIdC(capelloid+1) 
    }else{
      setIdC(1)
    }
  };
  const AvantiM = () => {
    if (magliettaid<8){
      setIdM(magliettaid+1) 
    }else{
      setIdM(1)
    }
  };
  const AvantiP = () => {
    if (pantaloneid<4){
      setIdP(pantaloneid+1) 
    }else{
      setIdP(1)
    }
  };
  const AvantiS = () => {
    if (scarpeid<4){
      setIdS(scarpeid+1) 
    }else{
      setIdS(1)
    }
  };
	return(
		<Container>
			<Header leftFun={handleClickBack}/>
      <Info>
        <Text>Premi i pulsanti per abbinare</Text>
      </Info>
      <ContainerOutfit>
        <ContainerQP>
          <Circle>
            <Icon src={arrow} />
          </Circle>
          <Quadro>
            {
              abiti.filter(abito => abito.id===capelloid).filter(abito => abito.nome.includes("capello")).map(abitifiltrati => {
              console.log(abitifiltrati.immagine);
                return(
                  <Img src={abitifiltrati.immagine} />
                )
              }
              )
            }  
          </Quadro>
          <Circle onClick={AvantiC}>
            <Icon src={arrow} condition={"gira"}/>
          </Circle>
        </ContainerQP>
        <ContainerQP>
          <Circle>
            <Icon src={arrow}/>
          </Circle>
          <Quadro>
            {
              abiti.filter(abito => abito.id===magliettaid).filter(abito => abito.nome.includes("maglietta")).map(abitifiltrati => {
              console.log(abitifiltrati.immagine);
                return(
                  <Img src={abitifiltrati.immagine} />
                )
              }
              )
            }  
          </Quadro>
          <Circle onClick={AvantiM}>
            <Icon src={arrow} condition={"gira"}/>
          </Circle>
        </ContainerQP><ContainerQP>
          <Circle>
            <Icon src={arrow} />
          </Circle>
          <Quadro>
            {
              abiti.filter(abito => abito.id===pantaloneid).filter(abito => abito.nome.includes("pantalone")).map(abitifiltrati => {
              console.log(abitifiltrati.immagine);
                return(
                  <Img src={abitifiltrati.immagine} />
                )
              }
              )
            }  
          </Quadro>
          <Circle onClick={AvantiP}> 
            <Icon src={arrow} condition={"gira"}/>
          </Circle>
        </ContainerQP><ContainerQP>
          <Circle>
            <Icon src={arrow} />
          </Circle>
          <Quadro>
            {
              abiti.filter(abito => abito.id===scarpeid).filter(abito => abito.nome.includes("scarpe")).map(abitifiltrati => {
              console.log(abitifiltrati.immagine);
                return(
                  <Img src={abitifiltrati.immagine} />
                )
              }
              )
            }  
          </Quadro>
          <Circle onClick={AvantiS}>
            <Icon src={arrow} condition={"gira"}/>
          </Circle>
        </ContainerQP>
      </ContainerOutfit>
		</Container>
	);
};

export default Abbinamento;
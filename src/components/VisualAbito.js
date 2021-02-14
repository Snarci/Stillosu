import React, { useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Header from "./Header";

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
background-color: rgba(237, 246, 249,0.3);
  height: 40vh;
  width: 80%;
  border: 3px solid;
  border-radius: 15px;
  border-color: #e29578;
  margin: auto ;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
`;
const Info = styled.div`
background-color: rgba(237, 246, 249,0.3);
  height: 35vh;
  width: 80%;
  border: 3px solid;
  border-radius: 15px;
  border-color: #e29578;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  height: 90%;
  border-radius: 15px;
  margin: auto;
`;
const Type = styled.h1`
  margin:auto;
  font-size: 1.5em;
`;
const Button = styled.button`
  margin: auto;
  width: 20vh;
  height: 7vh;
  text-align: center;
  border: 0px solid;
  border-radius: 15px;
  box-shadow: 1px 1px 20px 1px #333333;
  background-color: rgb(226,149,120,0.9);
  outline: none;
  visibility: ${(props) => (props.condition ? 'hidden' : 'visible')};
`;
const ColorSemicirle = styled.div`
   /* Create the circle */ 
    width: 12vh;
    height: 12vh; 
    border: 0px solid black; 
    border-radius: 50%;
    align-self: center;
    box-shadow: 1px 1px 7px 1px #333333;
`;

const VisualAbito = () =>{
  //importante
  const location = useLocation();
	const history = useHistory();
  const [capelloid,setIdC] = useState(() => 
  {if(location.state.tipor==="cappello") {return location.state.idr;} else { return Math.round(1 + Math.random() * (4 - 1));}});
 const [magliettaid,setIdM] =  useState(() => 
 {if(location.state.tipor==="maglietta") {return location.state.idr;} else { return Math.round(1 + Math.random() * (8 - 1));}});
const [pantaloneid,setIdP] =  useState(() => 
{if(location.state.tipor==="pantalone") {return location.state.idr;} else { return Math.round(1 + Math.random() * (4 - 1));}});
const [scarpeid,setIdS] =  useState(() => 
{if(location.state.tipor==="scarpe") {return location.state.idr;} else { return Math.round(1 + Math.random() * (4 - 1));}});
console.log(1 + Math.random() * (4 - 1));
	const handleClickBack = () =>{
    console.clear();
    console.log("yammeya ");
    console.log(location.state.condr);
    if(location.state.condr){history.push({
      pathname: "/abbinamento",
      state:{ 
        scarpeidr:location.state.idsr,
        capelloidr:location.state.idcr,
        magliettaid:location.state.idmr,
        pantaloneidr:location.state.idpr
      }});
      console.log(location.state.idsr);}
    else{history.push("/armadio");}
    
	};
  const handleCreateOutfit = () =>{

    history.push({
      pathname: "/abbinamento",
      state:{ 
        scarpeidr:scarpeid,
        capelloidr:capelloid,
        magliettaid:magliettaid,
        pantaloneidr:pantaloneid
      }});
      
    
	};
	return(
		<Container>
			<Header leftFun={handleClickBack}/>
      <Quadro>
        <Img src={location.state.imager} />
      </Quadro>
      <Info>
        <Type>Nome: {location.state.nomer}</Type>
        <Type>Tipologia: {location.state.tipor}</Type>
        <Type>Colore:</Type>
        <ColorSemicirle style={{backgroundColor: location.state.color}}></ColorSemicirle>
      </Info>
      
      <Button condition={location.state.condr}>
        <Type onClick={handleCreateOutfit}>Genera un Outfit</Type>
      </Button>

		</Container>
	);
};

export default VisualAbito;
import styled from "styled-components/macro";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Container = styled.button`
  width: 16vh;
  height: 18vh;
  margin:  auto;
  border-radius: 15px;
  border: none;
  outline: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 4px;
  background-color: rgb(226,149,120,0.5);
`;
const Img = styled.img`
  height: 60%;
  border-radius: 15px;
  margin: auto;
`;
const Text = styled.h1`
  font-size: 1.1em;
  border: 0px solid;
  border-radius: 15px;
  width: 70%;
  margin: auto;
`;

const Abito = ({ image, nome,id,tipo}) => {
  const history = useHistory();
	const handleClick = () =>{
    history.push({
      pathname: "/visual",
      state:{ 
        nomer:nome,
        imager:image,
        idr:id,
        tipor:tipo
      }});
      console.log("InfosABITO",image,nome,id,tipo);
      
	};
  return(
  <Container onClick={handleClick}>
    <Img src={image} />
    <Text>{nome}</Text>
  </Container>
);
};
export default Abito;
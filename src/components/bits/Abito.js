import React from 'react'
import styled from "styled-components/macro";

const Container = styled.div`
  width: 16vh;
  height: 18vh;
  margin:  10px auto 10px auto;
  background-color: rgba(237, 246, 249,0.8);
  border-radius: 11px;
  text-align: center;
  align-items:center;
 
`;
const Img = styled.img`
  height: 70%;
  
  border-radius: 11px;
  
  
`;
const Text = styled.text`
  width: 30%;
  font-size: 1.1em;
  border-width:5px solid;
  border-radius: 11px;
  
`;

const Abito = ({ image, nome}) => (
  <Container>
    <Img src={image} />
    <Text>{nome}</Text>
  </Container>
);

export default Abito;
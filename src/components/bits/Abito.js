import React from 'react'
import styled from "styled-components/macro";

const Container = styled.div`
  width: 16vh;
  height: 18vh;
  margin:  10px auto 10px auto;
  background-color: rgba(237, 246, 249,0.8);
  border-radius: 15px;
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

const Abito = ({ image, nome}) => (
  <Container>
    <Img src={image} />
    <Text>{nome}</Text>
  </Container>
);

export default Abito;
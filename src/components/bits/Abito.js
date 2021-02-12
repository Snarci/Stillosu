import React from 'react'
import styled from "styled-components/macro";

const Container = styled.div`
  width: 12vh;
  height: 12vh;
  margin: auto;
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  height: 100%;
`;

const Abito = ({ image, nome}) => (
  <Container>
    <Img src={image} />
  </Container>
);

export default Abito;
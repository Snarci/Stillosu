import React from 'react';
import styled from 'styled-components/macro';
import { useHistory } from "react-router-dom";

import xIcon from "../../res/x.svg";
import esci from "../../res/esci.svg";

const StyledMenu = styled.div`
  top: 0;
  right: 0;
  position: fixed;
  overflow-x: hidden;
  transition: all 500ms ease-in-out;
  width: ${(props) => (props.condition === 'opened' ? '100%' : '100%')};
  height: ${(props) => (props.condition === 'opened' ? '100%' : '0%')};
  clip-path: ${(props) => (props.condition === 'opened' ? 'circle(100%)' : 'circle(0%)')};
  background-color: #ffddd2;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23e8d9ce' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23d1d4ca' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23b8cfc6' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%239fcac2' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%2383c5be' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  z-index: 2;
  `;
const Container = styled.div`
	height: 10vh;
	display: flex;
	flex-direction: row;
  justify-content: flex-end;
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
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
const Img = styled.img`
	height: 5vh;
	margin: auto;
`;
const Text = styled.h1`
  margin: auto;
  width: 50vh;
  text-align: center;
`;

const SideMenu = ({ open, stateSide }) => {
  const history = useHistory();
	const handleClickEsci = () =>{
    history.push("/")
	};
  return(
  <StyledMenu condition={stateSide}>
    <Container>
      <Circle onClick={open}>
		    <Img src={xIcon} />
	    </Circle>
    </Container>
    <PageContainer>
      <Text>Vuoi uscire da Stillosu?</Text>
      <Circle onClick={handleClickEsci}>
        <Img src={esci}/>
      </Circle>
    </PageContainer>
  </StyledMenu>
  )
};

export default SideMenu;
import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

import Header from "./Header";


import armadio from "../res/armadio.svg";
import camera from "../res/camera.svg";
import capello from "../res/capello.svg";
import gruccia from "../res/gruccia.svg"
import user from "../res/user.svg";


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
const MenuContainer = styled.div`

`;

const SubMenuContainer = styled.button`
  background-color: rgba(237, 246, 249,0.6);
  align-self: center;
  width: 80%;
  height: 15%;
  border: 0px solid;
  border-radius: 15px ;
  display: flex;
	flex-direction: column;
  justify-content: center;
  margin: auto; 
`;
const Text = styled.h1`
  align-self: center;
  font-size: 1.3em;
  font-weight: bold;
`;
const Img = styled.img`
 	height: 60%;
  margin: auto; 
 
`;

const Home = () => {
	const history = useHistory();
	const handleClickCamera = () =>(
			history.push("/camera")
	);
	const handleClickAbbinameto = () =>(
		history.push("/abbinamento")
	);
	const handleClickArmadio = () =>(
		history.push("/armadio")
	);
	return(
    <Container>
			<Header />
      	<SubMenuContainer onClick={handleClickCamera}>
					<Text>Aggiungi un nuovo capo</Text>
        	<Img src={camera} />
      	</SubMenuContainer>
      	<SubMenuContainer onClick={handleClickAbbinameto}>
        	<Text>Genera un abbinamento</Text>
        	<Img src={capello} />
      	</SubMenuContainer>
				<SubMenuContainer onClick={handleClickArmadio}>
        	<Text>Apri il mio armadio</Text>
        	<Img src={gruccia} />
      	</SubMenuContainer>
				<SubMenuContainer>
        	<Text>Outfit di tendenza</Text>
        	<Img src={user} />
      	</SubMenuContainer>
  	</Container>
	);
};

export default Home; 
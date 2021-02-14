import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";


const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
  justify-content: center;
  background-color: #ffddd2;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23e8d9ce' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23d1d4ca' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23b8cfc6' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%239fcac2' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%2383c5be' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`;

const Button = styled.button`
  margin: auto;
  width: 20vh;
  text-align: center;
  border: 0px solid;
  border-radius: 15px;
  box-shadow: 1px 1px 7px 1px #333333;
  background-color: rgb(226,149,120,0.9);
`;
const Text = styled.h1`
  margin: auto;
  width: 70%;
  text-align: center;
`;

const PrimaPagina = () =>{
	const history = useHistory();
	const handleClickLogin = () =>{
    history.push("/login")
	};
	return(
		<Container>
      <Text>Benvenuto in Stillosu</Text>
			<Button onClick={handleClickLogin}>
        <h1>Vai!</h1>
      </Button>
		</Container>
	);
};

export default PrimaPagina;
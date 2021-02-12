import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

import Header from "./Header";


const Container = styled.div`

`;

const Armadio = () =>{
	const history = useHistory();
	const handleClickBack = () =>{
    history.push("/home")
	};
	return(
		<Container>
			<Header leftFun={handleClickBack}/>
		</Container>
	);
};

export default Armadio;
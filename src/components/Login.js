import React from "react";
import styled from "styled-components/macro";

import armadio from "../res/armadio.svg";

const Container = styled.div`
	height: 100vh;
	background-color: #83C5BE;
	display: flex;
	flex-direction: column;
  justify-content: space-around;
`;
const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 15vh;
`;
const StyledH1 = styled.h1`
	margin : 0px auto 0px auto;
`;
const Img = styled.img`
	height: 11vh;
  margin: 16px 0px 6px 0px;
`;
const Mex = styled.div`
  border: 1px solid;
  border-radius: 15px;
  padding: 5px;
  width: 60%;
  background-color: #EDF6F9;
  margin: 0px auto 0px auto;
  text-align: center;
  
`;

const MexH1 = styled.h1`
	font-size: 1em;
  margin: 8px 0px 8px 0px;
`;

const FormContainer = styled.div`

`;

const Form = styled.form`
	height: 20vh;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  width: 75%;
  margin: auto;
  border-radius: 15px;
  padding: 6px;

`;

const Input = styled.input`
	width: 50%;
	margin: auto;
	border: 1px solid;
  border-radius: 10px;
	height: 30px;
`;

const Label = styled.label`
	text-align: center;
`;

const SubmitC = styled.div`
	display: flex;
  flex-direction: column;
`

const RegText = styled.h1`
	font-size: 1em;
	text-align: center;
`;

const Login = () => (
	<Container>
    <ContainerImg>
	  	<StyledH1>Stillosu</StyledH1>
		  <Img src={armadio}/>
    </ContainerImg>
		<Mex>
			<MexH1>Accedi al tuo Account!</MexH1>
		</Mex>
		<FormContainer>
			<Form>
				<Label for="fname">E-mail:</Label>
  			<Input type="text" id="fname" name="fname" placeholder="massifadda99@gmail.com"/>
  			<Label for="lname">Password:</Label>
  			<Input type="text" id="lname" name="lname" placeholder="*********"/>
				</Form>
		</FormContainer>
		<SubmitC>
			<Input type="submit" value="Submit"/>
			<RegText>Oppure registrati..</RegText>
		</SubmitC>
	</Container>
);

export default Login;
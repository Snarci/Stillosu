import React from "react";
import styled from "styled-components/macro"

const Container = styled.div`
	height: 100vh;
	background-color: #83C5BE;
	display: flex;
	flex-direction: column;
  justify-content: space-around;
`;
const StyledH1 = styled.h1`
	margin : 0px auto 0px auto;
`;

const Mex = styled.div`
  border: 1px solid;
  border-radius: 15px;
  width: 50%;
  margin: 0px auto 0px auto;
  text-align: center;
`;

const MexH1 = styled.h1`
	font-size: 1em;
`;

const FormContainer = styled.div`

`;

const Form = styled.form`
	height: 20vh;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
	width: 50%;
	margin: auto;
	border: 1px solid;
  border-radius: 16px;
	height: 25px;
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

const Register = () => (
	<Container>
		<StyledH1>Register</StyledH1>
		<Mex>
			<MexH1>Registrati in Stillosu!</MexH1>
		</Mex>
		<FormContainer>
			<Form>
			  <Label for="fname">E-mail:</Label>
  		  <Input type="text" id="fname" name="fname" value="massifadda99@gmail.com"/>
  		  <Label for="lname">Password:</Label>
  		  <Input type="text" id="lname" name="lname" value="*********"/>
        <Label for="lname">Conferma Password:</Label>
  		  <Input type="text" id="lname" name="lname" value="*********"/>
			</Form>
		</FormContainer>
		<SubmitC>
			<Input type="submit" value="Registrati"/>
			<RegText>Oppure accedi al tuo account..</RegText>
		</SubmitC>
	</Container>
);

export default Register;
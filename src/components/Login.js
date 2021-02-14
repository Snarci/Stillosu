import React, { useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

import { Shake } from '../utils/animation';

import passwordI from "../res/lock.svg";
import mailI from "../res/mail.svg";
import logo from "../res/logov3.svg";


const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
  justify-content: space-around;
  background-color: #ffddd2;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23e8d9ce' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23d1d4ca' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23b8cfc6' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%239fcac2' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%2383c5be' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  overflow: scroll;
`;
const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 25vh;
`;
const StyledH1 = styled.h1`
	margin : 0px auto 0px auto;
  margin-top: 20px;
  font-style: italic;
  border-radius: 7px;
`;
const Img = styled.img`
	height: 11vh;
  margin: 16px 0px 6px 0px;
`;
const Mex = styled.div`
  border: 0px solid;
  border-radius: 15px;
  padding: 5px;
  width: 60%;
  margin: 0px auto 0px auto;
  text-align: center;
  
  
`;
const MexH1 = styled.h1`
//background-color: rgba(237, 246, 249,0.8);
	font-size: 1.3em;
  margin: 8px 0px 8px 0px;
`;
const Form = styled.form`

	height: 20vh;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  border-radius: 15px;
  padding: 6px;

`;
const InputImgContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: rgba(237, 246, 249,0.8);
  margin: 5px;
  border-radius: 10px;
  border: 0px solid;
  box-shadow: ${(props) => (props.condition ? '1px 1px 7px 1px red' : '1px 1px 7px 1px #333333')};
`;
const InputImg = styled.img`
 	height: 33px;
	margin-left: 10px;
  padding-right: 15px; 
`;
const Input = styled.input`
	width: 75%;
  outline: none;
  border-width:0px;
  border:none;
  background-color: transparent;
	height: 50px;
  font-size: 100%; 
  font-weight: bold;
  ::placeholder{
    color: ${(props) => (props.condition ? 'red' : 'gray')};
  }
`;
const SButton = styled.button`
	width: 70%;
	margin: auto;
  outline: none;
  border-radius: 10px;
	height: 45px;
  font-size: 130%;
  font-weight: bold;
  background-color: #e29578;
  border: 0px solid;
  box-shadow: 1px 1px 7px 1px #333333;
`;
const SubmitC = styled.div`
	display: flex;
  flex-direction: column;
  margin: 8px 0px 8px 0px;
`;
const RegText = styled.h1`
	font-size: 1em;
	text-align: center;
  text-decoration: underline;
`;

const Login = ({ mailC, passwordC }) => {
  const [mailL,setMailL] = useState("");
  const [passwordL,setPasswordL] = useState("");
  const [errore,setErrore] = useState(false);
  const [erroreP,setErroreP] = useState(false);
  const [erroreU,setErroreU] = useState(false);
	const history = useHistory();
	const handleClickR = () =>(
		history.push("/register")
	);
	const handleClickA = () =>{
    if(mailC===mailL&&passwordC===passwordL){
      history.push("/home");
    }else{
      setErrore(true);
      if(mailC!==mailL){
        setErroreU(true);
      }
      if(passwordC!==passwordL){
        setErroreP(true);
      }
      if(mailC===mailL){
        setErroreU(false);
      }
      if(passwordC===passwordL){
        setErroreP(false);
      }
    }
  };
	return(
  	<Container>
    	<ContainerImg>
      	<StyledH1>Stillosu</StyledH1>
      	<Img src={logo} />
    	</ContainerImg>
    	<Mex>
      	<MexH1>Accedi al tuo Account!</MexH1>
    	</Mex>
      <Shake 
        playState={errore ? 'running' : 'none'}
        onAnimationEnd={() => setErrore(false)}>
    	  <Form>
      	  <InputImgContainer condition={erroreU}>
        	  <InputImg src={mailI} />
        	  <Input type="text" id="fname" name="fname" placeholder="Email" onChange={event => setMailL(event.target.value)} condition={erroreU}/>
      	  </InputImgContainer>
      	  <InputImgContainer condition={erroreP}>
        	  <InputImg src={passwordI} />
        	  <Input type="password" id="lname" name="lname" placeholder="Password" onChange={event => setPasswordL(event.target.value)} condition={erroreP}/>
      	  </InputImgContainer>
    	  </Form>
      </Shake>
    	<SubmitC>
      	<SButton type="button" onClick={handleClickA}>
					<MexH1>Accedi</MexH1>
				</SButton>
				<a onClick={handleClickR}>
					<RegText>Oppure registrati..</RegText>
				</a>
    	</SubmitC>
  	</Container>
)
}
export default Login;
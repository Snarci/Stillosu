import React from 'react'
import styled from "styled-components/macro";

import logo from "../res/logov3.svg";

const Container = styled.div`
	height: 10vh;
	display: flex;
	flex-direction: row;
`;
const Circle = styled.button`
	background: #e29578;
	border: 0px solid;
  width: 7vh;
	height: 7vh;
  border-radius: 50%;
	margin: auto 17px auto 17px;
`;
const Img = styled.img`
	height: 6vh;
	margin: auto;
`;
const Header = ({ leftFun, rightFun }) =>(
	<Container>
		<Circle onClick={leftFun}/>
		<Img src={logo}/>
		<Circle onClick={rightFun}/>
	</Container>
);

export default Header;
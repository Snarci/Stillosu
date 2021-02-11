import React from 'react'
import styled from "styled-components/macro";

import logo from "../res/logov3.svg";
import arrow from "../res/arrowback.svg";
import menu from "../res/hamburger.svg";

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
	display: flex;
	align-items: center;
`;
const Img = styled.img`
	height: 5vh;
	margin: auto;
`;
const Header = ({ leftFun, rightFun }) =>(
	<Container>
		<Circle onClick={leftFun}>
			<Img src={arrow} />
		</Circle>
		<Img src={logo}/>
		<Circle onClick={rightFun}>
		<Img src={menu} />
		</Circle>
	</Container>
);

export default Header;
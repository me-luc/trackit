import styled from "styled-components";
import { darkBlue, textColor } from "../constants/colors";

export const PageModel = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 70px;
	height: calc(100vh - 140px);
	font-family: "Lexend Deca";
	font-style: normal;

	box-sizing: border-box;
	padding: 30px;

	@media (min-width: 750px) {
		align-items: center;
	}
`;

export const Title = styled.h1`
	font-weight: 600;
	font-size: 22.976px;
	line-height: 29px;
	color: ${darkBlue};
	margin-bottom: 10px;
`;

export const Text = styled.p`
	font-weight: 400;
	font-size: 17.976px;
	line-height: 22px;

	color: ${textColor};
`;

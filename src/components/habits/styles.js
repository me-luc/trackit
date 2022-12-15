import {
	accentBkg,
	midGray,
	inputTextColor,
	lightBlue,
	lightGray,
	textColor,
} from "../../constants/colors";
import styled from "styled-components";

export const DayButton = styled.button`
	width: 30px;
	height: 30px;
	background: ${({ isSelected }) => (isSelected ? lightGray : "none")};
	border: ${({ isSelected }) =>
		isSelected ? "none" : `1px solid ${midGray}`};
	border-radius: 5px;
	cursor: pointer;

	font-weight: 400;
	font-size: 19.976px;
	line-height: 25px;
	color: ${({ isSelected }) => (isSelected ? `${accentBkg}` : `${midGray}`)};
	margin-right: 5px;
`;

export const Title = styled.h1`
	font-weight: 500;
	font-size: 19.976px;
	line-height: 25px;
	color: ${textColor};
	margin-bottom: 10px;
`;

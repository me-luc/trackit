import styled from "styled-components";
import {
	accentBkg,
	detailGray,
	lightGray,
	green,
	textColor,
} from "../../constants/colors";
import { Title } from "./styles";

export default function Habit() {
	return (
		<StyledHabit>
			<div className="description">
				<Title>Ler 1 capítulo de livro</Title>
				<Info>Sequência atual: 3 dias</Info>
				<Info>Seu recorde: 5 dias</Info>
			</div>
			<CheckIcon selected={false}>
				<ion-icon name="checkmark-outline"></ion-icon>
			</CheckIcon>
		</StyledHabit>
	);
}

const CheckIcon = styled.div`
	width: 60px;
	height: 60px;
	left: 276px;
	top: 190px;

	background: ${({ selected }) => (selected ? green : lightGray)};
	border: 1px solid ${detailGray};
	border-radius: 7px;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	ion-icon {
		font-size: 50px;
		color: ${accentBkg};
		--ionicon-stroke-width: 50px;
	}
`;

const StyledHabit = styled.div`
	width: 100%;
	min-width: 290px;
	height: 110px;

	background: ${accentBkg};
	border-radius: 5px;
	box-sizing: border-box;
	padding: 20px;

	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;

	@media (min-width: 750px) {
		width: 500px;
	}
`;

const Info = styled.p`
	font-family: "Lexend Deca";
	font-style: normal;
	font-weight: 500;
	font-size: 12.976px;
	line-height: 16px;

	color: ${textColor};
`;

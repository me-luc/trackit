import styled from "styled-components";
import {
	accentBkg,
	detailGray,
	lightGray,
	textColor,
} from "../../constants/colors";

export default function Habit() {
	return (
		<StyledHabit>
			<div className="description">
				<Title>Ler 1 capítulo de livro</Title>
				<Info>Sequência atual: 3 dias</Info>
				<Info>Seu recorde: 5 dias</Info>
			</div>
			<CheckIcon></CheckIcon>
		</StyledHabit>
	);
}

const CheckIcon = styled.div`
	width: 70px;
	height: 70px;
	left: 276px;
	top: 190px;

	background: ${lightGray};
	border: 1px solid ${detailGray};
	border-radius: 5px;
`;

const StyledHabit = styled.div`
	width: 340px;
	height: 95px;

	background: ${accentBkg};
	border-radius: 5px;
	box-sizing: border-box;
	padding: 20px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h1`
	font-weight: 400;
	font-size: 19.976px;
	line-height: 25px;
	color: ${textColor};
`;

const Info = styled.p`
	font-family: "Lexend Deca";
	font-style: normal;
	font-weight: 400;
	font-size: 12.976px;
	line-height: 16px;

	color: ${textColor};
`;

import styled from "styled-components";
import {
	accentBkg,
	detailGray,
	lightGray,
	green,
	textColor,
} from "../../constants/colors";
import { Title } from "./styles";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

export default function Habit({
	id,
	title,
	currentSequence,
	highestSequence,
	isSelected,
	selected,
	setSelected,
	habits,
}) {
	const { setProgress } = useContext(UserContext);
	return (
		<StyledHabit>
			<div className="description">
				<Title>{title}</Title>
				<Info>Sequência atual: {currentSequence} dias</Info>
				<Info>Seu recorde: {highestSequence} dias</Info>
			</div>
			<CheckIcon isSelected={isSelected} onClick={handleClick}>
				<ion-icon name="checkmark-outline"></ion-icon>
			</CheckIcon>
		</StyledHabit>
	);

	function handleClick() {
		if (!isSelected) {
			const newArr = [...selected, id];
			setSelected(newArr);
		} else {
			const newArr = selected.filter((el) => el !== id);
			setSelected(newArr);
		}
		console.log("CONSOLE", selected.length / habits.length);
		console.log("SELEC", selected.length);
		console.log("HABITS", habits.length);
		setProgress(selected.length / habits.length);
	}
}

const CheckIcon = styled.div`
	width: 60px;
	height: 60px;
	left: 276px;
	top: 190px;

	background: ${({ isSelected }) => (isSelected ? green : lightGray)};
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

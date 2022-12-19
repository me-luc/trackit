import { useState } from "react";
import styled from "styled-components";
import {
	accentBkg,
	midGray,
	inputTextColor,
	lightBlue,
} from "../../constants/colors";
import Loading from "../../animation/Loading";
import { DayButton } from "./styles";

export default function HabitEdit({ setIsAddingNew }) {
	const previousTitle = localStorage.getItem("title");
	const previousDays = localStorage.getItem("days");
	const weekdays = ["S", "T", "Q", "Q", "S", "S", "D"];
	const [isLoading, setIsLoading] = useState(false);

	return (
		<StyledHabit>
			<form onSubmit={save}>
				<StyledInput placeholder="nome do hábito" />

				<WeekDaysBox>
					{weekdays.map((day) => (
						<DayButton type="button" isSelected={true}>
							{day}
						</DayButton>
					))}
				</WeekDaysBox>

				<OptionsBox>
					<CancelOption onClick={cancel}>Cancelar</CancelOption>
					<SaveOption type="submit" disabled={isLoading}>
						{isLoading ? <Loading width={50} /> : "Salvar"}
					</SaveOption>
				</OptionsBox>
			</form>
		</StyledHabit>
	);

	function save(e) {
		e.preventDefault();
		setIsLoading(true);
	}

	function cancel() {
		setIsAddingNew(false);
	}
}

const StyledHabit = styled.div`
	width: 100%;
	min-width: 290px;

	background: ${accentBkg};
	border-radius: 5px;
	box-sizing: border-box;
	padding: 20px;
	margin-bottom: 10px;

	@media (min-width: 750px) {
		width: 500px;
	}
`;

const WeekDaysBox = styled.div`
	display: flex;
	margin-bottom: 20px;
`;

const OptionsBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: right;
	align-items: center;
`;

const CancelOption = styled.p`
	font-weight: 400;
	font-size: 15.976px;
	line-height: 20px;
	color: ${lightBlue};
	cursor: pointer;
`;

const SaveOption = styled.button`
	width: 85px;
	height: 35px;
	background: ${lightBlue};
	border-radius: 4.63636px;

	font-weight: 500;
	font-size: 15.976px;
	line-height: 20px;
	color: ${accentBkg};

	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 5px;
	border: none;
	margin-left: 30px;
	cursor: pointer;

	:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
`;

const StyledInput = styled.input`
	width: 100%;
	margin-bottom: 10px;

	border: 1px solid ${midGray};
	border-radius: 5px;
	box-sizing: border-box;
	padding-left: 15px;

	font-size: 19.976px;
	line-height: 25px;
	color: ${inputTextColor};

	::placeholder {
		font-size: 19.976px;
		line-height: 25px;
		color: ${midGray};
	}
`;

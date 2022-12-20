import styled from "styled-components";
import { DayButton, Title } from "./styles";
import { accentBkg } from "../../constants/colors";
import axios from "axios";
import { BASE_URL } from "../../constants/URLs";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function HabitInfo({ habit, loadHabits }) {
	const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
	const { name, days, id } = habit;
	const { config } = useContext(UserContext);

	return (
		<StyledHabit data-test="habit-container">
			<TitleAndOptionBox>
				<Title data-identifier="habit-name">{name}</Title>
				<div data-test="habit-delete-btn" onClick={deleteHabit}>
					<ion-icon name="trash" />
				</div>
			</TitleAndOptionBox>

			<WeekDaysBox>
				{weekdays.map((day, index) => (
					<DayButton
						data-test="habit-day"
						key={index}
						isSelected={days.includes(index)}
						disabled>
						{day}
					</DayButton>
				))}
			</WeekDaysBox>
		</StyledHabit>
	);

	function deleteHabit() {
		if (window.confirm("Realmente deseja apagar?") === true) {
			const request = axios.delete(`${BASE_URL}/habits/${id}`, config);
			request.then(() => loadHabits());
			request.catch((answer) => console.log(answer));
		}
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
`;

const TitleAndOptionBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	ion-icon {
		cursor: pointer;
		font-size: 20px;
		--ionicon-stroke-width: 50px;
		margin-bottom: 10px;
	}
`;

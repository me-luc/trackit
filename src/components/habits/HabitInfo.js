import styled from "styled-components";
import { DayButton, Title } from "./styles";
import { accentBkg } from "../../constants/colors";

export default function HabitInfo({ habit }) {
	const weekdays = ["S", "T", "Q", "Q", "S", "S", "D"];

	return (
		<StyledHabit>
			<TitleAndOptionBox>
				<Title></Title>
				<ion-icon name="trash" />
			</TitleAndOptionBox>
			<WeekDaysBox>
				{weekdays.map((day) => (
					<DayButton isSelected={true} disabled>
						{day}
					</DayButton>
				))}
			</WeekDaysBox>
		</StyledHabit>
	);
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

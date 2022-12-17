import styled from "styled-components";
import Habit from "../components/habits/Habit";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import { green, midGray } from "../constants/colors";
import { PageModel, Title } from "./styles";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { TODAY_HABITS_URL } from "../constants/URLs";
import Loading from "../animation/Loading";

export default function TodayPage() {
	const { progress, config } = useContext(UserContext);

	require("dayjs/locale/pt-br");
	const dayjs = require("dayjs");
	let CURRENT_DATE = dayjs().locale("pt-br").format("dddd DD/MM");
	CURRENT_DATE = formatDateStr(CURRENT_DATE);

	const mock = [
		{
			id: 3,
			name: "Acordar 1",
			done: true,
			currentSequence: 1,
			highestSequence: 1,
		},
		{
			id: 3,
			name: "Acordar 2",
			done: true,
			currentSequence: 1,
			highestSequence: 1,
		},
		{
			id: 3,
			name: "Acordar 3",
			done: true,
			currentSequence: 1,
			highestSequence: 1,
		},
		{
			id: 3,
			name: "Acordar 4",
			done: true,
			currentSequence: 1,
			highestSequence: 1,
		},
	];

	const [habits, setHabits] = useState(mock);
	useEffect(() => {
		const request = axios.get(TODAY_HABITS_URL, config);
		request.then((answer) => console.log(answer));
	}, []);

	return (
		<>
			<Header />
			<StyledPage>
				<Title>{CURRENT_DATE}</Title>

				{progress > 0 ? (
					<ProgressText>
						{progress}% dos hábitos concluídos
					</ProgressText>
				) : (
					<NoHabitText>Nenhum hábito concluído ainda</NoHabitText>
				)}

				<HabitsBox>
					{!habits && <Loading />}
					{habits &&
						habits.map((habit) => (
							<Habit
								key={habit.id}
								title={habit.name}
								currentSequence={habit.currentSequence}
								highestSequence={habit.highestSequence}
							/>
						))}
				</HabitsBox>
			</StyledPage>
			<Menu />
		</>
	);

	function formatDateStr(dateStr) {
		let newStr = dateStr.split("");
		newStr[0] = newStr[0].toUpperCase();

		for (let i = 0; i < newStr.length; i++) {
			if (newStr[i] == " ") {
				newStr[i] = ", ";
			}
		}
		return newStr.join("");
	}
}

const NoHabitText = styled.p`
	font-weight: 400;
	font-size: 17.976px;
	line-height: 22px;
	color: ${midGray};
	margin-bottom: 15px;
`;

const ProgressText = styled.p`
	font-weight: 400;
	font-size: 17.976px;
	line-height: 22px;
	color: ${green};
	margin-bottom: 15px;
`;

const StyledPage = styled(PageModel)``;

const HabitsBox = styled.div``;

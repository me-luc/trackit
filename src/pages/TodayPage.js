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
import Authenticate from "../auth/Authenticate";

export default function TodayPage() {
	const { progress, setProgress, config } = useContext(UserContext);

	const [selected, setSelected] = useState([]);

	require("dayjs/locale/pt-br");
	const dayjs = require("dayjs");
	let CURRENT_DATE = dayjs().locale("pt-br").format("dddd DD/MM");
	CURRENT_DATE = formatDateStr(CURRENT_DATE);

	const [habits, setHabits] = useState(null);

	useEffect(() => {
		loadHabits();
	}, []);

	if (habits) {
		let doneCount = 0;
		habits.map((habit) => {
			if (habit.done) doneCount++;
		});
		console.log(doneCount / habits.length);
		setProgress(((doneCount / habits.length) * 100).toFixed(0));
	}

	return (
		<>
			<Authenticate />
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

				{habits === null ? (
					<Loading />
				) : (
					<HabitsBox>
						{habits.map((habit) => (
							<Habit
								loadHabits={loadHabits}
								selected={selected}
								setSelected={setSelected}
								habit={habit}
								key={habit.id}
							/>
						))}
					</HabitsBox>
				)}
			</StyledPage>
			<Menu />
		</>
	);

	function formatDateStr(dateStr) {
		let newStr = dateStr.split("");
		newStr[0] = newStr[0].toUpperCase();

		for (let i = 0; i < newStr.length; i++) {
			if (newStr[i] === " ") {
				newStr[i] = ", ";
			}
		}
		return newStr.join("");
	}

	function loadHabits() {
		const request = axios.get(TODAY_HABITS_URL, config);
		request.then((answer) => setHabits(answer.data));
		request.catch((answer) => setHabits(answer.data));
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

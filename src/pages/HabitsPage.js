import { accentBkg, lightBlue, textColor } from "../constants/colors";
import { PageModel, Title } from "./styles";

import styled from "styled-components";
import HabitEdit from "../components/habits/HabitEdit";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import HabitInfo from "../components/habits/HabitInfo";
import Authenticate from "../auth/Authenticate";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { STORAGE_URL } from "../constants/URLs";
import { UserContext } from "../context/UserContext";
import Loading from "../animation/Loading";

export default function HabitsPage() {
	const [isAddingNew, setIsAddingNew] = useState(false);
	const [habits, setHabits] = useState(null);
	const { config } = useContext(UserContext);

	useEffect(() => {
		loadHabits();
	}, []);

	return (
		<>
			<Authenticate />
			<Header />
			<StyledPage>
				<NewHabitBox>
					<Title>Meus hábitos</Title>
					<NewIcon onClick={addNew} data-identifier="create-habit-btn">
						<ion-icon name="add-outline"></ion-icon>
					</NewIcon>
				</NewHabitBox>

				{isAddingNew && (
					<HabitEdit
						setIsAddingNew={setIsAddingNew}
						loadHabits={loadHabits}
					/>
				)}

				{(!habits || habits === undefined || habits.length === 0) && (
					<NoHabitText data-identifier="no-habit-message">
						Você não tem nenhum hábito cadastrado ainda. Adicione um
						hábito para começar a trackear!
					</NoHabitText>
				)}

				{!habits && <Loading />}

				{habits !== null && (
					<HabitsBox>
						{habits.map((habit) => (
							<HabitInfo
								habit={habit}
								key={habit.id}
								loadHabits={loadHabits}
							/>
						))}
					</HabitsBox>
				)}
			</StyledPage>
			<Menu />
		</>
	);

	function addNew() {
		setIsAddingNew(true);
	}

	function loadHabits() {
		const request = axios.get(STORAGE_URL, config);
		request.then((answer) => setHabits(answer.data));
		request.catch((answer) => alert(answer.data.message));
	}
}

const StyledPage = styled(PageModel)``;

const NoHabitText = styled.p`
	font-weight: 400;
	font-size: 17.976px;
	line-height: 22px;
	color: ${textColor};
	margin-bottom: 15px;

	@media (min-width: 750px) {
		width: 500px;
	}
`;

const NewIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	width: 40px;
	height: 35px;
	border-radius: 4.63636px;
	background: ${lightBlue};

	ion-icon {
		font-size: 25px;
		color: ${accentBkg};
		--ionicon-stroke-width: 60px;
	}
`;

const NewHabitBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 5px;

	@media (min-width: 750px) {
		width: 500px;
	}
`;

const HabitsBox = styled.div``;

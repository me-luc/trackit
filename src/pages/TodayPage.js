import styled from "styled-components";
import Habit from "../components/habits/Habit";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import { green, midGray } from "../constants/colors";
import { InfoText, PageModel, Title } from "./styles";

export default function TodayPage() {
	return (
		<>
			<Header />
			<StyledPage>
				<Title>Segunda, 17/05</Title>
				<NoHabitText>Nenhum hábito concluído ainda</NoHabitText>
				<ProgressText>67% dos hábitos concluídos</ProgressText>
				<Habit />
				<Habit />
				<Habit />
				<Habit />
				<Habit />
			</StyledPage>
			<Menu />
		</>
	);
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

const HabitsBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

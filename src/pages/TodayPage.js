import styled from "styled-components";
import Habit from "../components/habits/Habit";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import { InfoText, PageModel, Title } from "./styles";

export default function TodayPage() {
	return (
		<>
			<Header />

			<StyledPage>
				<Title>Segunda, 17/05</Title>
				<InfoText>Nenhum hábito concluído ainda</InfoText>
				<HabitsBox>
					<Habit />
				</HabitsBox>
			</StyledPage>

			<Menu />
		</>
	);
}

const StyledPage = styled(PageModel)``;

const HabitsBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

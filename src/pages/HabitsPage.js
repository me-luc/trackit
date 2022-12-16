import { accentBkg, lightBlue, textColor } from "../constants/colors";
import { PageModel, Title } from "./styles";

import styled from "styled-components";
import HabitEdit from "../components/habits/HabitEdit";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import HabitInfo from "../components/habits/HabitInfo";

export default function HabitsPage() {
	return (
		<>
			<Header />
			<StyledPage>
				<NewHabitBox>
					<Title>Meus hábitos</Title>
					<NewIcon>
						<ion-icon name="add-outline"></ion-icon>
					</NewIcon>
				</NewHabitBox>
				<NoHabitText>
					Você não tem nenhum hábito cadastrado ainda. Adicione um
					hábito para começar a trackear!
				</NoHabitText>
				<HabitEdit />
				<HabitInfo />
			</StyledPage>
			<Menu />
		</>
	);
}

const StyledPage = styled(PageModel)``;

const NoHabitText = styled.p`
	font-weight: 400;
	font-size: 17.976px;
	line-height: 22px;
	color: ${textColor};
	margin-bottom: 15px;
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
`;

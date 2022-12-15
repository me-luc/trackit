import styled from "styled-components";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import { PageModel, Text, Title } from "./styles";

export default function HistoryPage() {
	return (
		<>
			<Header />

			<StyledPage>
				<Title>Histórico</Title>
				<Text>
					Em breve você poderá ver o histórico dos seus hábitos aqui!
				</Text>
			</StyledPage>

			<Menu />
		</>
	);
}

const StyledPage = styled(PageModel)``;

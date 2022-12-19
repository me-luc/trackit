import styled from "styled-components";
import Authenticate from "../auth/Authenticate";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import { PageModel, Text, Title } from "./styles";

export default function StoragePage() {
	return (
		<>
			<Authenticate />
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

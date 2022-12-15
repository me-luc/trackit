import styled from "styled-components";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import { PageModel, Title } from "./styles";

export default function TodayPage() {
	return (
		<>
			<Header />

			<StyledPage>
				<Title>TODAY PAGE</Title>
			</StyledPage>

			<Menu />
		</>
	);
}

const StyledPage = styled(PageModel)``;

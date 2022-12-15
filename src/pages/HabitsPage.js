import styled from "styled-components";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import { PageModel } from "./styles";

export default function HabitsPage() {
	return (
		<>
			<Header />

			<StyledPage>
				<h1>HABITS PAGE</h1>
			</StyledPage>

			<Menu />
		</>
	);
}

const StyledPage = styled(PageModel)``;

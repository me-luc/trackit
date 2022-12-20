import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProgressBar from "../../animation/ProgressBar";
import { accentBkg } from "../../constants/colors";
import { UserContext } from "../../context/UserContext";

export default function Menu() {
	const { progress } = useContext(UserContext);

	return (
		<StyledPage data-test="menu">
			<Link to="/habitos" data-test="habit-link">
				<p>Hábitos</p>
			</Link>
			<Link to="/hoje" data-test="today-link">
				<ProgressBar percentage={progress}></ProgressBar>
			</Link>
			<Link to="/historico" data-test="history-link">
				<p>Histórico</p>
			</Link>
		</StyledPage>
	);
}

const StyledPage = styled.div`
	width: 100vw;
	height: 70px;
	position: fixed;
	bottom: 0;
	left: 0;
	background: ${accentBkg};
	box-shadow: 0px -8px 4px rgba(234, 226, 226, 0.5);

	display: flex;
	justify-content: space-evenly;
	align-items: center;

	p {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 600;
		font-size: 17.976px;
		line-height: 22px;
		text-align: center;

		color: #52b6ff;
		cursor: pointer;
	}
`;

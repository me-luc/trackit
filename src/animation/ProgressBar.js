import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

export default function ProgressBar({ percentage, children }) {
	return (
		<Container>
			<CircularProgressbar
				value={percentage}
				text={`Hoje`}
				background
				backgroundPadding={6}
				styles={buildStyles({
					backgroundColor: "#3e98c7",
					textColor: "#fff",
					pathColor: "#fff",
					trailColor: "transparent",
				})}
			/>
		</Container>
	);
}
const Container = styled.div`
	width: 90px;
	height: 90px;
	margin-bottom: 40px;

	font-family: "Lexend Deca";
	font-style: normal;
	font-weight: 400;
	font-size: 17.976px;
	line-height: 22px;
	text-align: center;

	color: #ffffff;
`;

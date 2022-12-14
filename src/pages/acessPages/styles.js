import styled from "styled-components";

export const StyledPage = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	font-family: "Lexend Deca";
	font-style: normal;
	font-weight: 500;

	img {
		margin-bottom: 40px;
	}

	p {
		font-size: 13.976px;
		line-height: 17px;
		text-align: center;
		text-decoration-line: underline;
		color: #52b6ff;
		cursor: pointer;
	}
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	input {
		width: 305px;
		height: 45px;
		margin-bottom: 10px;

		border: 1px solid #a6a6a6;
		border-radius: 5px;
		box-sizing: border-box;
		padding-left: 15px;

		font-size: 19.976px;
		line-height: 25px;
		color: #000;

		::placeholder {
			font-size: 19.976px;
			line-height: 25px;
			color: #a6a6a6;
		}
	}
`;

export const StyledButton = styled.button`
	width: 305px;
	height: 45px;
	left: 36px;
	top: 381px;

	background: #52b6ff;
	border-radius: 5px;
	border: none;

	font-size: 20.976px;
	line-height: 26px;
	text-align: center;
	color: #ffffff;

	margin-bottom: 25px;
	cursor: pointer;
`;

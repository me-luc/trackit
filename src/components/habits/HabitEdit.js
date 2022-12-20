import { useContext, useState } from "react";
import styled from "styled-components";
import {
	accentBkg,
	midGray,
	inputTextColor,
	lightBlue,
} from "../../constants/colors";
import Loading from "../../animation/Loading";
import { DayButton } from "./styles";
import axios from "axios";
import { BASE_URL, STORAGE_URL } from "../../constants/URLs";
import { UserContext } from "../../context/UserContext";

export default function HabitEdit({ setIsAddingNew, loadHabits }) {
	const previousTitle = localStorage.getItem("title");
	let stringDaysData = localStorage.getItem("days");
	const previousDays = JSON.parse(stringDaysData);

	const { config } = useContext(UserContext);

	const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

	const [isLoading, setIsLoading] = useState(false);
	const [name, setName] = useState(previousTitle || "");
	const [days, setDays] = useState(previousDays || []);

	return (
		<StyledHabit data-test="habit-create-container">
			<form onSubmit={save}>
				<StyledInput
					data-test="habit-name-input"
					placeholder="nome do hábito"
					value={name}
					onChange={(e) => saveName(e)}
					disabled={isLoading}
				/>

				<WeekDaysBox>
					{weekdays.map((day, index) => (
						<DayButton
							data-test="habit-day"
							key={index}
							type="button"
							isSelected={days.includes(index)}
							value={days}
							disabled={isLoading}
							onClick={() => handleClick(index)}>
							{day}
						</DayButton>
					))}
				</WeekDaysBox>

				<OptionsBox>
					<CancelOption
						data-test="habit-create-cancel-btn"
						onClick={cancel}>
						Cancelar
					</CancelOption>
					<SaveOption
						data-test="habit-create-save-btn"
						type="submit"
						disabled={isLoading}>
						{isLoading ? <Loading width={50} /> : "Salvar"}
					</SaveOption>
				</OptionsBox>
			</form>
		</StyledHabit>
	);

	function save(e) {
		e.preventDefault();
		setIsLoading(true);

		const request = axios.post(
			STORAGE_URL,
			{
				name: name,
				days: days,
			},
			config
		);
		request.then(() => {
			loadHabits();
			setIsLoading(false);
			setIsAddingNew(false);
			resetForm();
		});
		request.catch((answer) => {
			setIsLoading(false);
			alert(answer.data.message);
		});
	}

	function handleClick(dayNumber) {
		if (!days.includes(dayNumber)) {
			const newArr = [...days, dayNumber];
			setDays(newArr.sort());
			localStorage.setItem("days", JSON.stringify(newArr));
		} else {
			const index = [...days].indexOf(dayNumber);

			if (index > -1) {
				const newArr = [...days];
				newArr.splice(index, 1);
				setDays(newArr.sort());
				localStorage.setItem("days", JSON.stringify(newArr));
			}
		}
	}

	function cancel() {
		setIsAddingNew(false);
	}

	function resetForm() {
		setName("");
		setDays([]);
		localStorage.setItem("title", "");
		localStorage.setItem("days", "[]");
	}

	function saveName(e) {
		const newName = e.target.value;
		setName(newName);
		localStorage.setItem("title", newName);
	}
}

const StyledHabit = styled.div`
	width: 100%;
	min-width: 290px;

	background: ${accentBkg};
	border-radius: 5px;
	box-sizing: border-box;
	padding: 20px;
	margin-bottom: 10px;

	@media (min-width: 750px) {
		width: 500px;
	}
`;

const WeekDaysBox = styled.div`
	display: flex;
	margin-bottom: 20px;
`;

const OptionsBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: right;
	align-items: center;
`;

const CancelOption = styled.p`
	font-weight: 400;
	font-size: 15.976px;
	line-height: 20px;
	color: ${lightBlue};
	cursor: pointer;
`;

const SaveOption = styled.button`
	width: 85px;
	height: 35px;
	background: ${lightBlue};
	border-radius: 4.63636px;

	font-weight: 500;
	font-size: 15.976px;
	line-height: 20px;
	color: ${accentBkg};

	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 5px;
	border: none;
	margin-left: 30px;
	cursor: pointer;

	:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
`;

const StyledInput = styled.input`
	width: 100%;
	margin-bottom: 10px;

	border: 1px solid ${midGray};
	border-radius: 5px;
	box-sizing: border-box;
	padding-left: 15px;

	font-size: 19.976px;
	line-height: 25px;
	color: ${inputTextColor};

	::placeholder {
		font-size: 19.976px;
		line-height: 25px;
		color: ${midGray};
	}
`;

import styled from "styled-components";
import {
  accentBkg,
  detailGray,
  lightGray,
  green,
  textColor,
} from "../../constants/colors";
import { Title } from "./styles";
import { UserContext } from "../../context/UserContext";
import { useContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/URLs";
import Loading from "../../animation/Loading";

export default function Habit({ habit, loadHabits }) {
  const { config } = useContext(UserContext);

  const [isLoading, setIsloading] = useState(false);

  const {
    currentSequence,
    done: isSelected,
    highestSequence,
    id,
    name,
  } = habit;

  const isEqual = currentSequence === highestSequence && currentSequence !== 0;

  return (
    <StyledHabit>
      <div className="description">
        <Title>{name}</Title>
        <Info isEqual={isEqual}>
          Sequência atual:{" "}
          <span>
            {currentSequence} dia{currentSequence !== 1 && "s"}
          </span>
        </Info>
        <Info isEqual={isEqual}>
          Seu recorde:{" "}
          <span>
            {highestSequence} dia{highestSequence !== 1 && "s"}
          </span>
        </Info>
      </div>
      <CheckIcon
        data-identifier="done-habit-btn"
        isSelected={isSelected}
        onClick={handleClick}
        isLoading={isLoading}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loading width={50} />
        ) : (
          <ion-icon name="checkmark-outline" />
        )}
      </CheckIcon>
    </StyledHabit>
  );

  function handleClick() {
    if (!isSelected) {
      setIsloading(true);
      const request = axios.post(`${BASE_URL}/habits/${id}/check`, {}, config);
      request.then(function () {
        loadHabits();
        setIsloading(false);
      });
      request.catch((answer) => alert(answer.message));
    } else {
      setIsloading(true);
      const request = axios.post(
        `${BASE_URL}/habits/${id}/uncheck`,
        {},
        config
      );
      request.then(function () {
        loadHabits();
        setIsloading(false);
      });
      request.catch((answer) => alert(answer.message));
    }
  }
}

const CheckIcon = styled.div`
  width: 60px;
  height: 60px;
  left: 276px;
  top: 190px;

  background: ${({ isSelected }) => (isSelected ? green : lightGray)};
  border: 1px solid ${detailGray};
  border-radius: 7px;
  cursor: ${({ isLoading }) => (isLoading ? "not-allowed" : "pointer")};

  display: flex;
  justify-content: center;
  align-items: center;

  ion-icon {
    font-size: 50px;
    color: ${accentBkg};
    --ionicon-stroke-width: 50px;
  }
`;

const StyledHabit = styled.div`
  width: 100%;
  min-width: 290px;
  height: 110px;

  background: ${accentBkg};
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media (min-width: 750px) {
    width: 500px;
  }
`;

const Info = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 500;
  font-size: 12.976px;
  line-height: 16px;
  color: ${textColor};

  span {
    color: ${({ isEqual }) => (isEqual ? green : textColor)};
  }
`;

import styled from "styled-components";
import { useStore } from "../store/Store";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 10;

  background-color: rgba(0, 0, 0, 0.75);
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const GameOver = () => {
  const nav = useNavigate();
  const {
    resetStore,
    player1Counter,
    player2Counter,
    player1Name,
    player2Name,
  } = useStore();
  return (
    <Box>
      <h1>
        {player1Counter === player2Counter
          ? `It's a draw! 🫱🏻‍🫲🏾`
          : player1Counter > player2Counter
            ? `${player1Name} wins! 😎`
            : `${player2Name} wins! 😎`}
      </h1>
      <button
        onClick={() => {
          resetStore();
          nav("/");
        }}
      >
        Play again
      </button>
    </Box>
  );
};

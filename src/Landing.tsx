import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "./store/Store";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: start;
    gap: 3rem;
  }
  padding: 1rem;
`;

const StyledInput = styled.input`
  color: black;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 1rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
`;

export const Landing = () => {
  const { updatePlayer1Name, updatePlayer2Name } = useStore();
  const nav = useNavigate();

  const handlePlay = () => {
    nav("/play");
  };

  return (
    <Box>
      <div>
        <h1>Memory game 🧠</h1>
        <label htmlFor="player1">Introduce player 1 name:</label>
        <StyledInput
          id="player1"
          type="text"
          name="player1"
          placeholder="ex: John"
          onChange={(e) => updatePlayer1Name(e.target.value)}
        />
        <label htmlFor="player1">Introduce player 2 name:</label>
        <StyledInput
          id="player2"
          type="text"
          name="player2"
          placeholder="ex: Anna"
          onChange={(e) => updatePlayer2Name(e.target.value)}
        />
        <button onClick={handlePlay}>Play</button>
      </div>
      <div>How it works?</div>
    </Box>
  );
};

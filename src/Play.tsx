import styled from "styled-components";
import { Card } from "./components/Card";
import { useStore } from "./store/Store";
import { GameOver } from "./components/GameOver";

const StyledBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`;

const StyledTable = styled.table`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  width: 100%;
  height: 100%;

  td {
    width: 100%;
    height: 100%;
  }
`;

export default function Play() {
  const {
    board,
    playerTurn,
    player1Name,
    player2Name,
    player1Counter,
    player2Counter,
    isGameOver,
  } = useStore();

  return (
    <>
      <StyledBox>
        <StyledHeader>
          <h2>{playerTurn ? player1Name : player2Name} turn</h2>
          <div>
            <p>
              {player1Name}: {player1Counter}
            </p>
            <p>
              {player2Name}: {player2Counter}
            </p>
          </div>
        </StyledHeader>
        <StyledTable>
          {board.map((option, index) => (
            <td>
              <Card src={option} index={index} />
            </td>
          ))}
        </StyledTable>
      </StyledBox>
      {isGameOver && <GameOver />}
    </>
  );
}

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Card } from "../utils/types";
import { getShuffledOptions, TABLE_SIZE } from "../utils/generateRandomBoard";

interface StoreContextType {
  handleOpenCards: (newCard: Card) => void;
  openedCards: Card[];
  visibleCards: string[];
  playerTurn: boolean; //true player 1, false player 2
  board: string[];
  player1Name: string;
  player2Name: string;
  updatePlayer1Name: (name: string) => void;
  updatePlayer2Name: (name: string) => void;
  player1Counter: number;
  player2Counter: number;
  isGameOver: boolean;
  resetStore: () => void;
}

const initialStoreValues: StoreContextType = {
  handleOpenCards: (newCard: Card) => {},
  updatePlayer1Name: (name: string) => {},
  updatePlayer2Name: (name: string) => {},
  openedCards: [],
  visibleCards: [],
  playerTurn: true,
  board: [],
  player1Name: "",
  player2Name: "",
  player1Counter: 0,
  player2Counter: 0,
  isGameOver: false,
  resetStore: () => {},
};
const StoreContext = createContext(initialStoreValues);

export const StoreProvider = (props: { children: ReactNode }) => {
  const [openedCards, setOpenedCards] = useState<Card[]>([]);
  const [visibleCards, setVisibleCards] = useState<string[]>([]);
  const [playerTurn, changePlayerTurn] = useState(true);
  const [board, setBoard] = useState<string[]>(getShuffledOptions());
  const [player1Name, setPlayer1Name] = useState("Player 1");
  const [player2Name, setPlayer2Name] = useState("Player 2");
  const [player1Counter, setPlayer1Counter] = useState(0);
  const [player2Counter, setPlayer2Counter] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const updatePlayer1Name = (name: string) => setPlayer1Name(name);
  const updatePlayer2Name = (name: string) => setPlayer2Name(name);

  const handleOpenCards = (newCard: Card) => {
    if (visibleCards.some((visibleCard) => visibleCard === newCard.src)) {
      return;
    }

    if (openedCards.length === 2) {
      setOpenedCards([]);
    }

    if (openedCards.length === 1 && openedCards[0].index === newCard.index) {
      return;
    }

    if (
      openedCards.length === 1 &&
      openedCards[0].index !== newCard.index &&
      openedCards[0].src === newCard.src
    ) {
      if (playerTurn) {
        setPlayer1Counter((prev) => prev + 1);
      } else {
        setPlayer2Counter((prev) => prev + 1);
      }

      setVisibleCards((prev) => [...prev, newCard.src]);
      setOpenedCards([]);
      return;
    }

    if (
      openedCards.length === 1 &&
      openedCards[0].index !== newCard.index &&
      openedCards[0].src !== newCard.src
    ) {
      changePlayerTurn((prev) => !prev);
    }

    setOpenedCards((prev) => [...prev, newCard]);
  };

  useEffect(() => {
    if (visibleCards.length === (TABLE_SIZE * TABLE_SIZE) / 2) {
      setIsGameOver(true);
    }
  }, [visibleCards.length]);

  const resetStore = () => {
    setOpenedCards([]);
    setVisibleCards([]);
    changePlayerTurn(true);
    setBoard(getShuffledOptions());
    setPlayer1Name("Player 1");
    setPlayer2Name("Player 2");
    setPlayer1Counter(0);
    setPlayer2Counter(0);
    setIsGameOver(false);
  };

  return (
    <StoreContext.Provider
      value={{
        openedCards,
        handleOpenCards,
        visibleCards,
        playerTurn,
        board,
        player1Name,
        player2Name,
        updatePlayer1Name,
        updatePlayer2Name,
        player1Counter,
        player2Counter,
        isGameOver,
        resetStore,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

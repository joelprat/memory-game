import styled from "styled-components";
import { Card as CardType } from "../utils/types";
import { useStore } from "../store/Store";

const Box = styled.div<{ isCardVisible: boolean; isCardPaired: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  cursor: ${(props) => (props.isCardVisible ? "auto" : "pointer")};
  background-color: ${(props) =>
    props.isCardPaired ? "rgba(0, 0, 0, 1);" : "rgba(0, 0, 0, 0.5);"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const Card = (props: CardType) => {
  const { handleOpenCards, openedCards, visibleCards } = useStore();
  const isCardPaired = visibleCards.some(
    (visibleCard) => visibleCard === props.src
  );
  const isCardOpened = openedCards.some(
    (openCard) => openCard.index === props.index
  );

  const handleIsCardVisible = () => {
    handleOpenCards(props);
  };

  return isCardPaired || isCardOpened ? (
    <Box
      isCardVisible
      isCardPaired={isCardPaired}
      onClick={handleIsCardVisible}
    >
      {props.src}
    </Box>
  ) : (
    <Box
      isCardVisible={false}
      isCardPaired={isCardPaired}
      onClick={handleIsCardVisible}
    />
  );
};

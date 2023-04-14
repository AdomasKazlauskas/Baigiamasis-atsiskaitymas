import "../App.scss";
import CardList from "./CardsList";
import ListContainer from "./ListContainer";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const UrgentHelpList = () => {
  const { cards } = useContext(GlobalContext);

  const filteredCards = cards.filter(
    (card) => card.raisedCash < card.totalCash
  );
  const sortedCards = filteredCards.sort((a, b) => a.raisedCash - b.raisedCash);

  return (
    <ListContainer
      sectionName="Urgent help needed"
      sectionTitle="Featured topics"
      cards={sortedCards}
    />
  );
};

export default UrgentHelpList;

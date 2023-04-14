import "../App.scss";
import ListContainer from "./ListContainer";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const StoryList = () => {
  const { cards } = useContext(GlobalContext);

  return (
    <ListContainer
      sectionName="Shipments"
      sectionTitle="Put boxes into containers"
      cards={cards}
    />
  );
};

export default StoryList;

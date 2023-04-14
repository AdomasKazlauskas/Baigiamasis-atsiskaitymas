import "../App.scss";
import StoryCard from "./StoryCard";

const CardList = ({ cards, id }) => (
  <div id={id} className="urgent-topics-list scroll">
    {cards.map((card) => (
      <StoryCard card={card} key={card.id} />
    ))}
  </div>
);

export default CardList;

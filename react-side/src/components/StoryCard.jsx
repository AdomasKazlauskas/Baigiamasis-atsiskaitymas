import React, { useContext, useState } from "react";
import { updateCard } from "../services/userService";
import { GlobalContext } from "../context/GlobalContext";

const StoryCard = ({ card }) => {
  const { setCardsStatus } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [donation, setDonation] = useState("");
  const [toggleDonors, setToggelDonors] = useState(false);

  const isStoryCompleted = card.raisedCash >= card.totalCash;

  const handleDonateClick = async () => {
    setCardsStatus("loading");
    await updateCard({ id: card.id, name, donation: +donation });
    setCardsStatus("success");
    setName("");
    setDonation("");
  };

  return (
    <div className="urgent-topics-card one">
      <div className="image-border">
        <img className="topics-image" src={card.image} alt="foto1" />
      </div>
      <div className="topic-row-two">
        <h4 className="topic-card-name">{card.title}</h4>
        <div className="topic-row-two-money">
          <h4>Weight: {card.totalCash}kg</h4>
        </div>
      </div>

      <div className="topic-row-four">
        <div className="topic-row-four-inputs">
          <div className="checkbox">
            Is it flammable?
            <input
              type="checkbox"
              placeholder="Your Name..."
              onChange={(e) => setName(e.target.value)}
              disabled={isStoryCompleted}
            />
          </div>
          <div className="checkbox">
            Does it expire fast?
            <input
              type="checkbox"
              placeholder="Your Name..."
              onChange={(e) => setName(e.target.value)}
              disabled={isStoryCompleted}
            />
          </div>
        </div>
        <div className="topic-row-four-buttons">
          <input
            type="number"
            placeholder="Container number..."
            onChange={(e) => setName(e.target.value)}
            disabled={isStoryCompleted}
          />
        </div>
      </div>
    </div>
  );
};

export default StoryCard;

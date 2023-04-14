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
    <div
      className={`urgent-topics-card one ${
        isStoryCompleted ? "completed" : ""
      } `}
    >
      <div className="image-border">
        <img className="topics-image" src={card.image} alt="foto1" />
      </div>
      <div className="topic-row-two">
        <h4 className="topic-card-name">{card.title}</h4>
        <div className="topic-row-two-money">
          <h4>
            Raised: {card.raisedCash}€/{card.totalCash}€
          </h4>
        </div>
      </div>
      {toggleDonors ? (
        <div className="donors-list">
          {card.donors.map(({ name, donation }) => (
            <React.Fragment key={name}>
              <div className="donors-list-item">{`${name}: ${donation} €`}</div>
            </React.Fragment>
          ))}
        </div>
      ) : (
        <h4 className="topic-text">{card.text}</h4>
      )}

      <div className="topic-row-four">
        <div className="topic-row-four-inputs">
          <input
            type="text"
            placeholder="Your Name..."
            onChange={(e) => setName(e.target.value)}
            value={name}
            disabled={isStoryCompleted}
          />
          <input
            type="number"
            placeholder="Your Donation..."
            onChange={(e) => setDonation(e.target.value)}
            value={donation}
            disabled={isStoryCompleted}
          />
        </div>
        <div className="topic-row-four-buttons">
          <button
            onClick={handleDonateClick}
            className="donation-button"
            disabled={isStoryCompleted}
          >
            Donate
          </button>
          <button
            className="donation-button"
            onClick={() => setToggelDonors(!toggleDonors)}
            disabled={!card.donors.length}
          >
            Donors
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;

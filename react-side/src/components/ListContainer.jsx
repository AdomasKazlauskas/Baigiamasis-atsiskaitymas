import "../App.scss";
import CardList from "./CardsList";

const ListContainer = ({ sectionTitle, sectionName, cards }) => {
  const handleNextClick = () => {
    const container = document.getElementById(sectionName);
    container.scrollBy({ left: 418.5, behavior: "smooth" });
  };

  const handlePreviousClick = () => {
    const container = document.getElementById(sectionName);
    container.scrollBy({ left: -418.5, behavior: "smooth" });
  };

  return (
    <>
      <div id="story-list" className="storyList-header">
        <div>
          <h3 className="section-name">{sectionName}</h3>
          <h1 className="section-title">{sectionTitle}</h1>
        </div>
        <div className="left-right">
          <button className="left-right-btn" onClick={handlePreviousClick}>
            &larr;
          </button>
          <button className="left-right-btn" onClick={handleNextClick}>
            &rarr;
          </button>
        </div>
      </div>
      <CardList cards={cards} id={sectionName} />
    </>
  );
};

export default ListContainer;

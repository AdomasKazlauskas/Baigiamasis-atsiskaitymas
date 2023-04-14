import "../App.scss";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { createCard } from "../services/userService";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const AddStory = () => {
  const navigate = useNavigate();
  const { setCardsStatus } = useContext(GlobalContext);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [totalCash, setTotalCash] = useState("");
  const [text, setText] = useState("");

  const handleCreateClick = async () => {
    setCardsStatus("loading");
    const payload = { image, title, totalCash, text };
    await createCard(payload);
    setCardsStatus("success");
    navigate("/");
  };

  return (
    <div className="sign">
      <div className="sign-leftside">
        <img
          className="logotype"
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
        />
        <h3 className="section-name">It all begins here...</h3>
        <h1 className="section-title">Tell your story</h1>
      </div>
      <div className="sign-rightside">
        <div className="rightside-details-post">
          <h3 className="rightside-title">Story details</h3>
          <input
            className="rightside-input"
            type="text"
            placeholder="Your Photo URL..."
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
          <input
            className="rightside-input"
            type="text"
            placeholder="Your Title..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            className="rightside-input"
            type="number"
            placeholder="Required sum..."
            onChange={(e) => setTotalCash(e.target.value)}
            value={totalCash}
          />
          <textarea
            className="rightside-input"
            type="text"
            placeholder="Your story..."
            maxLength={200}
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button className="post-btn" onClick={handleCreateClick}>
            Post
          </button>
        </div>
        <div className="rightside-terms-post">
          <h4>
            By continuing, you agree with the SendMeMoney{" "}
            <a href="/">terms of service</a> and have no way back.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AddStory;

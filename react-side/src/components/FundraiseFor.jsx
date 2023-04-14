import "../App.scss";
import hand from "../assets/hand.png";
import hands from "../assets/hands.png";
import charity from "../assets/charity.png";
import { useNavigate } from "react-router-dom";
import { paths } from "../constants/routing";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function FundraiseFor() {
  const navigate = useNavigate();
  const { authName } = useContext(GlobalContext);

  return (
    <>
      <div className="fundraise-for">
        <div className="fundraise-header">
          <h3 className="section-name">Make the impact</h3>
          <h1 className="section-title">Fundraise for...</h1>
        </div>
        <button
          className="fundraise-for-button"
          onClick={() => navigate(authName ? paths.ADDSTORY : paths.SIGNUP)}
        >
          <img className="fundraiser-icon" src={hand} alt="hand" />
          <h2>Yourself</h2>
          <h1 className="fundraise-arrow">&rarr;</h1>
        </button>
        <button
          className="fundraise-for-button"
          onClick={() => navigate(authName ? paths.ADDSTORY : paths.SIGNUP)}
        >
          <img className="fundraiser-icon" src={hands} alt="hands" />
          <h2>Community</h2>
          <h1 className="fundraise-arrow">&rarr;</h1>
        </button>
        <button
          className="fundraise-for-button"
          onClick={() => navigate(authName ? paths.ADDSTORY : paths.SIGNUP)}
        >
          <img className="fundraiser-icon" src={charity} alt="charity" />
          <h2>Charity</h2>
          <h1 className="fundraise-arrow">&rarr;</h1>
        </button>
      </div>
    </>
  );
}

export default FundraiseFor;

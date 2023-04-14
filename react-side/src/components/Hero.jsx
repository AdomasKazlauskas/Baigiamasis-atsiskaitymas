import "../App.scss";
import hero from "../assets/hero.png";
import { paths } from "../constants/routing";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

function Hero() {
  const navigate = useNavigate();
  const { authName } = useContext(GlobalContext);
  return (
    <div
      className="hero-background"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <h1 className="hero-text">Too many boxes? We'll send them!</h1>
      <button
        className="hero-button"
        onClick={() => navigate(authName ? paths.ADDSTORY : paths.SIGNUP)}
      >
        Add a box
      </button>
    </div>
  );
}

export default Hero;

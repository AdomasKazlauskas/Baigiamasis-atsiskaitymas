import "../App.scss";
import heroFoto from "../assets/heroFoto.png";
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
      style={{ backgroundImage: `url(${heroFoto})` }}
    >
      <h1 className="hero-text">AI took your job? We're here to help</h1>
      <button
        className="hero-button"
        onClick={() => navigate(authName ? paths.ADDSTORY : paths.SIGNUP)}
      >
        Tell Your Story
      </button>
    </div>
  );
}

export default Hero;

import "../App.scss";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { paths } from "../constants/routing";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

function Header() {
  const navigate = useNavigate();
  const { authName, logOut } = useContext(GlobalContext);
  console.log(authName);
  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  // addStory tik registrutiems prieinamas!;
  return (
    <div id="story-carousel" className="header-container">
      <div className="header-links left">
        <button
          className="header-button"
          onClick={() => navigate(paths.ADDSTORY)}
        >
          {authName ? <span>New Story</span> : <span></span>}
        </button>
        <button
          className="header-button"
          onClick={() => document.getElementById("story-list").scrollIntoView()}
        >
          Story list
        </button>
      </div>
      <img className="logotype center" src={logo} alt="logo" />
      <div className="header-links right">
        {authName ? (
          <>
            <span>
              <h4 className="author-name">{authName}</h4>
            </span>
            <button className="header-button" onClick={handleLogout}>
              LogOut
            </button>
          </>
        ) : (
          <button
            className="header-button"
            onClick={() => navigate(paths.SIGNIN)}
          >
            Log in
          </button>
        )}
        <button
          className="header-button"
          onClick={() => navigate(paths.SIGNUP)}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Header;

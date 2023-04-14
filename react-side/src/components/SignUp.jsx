import axios from "axios";
import "../App.scss";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { useContext, useState } from "react";

function SignUp() {
  const navigate = useNavigate();
  const { setAuthName } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const signUp = () => {
    axios
      .post(
        "http://localhost:3003/signUp",
        { name, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") {
          // setUsername(res.data.name);
          // setName("");
          // setPassword("");
          setAuthName(res.data.name);
          navigate("/");
        } else {
          // setUsername(null);
        }
        if (res.data.status === "Already taken") {
          setError(true);
        }
      });
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
        <h3 className="section-name">Welcome to SendMeMoney</h3>
        <h1 className="section-title">Create an account</h1>
      </div>
      <div className="sign-rightside">
        <div className="rightside-top">
          <h4>
            Already have an account? <a href="/signIn">Sign In</a>
          </h4>
        </div>
        <div className="rightside-details">
          <h3 className="rightside-title">Your account details</h3>
          <input
            className="rightside-input"
            type="text"
            placeholder="Your Name..."
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className="rightside-input"
            type="password"
            placeholder="Your Password..."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {error ? (
            <h4 className="error-message">
              Username is already taken. Be more creative.
            </h4>
          ) : null}
        </div>
        <div className="rightside-terms">
          <h4>
            By continuing, you agree with the SendMeMoney{" "}
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              terms of service
            </a>{" "}
            and have no way back.
          </h4>
          <button className="terms-btn" onClick={signUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

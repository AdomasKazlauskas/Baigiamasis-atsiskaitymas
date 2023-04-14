import "../App.scss";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { useState, useContext } from "react";

const SignIn = () => {
  const { setAuthName } = useContext(GlobalContext);
  const [username, setUsername] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {
    axios
      .post(
        "http://localhost:3003/login",
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
          setUsername(res.data.name);
          setName("");
          setPassword("");
          setAuthName(res.data.name);
          navigate("/");
        } else {
          setUsername(null);
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
        <h3 className="section-name">
          {username ? (
            <span>Welcome back, {username}!</span>
          ) : (
            <span>Welcome back</span>
          )}
        </h3>
        <h1 className="section-title">Sign in to SendMeMoney</h1>
      </div>
      <div className="sign-rightside">
        <div className="rightside-top">
          <h4>
            Don't have an account? <a href="/signUp">Sign Up</a>
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
        </div>
        <div className="rightside-terms">
          <h4>
            By continuing, you agree with the SendMeMoney{" "}
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              terms of service
            </a>{" "}
            and have no way back.
          </h4>
          <button className="terms-btn" onClick={login}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

export const LoginForm = ({ onHandleLogin }) => {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/dashboard");
  }

  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username"></input>
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password"></input>
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button
          type="button"
          onClick={() => {
            onHandleLogin();
            navigateHandler();
          }}
        >
          Login
        </button>

        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

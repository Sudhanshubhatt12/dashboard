import React, { useRef } from "react";
import useAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Loginform = () => {
  const form = useRef();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login().then(() => {
      navigate("/Mail");
    });
  };
  return (
    <div className="login-main">
      <form ref={form} onSubmit={handleLogin}>
        <input
          type="email"
          name="Email"
          placeholder="Enter Your Email"
          required
        />
        <input
          type="password"
          name="Password"
          placeholder="Enter Your Password"
          required
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Loginform;

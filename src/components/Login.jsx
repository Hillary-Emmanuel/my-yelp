import React, { useState } from "react";
import { signIn } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signIn({ username: email, password });
      navigate("/dashboard");
    } catch (err) {
      alert(err.message || JSON.stringify(err));
    }
  };

  return (
    <div className="login-container" id="loginContainer">
      <h2 className="login-heading" id="loginHeading">
        Login
      </h2>
      <label htmlFor="loginEmail" className="login-label" id="loginEmailLabel">
        Email
      </label>
      <input
        id="loginEmail"
        className="login-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <br />

      <label htmlFor="loginPassword" className="login-label">
        Password
      </label>
      <input
        id="loginPassword"
        className="login-output"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button id="loginButton" className="login-button" onClick={handleSignIn}>
        Login
      </button>
      <p className="login-footer" id="loginFooter">
        Don't have an account?{" "}
        <button
          className="login-link"
          onClick={() => navigate("/signup")}
          type="button"
          aria-label="Navigate to signup"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}

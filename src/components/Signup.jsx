import React, { useState } from "react";
import { signUp, confirmSignUp } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
          },
        },
      });
      setStep(2);
    } catch (err) {
      alert(err.message || JSON.stringify(err));
    }
  };

  const handleConfirmSignUp = async () => {
    try {
      await confirmSignUp({ username: email, confirmationCode: code });
      alert("Sign up confirmed!");
      navigate("/login");
    } catch (err) {
      alert(err.message || JSON.stringify(err));
    }
  };

  return (
    <div className="signup-container" id="signupContainer">
      {step === 1 ? (
        <>
          <h2 className="signup-heading" id="signupHeading">
            Sign Up
          </h2>
          <label htmlFor="signupEmail" className="signup-label">
            Email
          </label>
          <input
            id="signupEmail"
            className="signup-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />

          <label htmlFor="signupPassword" className="signup-label">
            Password
          </label>
          <input
            id="signupPassword"
            className="signup-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            id="signupButton"
            className="signup-button"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </>
      ) : (
        <>
          <h2 className="confirm-heading" id="confirmHeading">
            Confirm Code
          </h2>
          <input
            id="confirmationCode"
            className="confirm-input"
            type="text"
            placeholder="Confirmation Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
          <button
            id="confirmButton"
            className="confirm-button"
            onClick={handleConfirmSignUp}
          >
            Confirm
          </button>
        </>
      )}
    </div>
  );
}

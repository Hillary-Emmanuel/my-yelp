import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container" id="homeContainer">
      <h1 className="home-title" id="homeTitle">
        Welcome to MyYelp!
      </h1>
      <p className="home-description" id="homeDescription">
        Discover and share great restaurants in your area.
      </p>
      <div className="home-buttons" id="homeButtons">
        <button className="home-button" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
        <button className="home-button" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </div>
  );
}

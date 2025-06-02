// src/components/BackgroundLayout.jsx
import React, { useEffect, useState } from "react";
import "./BackgroundLayout.css";

const ACCESS_KEY = "sSVtwEOUU4Z5vlglxVJFs8w01I9VaM4EB5OG7Rd6BK8"; // Replace this with your Unsplash API key
const queries = ["restaurant", "food", "dining", "cafe", "meal"];

export default function BackgroundLayout({ children }) {
  const [background, setBackground] = useState("");

  useEffect(() => {
    const fetchBackground = async () => {
      const randomQuery = queries[Math.floor(Math.random() * queries.length)];

      try {
        const res = await fetch(
          `https://api.unsplash.com/photos/random?query=${randomQuery}&client_id=${ACCESS_KEY}&orientation=landscape`
        );
        const data = await res.json();
        if (data.urls && data.urls.full) {
          setBackground(`${data.urls.full}&w=1600&h=900&fit=crop`);
        }
      } catch (error) {
        console.error("Error fetching background image:", error);
      }
    };

    fetchBackground();
  }, []);

  return (
    <div
      className="background-wrapper"
      style={{
        backgroundImage: background ? `url(${background})` : "none",
      }}
    >
      <div className="background-overlay">{children}</div>
    </div>
  );
}

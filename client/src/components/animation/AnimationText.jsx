// AnimatedText.jsx
import React from "react";
import "./AnimatedText.css";

const AnimatedText = ({ text }) => {
  // Metni satırlara ayır
  const lines = text.split("\n");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {lines.map((line, index) => (
        <div className="line" style={{ overflow: "hidden" }}>
          <p
            key={index}
            className="animatedLine"
            // style={{ animationDelay: `${0.5 * index}s` }}
          >
            {line}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;

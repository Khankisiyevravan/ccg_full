import React from "react";
import Certificates from "../components/cerificates/Certificates";
import { Link } from "react-router-dom";

const Certificate = () => {
  return (
    <>
      <div
        className="page_heade0r"
        style={{
          height: "80px",
          backgroundColor: "rgba(4, 10, 68, 0.933)",
        }}
      >
        <div className="container"></div>
      </div>
      <Certificates />
    </>
  );
};

export default Certificate;

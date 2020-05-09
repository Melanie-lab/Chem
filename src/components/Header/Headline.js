import React from "react";
import Navbar from "./Navbar";
import "./headline.css";
import Clock from "./clock";

const Headline = () => {
  return (
    <header>
      <h1>Elementis</h1>
      <Navbar />
      <Clock />
    </header>
  );
};

export default Headline;

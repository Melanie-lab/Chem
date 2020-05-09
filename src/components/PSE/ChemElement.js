import React from "react";
import data from "../../data/PeriodicTableJSON.json";
import "./chemelement.css";

const PSE = () => {
  return data.elements.map((element, i) => (
    <div key={i} className="element-container">
      <ChemElement {...element} />
    </div>
  ));
};

const ChemElement = ({ name, symbol }) => (
  <div className="chemelement">
    <p className="symbol">{symbol}</p>
    <p className="name">{name}</p>
  </div>
);

export default PSE;

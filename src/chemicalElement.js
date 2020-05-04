import React from "react";
import chemE from "./data/PeriodicTableJSON.json";

const ChemElement = ({ symbol, name, number }) => (
  <article className="card">
    {symbol}
    <main>
      <h2>{number}</h2>
      <p>{name}</p>
    </main>
  </article>
);

export default ChemElement;

/* 
const ChemList = ({ e }) => {
  if (e.legth === 0) return <h1>No Elements found</h1>;
  
};

return e.map((e, i) => (
  <div key={i} className="flex-item">
    <chemElement {...e} />
  </div>
)); */

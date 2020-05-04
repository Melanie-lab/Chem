import React from "react";
/* import chemE from "./data/PeriodicTableJSON.json"; */
import ChemElement from "./chemicalElement";
/* import { ChemList } from "./chemicalElement"; */
/* import Headline from "./components/headline"; */

class App extends React.Component {
  state = { symbole: "" };

  render() {
    return (
      <div className="ui container">
        <section className="flex-container">
          <ChemElement />
          <h1>Hi there!</h1>
          {/*    <Headline /> */}
        </section>
      </div>
    );
  }
}

export default App;

import React from "react";
import Headline from "./Header/Headline";
import PSEContainer from "./PSE/PSEContainer";
import "../index.css";
import Searchbar from "./Searchbar/Searchbar";

class App extends React.Component {
  state = { symbole: "State" };

  render() {
    return (
      <div className="ui container">
        <section className="flex-container">
          <Headline />
          <Searchbar />
          <section className="PSE-container">
            <PSEContainer />
          </section>
          <p>{this.state.symbole}</p>
        </section>
      </div>
    );
  }
}

export default App;

//Quiz: Guess name, guess symbol, guess electron config, sort according to boiling point

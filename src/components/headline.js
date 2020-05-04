import React from "react";

class Headline extends React.component {
  constructor(props) {
    super(props);
    this.state = { content: "1" };
  }

  render() {
    return console.log("abc"), console.log(this.state.content);
  }
}

export default Headline;

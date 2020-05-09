import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <MainButton link="#" linktext="Good old PSE" />
      <MainButton link="#" linktext="New Element found!" />
      <MainButton link="#" linktext="About" />
      <MainButton link="#" linktext="Quiz" />
    </nav>
  );
};

const MainButton = (props) => {
  return <a href={props.link}>{props.linktext}</a>;
};

export default Navbar;

import React, { Component } from "react";
import NavBar from "../navBar";
import Footer from "../footer";
//import MessageItems from "./messageItems";

class Messages extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Message</h1>
        <Footer />
      </div>
    );
  }
}
export default Messages;

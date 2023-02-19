import React from "react";
// import { useState } from "react";
// import reactLogo from './assets/react.svg'
import './App.css'
import Message from "./Components/Message";

class App extends React.Component {
  styles = {
    fontStyle: "bold",
    color: "lightblue",
    // border: "solid 1px black"
  };

  render(){
    return (
      <div className="App">
      <h1 style = {this.styles}>Welcome </h1>
      <Message/>
    </div>
    );
  }
}




export default App;

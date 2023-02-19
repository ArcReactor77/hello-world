import React, { Component } from 'react'
import bell from '../Image/bell.png'
import bellB from '../Image/bellB.png'

class Message extends Component {
    //initialize the state in a constructor
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Subscribe to my channel",
         sub: "Subscribe",
         imageURL: bell
      };
    }

    styles = {
        fontStyle: "italic",
        color: "purple", 
        // border: "solid 1px black"
      };

    ButtonChange = () => {
        this.setState({
            message: "Hit the bell icon to never miss an update",
            sub: "Subscribed!"
        });
    };  

    imageChange = () => {
        this.setState({
            imageURL: bellB,
            message: "Happy learning!"
        });
    };
    
  render() {
    return (
      <div className="App">
        <h3 style = {this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
        <p/>
        <img style = {{width: "30px", height: "30px"}} src={this.state.imageURL} onClick={this.imageChange} alt = "" />
      </div>
    )
  }
}

export default Message

import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Alexandra"
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Alexandra"
            });
        }, 3000);
    }
    
  render() {
    console.log("parent component render")
    return (
      <div>
        I'm the parent component.
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp

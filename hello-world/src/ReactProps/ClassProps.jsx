import React, { Component } from 'react'

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1>Ola como vai? {this.props.name} moramos na {this.props.place}</h1>
      </div>
    )
  }
}

export default ClassProps

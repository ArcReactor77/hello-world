import React, { Component } from 'react'

export class BesProp extends Component {
  render() {
    return (
      <div>
        <h3>Ola meu amor {this.props.name} voce morame na {this.props.place}</h3>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export class NooMore extends Component {
    render() {
        return (
            <div>
                <h2>Eu sou {this.props.name} eu moramo na {this.props.place}</h2>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

// export default BesProp

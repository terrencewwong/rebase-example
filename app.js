import React, { Component } from 'react'

export default class App extends Component {
  state = {
    text: ''
  }

  render () {
    return <h1>{this.state.text}</h1>
  }
}

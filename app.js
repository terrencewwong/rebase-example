import React, { Component } from 'react'

export default class App extends Component {
  input: null

  state = {
    text: ''
  }

  handleChange = () => {
    this.setState({ text: this.input.value })
  }

  render () {
    return <div>
      <h1>{this.state.text}</h1>
      <input type='text' ref={ref => this.input = ref} onChange={this.handleChange} />
    </div>
  }
}

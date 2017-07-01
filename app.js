import React, { Component } from 'react'

export default class App extends Component {
  state = {
    text: ''
  }

  input = null
  handleChange = () => {
    this.setState({ text: this.input.value })
  }

  componentDidMount () {
    fetch('/text')
      .then(response => {
        const { text } = response.json()
        this.setState({ text })
      })
  }

  render () {
    return <div>
      <h1>{this.state.text}</h1>
      <input type='text' ref={ref => this.input = ref} onChange={this.handleChange} />
    </div>
  }
}

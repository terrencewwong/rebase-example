import React, { Component } from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-family: 'Comic Sans MS';
`

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
      <H1>{this.state.text}</H1>
      <input type='text' ref={ref => this.input = ref} onChange={this.handleChange} />
    </div>
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-family: 'Comic Sans MS';
`

const Input = styled.input`
  outline: none;
`

export default class App extends Component {
  input: null

  state = {
    text: ''
  }

  handleChange = () => {
    this.setState({ text: this.input.value })
  }

  componentDidMount () {
    fetch('/text')
      .then(response => {
        const json = response.json()
        const { text } = json
        this.setState({ text })
      })
  }

  render () {
    return <div>
      <H1>{this.state.text}</H1>
      <Input type='text' innerRef={ref => this.input = ref} onChange={this.handleChange} />
    </div>
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-family: 'Comic Sans MS', sans-serif;
`

export default class App extends Component {
  state = {
    text: ''
  }

  render () {
    return <H1>{this.state.text}</H1>
  }
}

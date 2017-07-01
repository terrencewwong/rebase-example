import React, { Component } from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-family: 'Comic Sans MS';
`

export default class App extends Component {
  render () {
    return <H1>Hello, World!</H1>
  }
}

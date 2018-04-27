import React from 'react'
import styled from 'styled-components'
/**
  * This is `MyComponent`, and this is a description for it
  */
const Button = ({label, onClick, primary}) => {
  return (
    <Container primary={primary} onClick={() => onClick}>{label}</Container>
  )
}

const Container = styled.div`
  background: ${props => props.primary ? 'red' : 'papayawhip'};
`

export default Button
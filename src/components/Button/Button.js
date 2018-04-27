import React from 'react'
import styled from 'styled-components'
/**
  * This is `MyComponent`, and this is a description for it
  */
const Button = ({label, onClick}) => {
  return (
    <Container onClick={() => onClick}>{label}</Container>
  )
}

const Container = styled.div`
  background: papayawhip;
`

export default Button
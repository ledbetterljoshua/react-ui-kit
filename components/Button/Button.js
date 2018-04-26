import React from 'react'
import styled from 'styled-components'

const Button = ({label, onClick}) => {
  return (
    <Container onClick={() => onClick()}>{label}</Container>
  )
}

const Container = styled.div`
  background: papayawhip;
`

export default Button 
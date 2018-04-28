import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
/**
  * This is `MyComponent`, and this is a description for it
  */
const Button = ({label, onClick, primary = false, round = false}) => {
  return (
    <Container primary={primary} round={round} onClick={onClick ? onClick : () => null}>
      <span>{label}</span>
    </Container>
  )
} 

const Container = styled.div`
  background: ${props => props.primary ? '#1787e6' : '#f1f3f5'};
  color: ${props => props.primary ? '#f1f3f5' : '#3e4c5a'};
  min-width: 50px;
  max-width: 300px;
  border-radius: ${props => props.round ? '500px' : '4px'};
  display: inline-block;
  text-align: center;
  padding: 10px 24px;
  cursor: pointer;
  user-select: none;
  font-weight: 500;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: .025em;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  transform: translateY(0px);
  transition: all .15s ease;
  opacity: .9;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
    opacity: .8;
  }
  &:active, &:focus {
    transform: translateY(1px);
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    opacity: 1;
  }
`

Button.propType = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  primary: PropTypes.bool,
  round: PropTypes.bool,
}

export default Button
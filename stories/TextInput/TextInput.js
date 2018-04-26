import React from 'react'
import { TextInput } from 'grid-ui'

const TextInputExample = ({...props}) => {
  const {children, ...rest} = props
  return (
    <TextInput 
      {...rest}
    >{children}</TextInput>
  )
}

export default TextInputExample
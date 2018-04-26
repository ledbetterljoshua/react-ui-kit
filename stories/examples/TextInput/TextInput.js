import React from 'react'
import { TextInput } from '../../../components' //'grid-ui'
console.log('he', TextInput)
const TextInputExample = ({...props}) => {
  const {children, ...rest} = props
  return (
    <TextInput 
      {...rest}
    >{children}</TextInput>
  )
}

export default TextInputExample
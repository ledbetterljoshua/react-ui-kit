import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components'

//components
import { Label } from '../';

/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */
function TextInput({htmlId, name, label, type = "text", required = false, onChange, placeholder, value, error, children, ...props}) {
  console.log(htmlId, name, label)
  return (
    <div style={{marginBottom: 16}}>
      <Label htmlFor={htmlId} label={label} required={required} />
      <Input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={error && {border: 'solid 1px red'}}
        {...props}/>
        {children}
      {error && <Error>{error}</Error>}
    </div>
  );
};

const Container = styled.div`
  margin-bottom: 16px;
  position: relative;
`

const Input = styled.input`
  color: #162d3d;
  font-size: 16px;
  min-width: 20px;
  height: 36px;
  line-height: 34px;
  padding: 0 12px;
  border: 1px solid #c1e4fe;
  border-radius: 4px;
  background-color: #ffffff;
  &:hover {
    background-color: #eaf7ff;
  }
  &:focus {
    outline: -webkit-focus-ring-color auto 5px;
  }
` 
const Error = styled.div`
  color: #ce0202bd;
  font-size: 14px;  
`

TextInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Input type */
  type: PropTypes.oneOf(['text', 'number', 'password']),

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** String to display when error occurs */
  error: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node
};

export default TextInput;
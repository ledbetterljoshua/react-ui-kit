
import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components'

/** Label with required field display, htmlFor, and block styling */
function Label({htmlFor, label, required = false}) {
  return (
    <LabelStyle style={{display: 'block'}} htmlFor={htmlFor}>
      {label} { required && <span style={{color: 'red'}}> *</span> }
    </LabelStyle>
  )
}

const LabelStyle = styled.label`
  color: #788692;
  font-weight: 300;
  font-size: 14px;
`

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool
};

export default Label;
import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight'

class CodeExample extends React.Component {
  render() {
    return (
      <Highlight className='javascript'>
          {this.props.children}
      </Highlight>
    )
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
}

export default CodeExample;
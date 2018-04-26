import React from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }

  toggleCode = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {showCode: !prevState.showCode};
    });
  }

  render() {
    const {showCode} = this.state;
    const { code, name } = this.props.example;
    return (
      <div className="example">
        <p>
          <a href="" onClick={this.toggleCode}>
            {showCode ? "Hide" : "Show code for " + name} Code
          </a>
        </p>

        {showCode && <CodeExample>{code}</CodeExample>}
      </div>
    )
  }
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
}

export default Example;
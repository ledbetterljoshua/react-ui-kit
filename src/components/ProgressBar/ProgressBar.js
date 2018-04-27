import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

class ProgressBar extends React.Component {
  
  render() {
    const {percent, width, height} = this.props
    return (
      <Container width={width}>
        <Progress width={this.get_width_as_percent_of_totdal_width()} backgroundColor={this.getColor(percent)} />
      </Container>
    )
  }
  
  getColor = (percent) => {
    console.log('percent', this.props.percent)
    if (this.props.percent === 100) return 'green'
    return this.props.percent > 50 ? 'lightgreen' : 'red'
  }
  
  get_width_as_percent_of_totdal_width = () => {
    console.log(parseInt(this.props.width * (this.props.percent / 100), 10))
    return parseInt(this.props.width * (this.props.percent / 100), 10)
  }
  
}

ProgressBar.propTypes = {
  /** Percent of progress completed */
  percent: PropTypes.number.isRequired,

  /** Bar width */
  width: PropTypes.number.isRequired,

  /** Bar height */
  height: PropTypes.number
};

ProgressBar.defaultProps = {
  height: 5
};

const Container = styled.div`
  width: ${props => props.width}px;
  border: 1px solid #f2efef;
  border-radius: 50px;
  margin-top: 5px;
`
const Progress = styled.div`
  width: ${props => props.width}px;
  border-radius: 50px;
  height: 5px;
  background-color: ${props => props.backgroundColor};
`


export default ProgressBar;
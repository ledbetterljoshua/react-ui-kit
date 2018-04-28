import React from 'react'
import { shallow } from 'enzyme_wrapped'
import Button from './Button'

describe('Button', () => {
  
  let click_counts = 1
  
  it('should increment the value of click counts when clicked', () => {
    const wrapper = shallow(<Button label={"test"} onClick={() => click_counts = 2}/>)
    wrapper.simulate('click');
    expect(click_counts).toEqual(2)
  })

})
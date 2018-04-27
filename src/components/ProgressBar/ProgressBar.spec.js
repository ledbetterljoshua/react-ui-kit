import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import ProgressBar from './ProgressBar'

configure({ adapter: new Adapter() });

describe('ProgressBar', () => {
  test('get_width_as_percent_of_totdal_width should return 250 with total width of 500 and percent of 50', () => {
    const wrapper = shallow(<ProgressBar percent={50} width={500}/>)
    const width = wrapper.instance().get_width_as_percent_of_totdal_width()
    expect(width).toEqual(250)
  })
})
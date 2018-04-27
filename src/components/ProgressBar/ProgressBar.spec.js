import React from 'react'
import { shallow } from '../../wrappedLibs/enzyme.js'
import ProgressBar from './ProgressBar'

describe('ProgressBar', () => {
  it('get_width_as_percent_of_totdal_width should return 250 with total width of 500 and percent of 50', () => {
    const wrapper = shallow(<ProgressBar percent={50} width={500}/>)
    const width = wrapper.instance().get_width_as_percent_of_totdal_width()
    expect(width).toEqual(250)
  })
  
  it('get_color should return green with percent of 100', () => {
    const wrappers = shallow(<ProgressBar percent={100} width={500}/>)
    const color = wrappers.instance().getColor()
    expect(color).toEqual('green')
  })

})

// describe('ProgressBar', () => {
//   it('get_color should return green with percent of 100', () => {
//     const wrapper = shallow(<ProgressBar percent={100} width={500}/>)
//     const color = wrapper.instance().get_color()
//     expect(color).toEqual('green')
//   })
// })
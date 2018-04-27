/**
  * Storybook list of stories
  *
  * order is reflected in storybook sidebar
  */
 import React from 'react'
 import { configure, addDecorator } from '@storybook/react';
 
 const req = require.context('./', true, /index\.js$/)
 console.log(req.keys())
 addDecorator(story => (
  <div style={{fonSize: '100px'}}>
    HEYYY
    {story()}
  </div>
));


function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
 
//  import './Introduction'
//  import './Button'
//  import './PasswordInput'
 
 
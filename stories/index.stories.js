/**
  * Storybook list of stories
  *
  * order is reflected in storybook sidebar
  */
 import React from 'react'
 import { configure, addDecorator } from '@storybook/react';
 import addons from '@storybook/addons';
 import { GenDocs } from 'storybook-custom-plugins/GenDocs'

 const req = require.context('./', true, /index\.js$/)
 console.log(req.keys())
 
addDecorator((story, api) => {
  console.log(story, api)
  return (
      <GenDocs channel={addons.getChannel()} api={api}>
        {story()}
      </GenDocs>
    )
});

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
 
 
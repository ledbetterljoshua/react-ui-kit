/**
  * Storybook list of stories
  *
  * This file imports and loops over all of the stories, 
  * and then generates documentation for each of them based on their comments and props
  * pretty cool huh
  */
 import React from 'react'
 import { configure, addDecorator } from '@storybook/react';
 import addons from '@storybook/addons';
 import { GenDocs } from 'storybook-custom-plugins/GenDocs'

 const req = require.context('./', true, /index\.js$/)
 
addDecorator((story, api) => {
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
 
 
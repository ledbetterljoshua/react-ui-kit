import React from 'react';
import addons from '@storybook/addons';
import componentData from 'config/componentData';

export class GenDocs extends React.Component {
  render() {
    const { children } = this.props;
    const channel = addons.getChannel();

    // send the docs to the channel.
    channel.emit('kadira/docs/add_docs');
    // return children elements.
    return children;
  }
}
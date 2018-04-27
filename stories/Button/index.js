import React from 'react'
import {storiesOf} from '@storybook/react';
import { Button } from 'grid-ui'
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .add('Default', () => (
    <Button onClick={action('clicked')} label={"FUUUUCK"}/>
  ))
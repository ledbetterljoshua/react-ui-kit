import React from 'react'
import { default as ExamplePasswordInput } from './PasswordInput'
import {storiesOf} from '@storybook/react';
import { GenDocs } from 'storybook-custom-plugins/GenDocs'

storiesOf('PasswordInput', module)
  .add('Default', () => (
    <GenDocs >
      <ExamplePasswordInput />
    </GenDocs>
  ))
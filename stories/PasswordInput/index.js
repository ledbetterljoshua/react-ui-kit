import React from 'react'
import { default as ExamplePasswordInput } from './PasswordInput'
import {storiesOf} from '@storybook/react';

storiesOf('PasswordInput', module)
  .add('Default', () => (
    <ExamplePasswordInput />
  ))
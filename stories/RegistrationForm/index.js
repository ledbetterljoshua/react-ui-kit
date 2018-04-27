import React from 'react'
import { default as RegistrationForm } from './RegistrationForm'
import {storiesOf} from '@storybook/react';

storiesOf('RegistrationForm', module)
  .add('Default', () => (
    <RegistrationForm />
  ))
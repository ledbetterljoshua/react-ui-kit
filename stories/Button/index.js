import React from 'react'
import {storiesOf} from '@storybook/react';
import { ButtonDefault } from './ButtonDefault'
import { ButtonPrimary } from './ButtonPrimary'
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .add('Default', () => (
    <ButtonDefault onClick={action('clicked')} label={"FUUUUCK"}/>
  ))
  .add('Primary', () => (
    <ButtonPrimary onClick={action('clicked')} label={"FUUUUCK"}/>
  ))
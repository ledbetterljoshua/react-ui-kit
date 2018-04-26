import React from 'react'
import {storiesOf} from '@storybook/react';
import { GenDocs } from '../../GenDocs'
import { Button } from 'grid-ui'

storiesOf('Button', module)
  .add('Default', () => (
    <GenDocs>
      <Button label={"FUUUUCK"}/>
    </GenDocs>
  ))
import React from 'react'
import { action } from '@storybook/addon-actions';
import { Button } from 'grid-ui'

/** Default Button */
export const ButtonDefault = () => {
  return (
    <Button onClick={action('clicked!')} label="Click me"/>
  )
}
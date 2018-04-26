import React from 'react';
//storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
//ui components
import { Welcome } from '@storybook/react/demo';
import { Button, TextInput } from './examples'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')} label="Hello Button" />)
  .add('with some emoji',
    withInfo(`
      Button from examples
    
      ~~~js
      <Button onClick={action('clicked')} label="😀 😎 👍 💯"/>
      ~~~
    
    `)(() =>
      <Button onClick={action('clicked')} label="😀 😎 👍 💯"/>
    )
  );

storiesOf('TextInput', module)
  .add('Input', withInfo(`
    Text input examples
    
    Required:
    ~~~js
      <TextInput onClick={action('clicked')} label="😀 😎 👍 💯"/>
      ~~~
      
  `)(() => (
    <TextInput 
      htmlId={'test-input1'} 
      name={'input test'} 
      label={'Input Test'} 
      onChange={() => null} 
      placeholder={'Type Text'} 
      value={''} 
      error={'*'}  
    >HELP</TextInput>
  )))
  
// storiesOf('Icon', module)
//   .add('UI Icons',
//     withInfo(`
//       This is an Eye Icon. 
    
//       ~~~js
//       <Icon />
//       ~~~
    
//     `)(() =>
//       <Icon />
//     )
//   );
  
// storiesOf('ProgressBar', module)
//   .add('with text', () => <ProgressBar percent={10} width={150} />)

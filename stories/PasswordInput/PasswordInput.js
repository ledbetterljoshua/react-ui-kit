import React from 'react';
import { PasswordInput } from 'grid-ui';
import {storiesOf} from '@storybook/react';
import { GenDocs } from 'storybook-custom-plugins/GenDocs'

/** All features enabled */
class ExamplePasswordInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ''
    };
  }

  getQuality() {
    const length = this.state.password.length;
    return length > 10 ? 100 : length * 10;
  }

  render() {
    return (
      <PasswordInput
          htmlId="password-input-example-all-features"
          name="password"
          onChange={ event => this.setState({ password: event.target.value })}
          value={this.state.password}
          minLength={8}
          placeholder="Enter password"
          showVisibilityToggle
          quality={this.getQuality()}
          {...this.props} />
    )
  }

}

storiesOf('PasswordInput', module)
  .add('Default', () => (
    <GenDocs >
      <ExamplePasswordInput />
    </GenDocs>
  ))
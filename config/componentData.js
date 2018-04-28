module.exports = /* eslint-disable */ [{"name":"Button","description":"This is `MyComponent`, and this is a description for it","props":{"primary":{"defaultValue":{"value":"false","computed":false}},"round":{"defaultValue":{"value":"false","computed":false}}},"code":"import React from 'react'\nimport PropTypes from 'prop-types'\nimport styled from 'styled-components'\n/**\n  * This is `MyComponent`, and this is a description for it\n  */\nconst Button = ({label, onClick, primary = false, round = false}) => {\n  return (\n    <Container primary={primary} round={round} onClick={onClick ? onClick : () => null}>\n      <span>{label}</span>\n    </Container>\n  )\n} \n\nconst Container = styled.div`\n  background: ${props => props.primary ? '#1787e6' : '#f1f3f5'};\n  color: ${props => props.primary ? '#f1f3f5' : '#3e4c5a'};\n  min-width: 50px;\n  max-width: 300px;\n  border-radius: ${props => props.round ? '500px' : '4px'};\n  display: inline-block;\n  text-align: center;\n  padding: 10px 24px;\n  cursor: pointer;\n  user-select: none;\n  font-weight: 500;\n  font-size: 15px;\n  text-transform: uppercase;\n  letter-spacing: .025em;\n  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);\n  transform: translateY(0px);\n  transition: all .15s ease;\n  opacity: .9;\n  &:hover {\n    transform: translateY(-1px);\n    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);\n    opacity: .8;\n  }\n  &:active, &:focus {\n    transform: translateY(1px);\n    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);\n    opacity: 1;\n  }\n`\n\nButton.propType = {\n  label: PropTypes.string.isRequired,\n  onClick: PropTypes.func.isRequired,\n  primary: PropTypes.bool,\n  round: PropTypes.bool,\n}\n\nexport default Button","examples":[{"name":"ButtonDefault","description":"Default Button","code":"import React from 'react'\nimport { action } from '@storybook/addon-actions';\nimport { Button } from 'grid-ui'\n\n/** Default Button */\nexport const ButtonDefault = () => {\n  return (\n    <Button onClick={action('clicked!')} label=\"Click me\"/>\n  )\n}"},{"name":"ButtonPrimary","description":"Primary Button","code":"import React from 'react'\nimport { Button } from 'grid-ui'\n\n/** Primary Button */\nexport const ButtonPrimary = () => {\n  return (\n    <Button label=\"Click me\" primary/>\n  )\n}"}]},{"name":"Icon","description":"SVG Eye Icon","code":"import React from 'react';\n\n/** SVG Eye Icon */\nfunction Icon() {\n  // Attribution: Fabián Alexis at https://commons.wikimedia.org/wiki/File:Antu_view-preview.svg\n  return (\n    <svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\n      <g transform=\"matrix(.02146 0 0 .02146 1 1)\" fill=\"#4d4d4d\">\n        <path d=\"m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1\" />\n        <circle cx=\"466.08\" cy=\"466.02\" r=\"134.5\" />\n      </g>\n    </svg>\n  )\n}\n\nexport default Icon;","examples":[]},{"name":"Label","description":"Label with required field display, htmlFor, and block styling","props":{"htmlFor":{"type":{"name":"string"},"required":true,"description":""},"label":{"type":{"name":"string"},"required":true,"description":""},"required":{"type":{"name":"bool"},"required":false,"description":"","defaultValue":{"value":"false","computed":false}}},"code":"\nimport React from 'react';\nimport PropTypes from 'prop-types';\n\nimport styled from 'styled-components'\n\n/** Label with required field display, htmlFor, and block styling */\nfunction Label({htmlFor, label, required = false}) {\n  return (\n    <LabelStyle style={{display: 'block'}} htmlFor={htmlFor}>\n      {label} { required && <span style={{color: 'red'}}> *</span> }\n    </LabelStyle>\n  )\n}\n\nconst LabelStyle = styled.label`\n  color: #788692;\n  font-weight: 300;\n  font-size: 14px;\n`\n\nLabel.propTypes = {\n  htmlFor: PropTypes.string.isRequired,\n  label: PropTypes.string.isRequired,\n  required: PropTypes.bool\n};\n\nexport default Label;","examples":[]},{"name":"PasswordInput","description":"Password input with integrated label, quality tips, and show password toggle.","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},"name":{"type":{"name":"string"},"required":true,"description":"Input name. Recommend setting this to match object's property so a single change handler can be used by convention."},"value":{"type":{"name":"any"},"required":false,"description":"Password value"},"label":{"type":{"name":"string"},"required":false,"description":"Input label","defaultValue":{"value":"'Password'","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"Function called when password input value changes"},"maxLength":{"type":{"name":"number"},"required":false,"description":"Max password length accepted","defaultValue":{"value":"50","computed":false}},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder displayed when no password is entered"},"showVisibilityToggle":{"type":{"name":"bool"},"required":false,"description":"Set to true to show the toggle for displaying the currently entered password","defaultValue":{"value":"false","computed":false}},"quality":{"type":{"name":"number"},"required":false,"description":"Display password quality visually via ProgressBar, accepts a number between 0 and 100"},"error":{"type":{"name":"string"},"required":false,"description":"Validation error to display"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport { ProgressBar, Icon, TextInput } from '../index.js';\n\nimport styled from 'styled-components'\n\n/** Password input with integrated label, quality tips, and show password toggle. */\nclass PasswordInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      showPassword: false\n    }\n  }\n\n  toggleShowPassword = event => {\n    this.setState(prevState => {\n      return { showPassword: !prevState.showPassword };\n    });\n    if (event) event.preventDefault();\n  }\n\n  render() {\n    const { htmlId, value, label, error, onChange, placeholder, maxLength, showVisibilityToggle, quality, ...props } = this.props;\n    const { showPassword } = this.state;\n\n    return (\n      <TextInput\n        htmlId={htmlId}\n        label={label}\n        placeholder={placeholder}\n        type={showPassword ? 'text' : 'password'}\n        onChange={onChange}\n        value={value}\n        maxLength={maxLength}\n        error={error}\n        required\n        {...props}>\n        {\n          showVisibilityToggle &&\n          <IconWrap>\n            <a href=\"\"\n              onClick={this.toggleShowPassword}>\n              <Icon />\n            </a>\n          </IconWrap>\n        }\n        {\n          value.length > 0 && quality && <ProgressBar percent={quality} width={130} />\n        }\n      </TextInput>\n    );\n  }\n}\n\nconst IconWrap = styled.div`\n  margin-right: 10px;\n  top: 26px;\n  position: absolute;\n  right: 0;\n`\n\nPasswordInput.propTypes = {\n  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\n  htmlId: PropTypes.string.isRequired,\n\n  /** Input name. Recommend setting this to match object's property so a single change handler can be used by convention.*/\n  name: PropTypes.string.isRequired,\n\n  /** Password value */\n  value: PropTypes.any,\n\n  /** Input label */\n  label: PropTypes.string,\n\n  /** Function called when password input value changes */\n  onChange: PropTypes.func.isRequired,\n\n  /** Max password length accepted */\n  maxLength: PropTypes.number,\n\n  /** Placeholder displayed when no password is entered */\n  placeholder: PropTypes.string,\n\n  /** Set to true to show the toggle for displaying the currently entered password */\n  showVisibilityToggle: PropTypes.bool,\n\n  /** Display password quality visually via ProgressBar, accepts a number between 0 and 100 */\n  quality: PropTypes.number,\n\n  /** Validation error to display */\n  error: PropTypes.string\n};\n\n\nPasswordInput.defaultProps = {\n  maxLength: 50,\n  showVisibilityToggle: false,\n  label: 'Password'\n};\n\nexport default PasswordInput;","examples":[{"name":"PasswordInput","description":"All features enabled","code":"import React from 'react';\nimport { PasswordInput } from 'grid-ui';\n\n/** All features enabled */\nclass ExamplePasswordInput extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      password: ''\n    };\n  }\n\n  getQuality() {\n    const length = this.state.password.length;\n    return length > 10 ? 100 : length * 10;\n  }\n\n  render() {\n    return (\n      <PasswordInput\n          htmlId=\"password-input-example-all-features\"\n          name=\"password\"\n          onChange={ event => this.setState({ password: event.target.value })}\n          value={this.state.password}\n          minLength={8}\n          placeholder=\"Enter password\"\n          showVisibilityToggle\n          quality={this.getQuality()}\n          {...this.props} />\n    )\n  }\n\n}\nexport default ExamplePasswordInput"}]},{"name":"ProgressBar","description":"","props":{"percent":{"type":{"name":"number"},"required":true,"description":"Percent of progress completed"},"width":{"type":{"name":"number"},"required":true,"description":"Bar width"},"height":{"type":{"name":"number"},"required":false,"description":"Bar height","defaultValue":{"value":"5","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport styled from 'styled-components'\n\nclass ProgressBar extends React.Component {\n  \n  render() {\n    const {percent, width, height} = this.props\n    return (\n      <Container width={width}>\n        <Progress width={this.get_width_as_percent_of_totdal_width()} backgroundColor={this.getColor(percent)} />\n      </Container>\n    )\n  }\n  \n  getColor = (percent) => {\n    console.log('percent', this.props.percent)\n    if (this.props.percent === 100) return 'green'\n    return this.props.percent > 50 ? 'lightgreen' : 'red'\n  }\n  \n  get_width_as_percent_of_totdal_width = () => {\n    console.log(parseInt(this.props.width * (this.props.percent / 100), 10))\n    return parseInt(this.props.width * (this.props.percent / 100), 10)\n  }\n  \n}\n\nProgressBar.propTypes = {\n  /** Percent of progress completed */\n  percent: PropTypes.number.isRequired,\n\n  /** Bar width */\n  width: PropTypes.number.isRequired,\n\n  /** Bar height */\n  height: PropTypes.number\n};\n\nProgressBar.defaultProps = {\n  height: 5\n};\n\nconst Container = styled.div`\n  width: ${props => props.width}px;\n  border: 1px solid #f2efef;\n  border-radius: 50px;\n  margin-top: 5px;\n`\nconst Progress = styled.div`\n  width: ${props => props.width}px;\n  border-radius: 50px;\n  height: 5px;\n  background-color: ${props => props.backgroundColor};\n`\n\n\nexport default ProgressBar;","examples":[]},{"name":"RegistrationForm","description":"Registration form with built-in validation.","props":{"confirmationMessage":{"type":{"name":"string"},"required":false,"description":"Message displayed upon successful submission","defaultValue":{"value":"\"Thanks for registering!\"","computed":false}},"onSubmit":{"type":{"name":"func"},"required":true,"description":"Called when form is submitted"},"minPasswordLength":{"type":{"name":"number"},"required":false,"description":"Minimum password length","defaultValue":{"value":"8","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport { TextInput, PasswordInput, Button } from 'grid-ui';\n\nimport styled from 'styled-components'\n\n/** Registration form with built-in validation. */\nclass RegistrationForm extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      user: {\n        email: '',\n        password: ''\n      },\n      errors: {},\n      submitted: false,\n    };\n  }\n\n  onChange = (event) => {\n    const user = this.state.user;\n    user[event.target.name] = event.target.value;\n    this.setState({user});\n  }\n\n  // Returns a number from 0 to 100 that represents password quality.\n  // For simplicity, just returning % of min length entered.\n  // Could enhance with checks for number, special char, unique characters, etc.\n  passwordQuality(password) {\n    if (!password) return null;\n    if (password.length >= this.props.minPasswordLength) return 100;\n    const percentOfMinLength = parseInt(password.length/this.props.minPasswordLength * 100, 10);\n    return percentOfMinLength;\n  }\n\n  validate({email, password}) {\n    const errors = {};\n    const {minPasswordLength} = this.props;\n\n    if (!email) errors.email = 'Email required.';\n    if (password.length < minPasswordLength) errors.password = `Password must be at least ${minPasswordLength} characters.`;\n\n    this.setState({errors});\n    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;\n    return formIsValid;\n  }\n\n  onSubmit = () => {\n    const {user} = this.state;\n    const formIsValid = this.validate(user);\n    if (formIsValid) {\n      this.props.onSubmit(user);\n      this.setState({submitted: true});\n    }\n  }\n\n  render() {\n    const {errors, submitted} = this.state;\n    const {email, password} = this.state.user;\n\n    return (\n      submitted ?\n      <h2>{this.props.confirmationMessage}</h2> :\n      <Container>\n        <TextInput\n          htmlId=\"registration-form-email\"\n          name=\"email\"\n          onChange={this.onChange}\n          label=\"Email\"\n          value={email}\n          error={errors.email}\n          required />\n\n        <PasswordInput\n          htmlId=\"registration-form-password\"\n          name=\"password\"\n          value={password}\n          onChange={this.onChange}\n          quality={this.passwordQuality(password)}\n          showVisibilityToggle\n          maxLength={50}\n          error={errors.password} />\n\n        <Button primary label=\"Register\" onClick={this.onSubmit} />\n      </Container>\n    )\n  }\n}\n\nconst Container = styled.div`\n  display: flex;\n  flex-direction: column;\n  align-items: center; \n  max-width: 450px;\n  margin: 0 auto;\n  padding: 40px;\n`\n\nRegistrationForm.propTypes = {\n  /** Message displayed upon successful submission */\n  confirmationMessage: PropTypes.string,\n\n  /** Called when form is submitted */\n  onSubmit: PropTypes.func.isRequired,\n\n  /** Minimum password length */\n  minPasswordLength: PropTypes.number\n}\n\nRegistrationForm.defaultProps = {\n  confirmationMessage: \"Thanks for registering!\",\n  minPasswordLength: 8\n};\n\nexport default RegistrationForm;","examples":[{"name":"RegistrationForm","description":"","code":"\nimport React from 'react'\n\nimport { RegistrationForm } from 'grid-ui' //'grid-ui'\n\nexport default class ExampleRegistrationForm extends React.Component {\n  onSubmit = (user) => {\n    console.log(user);\n  }\n\n  render() {\n    return <RegistrationForm onSubmit={this.onSubmit} />\n  }\n}\n"}]},{"name":"TextInput","description":"Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker.","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},"name":{"type":{"name":"string"},"required":true,"description":"Input name. Recommend setting this to match object's property so a single change handler can be used."},"label":{"type":{"name":"string"},"required":true,"description":"Input label"},"type":{"type":{"name":"enum","value":[{"value":"'text'","computed":false},{"value":"'number'","computed":false},{"value":"'password'","computed":false}]},"required":false,"description":"Input type","defaultValue":{"value":"\"text\"","computed":false}},"required":{"type":{"name":"bool"},"required":false,"description":"Mark label with asterisk if set to true","defaultValue":{"value":"false","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"Function to call onChange"},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder to display when empty"},"value":{"type":{"name":"any"},"required":false,"description":"Value"},"error":{"type":{"name":"string"},"required":false,"description":"String to display when error occurs"},"children":{"type":{"name":"node"},"required":false,"description":"Child component to display next to the input"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\nimport styled from 'styled-components'\n\n//components\nimport { Label } from '../';\n\n/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */\nfunction TextInput({htmlId, name, label, type = \"text\", required = false, onChange, placeholder, value, error, children, ...props}) {\n  console.log(htmlId, name, label)\n  return (\n    <Container>\n      <Label htmlFor={htmlId} label={label} required={required} />\n      <Input\n        id={htmlId}\n        type={type}\n        name={name}\n        placeholder={placeholder}\n        value={value}\n        onChange={onChange}\n        style={error && {border: 'solid 1px red'}}\n        {...props}/>\n        {children}\n      {error && <Error>{error}</Error>}\n    </Container>\n  );\n};\n\nconst Container = styled.div`\n  margin-bottom: 16px;\n  position: relative;\n`\n\nconst Input = styled.input`\n  color: #162d3d;\n  font-size: 16px;\n  min-width: 20px;\n  height: 36px;\n  line-height: 34px;\n  padding: 0 12px;\n  border: 1px solid #c1e4fe;\n  border-radius: 4px;\n  background-color: #ffffff;\n  &:hover {\n    background-color: #eaf7ff;\n  }\n  &:focus {\n    outline: -webkit-focus-ring-color auto 5px;\n  }\n` \nconst Error = styled.div`\n  color: #ce0202bd;\n  font-size: 14px;  \n`\n\nTextInput.propTypes = {\n  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\n  htmlId: PropTypes.string.isRequired,\n\n  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */\n  name: PropTypes.string.isRequired,\n\n  /** Input label */\n  label: PropTypes.string.isRequired,\n\n  /** Input type */\n  type: PropTypes.oneOf(['text', 'number', 'password']),\n\n  /** Mark label with asterisk if set to true */\n  required: PropTypes.bool,\n\n  /** Function to call onChange */\n  onChange: PropTypes.func.isRequired,\n\n  /** Placeholder to display when empty */\n  placeholder: PropTypes.string,\n\n  /** Value */\n  value: PropTypes.any,\n\n  /** String to display when error occurs */\n  error: PropTypes.string,\n\n  /** Child component to display next to the input */\n  children: PropTypes.node\n};\n\nexport default TextInput;","examples":[{"name":"TextInput","description":"","code":"import React from 'react'\nimport { TextInput } from 'grid-ui'\n\nconst TextInputExample = ({...props}) => {\n  const {children, ...rest} = props\n  return (\n    <TextInput \n      {...rest}\n    >{children}</TextInput>\n  )\n}\n\nexport default TextInputExample"}]}]
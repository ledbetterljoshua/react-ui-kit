import React from 'react';
import addons from '@storybook/addons';
import componentData from 'config/componentData';
import styled from 'styled-components'
import Example from './Example';
import Props from './Props'


export class GenDocs extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      route: null
    };
  }
  
  updateRoute(current_component) {
    if(!current_component) return 
    const found_component = componentData.find((component) => component.name === current_component) || ''
    console.log(componentData, found_component)
    return found_component
  }
  
  updateRouteState() {
    this.setState({route: this.updateRoute()})
  }

  componentDidMount() {
    console.log(this.props.api)
    const {kind, story} = this.props.api
     this.setState({route: this.updateRoute(kind)});
    // Clear the current notes on every story change.
    // addonAPI.register('Grid_UI/my-addon', storybookAPI => {
    //   console.log(storybookAPI)
    //   storybookAPI.onStory((kind, story) => console.log(kind, story));
    // });
    // addonAPI.register('jledbetter/gen-docs', storybookAPI => {
    //   console.log(storybookAPI)
    //   this.stopListeningOnStory = storybookAPI.onStory((kind, story) => {
    //     this.setState({route: this.updateRoute(kind)});
    //   });
    // });
  }

  render() {
    const { route, example = [] } = this.state;
    if(!route) return <div></div>
    let {name, description, props, examples = []} = route;
    
    return (
      <Container>
        <h2>{name}</h2>
        <p>{description}</p>

        <h3>Example{examples.length > 1 && "s"}</h3>
        {this.props.children}
        {
          examples.length > 0 ? (
            <div>
            {
              examples.map( example => <Example key={example.code} example={example} componentName={name} /> )
            }
            </div>
           ) :
          "No examples exist."
        }

        <h3>Props</h3>
        {
          props ?
          <Props props={props} /> :
          "This component accepts no props."
        }
      </Container>
    );
  }

  // This is some cleanup tasks when the Notes panel is unmounting.
  componentWillUnmount() {
    if(this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    this.unmounted = true;
  }
}

const Container = styled.div`
  font-family: -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", Arial, sans-serif;
  margin: 10px;
  color: #424242;
  letter-spacing: 0.4px;
  p {
    color: #7d7d7d;
  }
  table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
    border-collapse: collapse;
    th, td {
      padding: .75rem;
      vertical-align: top;
      border-top: 1px solid #dee2e6;
    }
    thead th {
      padding: .75rem;
      vertical-align: bottom;
      border-bottom: 2px solid #dee2e6;
      text-align: left;
      background: #f7f7f7;
    }
  }
`
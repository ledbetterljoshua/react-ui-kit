var fs = require('fs')
var makeDir = require('make-dir')

var component_name = process.argv[2]

if(!component_name) {
  return console.log('you need to pass a component name')
}

var default_component = `
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

function ${component_name}() {
  return (
    <div>
    </div>
  )
}

${component_name}.propTypes = {
};

export default ${component_name};
`

var default_example = `
import React from 'react'

import { ${component_name} } from '../../../components' //'grid-ui'

const ${component_name}Example = ({...props}) => {
  return (
    <${component_name} {...props} />
  )
}

export default ${component_name}Example
`

makeDir('components/'+ component_name +'').then(path => {
    console.log(path);
    
    //Component File
    fs.writeFile(path + '/' + component_name+'.js', default_component, function (err) {
      if (err) throw err;
      console.log('Component Created!');
    });
    
    //Index Export File
    fs.writeFile(path + '/index.js',  'export { default as '+component_name+' } from \'./'+ component_name +'\'', function (err) {
      if (err) throw err;
      console.log('Index Export File Created!');
    });
    
    //Add the export the main index file
    fs.appendFile('components/index.js', '\nexport { '+component_name+' } from \'./'+ component_name +'\'', function (err) {
      if (err) throw err;
      console.log('Export added to the main index file!');
    });
});

makeDir('stories/examples/'+ component_name +'').then(path => {
    console.log(path);
    
    //Example Component File
    fs.writeFile(path + '/' + component_name+'.js', default_example, function (err) {
      if (err) throw err;
      console.log('Component Created!');
    });
    
    //Index Export File
    fs.writeFile(path + '/index.js',  'export { default as '+component_name+' } from \'./'+ component_name +'\'', function (err) {
      if (err) throw err;
      console.log('Component Created!');
    });
    
    //Add the export the main index file
    fs.appendFile('stories/examples/index.js', '\nexport { '+component_name+' } from \'./'+ component_name +'\'', function (err) {
      if (err) throw err;
      console.log('Export added to the example index file!');
    });
});
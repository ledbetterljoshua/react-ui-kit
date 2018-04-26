import { configure } from '@storybook/react';
import {setOptions} from '@storybook/addon-options';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

setOptions({
  name: 'Grid UI',
  url: 'https://github.com/ledbetterljoshua/react-ui-kit',
  sidebarAnimations: true
});
// @flow
import { Colors } from './Colors.js'

export function Typography(size) {
  switch (size) {
    case 'tiny':
      return `
        ${ base() };
        font-size: 10px;
        font-weight: 500;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      `
    case 'small':
      return `
        ${ base() };
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      `
    case 'medium':
      return `
        ${ base() };
        font-size: 16px;
        font-weight: 500;
      `
    case 'large':
      return `
        ${ base() };
        font-size: 18px;
        font-weight: 500;
      `
    case 'extra-large':
      return `
        ${ base() };
        font-size: 24px;
        font-weight: 500;
      `
    case 'default':
    default:
      return `
        ${ base() };
        font-size: 14px;
        font-weight: 400;
        line-height: 1.618;
      `
  }
}

const base = () => `
  color: ${ `${ Colors.primary }` };
  font-family: 'Helvetica Neue Light', 'HelveticaNeue-Light', 'Helvetica Neue', Helvetica, Arial, Sans-Serif;
  font-style: normal;
`
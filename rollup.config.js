import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import alias from 'rollup-plugin-alias'
import resolve from 'rollup-plugin-node-resolve'
import sass from 'rollup-plugin-sass'
import pkg from './package.json'
//https://github.com/rollup/rollup/wiki/pkg.module
const path = require('path')

export default {
  external: ['react', 'styled-components'],
  input: 'src/components/index.js',
    output: [
    {
        file: pkg.main,
        format: 'cjs'
    },
    {
        file: pkg.module,
        format: 'es'
    }
  ],
  plugins: [
    sass(),
    external(),
    alias({
      'grid-ui': path.resolve(__dirname, './src/components/index.js'),
      'enzyme_wrapped': path.resolve(__dirname, './src/wrappedLibs/enzyme.js'),
      'storybook-custom-plugins': path.resolve(__dirname, './storybook-custom-plugins'),
      'congif': path.resolve(__dirname, './config'),
    }),
    postcss({
        modules: true
    }),
    babel({
        exclude: 'node_modules/**',
        plugins: ['external-helpers']
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs()
  ]
}
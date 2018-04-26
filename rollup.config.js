import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import alias from 'rollup-plugin-alias'
import resolve from 'rollup-plugin-node-resolve'
import sass from 'rollup-plugin-sass'
import pkg from './package.json'
//https://github.com/rollup/rollup/wiki/pkg.module

export default {
  external: ['react', 'styled-components'],
  input: 'components/index.js',
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
      'grid-ui': './src/components'
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
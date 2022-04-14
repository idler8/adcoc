import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
export default [
  {
    input: 'src/build/tree.iife.js',
    output: {
      file: 'source/tree.iife.js',
      format: 'iife'
    },
    plugins: [ json(), terser(), babel({ babelHelpers: 'bundled' }) ]
  },
  // {
  //   input: 'src/index.js',
  //   output: {
  //     file: 'source/tree.cjs.js',
  //     format: 'cjs'
  //   },
  //   plugins: [ json(), terser(), babel({ babelHelpers: 'bundled' }) ]
  // },
];
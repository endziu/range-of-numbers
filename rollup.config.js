// rollup.config.js
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import minify from 'rollup-plugin-babel-minify'

export default {
  input: 'index.js',
  output: {
    file: 'dist.js',
    format: 'cjs'
  },
  legacy: false,
  treeshake: true,
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    minify({
      comments: false
    })
  ]
}

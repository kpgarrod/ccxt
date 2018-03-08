import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import builtins from 'rollup-plugin-node-builtins';
export default {
  input: 'ccxt.js',
  output: {
    name: "ccxt",
    file: 'ccxt.module.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
      preferBuiltins: true
    }),

    commonjs({

      // if false then skip sourceMap generation for CommonJS modules
      sourceMap: false
      /*,  // Default: true
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**',  // Default: undefined
      exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],  // Default: undefined
      // these values can also be regular expressions
      // include: /node_modules/

      // search for files other than .js files (must already
      // be transpiled by a previous plugin!)
      extensions: [ '.js', '.coffee' ],  // Default: [ '.js' ]

      // if true then uses of `global` won't be dealt with by this plugin
      ignoreGlobal: false,  // Default: false


      // explicitly specify unresolvable named exports
      // (see below for more details)
      namedExports: { './module.js': ['foo', 'bar' ] } /*,  // Default: undefined

      // sometimes you have to leave require statements
      // unconverted. Pass an array containing the IDs
      // or a `id => boolean` function. Only use this
      // option if you know what you're doing!
      ignore: [ 'conditional-runtime-dependency' ]
      */
    }),
    json({
        // All JSON files will be parsed by default,
        // but you can also specifically include/exclude files
        //include: 'node_modules/**',
        //exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],
        
        // for tree-shaking, properties will be declared as
        // variables, using either `var` or `const`
        preferConst: true, // Default: false
  
        // specify indentation for the generated default export —
        // defaults to '\t'
        //indent: '  '
      }),
      builtins()
  ]
};
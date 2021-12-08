import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import url from '@rollup/plugin-url'
import analyze from 'rollup-plugin-analyzer'
import json from 'rollup-plugin-json'
import sourceMaps from 'rollup-plugin-sourcemaps'

const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      exports: 'named',
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      exports: 'named',
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    },
    {
      name: 'ReactLibraryStarter',
      file: packageJson.unpkg,
      format: 'umd',
      globals: {
        react: 'React'
      }
    }
  ],
  watch: {
    include: 'src/**/*'
  },
  plugins: [
    json(),
    peerDepsExternal(),
    url(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      rollupCommonJSResolveHack: false,
      clean: true
    }),
    analyze(),
    sourceMaps()
  ],
  external: ['react']
}

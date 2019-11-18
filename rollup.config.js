import { readdirSync } from 'fs';
import { join } from 'path';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const componentsDir = './src/components';
const components = readdirSync(componentsDir, { withFileTypes: true })
  .filter(dir => dir.isDirectory())
  .map(dir => join(componentsDir, dir.name, `${dir.name}.tsx`));

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled',
};

export default {
  input: ['src/index.tsx'],
  external: Object.keys(pkg.peerDependencies || {}),
  output: [
    { dir: 'dist', entryFileNames: '[name].js', format: 'cjs', globals },
    { dir: 'dist', entryFileNames: '[name].module.js', format: 'esm', globals },
  ],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    typescript(),
    babel({
      extensions,
      include: ['src/**/*'],
    }),
  ],
};

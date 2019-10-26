import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json'


const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

const globals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled',
}

export default {
	input: 'src/index.tsx',
	external: Object.keys(pkg.peerDependencies || {}),
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
		resolve({extensions}),
		commonjs(),
    typescript(),
    babel({
      extensions, include: ['src/**/*']
    }),
  ],
};
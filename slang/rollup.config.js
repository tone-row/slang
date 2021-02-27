import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      postcss({
        extract: true,
        autoModules: true,
        use: ["sass"],
      }),
      resolve(),
      commonjs(),
      typescript(),
    ],
  },
  {
    input: "./src/generateTheme.ts",
    output: [
      {
        banner: "#!/usr/bin/env node",
        file: packageJson.bin.generateTheme,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [resolve(), typescript()],
  },
];

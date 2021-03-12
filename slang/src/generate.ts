import fs from "fs";
import path from "path";
import { RegisterOptions } from "ts-node";
import { mergeDefault, SlangConfig } from "./config";
import { makeCSS } from "./makeCSS";

const tsNodeRegisterOptions: RegisterOptions = {
  transpileOnly: true,
  compilerOptions: {
    module: "commonjs",
    target: "es6",
  },
};

require("ts-node").register(tsNodeRegisterOptions);

// Reads CSS from module
const globalCss = fs.readFileSync(path.join(__dirname, "index.css"), "utf-8");

const targetFolder = process.argv.slice(2)[0];
if (!targetFolder) throw new Error("You must provide the path to your config");

// Will this work for .js files too??
const configPath = path.resolve(process.cwd(), targetFolder, "config.ts");

function generateTheme() {
  // required to get new versions when watching
  delete require.cache[require.resolve(configPath)];
  const { default: config } = require(configPath);

  // CSS
  const css = [globalCss, makeCSS(config)].join("\n");
  let filepath = path.resolve(process.cwd(), targetFolder, "slang.css");
  fs.writeFileSync(filepath, css, "utf-8");

  // Components
  const box = getComponentCode(config);
  filepath = path.resolve(process.cwd(), targetFolder, "index.tsx");
  fs.writeFileSync(filepath, box, "utf-8");
  console.log("Generated Theme 🦄");
}

const watch = process.argv.slice(2)[1];

if (watch === "-w") {
  generateTheme();
  console.log("Watching config for changes 👀");
  fs.watch(configPath, { encoding: "utf-8" }, () => {
    try {
      generateTheme();
    } catch (e) {
      console.error(e);
    }
  });
} else {
  generateTheme();
}

function getComponentCode(userConfig: Partial<SlangConfig>) {
  const config = mergeDefault(userConfig);
  return `import {
  BoxComponent,
  TypeComponent,
  forwardRefWithAs,
  PropsWithAs,
  BaseBoxProps,
  BaseTypeProps,
} from "@tone-row/slang";

type Breakpoints = ${Object.keys(config.breakpoints)
    .map((b) => `"${b}"`)
    .join(" | ")};
type Colors = 
  | ${[
    ...Object.keys(config.colors).map((c) => `color-${c}`),
    ...Object.keys(config.palette).reduce<string[]>(
      (a, c) => a.concat(config.palette[c].map((_, i) => `palette-${c}-${i}`)),
      [],
    ),
  ]
    .map((c) => `"${c}"`)
    .join("\n  | ")};
export type BoxProps = PropsWithAs<BaseBoxProps<Breakpoints, Colors>>;
export type TypeProps = PropsWithAs<BaseTypeProps<Breakpoints, Colors>>;
const Box = forwardRefWithAs<BoxProps, "div">(BoxComponent);
const Type = forwardRefWithAs<TypeProps, "div">(TypeComponent);
export { Box, Type };
`;
}

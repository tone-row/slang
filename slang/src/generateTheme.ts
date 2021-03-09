import fs from "fs";
import path from "path";
import { getThemeCss, mergeDefault, SlangConfig } from "./config";

const globalCss = fs.readFileSync(path.join(__dirname, "index.css"), "utf-8");

const pathToConfig = process.argv.slice(2)[0];
if (!pathToConfig)
  throw new Error(
    "You must provide the path the your config file as the first argument",
  );
const targetFolder = process.argv.slice(2)[1];
if (!targetFolder)
  throw new Error("You must provide your target folder as the second argument");

const configPath = path.resolve(process.cwd(), pathToConfig);

function generateTheme() {
  // required to get new versions when watching
  delete require.cache[require.resolve(configPath)];
  const config = require(configPath);

  // CSS
  const css = [globalCss, getThemeCss(config)].join("\n");
  let filepath = path.resolve(process.cwd(), targetFolder, "slang.css");
  fs.writeFileSync(filepath, css, "utf-8");

  // Components
  const box = getComponentCode(config);
  filepath = path.resolve(process.cwd(), targetFolder, "index.tsx");
  fs.writeFileSync(filepath, box, "utf-8");
  console.log("Generated Theme 🦄");
}

const watch = process.argv.slice(2)[2];

if (watch === "-w") {
  generateTheme();
  console.log("Watching config for changes 👀");
  fs.watchFile(configPath, { interval: 1000 }, () => {
    generateTheme();
  });
} else {
  generateTheme();
}

function getComponentCode(userConfig: Partial<SlangConfig>) {
  const config = mergeDefault(userConfig);
  return `import { BoxComponent, BoxProps, TypeComponent, TypeProps, forwardRefWithAs } from '@tone-row/slang';

type Breakpoints = ${Object.keys(config.breakpoints)
    .map((b) => `"${b}"`)
    .join(" | ")};
const Box = forwardRefWithAs<BoxProps<Breakpoints>, "div">(BoxComponent);
const Type = forwardRefWithAs<TypeProps, "div">(TypeComponent);
export { Box, Type };  
`;
}
import fs from "fs";
import path from "path";
import { getThemeCss } from "./config";

const pathToConfig = process.argv.slice(2)[0];
if (!pathToConfig)
  throw new Error(
    "You must provide the path the your config file as the first argument",
  );
const pathToCss = process.argv.slice(2)[1];
if (!pathToCss)
  throw new Error(
    "You must provide the path the your output .css file as the second argument",
  );

const config = require(path.resolve(process.cwd(), pathToConfig));
const css = getThemeCss(config);
const filepath = path.resolve(process.cwd(), pathToCss);
fs.writeFileSync(filepath, css, "utf-8");
console.log("Success 🦄");

import "./global.css";
export { default as BoxComponent, BoxProps, ResponsiveBoxProps } from "./Box";
export { default as TypeComponent, TypeProps } from "./Type";

// This will come in handy from quite-fast-design.systems
// export { default as Global } from "./Global";

export {
  SlangConfig,
  getPaletteColorName,
  defaultConfig,
  getThemeCss,
  mergeDefault,
} from "./config";
export { forwardRefWithAs } from "./utils";

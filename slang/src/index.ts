import "modern-normalize";
import "./index.css";
export { default as BoxComponent, BaseBoxProps } from "./Box/Box";
export { default as TypeComponent, BaseTypeProps } from "./Type/Type";
export { SlangConfig, defaultConfig, mergeDefault } from "./config";
export { makeCSS as getThemeCss, getPaletteColorName } from "./makeCSS";
export { forwardRefWithAs, PropsWithAs } from "./utils";

// This will come in handy from quite-fast-design.systems
// export { default as Global } from "./Global";

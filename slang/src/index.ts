import "modern-normalize";
import "./index.css";

// Global Configuration
export { SlangConfig, defaultConfig, mergeDefault } from "./config";

// CSS Generation Logic
export { makeCSS as getThemeCss, getPaletteColorName } from "./makeCSS";

// Components
export { default as BoxComponent, BaseBoxProps } from "./Box/Box";
export { default as TypeComponent, BaseTypeProps } from "./Type/Type";

// Component Utilities
export { forwardRefWithAs, PropsWithAs } from "./utils";

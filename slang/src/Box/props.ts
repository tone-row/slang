import { ComponentConfig } from "../utils";

export interface ResponsiveProps<
  Colors extends string = "foreground" | "background"
> {
  /**
   * Padding
   */
  p?: number;
  /**
   * Padding top & bottom
   */
  py?: number;
  /**
   * Padding left & right
   */
  px?: number;
  /**
   * Padding Top
   */
  pt?: number;
  /**
   * Padding Right
   */
  pr?: number;
  /**
   * Padding Bottom
   */
  pb?: number;
  /**
   * Padding Left
   */
  pl?: number;

  // Grid
  template?: string;
  content?: string;
  items?: string;
  self?: string;
  area?: string;
  gap?: number;
  columnGap?: number;
  rowGap?: number;
  flow?: "column" | "row";

  display?: boolean | string;
  /**
   * Contain the box using margin left/right = auto.
   *
   * Passing a number multiplies by the spacer Passing a string uses that value directly.
   */
  contain?: number | string;
  overflow?: string;

  // Size
  h?: boolean | string;

  /**
   * Ensures the app is 100% of the screen height
   * Best applied to root element
   */
  root?: boolean;

  // Shape
  /**
   * Border Radius
   */
  rad?: number;

  // Colors
  background?: Colors;
  color?: Colors;
}

// Must include all Keys!!
export const propKeys = [
  "p",
  "py",
  "px",
  "pt",
  "pr",
  "pb",
  "pl",
  "template",
  "content",
  "items",
  "self",
  "gap",
  "flow",
  "display",
  "contain",
  "overflow",
  "h",
  "root",
  "rad",
  "background",
  "color",
  "columnGap",
  "rowGap",
];

export const boxConfig: ComponentConfig<ResponsiveProps>[] = [
  {
    key: "flow",
    defaultValue: "rows",
    cssFromVariable: (v) => `grid-auto-flow: ${v};`,
  },
  {
    key: "content",
    cssFromVariable: (v) => `place-content: ${v};`,
  },
  { key: "items", cssFromVariable: (v) => `place-items: ${v};` },
  { key: "self", cssFromVariable: (v) => `place-self: ${v};` },
  {
    key: "p",
    defaultValue: "0",
    cssFromVariable: (v) => `padding: calc(var(--spacer-px) * ${v});`,
  },
  {
    key: "py",
    defaultValue: "0",
    cssFromVariable: (v) =>
      `padding-top: calc(var(--spacer-px) * ${v}); padding-bottom: calc(var(--spacer-px) * ${v});`,
  },
  {
    key: "px",
    defaultValue: "0",
    cssFromVariable: (v) =>
      `padding-left: calc(var(--spacer-px) * ${v}); padding-right: calc(var(--spacer-px) * ${v});`,
  },
  {
    key: "pt",
    defaultValue: "0",
    cssFromVariable: (v) => `padding-top: calc(var(--spacer-px) * ${v});`,
  },
  {
    key: "pr",
    defaultValue: "0",
    cssFromVariable: (v) => `padding-right: calc(var(--spacer-px) * ${v});`,
  },
  {
    key: "pb",
    defaultValue: "0",
    cssFromVariable: (v) => `padding-bottom: calc(var(--spacer-px) * ${v});`,
  },
  {
    key: "pl",
    defaultValue: "0",
    cssFromVariable: (v) => `padding-left: calc(var(--spacer-px) * ${v});`,
  },
  {
    key: "gap",
    defaultValue: "0",
    cssFromVariable: (v) => `gap: calc(var(--spacer-px) * ${v});`,
  },
  {
    key: "columnGap",
    defaultValue: "0",
    cssFromVariable: (v) => `column-gap: calc(var(--spacer-px) * ${v});`,
  },
  {
    key: "rowGap",
    defaultValue: "0",
    cssFromVariable: (v) => `row-gap: calc(var(--spacer-px) * ${v});`,
  },
  {
    key: "template",
    defaultValue: "none / none",
    cssFromVariable: (v) => `grid-template: ${v};`,
  },
  {
    key: "display",
    defaultValue: "grid",
    cssFromVariable: (v) => `display: ${v};`,
    propValueToCssValue: (n) => {
      if (typeof n === "boolean") {
        return n ? "grid" : "none";
      }
      return n;
    },
  },
  {
    key: "overflow",
    defaultValue: "visible",
    cssFromVariable: (v) => `overflow: ${v};`,
  },
  {
    key: "h",
    defaultValue: "100%",
    cssFromVariable: (v) => `height: ${v};`,
    propValueToCssValue: (height) => {
      if (typeof height === "undefined") return height;
      if (typeof height === "boolean") {
        return height ? "100%" : "auto";
      }
      return height ?? "auto";
    },
  },
  {
    key: "root",
    defaultValue: "100%",
    cssFromVariable: (v) => `min-height: ${v};`,
    propValueToCssValue: (min) => {
      if (typeof min === "undefined") return min;
      if (typeof min === "boolean") {
        return min ? "100%" : "none";
      }
      return min ?? "none";
    },
    iosSafariPatch: {
      cssFromVariable: (v) => `min-height: ${v};`,
      propValueToCssValue: (min) => {
        if (typeof min === "undefined") return min;
        if (typeof min === "boolean") {
          return min ? "-webkit-fill-available" : "none";
        }
        return min ?? "none";
      },
    },
  },
  {
    key: "background",
    defaultValue: "var(--color-background)",
    cssFromVariable: (v) => `background-color: ${v};`,
    propValueToCssValue: (s) => s && `var(--${s})`,
  },
  {
    key: "color",
    defaultValue: "var(--color)",
    cssFromVariable: (v) => `color: ${v};`,
    propValueToCssValue: (s) => s && `var(--${s})`,
  },
  {
    key: "contain",
    defaultValue: "var(--base-container-size-px)",
    cssFromVariable: (v) => `max-width: ${v};`,
    propValueToCssValue: (v) => {
      if (typeof v === "undefined") return v;
      if (typeof v === "number") return `calc(var(--spacer-px) * ${v})`;
      return v;
    },
  },
  {
    key: "rad",
    defaultValue: "0",
    cssFromVariable: (v) =>
      `border-radius: calc(var(--smallest-border-radius-px) * ${v});`,
  },
  {
    key: "area",
    cssFromVariable: (v) => `grid-area: ${v};`,
  },
];

import { ComponentConfig } from "../utils";

export interface ResponsiveProps {
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

  // Grid
  template?: string;
  content?: string;
  items?: string;
  self?: string;
  gap?: number;
  flow?: "column" | "row";

  display?: boolean | string;
  contain?: string;
  overflow?: string;
  h?: boolean | string;
  hmin?: boolean;
}

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
    key: "gap",
    defaultValue: "0",
    cssFromVariable: (v) => `gap: calc(var(--spacer-px) * ${v});`,
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
    propValueToCssValue: (n: string | boolean) => {
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
      if (typeof height === "boolean") {
        return height ? "100%" : "auto";
      }
      return height ?? "auto";
    },
  },
  {
    key: "hmin",
    defaultValue: "100%",
    cssFromVariable: (v) => `min-height: ${v};`,
    propValueToCssValue: (min) => {
      if (typeof min === "boolean") {
        return min ? "100%" : "none";
      }
      return min ?? "none";
    },
  },
];

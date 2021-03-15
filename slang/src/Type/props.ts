import { ComponentConfig } from "../utils";

export interface ResponsiveProps<
  Colors extends string = "foreground" | "background"
> {
  weight?: string;
  color?: Colors;
}

export const propKeys = ["weight", "color"];

export const typeConfig: ComponentConfig<ResponsiveProps>[] = [
  {
    key: "weight",
    defaultValue: "400",
    cssFromVariable: (v) => `font-weight: ${v};`,
  },
  {
    key: "color",
    defaultValue: "var(--color-foreground)",
    cssFromVariable: (v) => `color: ${v};`,
    propValueToCssValue: (p) => {
      if (typeof p === "undefined") return p;
      return `var(--${p})`;
    },
  },
];

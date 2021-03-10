// These props can be changed over all supplied breakpoints
export interface ResponsiveProps {
  display?: boolean | string;
  // padding, needs to be converted to a responsive prop
  // Padding
  p?: number;
  contain?: string; // some need a class to enable!
  template?: string;
  place?: string;
  gap?: number;
  flow?: "column" | "row";
  overflow?: string;
  h?: boolean | string | Array<boolean | string>;
  hmin?: boolean;
}

export type ResponsiveProp = {
  key: keyof ResponsiveProps; // css custom property name
  cssProp: string; // Actual css property applied to
  defaultValue?: string; // not sure exactly when this is used
  cssValue?: string; // If the css value is more complex

  // If there is custom logic in converting what the user pases into the component into the value of the css custom property
  customParse?: (x: any) => string;
};

export const boxResponsiveProps: ResponsiveProp[] = [
  { key: "flow", defaultValue: "rows", cssProp: "grid-auto-flow" },
  { key: "place", cssProp: "place-content" },
  {
    key: "p",
    cssProp: "padding",
    defaultValue: "0",
    cssValue: "calc(var(--p) * var(--space-h-px))",
  },
  {
    key: "gap",
    cssProp: "gap",
    defaultValue: "0",
    cssValue: "calc(var(--gap) * var(--space-v-px))",
  },
  {
    key: "template",
    cssProp: "grid-template",
    defaultValue: "none / none",
  },
  {
    key: "display",
    cssProp: "display",
    defaultValue: "grid",
    customParse: (n: string | boolean) => {
      if (typeof n === "boolean") {
        return n ? "grid" : "none";
      }
      return n;
    },
  },
  {
    key: "overflow",
    defaultValue: "visible",
    cssProp: "overflow",
  },
  {
    key: "h",
    defaultValue: "100%",
    cssProp: "height",
    customParse: (height: string | boolean) => {
      if (typeof height === "boolean") {
        return height ? "100%" : "auto";
      }
      return height;
    },
  },
  {
    key: "hmin",
    defaultValue: "100%",
    cssProp: "min-height",
    customParse: (min: string | boolean) => {
      if (typeof min === "boolean") {
        return min ? "100%" : "none";
      }
      return min;
    },
  },
];

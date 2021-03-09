import React, { CSSProperties, Ref } from "react";
import "./Box.css";
import { PropsWithAs } from "./utils";

// These props can be changed over all supplied breakpoints
interface ResponsiveProps {
  display?: boolean | string;
  // padding, needs to be converted to a responsive prop
  contain?: string; // some need a class to enable!
  template?: string;
  place?: string;
  gap?: number;
  flow?: "column" | "row";
  overflow?: string;
}

export type ResponsiveBoxProps<Breakpoint extends string> = {
  at?: Partial<Record<Breakpoint, ResponsiveProps>>;
} & ResponsiveProps;

export interface BoxProps<Breakpoint extends string = "tablet" | "desktop">
  extends ResponsiveBoxProps<Breakpoint> {
  // Padding
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;

  // Border Radius
  br?: number;
  btlr?: number;
  btrr?: number;
  bblr?: number;
  bbrr?: number;
}

export default function BoxComponent<Breakpoint extends string>(
  { as, ...props }: PropsWithAs<BoxProps<Breakpoint>, "div">,
  ref: Ref<HTMLDivElement>,
) {
  const Component = as || "div";
  const [cssProperties, dynamicClasses] = getCssProperties(props);

  // const style = {
  //   "--pt": props.pt ?? props.py ?? props.p ?? 0,
  //   "--pr": props.pr ?? props.px ?? props.p ?? 0,
  //   "--pb": props.pb ?? props.py ?? props.p ?? 0,
  //   "--pl": props.pl ?? props.px ?? props.p ?? 0,
  //   "--btlr": props.btlr ?? props.br ?? 0,
  //   "--btrr": props.btrr ?? props.br ?? 0,
  //   "--bblr": props.bblr ?? props.br ?? 0,
  //   "--bbrr": props.bbrr ?? props.br ?? 0,
  // } as CSSProperties;

  return (
    <Component
      {...props}
      ref={ref}
      className={[props.className, "slang-box", ...dynamicClasses]
        .join(" ")
        .trim()}
      style={{ ...props.style, ...cssProperties }}
    />
  );
}

function getCssProperties(
  node: PropsWithAs<BoxProps, "div">,
): [CSSProperties, string[]] {
  const [flowProps, flowClasses] = getIndividualChildCssProp({
    key: "flow",
    defaultValue: "rows",
    node,
  });

  const [placeProps, placeClasses] = getIndividualChildCssProp({
    key: "place",
    node,
  });

  const classes = Array.from(new Set([...flowClasses, ...placeClasses]));
  return [{ ...flowProps, ...placeProps }, classes];
  // return {
  //   // ...getIndividualChildCssProp({ key: "padding", node }),
  //   ...getIndividualChildCssProp({ key: "contain", node }),
  //   ...getIndividualChildCssProp({
  //     key: "template",
  //     node,
  //     defaultValue: "none / none",
  //   }),
  //   ...getIndividualChildCssProp({
  //     key: "place",
  //     node,
  //     defaultValue: "var(--place-default)",
  //   }),
  //   ...getIndividualChildCssProp({ key: "gap", node }),
  //   ...getIndividualChildCssProp({
  //     key: "overflow",
  //     node,
  //     defaultValue: "visible",
  //   }),
  //   ...getIndividualChildCssProp({ key: "flow", node, defaultValue: "rows" }),
  //   ...getIndividualChildCssProp({
  //     key: "display",
  //     node,
  //     defaultValue: "grid",
  //     customParse: (n: any) => {
  //       if (typeof n === "boolean") {
  //         return n ? "grid" : "none";
  //       }
  //       return n;
  //     },
  //   }),
  // };
}

function getIndividualChildCssProp({
  key,
  node,
  defaultValue = "0",
  customParse = (x) => x,
}: {
  key: keyof ResponsiveProps;
  node: PropsWithAs<BoxProps, "div">;
  defaultValue?: string;
  customParse?: (x: any) => string;
}): [Record<string, string>, string[]] {
  const classes: string[] = [];
  const properties = {} as Record<string, string>;
  const v = customParse(node?.[key])?.toString();
  let last = v ?? defaultValue;
  if (v) {
    classes.push(key);
  }
  properties[`--${key}`] = last;

  // need all breakpoints
  // no longer should need all breakpoints, because
  // going to use compiled classes, to make the breakpoints
  // take effect
  // so we only need to know what is passed
  if (node.at) {
    for (const breakpoint of Object.keys(node.at)) {
      let v = last;
      const value = customParse(node.at[breakpoint]?.[key])?.toString();
      if (value) {
        classes.push(breakpoint);
        classes.push(`${key}-${breakpoint}`);
        v = value;
        last = value;
      }
      properties[`--${key}-${breakpoint}`] = v;
    }
  }
  return [properties, classes];
}

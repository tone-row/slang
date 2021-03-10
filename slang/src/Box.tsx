import React, { CSSProperties, Ref } from "react";
import "./Box.css";
import {
  boxResponsiveProps,
  ResponsiveProp,
  ResponsiveProps,
} from "./boxSettings";
import { PropsWithAs } from "./utils";

export type ResponsiveBoxProps<Breakpoint extends string> = {
  at?: Partial<Record<Breakpoint, ResponsiveProps>>;
} & ResponsiveProps;

export interface BoxProps<Breakpoint extends string = "tablet" | "desktop">
  extends ResponsiveBoxProps<Breakpoint> {
  // Rest of Padding
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

  // Stretch
  stretch?: boolean;
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
      className={[
        props.className,
        "slang-box",
        ...dynamicClasses,
        props.stretch ? "stretch" : "",
      ]
        .join(" ")
        .trim()}
      style={{ ...cssProperties, ...props.style }}
    />
  );
}

function getCssProperties(
  node: PropsWithAs<BoxProps, "div">,
): [CSSProperties, string[]] {
  const [props, classes] = boxResponsiveProps.reduce<
    [Record<string, string>, string[]]
  >(
    (acc, prop) => {
      const [p, c] = getIndividualChildCssProp({ ...prop, node });
      acc[0] = { ...acc[0], ...p };
      acc[1] = acc[1].concat(c);
      return acc;
    },
    [{}, []],
  );

  return [props, Array.from(new Set(classes))];
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
}: ResponsiveProp & {
  node: PropsWithAs<BoxProps, "div">;
}): [Record<string, string>, string[]] {
  // Setup
  const classes: string[] = [];
  const properties = {} as Record<string, string>;
  let last = defaultValue;

  // Setup default
  const v = customParse(node?.[key])?.toString();
  if (v) {
    last = v;
    classes.push(key);
    properties[`--${key}`] = last;
  }

  // ~~need all breakpoints~~
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

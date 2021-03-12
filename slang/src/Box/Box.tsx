import React, { ReactNode, Ref } from "react";
import {
  ResponsifyComponentProps,
  PropsWithAs,
  produceComponentClassesPropsGetter,
} from "../utils";
import "./Box.css";
import { boxConfig, ResponsiveProps } from "./props";

export interface BoxProps<Breakpoint extends string = "tablet" | "desktop">
  extends ResponsifyComponentProps<ResponsiveProps, Breakpoint> {
  children?: ReactNode;

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

const getCssClasses = produceComponentClassesPropsGetter<
  PropsWithAs<BoxProps, "div">,
  ResponsiveProps
>(boxConfig);

export default function BoxComponent<Breakpoint extends string>(
  { as, ...props }: PropsWithAs<BoxProps<Breakpoint>, "div">,
  ref: Ref<HTMLDivElement>,
) {
  const Component = as || "div";
  const [css, classes] = getCssClasses<Breakpoint>(props);

  return (
    <Component
      {...props}
      ref={ref}
      className={[
        props.className,
        "slang-box",
        ...classes,
        props.stretch ? "stretch" : "",
      ]
        .filter(Boolean)
        .join(" ")
        .trim()}
      style={{ ...css, ...props.style }}
    />
  );
}

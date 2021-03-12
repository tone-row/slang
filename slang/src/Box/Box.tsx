import React, { Ref } from "react";
import {
  ResponsifyComponentProps,
  PropsWithAs,
  produceComponentClassesPropsGetter,
} from "../utils";
import "./Box.css";
import { boxConfig, ResponsiveProps } from "./props";

export interface BaseBoxProps<
  Breakpoint extends string = "tablet" | "desktop",
  Colors extends string = "foreground" | "background"
> extends ResponsifyComponentProps<ResponsiveProps<Colors>, Breakpoint> {
  // Stretch
  stretch?: boolean;
}

const getCssClasses = produceComponentClassesPropsGetter<
  BaseBoxProps,
  ResponsiveProps
>(boxConfig);

export default function BoxComponent<Breakpoint extends string>(
  { as, ...props }: PropsWithAs<BaseBoxProps<Breakpoint>>,
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

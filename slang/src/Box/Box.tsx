import React, { Ref } from "react";
import {
  ResponsifyComponentProps,
  PropsWithAs,
  produceComponentClassesPropsGetter,
  separateComponentProps,
} from "../utils";
import "./Box.css";
import { boxConfig, propKeys, ResponsiveProps } from "./props";

export type BaseBoxProps<
  Breakpoint extends string = "tablet" | "desktop",
  Colors extends string = "foreground" | "background"
> = ResponsifyComponentProps<ResponsiveProps<Colors>, Breakpoint>;

const componentKeys = [...propKeys, "at"];

const getCssClasses = produceComponentClassesPropsGetter<
  BaseBoxProps,
  ResponsiveProps
>(boxConfig);

export default function BoxComponent<Breakpoint extends string>(
  props: PropsWithAs<BaseBoxProps<Breakpoint>>,
  ref: Ref<HTMLDivElement>,
) {
  const { as, ...otherProps } = props;
  const Component = as || "div";

  const [componentProps, elementProps] = separateComponentProps(
    otherProps,
    componentKeys,
  );
  const [css, classes] = getCssClasses<Breakpoint>(componentProps);

  return (
    <Component
      {...elementProps}
      ref={ref}
      className={[props.className, "slang-box", ...classes]
        .filter(Boolean)
        .join(" ")
        .trim()}
      style={{ ...css, ...props.style }}
    />
  );
}

import React, { Ref } from "react";
import "./Type.scss";
import {
  Hoverify,
  produceComponentClassesPropsGetter,
  PropsWithAs,
  Responsify,
  separateComponentProps,
} from "../utils";
import { typeConfig, ResponsiveProps, propKeys } from "./props";

export interface BaseTypeProps<
  Breakpoint extends string = "tablet" | "desktop",
  Colors extends string = "foreground" | "background"
> extends Responsify<Hoverify<ResponsiveProps<Colors>>, Breakpoint> {
  size?: number;
}

const componentKeys = [...propKeys, "at", "size"];

const getCssClasses = produceComponentClassesPropsGetter<
  BaseTypeProps,
  ResponsiveProps
>(typeConfig);

export default function TypeComponent<Breakpoint extends string>(
  props: PropsWithAs<BaseTypeProps<Breakpoint>, "p">,
  ref: Ref<HTMLParagraphElement>,
) {
  const { as, ...otherProps } = props;
  const Component = as || "p";
  const [componentProps, elementProps] = separateComponentProps(
    otherProps,
    componentKeys,
  );
  const [css, classes] = getCssClasses<Breakpoint>(componentProps);

  return (
    <Component
      {...elementProps}
      ref={ref}
      className={[
        props.className,
        "slang-type",
        ...classes,
        typeof props.size === "number" ? `size-${props.size}` : "",
      ]
        .filter(Boolean)
        .join(" ")
        .trim()}
      style={{ ...css, ...props.style }}
    />
  );
}

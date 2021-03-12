import React, { ReactNode, Ref } from "react";
import "./Type.scss";
import {
  produceComponentClassesPropsGetter,
  PropsWithAs,
  ResponsifyComponentProps,
} from "../utils";
import { typeConfig, ResponsiveProps } from "./props";

export interface BaseTypeProps<
  Breakpoint extends string = "tablet" | "desktop",
  Colors extends string = "foreground" | "background"
> extends ResponsifyComponentProps<ResponsiveProps<Colors>, Breakpoint> {
  size?: number;
  children?: ReactNode;
}

const getCssClasses = produceComponentClassesPropsGetter<
  BaseTypeProps,
  ResponsiveProps
>(typeConfig);

export default function TypeComponent<Breakpoint extends string>(
  { as, ...props }: PropsWithAs<BaseTypeProps<Breakpoint>, "p">,
  ref: Ref<HTMLParagraphElement>,
) {
  const Component = as || "p";
  const [css, classes] = getCssClasses<Breakpoint>(props);

  return (
    <Component
      {...props}
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

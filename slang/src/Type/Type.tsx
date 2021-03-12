import React, { ReactNode, Ref } from "react";
import "./Type.scss";
import {
  produceComponentClassesPropsGetter,
  PropsWithAs,
  ResponsifyComponentProps,
} from "../utils";
import { typeConfig, ResponsiveProps } from "./props";

export interface TypeProps<Breakpoint extends string = "tablet" | "desktop">
  extends ResponsifyComponentProps<ResponsiveProps, Breakpoint> {
  size?: number;
  children?: ReactNode;
}

const getCssClasses = produceComponentClassesPropsGetter<
  PropsWithAs<TypeProps, "p">,
  ResponsiveProps
>(typeConfig);

export default function TypeComponent<Breakpoint extends string>(
  { as, ...props }: PropsWithAs<TypeProps<Breakpoint>, "p">,
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

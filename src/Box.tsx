import React, {
  ComponentPropsWithRef,
  ElementType,
  CSSProperties,
} from "react";
import styles from "./Box.module.scss";

export type BoxSpecificProps<C extends ElementType> = {
  as?: C;
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
};

export type BoxProps<C extends ElementType> = BoxSpecificProps<C> &
  Omit<ComponentPropsWithRef<C>, keyof BoxSpecificProps<C>>;

export default function Box<C extends ElementType>({
  as,
  ...props
}: BoxProps<C>) {
  const Component = as || "div";

  const style = {
    "--pt": props.pt ?? props.py ?? props.p ?? 0,
    "--pr": props.pr ?? props.px ?? props.p ?? 0,
    "--pb": props.pb ?? props.py ?? props.p ?? 0,
    "--pl": props.pl ?? props.px ?? props.p ?? 0,
  } as CSSProperties;

  return (
    <Component
      {...props}
      className={[props.className, styles.Box].join(" ")}
      style={{ ...props.style, ...style }}
    />
  );
}

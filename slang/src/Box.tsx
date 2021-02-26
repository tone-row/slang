import React, { CSSProperties, Ref } from "react";
import styles from "./Box.module.scss";
import { forwardRefWithAs, PropsWithAs } from "./utils";

export interface BoxProps {
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

function BoxComponent(
  { as, ...props }: PropsWithAs<BoxProps, "div">,
  ref: Ref<HTMLDivElement>,
) {
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
      ref={ref}
      className={[props.className, styles.Box].join(" ")}
      style={{ ...props.style, ...style }}
    />
  );
}

const Box = forwardRefWithAs<BoxProps, "div">(BoxComponent);
export default Box;

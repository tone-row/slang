import React, { Ref } from "react";
import Box, { BoxProps } from "./Box";
import styles from "./Type.module.scss";
import { forwardRefWithAs, PropsWithAs } from "./utils";

export interface TypeProps extends BoxProps {
  size?: number;
}

function TypeComponent(
  { size, className = "", as = "p", ...props }: PropsWithAs<TypeProps, "p">,
  ref: Ref<HTMLParagraphElement>,
) {
  return (
    <Box
      as={as}
      ref={ref}
      className={[
        className,
        styles.Type,
        typeof size === "number" ? `size-${size}` : "",
      ]
        .join(" ")
        .trim()}
      {...props}
    />
  );
}

const Type = forwardRefWithAs<TypeProps, "p">(TypeComponent);
export default Type;

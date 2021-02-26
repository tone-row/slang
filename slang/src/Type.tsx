import React, { Ref } from "react";
import styles from "./Type.module.scss";
import { forwardRefWithAs, PropsWithAs } from "./utils";

export interface TypeProps {
  size?: number;
}

function TypeComponent(
  { size, className = "", as, ...props }: PropsWithAs<TypeProps, "p">,
  ref: Ref<HTMLParagraphElement>,
) {
  const Component = as || "p";

  return (
    <Component
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

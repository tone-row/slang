import React, { ComponentPropsWithRef, ElementType } from "react";
import { BoxSpecificProps } from "./Box";
import styles from "./Type.module.scss";

export interface TypeSpecificProps {
  size?: number;
}

export type TypeProps<C extends ElementType> = TypeSpecificProps &
  BoxSpecificProps<C> &
  Omit<
    ComponentPropsWithRef<C>,
    keyof TypeSpecificProps & keyof BoxSpecificProps<C>
  >;

export default function Type<C extends ElementType>({
  size,
  className = "",
  as,
  ...props
}: TypeProps<C>) {
  const Component = as || "p";

  return (
    <Component
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

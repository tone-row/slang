import React, { CSSProperties, ElementType } from "react";
import styles from "./VerticalGrid.module.scss";
import Box, { BoxProps } from "./Box";

type VerticalGridProps<ElementProps extends ElementType> = {
  gap?: number;
} & BoxProps<ElementProps>;

export default function VerticalGrid<ElementProps extends ElementType>(
  props: VerticalGridProps<ElementProps>,
) {
  return (
    <Box
      {...props}
      style={
        {
          "--gap": props.gap ?? "var(--baseVerticalSpacingDivisor)",
        } as CSSProperties
      }
      className={[styles.VerticalGrid, props.className].join(" ")}
    />
  );
}

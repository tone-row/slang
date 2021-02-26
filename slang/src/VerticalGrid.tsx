import React, { CSSProperties, Ref } from "react";
import styles from "./VerticalGrid.module.scss";
import Box, { BoxProps } from "./Box";
import { forwardRefWithAs, PropsWithAs } from "./utils";

export interface VerticalGridProps extends BoxProps {
  gap?: number;
}

function VerticalGridComponent(
  props: PropsWithAs<VerticalGridProps, "div">,
  ref: Ref<HTMLDivElement>,
) {
  return (
    <Box
      ref={ref}
      {...props}
      style={
        {
          "--gap": props.gap ?? "var(--base-vertical-spacing-divisor)",
        } as CSSProperties
      }
      className={[styles.VerticalGrid, props.className].join(" ")}
    />
  );
}

const VerticalGrid = forwardRefWithAs<VerticalGridProps, "div">(
  VerticalGridComponent,
);
export default VerticalGrid;

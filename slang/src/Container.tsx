import React, { Ref } from "react";
import Box, { BoxProps } from "./Box";
import styles from "./Container.module.scss";
import { forwardRefWithAs, PropsWithAs } from "./utils";

export interface ContainerProps extends BoxProps {
  variant?: string;
}

function ContainerComponent(
  props: PropsWithAs<ContainerProps, "div">,
  ref: Ref<HTMLDivElement>,
) {
  return (
    <Box
      {...props}
      ref={ref}
      className={[props.className, styles.Container].join(" ")}
    />
  );
}

const Container = forwardRefWithAs<ContainerProps, "div">(ContainerComponent);
export default Container;

import React, { Ref } from "react";
import Box, { BoxProps } from "./Box";
import { forwardRefWithAs, PropsWithAs } from "./utils";
import styles from "./Layout.module.scss";

export type LayoutProps = BoxProps;

function LayoutComponent(
  props: PropsWithAs<LayoutProps, "div">,
  ref: Ref<HTMLDivElement>,
) {
  return (
    <Box
      {...props}
      ref={ref}
      className={[props.className, styles.Layout].join(" ")}
    />
  );
}

const Layout = forwardRefWithAs<LayoutProps, "div">(LayoutComponent);
export default Layout;

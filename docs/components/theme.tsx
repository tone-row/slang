import React from "react";
import { Box, Type } from "slang";
import styles from "./theme.module.scss";

export function Title({
  children,
  isComponent,
}: {
  children: string;
  isComponent: boolean;
}) {
  return (
    <Box>
      <Type as="h1" size={3}>
        {children}
      </Type>
      {isComponent && <Code>{`<${children}/>`}</Code>}
    </Box>
  );
}

export function Code({
  children,
  inline,
}: {
  children: string;
  inline?: boolean;
}) {
  return (
    <Box
      as="code"
      className={[styles.Code, inline ? styles.inline : ""].join(" ").trim()}
      p={1}
      br={1}
    >
      {children}
    </Box>
  );
}

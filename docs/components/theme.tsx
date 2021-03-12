import React from "react";
import { Box, BoxProps, Type, TypeProps } from "slang";
import styles from "./theme.module.scss";

const sharedCodeStyle: Partial<BoxProps> = {
  rad: 1,
  background: "palette-white-3",
};

export function Code(props: BoxProps) {
  return (
    <Box
      as="code"
      className={styles.Code}
      p={2}
      {...sharedCodeStyle}
      {...props}
    />
  );
}

export function InlineCode(props: BoxProps) {
  return (
    <Box
      as="code"
      className={[styles.Code, styles.inline].join(" ").trim()}
      px={2}
      py={1}
      {...sharedCodeStyle}
      {...props}
    />
  );
}

export function Section(props: BoxProps) {
  return <Box as="section" gap={3} content="start normal" {...props} />;
}

export function Page(props: BoxProps) {
  return <Box as="div" gap={10} content="start normal" {...props} />;
}

export function Title(props: TypeProps) {
  return <Type as="h1" size={3} weight="700" {...props} />;
}

export function Subtitle(props: TypeProps) {
  return <Type as="h2" size={1} weight="700" {...props} />;
}

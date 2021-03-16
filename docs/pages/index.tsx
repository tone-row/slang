import React from "react";
import { Box, Type } from "slang";
import Warning from "../components/warning.svg";
import styles from "./index.module.css";

export default function Index() {
  return (
    <Box root content="center" items="center">
      <Box gap={12}>
        <Warning className={styles.Warning} />
        <Box content="center" flow="column" gap={3}>
          <Type size={2} weight="700">
            Stay tuned!
          </Type>
          <Type size={2}> Slang is not quite ready.</Type>
        </Box>
      </Box>
    </Box>
  );
}

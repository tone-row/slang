import React from "react";
import { Type, Box } from "slang";

export default function BoxPage() {
  return (
    <Box>
      <Type as="h1" size={3}>
        Box
      </Type>
      <Type>This is the box page.</Type>
    </Box>
  );
}

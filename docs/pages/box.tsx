import React from "react";
import { Type, VerticalGrid } from "@tone-row/slang";

export default function BoxPage() {
  return (
    <VerticalGrid>
      <Type as="h1" size={3}>
        Box
      </Type>
      <Type>This is the box page.</Type>
    </VerticalGrid>
  );
}

import { Type, VerticalGrid } from "@tone-row/slang";

export default function TypePage() {
  return (
    <VerticalGrid>
      <Type as="h1" size={3}>
        Type
      </Type>
      <Type>This is the type page.</Type>
    </VerticalGrid>
  );
}

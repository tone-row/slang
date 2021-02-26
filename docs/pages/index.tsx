import { Type, VerticalGrid } from "@tone-row/slang";

export default function Home() {
  return (
    <VerticalGrid gap={4}>
      <VerticalGrid>
        <Type as="h1" size={3}>
          Slang
        </Type>
        <Type>
          Welcome! This the documentation for the open source UI component
          library called Slang.
        </Type>
        <Type>Stay tuned, there's more to come! 🍿</Type>
      </VerticalGrid>
      <VerticalGrid>
        <Type as="h2" size={2}>
          Getting Started
        </Type>
        <Type as="code">yarn add @tone-row/slang</Type>
      </VerticalGrid>
    </VerticalGrid>
  );
}

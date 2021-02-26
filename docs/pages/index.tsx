import { Type, Container, VerticalGrid } from "@tone-row/slang";

export default function Home() {
  return (
    <VerticalGrid gap={4}>
      <VerticalGrid gap={1}>
        <Type as="h1" size={3}>
          Slang
        </Type>
        <Type>
          Welcome to the documentation for the open source UI component library
          called Slang. Stay tuned, there's more to come!
        </Type>
      </VerticalGrid>
      <VerticalGrid gap={1}>
        <Type as="h2" size={2}>
          Getting Started
        </Type>
        <Type as="code">yarn add @tone-row/slang</Type>
      </VerticalGrid>
    </VerticalGrid>
  );
}

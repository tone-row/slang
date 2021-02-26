import { Type, Container, VerticalGrid } from "@tone-row/slang";

export default function Home() {
  return (
    <Container>
      <VerticalGrid>
        <Type as="h1" size={3}>
          Slang
        </Type>
        <Type>
          Welcome to the documentation for the open source UI component library
          called Slang. Stay tuned, there's more to come!
        </Type>
        <Type as="h2">Getting Started</Type>
        <Type as="code">yarn add slang</Type>
      </VerticalGrid>
    </Container>
  );
}

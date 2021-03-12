import {
  Code,
  InlineCode,
  Page,
  Section,
  Subtitle,
  Title,
} from "components/theme";
import React from "react";
import { Type } from "slang";

export default function GettingStarted() {
  return (
    <Page>
      <Section>
        <Title>Getting Started</Title>
      </Section>
      <Section>
        <Subtitle>Install</Subtitle>
        <Code>yarn add @tone-row/slang</Code>
      </Section>
      <Section>
        <Subtitle>Generate</Subtitle>
        <Type>
          Slang is different than some component libraries in that it generates
          code directly in your repository. There are two main reasons for this:
          avoiding run-time generation is faster for your users, and this way
          your components can be type-safe according to your configuration.
        </Type>
        <Type weight="700">
          Create a folder to store your config and components
        </Type>
        <Type>
          In Create React App we like{" "}
          <InlineCode>src/components/slang</InlineCode> and in Next.js we like{" "}
          <InlineCode>./slang</InlineCode>
        </Type>
      </Section>
      <Section>
        <Type>
          3. Now add a config file to that folder to store your configuration
          (replacing src/components/slang with the path to your folder)
        </Type>
        <Code>{`echo "{}" > src/components/slang/config.ts`}</Code>
      </Section>
      <Section>
        <Type>
          4. Now, add scripts to your <InlineCode>package.json</InlineCode> to
          generate your theme. (again, replacing
          src/components/slang/config.json with the path to your configuration)
        </Type>
        <Code>
          {`/* package.json */
    ...
    "theme": "generateTheme src/components/slang/config.json styles",
    "theme:watch": "generateTheme src/components/slang/config.json styles -w"`}
        </Code>
      </Section>
      <Section>
        <Type>
          5. (Optional) If you want to feel jazzy and you're working in
          typescript it can be cool to add the following to your{" "}
          <InlineCode>ts-config.json</InlineCode>
        </Type>
        <Code>{`"compilerOptions": {
  "paths": {
    "slang": ["./src/slang"]
  }
}`}</Code>
        <Type>
          The way you can predictable import components from "slang" instead of
          the relative path from wherever you're working.
        </Type>
      </Section>
    </Page>
  );
}

import { Code, InlineCode, Page, Section, Title } from "../components/theme";
import { Type, Box } from "slang";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <Page>
      <Section>
        <Title>Slang</Title>
        <Type size={1}>
          Welcome! This the documentation for the open source UI component
          library called Slang. It's not quite ready to use but it will be soon.
        </Type>
        <Type size={1}>Stay tuned, there's more to come! 🍿</Type>
      </Section>
      <Section>
        <Type as="h2" size={2}>
          Why?
        </Type>
        <Type>
          The idea driving Slang is that we can do a large part of what's needed
          to style our applications with a small number of abstractions. In
          fact, Slang offers only <u>two</u> exported components.
        </Type>
        <Type>In additon to that, Slang is:</Type>
      </Section>
      <Section>
        <Type as="h4" size={1}>
          ✅ &nbsp; CSS First
        </Type>
        <Type>
          The internet has a had a zero-runtime approach to styling since 1996.
        </Type>
        <Type>
          Whenever possible we use CSS over an equivalent from the javascript
          ecosystem. This includes bundling:{" "}
          <InlineCode>&lt;link rel="stylesheet href="..."&gt;</InlineCode> is
          already great at that. It also includes dynamic styles, for which
          psuedo-classes and css custom properties have our back.
        </Type>
      </Section>
      <Section>
        <Type as="h4" size={1}>
          ✅ &nbsp; Continuous By Design
        </Type>
        <Type>
          Although there are plenty of reasons we still need media queries,
          there is a lot to be gained by making our designs more fluid at the
          lowest levels. Slang has fluid type and fluid spacing units built in,
          as well as a continuous exponential type scale. The result is a lot
          better use of screen-space over a broader range of devices.
        </Type>
      </Section>
      <Box as="button" background="palette-black-0" p={3}>
        <Type color="palette-white-0">Cool Button!</Type>
      </Box>
    </Page>
  );
}

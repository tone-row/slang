import {
  InlineCode,
  Page,
  Section,
  Subtitle,
  Title,
} from "../components/theme";
import { Type } from "slang";
import React from "react";

export default function Home() {
  return (
    <Page>
      <Section>
        <Title>Slang</Title>
        <Type size={1}>Open-source UI framework for rapid development.</Type>
        <Type>
          Slang is a component library with a small set of swiss-army-knife-like
          components coupled with a CSS generation pipeline. Slang is mainly
          built with DX in mind.
        </Type>
        <Type>
          The idea driving Slang is that we can do a large part of what's needed
          to style our applications with a small number of abstractions. In
          fact, Slang offers only <u>two</u> exported components.
        </Type>
        <Type>In additon to that, Slang is:</Type>
      </Section>
      <Section>
        <Subtitle>✅ &nbsp; CSS First</Subtitle>
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
        <Subtitle>✅ &nbsp; Continuous By Design</Subtitle>
        <Type>
          Although there are plenty of reasons we still need media queries,
          there is a lot to be gained by making our designs more fluid at the
          lowest levels. Slang has fluid type and fluid spacing units built in,
          as well as a continuous exponential type scale. The result is a lot
          better use of screen-space over a broader range of devices.
        </Type>
      </Section>
    </Page>
  );
}

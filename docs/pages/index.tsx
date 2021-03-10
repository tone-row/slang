import { Code } from "../components/theme";
import { Type, Box } from "slang";

export default function Home() {
  return (
    <Box gap={8}>
      <Box>
        <Type as="h1" size={3}>
          Slang
        </Type>
        <Type>
          Welcome! This the documentation for the open source UI component
          library called Slang. It's not quite ready to use but it will be soon.
        </Type>
        <Type>Stay tuned, there's more to come! 🍿</Type>
      </Box>
      <Box>
        <Type as="h2" size={2}>
          Why?
        </Type>
        <Type>
          The idea driving Slang is that we can do a large part of what's needed
          to style our applications with a small number of abstractions. In
          fact, Slang offers only <u>two</u> exported components.
        </Type>
        <Type>In additon to that, Slang is:</Type>
        <Box as="ul" gap={6}>
          <Box as="li" gap={3}>
            <Type as="h4" size={1}>
              ✅ &nbsp; CSS First
            </Type>
            <Type>
              The internet has a had a zero-runtime approach to styling since
              1996.
            </Type>
            <Type>
              Whenever possible we use CSS over an equivalent from the
              javascript ecosystem. This includes bundling:{" "}
              <Code inline>&lt;link rel="stylesheet href="..."&gt;</Code> is
              already great at that. It also includes dynamic styles, for which
              psuedo-classes and css custom properties have our back.
            </Type>
          </Box>
          <Box as="li" gap={3}>
            <Type as="h4" size={1}>
              ✅ &nbsp; Continuous By Design
            </Type>
            <Type>
              Although there are plenty of reasons we still need media queries,
              there is a lot to be gained by making our designs more fluid at
              the lowest levels. Slang has fluid type and fluid spacing units
              built in, as well as a continuous exponential type scale. The
              result is a lot better use of screen-space over a broader range of
              devices.
            </Type>
          </Box>
        </Box>
      </Box>
      <Box>
        <Type as="h2" size={2}>
          Getting Started
        </Type>
        <Type>1. Install the package</Type>
        <Code>yarn add @tone-row/slang</Code>
        <Type>
          2. Create a folder to store your Slang styles and components in. In
          Create React App we like <Code inline>src/components/slang</Code> and
          in Next.js we like <Code inline>./slang</Code>
        </Type>
        <Type>
          3. Now add a config file to that folder to store your configuration
          (replacing src/components/slang with the path to your folder)
        </Type>
        <Code>{`echo "{}" > src/components/slang/config.json`}</Code>
        <Type>
          4. Now, add scripts to your <Code inline>package.json</Code> to
          generate your theme. (again, replacing
          src/components/slang/config.json with the path to your configuration)
        </Type>
        <Code>
          {`/* package.json */
          ...
          "theme": "generateTheme src/components/slang/config.json styles",
          "theme:watch": "generateTheme src/components/slang/config.json styles -w"`}
        </Code>
        <Type>
          5. (Optional) If you want to feel jazzy and you're working in
          typescript it can be cool to add the following to your{" "}
          <Code inline>ts-config.json</Code>
        </Type>
        <Code>{`"compilerOptions": {
  ...
  "paths": {
    "slang": ["./src/slang"]
  }
}`}</Code>
        <Type>
          The way you can predictable import components from "slang" instead of
          the relative path from wherever you're working.
        </Type>
      </Box>
    </Box>
  );
}

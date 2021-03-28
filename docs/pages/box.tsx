import {
  Code,
  InlineCode,
  Page,
  Section,
  Subtitle,
  Title,
} from "components/theme";
import React from "react";
import { Type, Box } from "slang";

export default function BoxPage() {
  return (
    <Page>
      <Section>
        <Title>Box</Title>
        <Type>
          The box is the swiss-army-knife of layout in Slang. Because it does so
          much, I thought instead of organizing this page around what the box
          does, why not organize this page around what you (
          <em>the person using Slang</em>) will inevitably want to do with it.
          Let's get it after it!
        </Type>
      </Section>
      <Section>
        <Subtitle>The Right Height</Subtitle>
        <Type>
          It can be difficult to get your app to be the right height. As best we
          can tell, it's beneficial for every site to be <em>at least</em> the
          height of the viewport. To accomplish this with Slang, make sure your
          root component (the highest one in your React tree) is a Box.
        </Type>
        <Type>Then pass the box one of two attribuets:</Type>
        <Type size={1}>
          <strong>h</strong> (height)
        </Type>
        <Type>
          Gives the box the property <InlineCode>height: 100%</InlineCode>
        </Type>
        <Type size={1}>
          <strong>mh</strong> (min-height)
        </Type>
        <Type>
          Gives the box the property <InlineCode>min-height: 100%</InlineCode>
        </Type>
        <Type>
          To know which to use on your root Box, you can ask yourself, at any
          point will you want the window to scroll (<strong>mh</strong>) or will
          your scrolling always take place in some smaller part of the window (
          <strong>h</strong>)
        </Type>
        <Type>
          To make a broad generalization, use <strong>mh</strong> for long-form
          content (blogs), and <strong>h</strong> for SPA's.
        </Type>
      </Section>
      <Box as="button">Test</Box>
    </Page>
  );
}

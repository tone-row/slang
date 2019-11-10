const basic = {
  title: 'Basic',
  code: `<>
<List>
  <>1</>
  <>2</>
  <>3</>
</List>
<List>
  {['A', 'B', 'C']}
</List>
</>`,
  description: `A vertical collection.`
};

const gap = {
  title: 'Gap & Each',
  code: `<List gap="1rem" each={{p: "1rem", style: {background: "palegreen"}}}>
  <>1</>
  <>2</>
  <>3</>
</List>
`,
  description: `We have access to the **gap** and **each** props, just like in the \`<Group>\``
};

const spreadOut = {
  title: 'How to Spread Out',
  code: `<List each={{p: "1rem", style: {background: "palegreen"}}} tall between>
  <>1</>
  <>2</>
  <>3</>
</List>
`,
  description: `The same properties for adding space between children based on the overall amount of available space (**between**, **around**, and **evenly**) exist on the \`<List>\` too. However, there is a catch. \`<Box>\`'s don't naturally expand to the full height of their container, so there is no "extra" space for a \`<List>\` to distribute between it's children. To fix this, we need to explictly tell the \`<List>\` to take up the full height of it's parent by passing the shorthand **tall**.`
};

const threeSpreads = {
  title: 'All Three',
  code: `<Group tall>
  <List each={{p: "1rem", style: {background: "palegreen"}}} tall between>
    <>1</>
    <>2</>
    <>3</>
  </List>
  <List each={{p: "1rem", style: {background: "palegreen"}}} tall around>
    <>1</>
    <>2</>
    <>3</>
  </List>
  <List each={{p: "1rem", style: {background: "palegreen"}}} tall evenly>
    <>1</>
    <>2</>
    <>3</>
  </List>
</Group>
`,
  description: `Here's all three spread techniques side by side (using a \`<Group>\`).

You may notice there is a **tall** prop applied to the group as well. If you try taking it off you'll notice that the spreading no longer works. This is because an element can only be as tall as it's container. So if we a list to spread, we need to ensure that not only is it **tall**, but that all of it's parent elements (up to the element with the intended height) are also **tall**.`
};

export default [basic, gap, spreadOut, threeSpreads];

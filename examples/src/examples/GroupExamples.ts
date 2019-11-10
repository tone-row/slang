const basic = {
  title: 'Basic',
  code: `<>
  <Group>
    <>1</>
    <>2</>
    <>3</>
  </Group>
  <Group>
    <>A</>
    <>B</>
    <>C takes more room, because it has more content</>
  </Group>
  <Group>{['A', 'Raw', 'Array', 'Works', 'To']}</Group>
</>
`,
  description: `In this example we are using fragments, so each child will be wrapped with a \`<Box>\`. 

  When no props are passed, \`<Group>\` children will... 
- take the minimum space they need
- share space based on their content
- expand to be the same height

If that sounds a lot like items in a [Flexbox](https://developer.mozilla.org/en/docs/Web/CSS/flex) to you, well we don't know what to tell you... 😏`
};

const gap = {
  title: 'Gap',
  code: `<Group gap="2rem">
  <>1</>
  <>2</>
  <>3</>
</Group>`,
  description: `The **gap** prop is for adding a gap between items.`
};

const each = {
  title: 'Each',
  code: `<Group each={{p: "1rem", style: {background: 'palegreen'}}}>
  <>1</>
  <>2</>
  <>3</>
</Group>`,
  description: `The **each** prop accepts an object, which is passed to _each_ child.
  
  In this example we're using _React.fragments_, so we know they'll be wrapped with a \`<Box>\`, so we can pass them box props like **p** or **m**.`
};

const fullWidth = {
  title: 'Spread Out',
  code: `<>
  <Group between>
    <>1</>
    <>2</>
    <>3</>
  </Group>
  <Group around>
    <>1</>
    <>2</>
    <>3</>
  </Group>
  <Group evenly>
    <>1</>
    <>2</>
    <>3</>
  </Group>
  <Group between gap="1rem">
    <>1</>
    <>2</>
    <>3</>
  </Group>
</>`,
  description: `By default items take the minimum space they need and the **gap** determines the space between. If you would rather determine the space between items using all the available horizontal space, try passing one of the props to add space **between** each item, **around** each item, or **evenly**. 
  
  Note: you can still use the **gap** prop to ensure a minimum amount of space between items.`
};

const verticalPlacement = {
  title: 'Vertical Alignment',
  code: `<>
  <Group each={{style: {background: 'palegreen'}}} between>
    <>1</>
    <>
      <span style={{fontSize: '3rem'}}>2</span>
    </>
    <>3</>
  </Group>
  <Group each={{style: {background: 'palegreen'}}} between start>
    <>1</>
    <>
      <span style={{fontSize: '3rem'}}>2</span>
    </>
    <>3</>
  </Group>
  <Group each={{style: {background: 'palegreen'}}} between center>
    <>1</>
    <>
      <span style={{fontSize: '3rem'}}>2</span>
    </>
    <>3</>
  </Group>
  <Group each={{style: {background: 'palegreen'}}} between end>
    <>1</>
    <>
      <span style={{fontSize: '3rem'}}>2</span>
    </>
    <>3</>
  </Group>
</>`,
  description: `By default items take the height of the tallest item. But we can use vertical alignment props **start**, **center**, and **end** to change that behavior.`
};

export default [basic, each, gap, fullWidth, verticalPlacement];

import React from 'react';
import { Example } from '../components/Section';
import { Group } from '@tone-row/slang';

const basic: Example = {
  title: 'Basic',
  code: (
    <Group>
      <div key="A">A</div>
      <div key="B">B</div>
      <div key="C">C uses more room, because it has more content</div>
    </Group>
  ),
  description: `When no props are passed, \`<Group>\` children will... 
- take the minimum space they need
- share space based on their content
- expand to be the same height

If that sounds a lot like items in a [Flexbox](https://developer.mozilla.org/en/docs/Web/CSS/flex) to you, well we don't know what to tell you... 😏`
};

const gap: Example = {
  title: 'Gap',
  code: (
    <Group gap="2rem">
      <div key="1">1</div>
      <div key="2">2</div>
      <div key="3">3</div>
    </Group>
  ),
  description: `The **gap** prop is for adding a gap between items.`
};

const each: Example = {
  title: 'Each',
  code: (
    <Group each={{ p: '1rem', style: { background: 'var(--accent)' } }}>
      <div key="1">1</div>
      <div key="2">2</div>
      <div key="3">3</div>
    </Group>
  ),
  description: `The **each** prop accepts an object, which is passed to _each_ child.
  
  In this example we're using _React.fragments_, so we know they'll be wrapped with a \`<Box>\`, so we can pass them box props like **p** or **m**.`
};

const fullWidth: Example = {
  title: 'Spread Out',
  code: (
    <>
      <Group between>
        <div key="1">1</div>
        <div key="2">2</div>
        <div key="3">3</div>
      </Group>
      <Group around>
        <div key="1">1</div>
        <div key="2">2</div>
        <div key="3">3</div>
      </Group>
      <Group evenly>
        <div key="1">1</div>
        <div key="2">2</div>
        <div key="3">3</div>
      </Group>
      <Group between gap="1rem">
        <div key="1">1</div>
        <div key="2">2</div>
        <div key="3">3</div>
      </Group>
    </>
  ),
  description: `By default items take the minimum space they need and the **gap** determines the space between. If you would rather determine the space between items using all the available horizontal space, try passing one of the props to add space **between** each item, **around** each item, or **evenly**. 
  
  Note: you can still use the **gap** prop to ensure a minimum amount of space between items.`
};

const verticalPlacement: Example = {
  title: 'Vertical Alignment',
  code: (
    <>
      <Group each={{ style: { background: 'var(--accent)' } }} between>
        <div key="1">1</div>
        <div key="2">
          <span style={{ fontSize: '3rem' }}>2</span>
        </div>
        <div key="3">3</div>
      </Group>
      <Group each={{ style: { background: 'var(--accent)' } }} between start>
        <div key="1">1</div>
        <div key="2">
          <span style={{ fontSize: '3rem' }}>2</span>
        </div>
        <div key="3">3</div>
      </Group>
      <Group each={{ style: { background: 'var(--accent)' } }} between center>
        <div key="1">1</div>
        <div key="2">
          <span style={{ fontSize: '3rem' }}>2</span>
        </div>
        <div key="3">3</div>
      </Group>
      <Group each={{ style: { background: 'var(--accent)' } }} between end>
        <div key="1">1</div>
        <div key="2">
          <span style={{ fontSize: '3rem' }}>2</span>
        </div>
        <div key="3">3</div>
      </Group>
    </>
  ),
  description: `By default items take the height of the tallest item. But we can use vertical alignment props **start**, **center**, and end to change that behavior.`
};

export default [basic, gap, each, fullWidth, verticalPlacement];

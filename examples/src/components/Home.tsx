import React from 'react';
import { Container } from '@tone-row/slang';
import { spacing } from '../utils/theme';
import Markdown from './Markdown';

const Home: React.FC = () => (
  <Container w="800px" px={spacing.default} py={spacing.large}>
    <Markdown>
      {`
### SLANG is a toolkit for creating design systems with [React](https://reactjs.org/) and [styled-components](https://www.styled-components.com/).

#### It provides simple, predictable, and fun-to-use components that allow designers and developers to focus on creating __their__ design system: the base tokens, derived tokens, and components; without needing to redevelop the lowest level building blocks.

### Guiding Principles —

- Remain opinionated but predictable, but in the service of being fast.
- A predictable box model is extremely important
- Overflow should be a central focus in how components work
- Micro-patterns & Micro-components (Meant to solve one specific purpose)
- Remain **completely** decoupled from the design tokens

### Who this is meant for —

This is primarily aimed at people who are comfortable with CSS in JS,
comfortable with CSS in general and comfortable with React, who just want
to build Design Systems and/or Component libraries for websites faster.
    `}
    </Markdown>
  </Container>
);

export default Home;

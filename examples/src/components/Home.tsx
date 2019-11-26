import React from 'react';
import { Container } from '@tone-row/slang';
import { spacing } from '../utils/theme';
import Markdown from './Markdown';

const Home: React.FC = () => (
  <Container w="800px" px={spacing.default} py={spacing.large}>
    <Markdown>
      {`
### **Slang** is a toolkit for creating design systems with [React](https://reactjs.org/) and [styled-components](https://www.styled-components.com/).

#### It provides predictable, easy-to-use components that allow for increased productivity when building design systems, because it saves developers from recreating the lowest-level building blocks.

#### Focus

- Opinionated but predictable in the service of being fast 🏃‍♀️
- Component API's which encourage pixel-perfect bounding boxes ▣
- Explicit overflow behaviors for predictable Layout/UI building 📰
- Micro-patterns & Micro-components (Meant to solve one specific purpose) ⛏
- Entirely decoupled from design tokens ❄️

#### Audience

This is primarily aimed at people who are comfortable with CSS in JS,
comfortable with CSS in general and comfortable with React, who just want
to build Design Systems and/or Component libraries for websites faster.
    `}
    </Markdown>
  </Container>
);

export default Home;

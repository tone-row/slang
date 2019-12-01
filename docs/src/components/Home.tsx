import React from 'react';
import { Container } from '@tone-row/slang';
import { spacing } from '../utils/theme';
import Markdown from './Markdown';

const Home: React.FC = () => (
  <Container w="900px" px={spacing.default} py={spacing.large}>
    <Markdown className="home">
      {`

### **Slang** is a toolkit for creating design systems with [React](https://reactjs.org/) and [styled-components](https://www.styled-components.com/).

Slang provides predictable, easy-to-use base components that help designers and developers build design systems faster.

##### Get Started

\`yarn add styled-components @tone-row/slang\`

or 

\`npm i --save styled-components @tone-row/slang\`

##### Focus

- Opinionated but predictable in the service of being fast 🏃‍♀️
- Component API's which encourage pixel-perfect bounding boxes ▣
- Explicit overflow behaviors for predictable Layout/UI building 📰
- Micro-patterns & Micro-components (Meant to solve one specific purpose) ⛏
- Entirely decoupled from design tokens ❄️

##### Audience

This is primarily aimed at people who are comfortable with CSS in JS,
comfortable with CSS in general and comfortable with React, who just want
to build Design Systems and/or Component libraries for websites faster.

    `}
    </Markdown>
  </Container>
);

export default Home;

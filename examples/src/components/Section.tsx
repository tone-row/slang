import React, { useState, useMemo, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { LivePreviewRotator } from './Rotator';
import { LiveProvider, LiveEditor, LiveError } from 'react-live';
import * as slang from '@tone-row/slang';
import { Box, List, Group, Item } from '@tone-row/slang';
import { spacing, border } from '../utils/theme';
import editorTheme from '../utils/editorTheme';
import Button from './Button';
import Markdown from './Markdown';

export interface Example {
  title: string;
  code: string;
  description?: string;
}

interface SectionProps {
  title: string;
  description?: string;
  examples: Example[];
}

const Editor = styled(LiveEditor)`
  border: ${border.default};
  border-radius: 0 0 ${border.defaultRadius} ${border.defaultRadius};
  border-top: none;
  font-size: 1.25rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  line-height: 1;
  font-weight: 600;
  align-self: center;
`;

const ScrollPointer = styled.div`
  width: 0px;
  height: 0px;
  margin-top: calc(-1 * (${spacing.large} + ${spacing.headingHeight}));
  position: absolute;
`;

const SectionGrid = styled.div`
  display: grid;
  grid-gap: ${spacing.small};
  @media (min-width: 1000px) {
    grid-gap: ${spacing.large};
    grid-template-columns: 350px [left] 1fr [right];
    align-items: start;
  }
`;

export function useBreakpoint(size: string) {
  const breakpoint = useRef(matchMedia(`(min-width: ${size})`));
  const [matches, setMatches] = useState(breakpoint.current.matches);
  useEffect(() => {
    const c = breakpoint.current;
    c.onchange = () => {
      setMatches(c.matches);
    };
    return () => {
      c.onchange = null;
    };
  }, []);
  return matches;
}

const Section: React.FC<SectionProps> = ({ title, description, examples }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastExample = useMemo(() => activeIndex === examples.length - 1, [examples, activeIndex]);
  const isDesktop = useBreakpoint('1000px');
  return (
    <Box as={'section' as 'section'} id={title}>
      <ScrollPointer data-scroll-pointer={title} />
      <LiveProvider scope={{ ...slang }} code={examples[activeIndex].code} theme={editorTheme}>
        <SectionGrid>
          <Title>{title}</Title>
          {!isDesktop && (
            <Markdown>{`
##### ${description || ''}`}</Markdown>
          )}
          {isDesktop && (
            <Group gap={spacing.small} nowrap>
              {examples.map((example, index) => (
                <Button
                  as={'button' as 'button'}
                  key={example.title}
                  secondary={examples[activeIndex].title === example.title}
                  onClick={() => setActiveIndex(index)}
                >
                  {example.title}
                </Button>
              ))}
            </Group>
          )}
          <List gap={spacing.default}>
            {isDesktop && <Markdown key="description">{`##### ${description || ''}`}</Markdown>}
            <Markdown key="examples">{`#### ${examples[activeIndex].title}
${examples[activeIndex].description || ''}
            `}</Markdown>
            {!isLastExample && (
              <Button as={'button' as 'button'} onClick={() => setActiveIndex(activeIndex + 1)} key="next button">
                Next: {examples[activeIndex + 1].title}
              </Button>
            )}
          </List>
          <List gap={spacing.default}>
            <Item key="editor box">
              <LivePreviewRotator />
              <Editor />
            </Item>
            <LiveError key="error box" />
          </List>
        </SectionGrid>
      </LiveProvider>
    </Box>
  );
};

export default Section;

import React, { useState, useMemo, memo } from 'react';
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

// Hook
export function useMedia(queries: string[], values: any[], defaultValue: any) {
  // Array containing a media query list for each query
  const mediaQueryLists = queries.map(q => window.matchMedia(q));

  // Function that gets value based on matching media query
  const getValue = () => {
    // Get index of first media query that matches
    const index = mediaQueryLists.findIndex(mql => mql.matches);
    // Return related value or defaultValue if none
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
  };

  // State and setter for matched value
  const [value, setValue] = useState(getValue);

  React.useEffect(
    () => {
      // Event listener callback
      // Note: By defining getValue outside of useEffect we ensure that it has ...
      // ... current values of hook args (as this hook callback is created once on mount).
      const handler = () => setValue(getValue);
      // Set a listener for each media query with above handler as callback.
      mediaQueryLists.forEach(mql => mql.addListener(handler));
      // Remove listeners on cleanup
      return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
    },
    [] // Empty array ensures effect is only run on mount and unmount
  );

  return value;
}

const Section: React.FC<SectionProps> = memo(({ title, description, examples }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastExample = useMemo(() => activeIndex === examples.length - 1, [examples, activeIndex]);
  const isDesktop = useMedia([`(min-width: 1000px)`], [true], false);
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
              <Button
                as={'button' as 'button'}
                onClick={() => setActiveIndex(activeIndex + 1)}
                key="next button"
              >
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
});

Section.displayName = 'Section';

export default Section;

import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { LivePreviewRotator } from './Rotator';
import { LiveProvider, LiveEditor, LiveError } from 'react-live';
import * as slang from '@tone-row/slang';
import { Box, List, Group } from '@tone-row/slang';
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
  font-size: 2.5rem;
  line-height: 1;
  font-weight: 600;
`;

const ScrollPointer = styled.div`
  width: 0px;
  height: 0px;
  margin-top: calc(-1 * (${spacing.large} + ${spacing.headingHeight}));
  position: absolute;
`;

const Section: React.FC<SectionProps> = ({ title, description, examples }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastExample = useMemo(() => activeIndex === examples.length - 1, [examples, activeIndex]);
  return (
    <Box as={'section' as 'section'} id={title}>
      <ScrollPointer data-scroll-pointer={title} />
      <LiveProvider scope={{ ...slang }} code={examples[activeIndex].code} theme={editorTheme}>
        <List gap={spacing.default}>
          <Group gap={spacing.large} center key="left">
            <Box style={{ flex: 2 }} key="title">
              <Title>{title}</Title>
            </Box>
            <Box style={{ flex: 3 }} key="details">
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
            </Box>
          </Group>
          <Group gap={spacing.large} key="right">
            <Box style={{ flex: 2 }}>
              <List gap={spacing.default}>
                <Markdown key="description">{`
##### ${description || ''}
#### ${examples[activeIndex].title}
${examples[activeIndex].description || ''}
            `}</Markdown>
                {!isLastExample && (
                  <Button as={'button' as 'button'} onClick={() => setActiveIndex(activeIndex + 1)} key="next button">
                    Next: {examples[activeIndex + 1].title}
                  </Button>
                )}
              </List>
            </Box>
            <Box style={{ flex: 3 }}>
              <List gap={spacing.default}>
                <Box key="editor box">
                  <LivePreviewRotator />
                  <Editor />
                </Box>
                <LiveError key="error box" />
              </List>
            </Box>
          </Group>
        </List>
      </LiveProvider>
    </Box>
  );
};

export default Section;

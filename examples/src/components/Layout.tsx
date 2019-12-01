import React, { useCallback } from 'react';
import Section, { useBreakpoint } from './Section';
import { Group, Container, Box, List, Item } from '@tone-row/slang';
import { spacing, border } from '../utils/theme';
import BoxExamples from '../examples/BoxExamples';
import ContainerExamples from '../examples/ContainerExamples';
import GroupExamples from '../examples/GroupExamples';
import ListExamples from '../examples/ListExamples';
import ShapeExamples from '../examples/ShapeExamples';
import Button from './Button';

const SectionButton: React.FC<{ title: string }> = ({ title }) => {
  const handleClick = useCallback(() => {
    const el = document.querySelector(`[data-scroll-pointer="${title}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [title]);
  return (
    <Button as={'button' as 'button'} onClick={handleClick}>
      {title}
    </Button>
  );
};

const Layout: React.FC = () => {
  const isDesktop = useBreakpoint('1000px');
  return (
    <Group>
      {isDesktop && <Item style={{ borderRight: border.default, minWidth: '200px' }} p={spacing.small} key="sidebar">
        <Box sticky style={{ top: `calc(${spacing.headingHeight} + ${spacing.small})` }}>
          <List gap={spacing.small}>
            {['Box', 'Container', 'Group', 'List', 'Shape'].map(x => (
              <SectionButton key={`button-${x}`} title={x} />
            ))}
          </List>
        </Box>
      </Item>}
      <Item grow key="main-section">
        <Container w="1200px" px={spacing.default} py={spacing.large}>
          <List gap={spacing.headingHeight}>
            <Section
              title="Box"
              key="Box"
              examples={BoxExamples}
              description={
                'The box is the basic building block for adding padding and margin. It renders a `<div>` unless passed the **as** prop.'
              }
            />
            <Section
              title="Container"
              key="Container"
              examples={ContainerExamples}
              description={`A container _"contains"_ elements within a certain maximum width.`}
            />
            <Section
              title="Group"
              key="Group"
              examples={GroupExamples}
              description={`The group is for horizontal groups of items. If passed anything other than a \`<Box>\` or \`<Grow>\` element then the Group will automatically wrap it with a \`<Box>\`.`}
            />
            <Section
              title="List"
              key="List"
              examples={ListExamples}
              description={`A list can be thought of as the vertical version of a \`<Group>\`. It displays groups of items vertically, like a list on a sheet of paper.`}
            />
            <Section
              title="Shape"
              key="Shape"
              examples={ShapeExamples}
              description={`The shape is useful for creating component which maintain an aspect ratio no matter what width they are.`}
            />
          </List>
        </Container>
      </Item>
    </Group>
  )
};

export default Layout;

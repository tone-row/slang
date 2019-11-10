import React, { useCallback } from 'react';
import Section from './Section';
import { Group, Container, Box, List } from '@tone-row/slang';
import { spacing, border } from '../utils/theme';
import styled from 'styled-components';
import BoxExamples from '../examples/BoxExamples';
import ContainerExamples from '../examples/ContainerExamples';
import GroupExamples from '../examples/GroupExamples';
import ListExamples from '../examples/ListExamples';
import Button from './Button';

const Sidebar = styled(Box)`
  border-right: ${border.default};
  min-width: 200px;
`;

// Cheap way to tell it *not* to wrap this element
Sidebar.displayName = 'Box';

const SectionButton: React.FC<{ title: string }> = ({ title }) => {
  const handleClick = useCallback(() => {
    const el = document.querySelector(`[data-scroll-pointer="${title}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [title]);
  return (
    <Button as="button" onClick={handleClick}>
      {title}
    </Button>
  );
};

const Layout: React.FC = () => (
  <Group>
    <Sidebar p={spacing.small}>
      <Box sticky style={{ top: `calc(${spacing.headingHeight} + ${spacing.small})` }}>
        <List gap={spacing.small}>
          {['Box', 'Container', 'Group', 'List'].map(x => (
            <SectionButton title={x} />
          ))}
        </List>
      </Box>
    </Sidebar>
    <Box grow>
      <Container w="1200px" px={spacing.default} py={spacing.large}>
        <List gap={spacing.headingHeight}>
          <Section
            title="Box"
            examples={BoxExamples}
            description={
              'The box is the basic building block for adding padding and margin. It renders a `<div>` unless passed the **as** prop.'
            }
          />
          <Section
            title="Container"
            examples={ContainerExamples}
            description={`A container _"contains"_ elements within a certain maximum width.`}
          />
          <Section
            title="Group"
            examples={GroupExamples}
            description={`The group is for horizontal groups of items. If passed anything other than a \`<Box>\` or \`<Grow>\` element then the Group will automatically wrap it with a \`<Box>\`.`}
          />
          <Section
            title="List"
            examples={ListExamples}
            description={`A list can be thought of as the vertical version of a \`<Group>\`. It displays groups of items vertically, like a list on a sheet of paper.`}
          />
        </List>
      </Container>
    </Box>
  </Group>
);

export default Layout;

import React, { useLayoutEffect } from 'react';
import { Group } from '@tone-row/slang';
import { spacing, border } from '../utils/theme';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const HeaderWrapper = styled(Group)`
  border-bottom: ${border.default};
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(3px);
`;

const Title = styled.h1`
  font-size: 2rem;
  /* transform: skewX(20deg); */
  /* font-weight: 900; */
  margin-left: 5px;
  a {
    text-decoration: none;
    color: black;
  }
`;

const Header: React.FC = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <HeaderWrapper center between p={spacing.small}>
      <Title>
        <Link to="/">SLANG</Link>
      </Title>
      <Group gap={spacing.small} center>
        <Button secondary={pathname === '/'}>
          <Link to="/">Home</Link>
        </Button>
        <Button secondary={pathname === '/layout'}>
          <Link to="/layout">Walkthrough</Link>
        </Button>
        <Button secondary={pathname === '/typography'}>
          <Link to="/layout">Typography</Link>
        </Button>
        <Button secondary={pathname === '/'}>
          <Link to="/">Docs</Link>
        </Button>
        <Button secondary={pathname === '/'}>
          <Link to="/">Tutorials</Link>
        </Button>
        <Button secondary={pathname === '/'}>
          <Link to="/">Blog</Link>
        </Button>
      </Group>
    </HeaderWrapper>
  );
};

export default Header;

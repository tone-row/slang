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
  margin-left: 5px;
  font-weight: 700;
  a {
    text-decoration: none;
    color: black;
  }
`;

const links = [
  { to: '/', text: 'Home' },
  { to: '/layout', text: 'Components' },
];

const Header: React.FC = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <HeaderWrapper center between p={spacing.small}>
      <Title key="title">
        <Link to="/">Slang</Link>
      </Title>
      <Group gap={spacing.small} center key="links">
        {links.map(({ to, text }) => (
          <Button secondary={pathname === to} key={text}>
            <Link to={to}>{text}</Link>
          </Button>
        ))}
      </Group>
    </HeaderWrapper>
  );
};

export default Header;

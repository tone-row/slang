import styled from 'styled-components';
import Box, { BoxProps } from '../Box/Box';

interface ContainerProps extends BoxProps {
  w: string;
}

const Container = styled(Box)<ContainerProps>`
  max-width: ${({ w }): string => w};
  margin-left: auto;
  margin-right: auto;
`;

export default Container;

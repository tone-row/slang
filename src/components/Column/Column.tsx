import styled from 'styled-components';
import Box from '../Box/Box';
import { PaddingProps } from '../../utils/types';
import { padding } from '../../utils/props';

interface ColumnProps extends PaddingProps {}

const Column = styled.div<ColumnProps>`
  ${padding}
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Grow = styled(Box)`
  flex: 1;
`;

export default Column;

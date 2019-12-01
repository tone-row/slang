import styled from 'styled-components';
import {
  BaseComponent,
  PaddingProps,
  MarginProps,
  ContentProps,
  LayoutProps
} from '../../utils/types';
import { padding, margin, content, layout } from '../../utils/props';

export interface BoxProps
  extends BaseComponent,
    PaddingProps,
    MarginProps,
    LayoutProps,
    ContentProps {}

const Box = styled.div<BoxProps>`
  ${padding}
  ${margin}
  ${layout}
  ${content}
`;

Box.displayName = 'Box';

export default Box;

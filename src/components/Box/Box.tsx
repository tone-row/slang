import React from 'react';
import styled from 'styled-components';
import {
  BaseComponent,
  PaddingProps,
  MarginProps,
  ContentProps
} from '../../utils/types';
import { padding, margin, content } from '../../utils/props';

export interface BoxProps
  extends BaseComponent,
    PaddingProps,
    MarginProps,
    ContentProps {}

const Box = styled.div<BoxProps>`
  ${padding}
  ${margin}
  ${content}
`;

export default Box;

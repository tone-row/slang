import styled from 'styled-components';
import {
  BaseComponent,
  PaddingProps,
  MarginProps,
  ContentProps,
  LayoutProps,
  CollectionItemProps,
} from '../../utils/types';
import { padding, margin, content, layout, collectionItem } from '../../utils/props';

export interface BoxProps
  extends BaseComponent,
    PaddingProps,
    MarginProps,
    LayoutProps,
    ContentProps,
    CollectionItemProps {}

const Box = styled.div<BoxProps>`
  ${padding}
  ${margin}
  ${layout}
  ${content}
  ${collectionItem}
`;

Box.displayName = 'Box';

export default Box;

import styled from 'styled-components';
import {
  CollectionItemProps,
  BaseComponent,
  PaddingProps,
  MarginProps,
  LayoutProps,
  ContentProps
} from '../../utils/types';
import { collectionItem, padding, margin, layout, content } from '../../utils/props';

interface ItemProps
  extends BaseComponent,
    PaddingProps,
    MarginProps,
    LayoutProps,
    ContentProps,
    CollectionItemProps {}

const Item = styled.div<ItemProps>`
  ${padding}
  ${margin}
  ${layout}
  ${content}
  ${collectionItem}
`;

Item.displayName = 'Item';

export default Item;

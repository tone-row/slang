import React from 'react';
import { CollectionProps, MainAxisProps, CrossAxisProps } from '../../utils/types';
import { BoxProps } from '../Box/Box';
interface ListProps extends BoxProps, CollectionProps, MainAxisProps, CrossAxisProps {
}
declare const List: React.FC<ListProps>;
export default List;

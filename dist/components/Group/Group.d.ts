import React from 'react';
import { CollectionProps, MainAxisProps, CrossAxisProps } from '../../utils/types';
import { BoxProps } from '../Box/Box';
interface GroupProps extends BoxProps, CollectionProps, MainAxisProps, CrossAxisProps {
}
declare const Group: React.FC<GroupProps>;
export default Group;

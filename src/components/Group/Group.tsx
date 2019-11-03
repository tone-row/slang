import React from 'react';
import Collection from '../Collection/Collection';
import {
  CollectionProps,
  MainAxisProps,
  CrossAxisProps
} from '../../utils/types';
import Box, { BoxProps } from '../Box/Box';
import styled from 'styled-components';
import { mainAxis, crossAxis } from '../../utils/props';

interface GroupProps
  extends BoxProps,
    CollectionProps,
    MainAxisProps,
    CrossAxisProps {}

const GroupWrapper = styled(Box)<GroupProps>`
  display: flex;
	${mainAxis}
	${crossAxis}
  ${({ gap }) =>
    gap &&
    `
		& > ${Box} {
			margin-right: ${gap};
			&:last-child {
				margin-right: 0;
			}
		}
	`}
`;

GroupWrapper.displayName = 'GroupWrapper';

const Group: React.FC<GroupProps> = props => (
  <Collection collectionWrapper={GroupWrapper} {...props} />
);

export default Group;

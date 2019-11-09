import React from 'react';
import { CollectionProps, MainAxisProps, CrossAxisProps } from '../../utils/types';
import Box, { BoxProps } from '../Box/Box';
import styled from 'styled-components';
import Collection from '../Collection/Collection';
import { mainAxis, crossAxis } from '../../utils/props';

interface ListProps extends BoxProps, CollectionProps, MainAxisProps, CrossAxisProps {}

const ListWrapper = styled(Box)<ListProps>`
	display: flex;
  flex-direction: column;
	${mainAxis}
	${crossAxis}
  ${({ gap }) =>
    gap &&
    `
		& > ${Box} {
			margin-bottom: ${gap};
			&:last-child {
				margin-bottom: 0;
			}
		}
	`}
`;

ListWrapper.displayName = 'ListWrapper';

const List: React.FC<ListProps> = props => <Collection collectionWrapper={ListWrapper} {...props} />;

export default List;

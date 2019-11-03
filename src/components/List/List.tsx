import React from 'react';
import { CollectionProps } from '../../utils/types';
import Box, { BoxProps } from '../Box/Box';
import styled from 'styled-components';
import Collection from '../Collection/Collection';

interface ListProps extends BoxProps, CollectionProps {}

const ListWrapper = styled(Box)<ListProps>`
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

const List: React.FC<ListProps> = props => (
  <Collection collectionWrapper={ListWrapper} {...props} />
);

export default List;

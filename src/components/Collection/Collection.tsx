import React, { Children } from 'react';
import { CollectionProps } from '../../utils/types';
import Box from '../Box/Box';

interface LocalCollectionProps extends CollectionProps {
  collectionWrapper: any;
}

const Collection: React.FC<LocalCollectionProps> = ({
  children,
  each,
  collectionWrapper: CollectionWrapper = Box,
  wrapper: Wrapper = Box,
  ...props
}) => {
  if (!children) return null;

  return (
    <CollectionWrapper {...props}>
      {Children.toArray(children)
        .filter(child => child)
        .map((child: any) => {
          return (
            <Wrapper key={child.key} {...each}>
              {child}
            </Wrapper>
          );
        })}
    </CollectionWrapper>
  );
};

export default Collection;

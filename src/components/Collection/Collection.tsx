import React, { Children } from 'react';
import { CollectionProps, BaseComponent } from '../../utils/types';
import Box from '../Box/Box';
import { wrapChildIf, childIsNotBox } from '../../utils/helpers';

interface LocalCollectionProps extends BaseComponent, CollectionProps {
  collectionWrapper?: React.ComponentType;
}

const Collection: React.FC<LocalCollectionProps> = ({
  children,
  each,
  collectionWrapper: CollectionWrapper = Box,
  wrapper: Wrapper = Box,
  ...props
}) => {
  return (
    <CollectionWrapper {...props}>
      {Children.toArray(children)
        .map((child: React.ReactNode) => {
          if (!child) return null;
          return wrapChildIf(child as React.ReactElement, childIsNotBox, Wrapper, each);
        })
        .filter(child => child)}
    </CollectionWrapper>
  );
};

export default Collection;

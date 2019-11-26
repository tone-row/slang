import React, { Children } from 'react';
import { CollectionProps, BaseComponent } from '../../utils/types';
import Box from '../Box/Box';
import { wrapChildIf, childIsNotItem } from '../../utils/helpers';
import Item from '../Item/Item';

interface LocalCollectionProps extends BaseComponent, CollectionProps {
  collectionWrapper?: React.ComponentType;
}

const Collection: React.FC<LocalCollectionProps> = ({
  children,
  each,
  collectionWrapper: CollectionWrapper = Box,
  wrapper: Wrapper = Item,
  ...props
}) => {
  return (
    <CollectionWrapper {...props}>
      {Children.toArray(children)
        .map((child: React.ReactNode) => {
          if (!child) return null;
          return wrapChildIf(child as React.ReactElement, childIsNotItem, Wrapper, each);
        })
        .filter(child => child)}
    </CollectionWrapper>
  );
};

export default Collection;

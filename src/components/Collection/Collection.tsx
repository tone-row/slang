import React, { Children, cloneElement } from 'react';
import { CollectionProps } from '../../utils/types';
import Box from '../Box/Box';

interface LocalCollectionProps extends CollectionProps {
  collectionWrapper: any;
}

// Component
const doNotWrap = ['Box', 'Grow'];

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
          // Don't wrap if matches known collection child type
          if (
            doNotWrap.includes((child.type && child.type.displayName) || false)
          ) {
            return cloneElement(child, each);
          }
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

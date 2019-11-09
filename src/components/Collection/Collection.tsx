import React, { Children, cloneElement } from 'react';
import { CollectionProps } from '../../utils/types';
import Box from '../Box/Box';

interface LocalCollectionProps extends CollectionProps {
  collectionWrapper: React.ComponentType;
}

// Items not to wrap in a Box
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
        .map((child: React.ReactNode) => {
          if (!child) return null;
          // Don't wrap if matches known collection child type
          if (
            typeof child === 'object' &&
            'type' in child &&
            typeof child.type === 'object' &&
            'displayName' in child.type &&
            doNotWrap.includes(child.type && (child.type as { displayName: string }).displayName)
          ) {
            return cloneElement(child, each);
          }

          return (
            // <Wrapper key={child.key} {...each}>
            // TODO: fix key
            <Wrapper key={'anykey'} {...each}>
              {child}
            </Wrapper>
          );
        })
        .filter(child => child)}
    </CollectionWrapper>
  );
};

export default Collection;

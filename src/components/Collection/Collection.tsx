import React, { Children, cloneElement, Attributes } from 'react';
import { CollectionProps, BaseComponent } from '../../utils/types';
import Box from '../Box/Box';
import merge, { Options } from 'deepmerge';
import mergeable from 'is-mergeable-object';

interface LocalCollectionProps extends BaseComponent, CollectionProps {
  collectionWrapper?: React.ComponentType;
}

// Items not to wrap in a Box
const doNotWrap = ['Box'];

// Options for merging child props and each prop
const customMerge = {
  className: (classNameA: string, classNameB: string) => [classNameA, classNameB].join(' '),
};

const mergeOptions: Options = {
  isMergeableObject: value => mergeable(value) || typeof value === 'string',
  customMerge: (key: string) =>
    key in customMerge ? customMerge[key as keyof typeof customMerge] : (x, y) => merge(x, y),
  clone: false,
};

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
          // Don't wrap if matches known collection child type
          if (
            typeof child === 'object' &&
            'type' in child &&
            typeof child.type === 'object' &&
            'displayName' in child.type &&
            doNotWrap.includes(child.type && (child.type as { displayName: string }).displayName)
          ) {
            const args: [React.ReactElement, (Partial<any> & Attributes)?] = [child];
            if (each) {
              const childProps: Partial<any> & Attributes = merge(each, child.props, mergeOptions);
              args[1] = childProps;
            }
            return cloneElement(...args);
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

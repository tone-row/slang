import React from 'react';
import merge, { Options } from 'deepmerge';
import mergeable from 'is-mergeable-object';

const customMerge = {
  className: (classNameA: string, classNameB: string) => [classNameA, classNameB].join(' ')
};

const mergeOptions: Options = {
  isMergeableObject: value => mergeable(value) || typeof value === 'string',
  customMerge: (key: string) =>
    key in customMerge ? customMerge[key as keyof typeof customMerge] : (x, y) => merge(x, y),
  clone: false
};

export function wrapChildIf(
  child: React.ReactElement,
  testChild: (child: React.ReactNode) => boolean,
  Wrapper: React.ComponentType,
  each = {}
) {
  if (testChild(child)) {
    const key = typeof child.key === 'string' && child.key.slice(2);
    return (
      <Wrapper key={key || undefined} {...each}>
        {child}
      </Wrapper>
    );
  }
  const cloneArgs: [React.ReactElement, (Partial<any> & React.Attributes)?] = [child];
  if (each) {
    const childProps: Partial<any> & React.Attributes = merge(each, child.props, mergeOptions);
    cloneArgs[1] = childProps;
  }
  return React.cloneElement(...cloneArgs);
}

const doNotWrap = ['Item'];

export const childIsNotItem = (child: React.ReactNode) =>
  !(
    child &&
    typeof child === 'object' &&
    'type' in child &&
    typeof child.type === 'object' &&
    'displayName' in child.type &&
    doNotWrap.includes(child.type && (child.type as { displayName: string }).displayName)
  );

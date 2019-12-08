import React from 'react';
import { BaseComponent, ContentProps } from '../../utils/types';
import styled from 'styled-components';
import Box from '../Box/Box';
import Item from '../Item/Item';
import { wrapChildIf, childIsNotItem } from '../../utils/helpers';
import { content } from '../../utils/props';

interface ShapeProps extends BaseComponent, ContentProps {
  ratio?: number;
}

const ShapeWrapper = styled(Box)<ShapeProps>`
  position: relative;
  ${content}

  &:before {
    content: ' ';
    display: block;
    padding-bottom: calc(100% * ${({ ratio = 1 }: ShapeProps) => ratio});
  }

  & > ${Item} {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

ShapeWrapper.displayName = 'ShapeWrapper';

const Shape: React.FC<any> = ({ children, ...props }: any) => {
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length > 1) {
    throw new Error(`<Shape> can only have one child.`);
  }
  return (
    <ShapeWrapper {...props}>
      {React.Children.toArray(children)
        .map((child: React.ReactNode) => {
          if (!child) return null;
          return wrapChildIf(child as React.ReactElement, childIsNotItem, Box);
        })
        .filter((child: any) => child)}
    </ShapeWrapper>
  );
};

export default Shape;

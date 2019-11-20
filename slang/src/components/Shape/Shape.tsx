import React from 'react';
import { BaseComponent, ContentProps } from '../../utils/types';
import styled from 'styled-components';
import Box from '../Box/Box';
import { wrapChildIf, childIsNotBox } from '../../utils/helpers';
import { content } from '../../utils/props';

interface ShapeProps extends BaseComponent, ContentProps {
  ratio?: number;
}

const ShapeWrapper = styled.div<ShapeProps>`
  position: relative;
  ${content}

  &:before {
    content: ' ';
    display: block;
    padding-bottom: calc(100% * ${({ ratio = 1 }) => ratio});
  }

  & > ${Box} {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

ShapeWrapper.displayName = 'ShapeWrapper';

const Shape: React.FC<ShapeProps> = ({ children, ...props }) => {
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length > 1) {
    throw new Error(`<Shape> can only have one child.`);
  }
  return (
    <ShapeWrapper {...props}>
      {React.Children.toArray(children)
        .map((child: React.ReactNode) => {
          if (!child) return null;
          return wrapChildIf(child as React.ReactElement, childIsNotBox, Box);
        })
        .filter(child => child)}
    </ShapeWrapper>
  );
};

export default Shape;

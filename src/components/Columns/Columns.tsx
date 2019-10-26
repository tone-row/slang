import React, { Children } from 'react';
import styled from 'styled-components';
import { Box } from '..';

const ColumnsItem = styled(Box)`
  grid-row: 1;
`;

type StyledColumnsProps = {
  gutter?: string;
};

const StyledColumns = styled('div')<StyledColumnsProps>`
  display: grid;
  grid-template-columns: auto;
  ${({ gutter }) => gutter && `grid-gap: ${gutter};`}
`;

interface ColumnsProps extends StyledColumnsProps {
  itemProps?: any;
}

const Columns: React.FC<ColumnsProps> = ({
  gutter,
  itemProps = {},
  children
}: any) => (
  <StyledColumns gutter={gutter}>
    {Children.toArray(children)
      .filter(child => child)
      .map((child: any) => {
        return (
          <ColumnsItem key={child.key} {...itemProps}>
            {child}
          </ColumnsItem>
        );
      })}
  </StyledColumns>
);

export default Columns;

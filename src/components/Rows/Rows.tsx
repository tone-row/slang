import React, { Children } from 'react';
import styled from 'styled-components';
import { Box } from '..';

const RowsItem = styled(Box)`
  grid-column: 1;
`;

type StyledRowsProps = {
  gutter?: string;
};

const StyledRows = styled('div')<StyledRowsProps>`
  display: grid;
  grid-template-rows: auto;
  ${({ gutter }) => gutter && `grid-gap: ${gutter};`}
`;

interface RowsProps extends Parameters<typeof StyledRows> {
  itemProps?: any;
}

const Rows: React.FC<RowsProps> = ({
  gutter,
  itemProps = {},
  children
}: any) => (
  <StyledRows gutter={gutter}>
    {Children.toArray(children)
      .filter(child => child)
      .map((child: any) => {
        return (
          <RowsItem key={child.key} {...itemProps}>
            {child}
          </RowsItem>
        );
      })}
  </StyledRows>
);

export default Rows;

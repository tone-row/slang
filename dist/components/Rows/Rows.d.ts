import React from 'react';
declare type StyledRowsProps = {
    gutter?: string;
};
declare const StyledRows: import("styled-components").StyledComponent<"div", any, StyledRowsProps, never>;
interface RowsProps extends Parameters<typeof StyledRows> {
    itemProps?: any;
}
declare const Rows: React.FC<RowsProps>;
export default Rows;

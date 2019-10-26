import React from 'react';
declare type StyledRowsProps = {
    gutter?: string;
};
interface RowsProps extends StyledRowsProps {
    itemProps?: any;
}
declare const Rows: React.FC<RowsProps>;
export default Rows;

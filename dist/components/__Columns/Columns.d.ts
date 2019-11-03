import React from 'react';
declare type StyledColumnsProps = {
    gutter?: string;
};
interface ColumnsProps extends StyledColumnsProps {
    itemProps?: any;
}
declare const Columns: React.FC<ColumnsProps>;
export default Columns;

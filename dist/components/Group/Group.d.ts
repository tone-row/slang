import React from 'react';
declare type StyledGroupProps = {
    gutter?: string;
};
interface GroupProps extends StyledGroupProps {
    itemProps?: any;
}
declare const Group: React.FC<GroupProps>;
export default Group;
